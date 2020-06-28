import cheerio from "cheerio";
import _ from "lodash";
import { HtmlTag } from "@src/constants/html/htmlTag";
import { htmlJSON } from "@src/html2JSON/type";
import { v4 as uuidv4 } from "uuid";
/**
 * @description
 * @param {string} htmlStr html string
 */
export default function Parser(htmlStr: string): htmlJSON {
    const $ = cheerio.load(`<div id="spiritling-warp">${htmlStr}</div>`, {
        decodeEntities: false,
        xmlMode: true,
    });
    const warp = $("#spiritling-warp");
    return ParserMain(warp);
    /**
     * # 分析步骤：
     * ## 第一步：
     * 将传递进来的html外层镶嵌一层自己的div
     * ## 开始解析 a1
     * 获取所有第一级子元素，和第一级的text
     * ## 判断是否含有子级，和是否含有text
     * ### 含有子级，对每个子级继续进行处理切换至a1
     * ### 含有text时，并且含有子级时，将子级全部html获取，然后将父级html后，根据子级进行分割，获取text分割片段，存放起来
     * ### 当两个都无时，则结束循环处理
     * $("#listitem")
    .clone()    //复制元素
    .children() //获取所有子元素
    .remove()   //删除所有子元素
    .end()  //回到选择的元素
    .text();//获取文本值
     */
}

function ParserMain(parentItem: Cheerio): htmlJSON {
    const allText = parentItem.clone().children().remove().end().text();
    const allChildren = parentItem.children();
    if (_.trim(allText) === "") {
        if (allChildren.length === 0) {
            // 两个都没有，自闭和标签
            return BothNotExist(parentItem);
        } else {
            // 存在children
            return ChildrenExist(parentItem);
        }
    } else {
        if (allChildren.length === 0) {
            // text存在
            return TextExist(parentItem);
        } else {
            // 两个都有
            return BothExist(parentItem);
        }
    }
}
/**
 * @description 当父级item中含有子级和文本时处理
 * @param {Cheerio} parentItem
 */
function BothExist(parentItem: Cheerio): htmlJSON {
    const tagName = parentItem[0].tagName;
    const allChildren = parentItem.children();
    const allAttr = parentItem[0].attribs;
    let allHtml = _.trim(parentItem.html() || "");
    let uuidArr: string[] = [];
    let htmlJSONItem: htmlJSON = {
        tag: HtmlTag.Tag2Enum(tagName),
        children: [],
        content: "",
        attr: allAttr,
    };
    // 将子级每个html 替换成 uuid，依照uuid的唯一性，可以保证后续使用split时不会出错
    for (let i = 0; i < allChildren.length; i++) {
        const tempHtml = allChildren.eq(i).html();
        if (tempHtml) {
            const uuid = `{${uuidv4()}}`;
            uuidArr.push(uuid);
            allHtml = allHtml.replace(tempHtml, uuid);
        }
    }
    const child = str2Arr(allHtml, uuidArr);
    for (let i = 0; i < child.length; i++) {
        if (uuidArr.includes(child[i])) {
            const index = uuidArr.indexOf(child[i]);
            htmlJSONItem.children.push(ParserMain(allChildren.eq(index)));
        } else {
            htmlJSONItem.children.push({
                tag: HtmlTag.HtmlTagEnum.TEXT,
                children: [],
                content: child[i],
                attr: {},
            });
        }
    }
    return htmlJSONItem;
}

/**
 * @description 当父级item中都不含有子级和文本时处理，一般都为自闭和标签，比如img标签
 * @param {Cheerio} parentItem
 */
function BothNotExist(parentItem: Cheerio): htmlJSON {
    const tagName = parentItem[0].tagName;
    const allAttr = parentItem[0].attribs;
    const htmlJSONItem: htmlJSON = {
        tag: HtmlTag.Tag2Enum(tagName),
        children: [],
        content: "",
        attr: allAttr,
    };
    return htmlJSONItem;
}

/**
 * @description 当父级item中含有子级时
 * @param {Cheerio} parentItem
 */
function ChildrenExist(parentItem: Cheerio): htmlJSON {
    const tagName = parentItem[0].tagName;
    const allChildren = parentItem.children();
    const allAttr = parentItem[0].attribs;
    let htmlJSONItem: htmlJSON = {
        tag: HtmlTag.Tag2Enum(tagName),
        children: [],
        content: "",
        attr: allAttr,
    };
    for (let i = 0; i < allChildren.length; i++) {
        htmlJSONItem.children.push(ParserMain(allChildren.eq(i)));
    }
    return htmlJSONItem;
}

/**
 * @description 当父级item中含有文本时时
 * @param {Cheerio} parentItem
 */
function TextExist(parentItem: Cheerio) {
    const allText = parentItem.text();
    const htmlJSONItem: htmlJSON = {
        tag: HtmlTag.HtmlTagEnum.TEXT,
        children: [],
        content: allText,
        attr: {},
    };
    return htmlJSONItem;
}

function str2Arr(str: string, split: string[]): string[] {
    let temp = str;
    let arr: string[] = [];
    for (let i = 0; i < split.length; i++) {
        const tempArr = temp.split(split[i]);
        if (_.trim(tempArr[0]) !== "") {
            arr.push(tempArr[0]);
        }
        arr.push(split[i]);
        temp = tempArr[1];
    }
    return arr;
}
