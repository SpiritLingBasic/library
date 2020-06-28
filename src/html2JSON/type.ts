import { HtmlTag } from "@src/constants/html/htmlTag";
/**
 * @description html生成json形式的数据结构
 */
export type htmlJSON = {
    /**
     * @description 标签枚举
     */
    tag: HtmlTag.HtmlTagEnum;
    /**
     * @description 内容，text：为纯文本，a标签为a中的内容，只有为纯文本
     */
    content: string;
    /**
     * @description 继续这个数据结构
     */
    children: htmlJSON[];
    /**
     * @description 标签上的特性属性
     */
    attr: {
        [key: string]: string;
    };
};
