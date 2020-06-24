import { HtmlTag } from "@src/constants/html/htmlTag";
import { htmlJSON } from "@src/html2JSON/type";
/**
 * @description
 * @param {string} htmlStr html string
 */
export default function Parser(htmlStr: string): htmlJSON {
    // const $ = cheerio.load(htmlStr, { decodeEntities: false, xmlMode: true });
    // const a = $(".dvi");
    return {
        tag: HtmlTag.HtmlTagEnum.H1,
        content: htmlStr,
        children: [],
        attr: {},
    };
}
