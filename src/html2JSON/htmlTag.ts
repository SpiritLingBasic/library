/**
 * @description HtmlTag 空间
 * @export HtmlTag
 */
export namespace HtmlTag {
    /**
     * @description 标签转枚举
     */
    export function Tag2Enum(str: string): HtmlTagEnum {
        const temp = str.toLocaleLowerCase().trim();
        return temp as HtmlTagEnum;
    }
    /**
     * @enum {enum} HtmlTag html标签枚举
     */
    export enum HtmlTagEnum {
        /**
         * @description 纯文本
         */
        TEXT = "text",
        /**
         * @description 定义超文本链接
         */
        A = "a",
        /**
         * @description 定义缩写
         */
        ABBR = "abbr",
        /**
         * @description 定义只取首字母的缩写，不支持HTML5
         */
        ACRONYM = "acronym",
        /**
         * @description 定义文档作者或拥有者的联系信息
         */
        ADDRESS = "address",
        /**
         * @description HTML5中不赞成使用。定义嵌入的 applet。
         */
        APPLET = "applet",
        /**
         * @description 定义图像映射内部的区域
         */
        AREA = "area",
        /**
         * @description 定义一个文章区域
         */
        ARTICLE = "article",
        /**
         * @description 定义页面的侧边栏内容
         */
        ASIDE = "aside",
        /**
         * @description 定义音频内容
         */
        AUDIO = "audio",
        /**
         * @description 定义文本粗体
         */
        B = "b",
        /**
         * @description 定义页面中所有链接的默认地址或默认目标。
         */
        BASE = "base",
        /**
         * @description HTML5不支持，不赞成使用。定义页面中文本的默认字体、颜色或尺寸。
         */
        BASEFONT = "basefont",
        /**
         * @description 允许您设置一段文本，使其脱离其父元素的文本方向设置。
         */
        BDI = "bdi",
        /**
         * @description 定义文字方向
         */
        BDO = "bdo",
        /**
         * @description 定义大号文本，HTML5不支持
         */
        BIG = "big",
        /**
         * @description 定义长的引用
         */
        BLOCKQUOTE = "blockquote",
        /**
         * @description 定义文档的主体
         */
        BODY = "body",
        /**
         * @description 定义换行
         */
        BR = "br",
        /**
         * @description 定义一个点击按钮
         */
        BUTTON = "button",
        /**
         * @description 定义图形，比如图表和其他图像,标签只是图形容器，您必须使用脚本来绘制图形
         */
        CANVAS = "canvas",
        /**
         * @description 定义表格标题
         */
        CAPTION = "caption",
        /**
         * @description HTML5不支持，不赞成使用。定义居中文本。
         */
        CENTER = "center",
        /**
         * @description 定义引用(citation)
         */
        CITE = "cite",
        /**
         * @description 定义计算机代码文本
         */
        CODE = "code",
        /**
         * @description 定义表格中一个或多个列的属性值
         */
        COL = "col",
        /**
         * @description 定义表格中供格式化的列组
         */
        COLGROUP = "colgroup",
        /**
         * @description 定义命令按钮，比如单选按钮、复选框或按钮
         */
        COMMAND = "command",
        /**
         * @description 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值。
         */
        DATALIST = "datalist",
        /**
         * @description 定义定义列表中项目的描述
         */
        DD = "dd",
        /**
         * @description 定义被删除文本
         */
        DEL = "del",
        /**
         * @description 用于描述文档或文档某个部分的细节
         */
        DETAILS = "details",
        /**
         * @description 定义定义项目
         */
        DFN = "dfn",
        /**
         * @description 定义对话框，比如提示框
         */
        DIALOG = "dialog",
        /**
         * @description HTML5不支持，不赞成使用。定义目录列表。
         */
        DIR = "dir",
        /**
         * @description 定义文档中的节
         */
        DIV = "div",
        /**
         * @description 定义列表详情
         */
        DL = "dl",
        /**
         * @description 定义列表中的项目
         */
        DT = "dt",
        /**
         * @description 定义强调文本
         */
        EM = "em",
        /**
         * @description 定义嵌入的内容，比如插件。
         */
        EMBED = "embed",
        /**
         * @description 定义围绕表单中元素的边框
         */
        FIELDSET = "fieldset",
        /**
         * @description 定义figure 元素的标题
         */
        FIGCAPTION = "figcaption",
        /**
         * @description 规定独立的流内容（图像、图表、照片、代码等等）。
         */
        FIGURE = "figure",
        /**
         * @description HTML5不支持，不赞成使用。定义文字的字体、尺寸和颜色。
         */
        FONT = "font",
        /**
         * @description 定义 section 或 document 的页脚。
         */
        FOOTER = "footer",
        /**
         * @description 定义了HTML文档的表单
         */
        FORM = "form",
        /**
         * @description 定义框架集的窗口或框架
         */
        FRAME = "frame",
        /**
         * @description 定义框架集
         */
        FRAMESET = "frameset",
        /**
         * @description 定义 HTML h1 标题
         */
        H1 = "h1",
        /**
         * @description 定义 HTML h2 标题
         */
        H2 = "h2",
        /**
         * @description 定义 HTML h3 标题
         */
        H3 = "h3",
        /**
         * @description 定义 HTML h4 标题
         */
        H4 = "h4",
        /**
         * @description 定义 HTML h5 标题
         */
        H5 = "h5",
        /**
         * @description 定义 HTML h6 标题
         */
        H6 = "h6",
        /**
         * @description 定义关于文档的信息
         */
        HEAD = "head",
        /**
         * @description 定义了文档的头部区域
         */
        HEADER = "header",
        /**
         * @description 定义水平线
         */
        HR = "hr",
        /**
         * @description 定义 HTML 文档
         */
        HTML = "html",
        /**
         * @description 定义斜体字
         */
        I = "i",
        /**
         * @description 定义内联框架
         */
        IFRAME = "iframe",
        /**
         * @description 定义图像
         */
        IMG = "img",
        /**
         * @description 定义输入控件
         */
        INPUT = "input",
        /**
         * @description 定义被插入文本
         */
        INS = "ins",
        /**
         * @description 定义键盘文本
         */
        KBD = "kbd",
        /**
         * @description 规定用于表单的密钥对生成器字段。
         */
        KEYGEN = "keygen",
        /**
         * @description 定义 input 元素的标注
         */
        LABEL = "label",
        /**
         * @description 定义 fieldset 元素的标题。
         */
        LEGEND = "legend",
        /**
         * @description 定义列表的项目
         */
        LI = "li",
        /**
         * @description 定义文档与外部资源的关系
         */
        LINK = "link",
        /**
         * @description 定义文档的主体部分。
         */
        MAIN = "main",
        /**
         * @description 定义图像映射
         */
        MAP = "map",
        /**
         * @description 定义带有记号的文本。请在需要突出显示文本时使用 m 标签。
         */
        MARK = "mark",
        /**
         * @description 不赞成使用。定义菜单列表。
         */
        MENU = "menu",
        /**
         * @description 定义关于 HTML 文档的元信息。
         */
        META = "meta",
        /**
         * @description 定义度量衡。仅用于已知最大和最小值的度量。
         */
        METER = "meter",
        /**
         * @description 定义导航链接的部分
         */
        NAV = "nav",
        /**
         * @description 定义针对不支持框架的用户的替代内容。HTML5不支持
         */
        NOFRAMES = "noframes",
        /**
         * @description 定义针对不支持客户端脚本的用户的替代内容。
         */
        NOSCRIPT = "noscript",
        /**
         * @description 定义内嵌对象
         */
        OBJECT = "object",
        /**
         * @description 定义有序列表。
         */
        OL = "ol",
        /**
         * @description 定义选择列表中相关选项的组合。
         */
        OPTGROUP = "optgroup",
        /**
         * @description 定义选择列表中的选项。
         */
        OPTION = "option",
        /**
         * @description 定义不同类型的输出，比如脚本的输出。
         */
        OUTPUT = "output",
        /**
         * @description 定义段落。
         */
        P = "p",
        /**
         * @description 定义对象的参数。
         */
        PARAM = "param",
        /**
         * @description 定义预格式文本。
         */
        PRE = "pre",
        /**
         * @description 定义运行中的进度（进程）。
         */
        PROGRESS = "progress",
        /**
         * @description 定义短的引用。
         */
        Q = "q",
        /**
         * @description rp 标签在 ruby 注释中使用，以定义不支持 ruby 元素的浏览器所显示的内容。
         */
        RP = "rp",
        /**
         * @description rt 标签定义字符（中文注音或字符）的解释或发音。
         */
        RT = "rt",
        /**
         * @description ruby 标签定义 ruby 注释（中文注音或字符）。
         */
        RUBY = "ruby",
        /**
         * @description 不赞成使用。定义加删除线的文本。
         */
        S = "s",
        /**
         * @description 定义计算机代码样本。
         */
        SAMP = "samp",
        /**
         * @description 定义客户端脚本。
         */
        SCRIPT = "script",
        /**
         * @description section 标签定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
         */
        SECTION = "section",
        /**
         * @description 定义选择列表（下拉列表）。
         */
        SELECT = "select",
        /**
         * @description 定义小号文本。
         */
        SMALL = "small",
        /**
         * @description source 标签为媒介元素（比如 <video> 和 <audio>）定义媒介资源。
         */
        SOURCE = "source",
        /**
         * @description 定义文档中的节。
         */
        SPAN = "span",
        /**
         * @description HTML5不支持，不赞成使用。定义加删除线文本。
         */
        STRIKE = "strike",
        /**
         * @description 定义强调文本。
         */
        STRONG = "strong",
        /**
         * @description 定义文档的样式信息。
         */
        STYLE = "style",
        /**
         * @description 定义下标文本。
         */
        SUB = "sub",
        /**
         * @description summary 标签包含 details 元素的标题，"details" 元素用于描述有关文档或文档片段的详细信息。
         */
        SUMMARY = "summary",
        /**
         * @description 定义上标文本。
         */
        SUP = "sup",
        /**
         * @description 定义表格。
         */
        TABLE = "table",
        /**
         * @description 定义表格中的主体内容。
         */
        TBODY = "tbody",
        /**
         * @description 定义表格中的单元。
         */
        TD = "td",
        /**
         * @description 定义多行的文本输入控件。
         */
        TEXTAREA = "textarea",
        /**
         * @description 定义表格中的表注内容（脚注）。
         */
        TFOOT = "tfoot",
        /**
         * @description 定义表格中的表头单元格。
         */
        TH = "th",
        /**
         * @description 定义表格中的表头内容。
         */
        THEAD = "thead",
        /**
         * @description 定义日期或时间，或者两者。
         */
        TIME = "time",
        /**
         * @description 定义文档的标题。
         */
        TITLE = "title",
        /**
         * @description 定义表格中的行。
         */
        TR = "tr",
        /**
         * @description track 标签为诸如 video 元素之类的媒介规定外部文本轨道。
         */
        TRACK = "track",
        /**
         * @description 定义打字机文本。
         */
        TT = "tt",
        /**
         * @description 不赞成使用。定义下划线文本。
         */
        U = "u",
        /**
         * @description 定义无序列表。
         */
        UL = "ul",
        /**
         * @description 定义文本的变量部分。
         */
        VAR = "var",
        /**
         * @description video 标签定义视频，比如电影片段或其他视频流。
         */
        VIDEO = "video",
        /**
         * @description 规定在文本中的何处适合添加换行符。
         */
        WBR = "wbr",
    }
}
