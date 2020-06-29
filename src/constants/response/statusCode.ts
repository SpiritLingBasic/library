/**
 * @description 服务器响应状态码
 * @export StatusCode
 * @enum {number}
 */
export enum StatusCode {
    /**
     * @description 成功
     */
    Ok = 200,
    /**
     * @description post请求创建成功
     */
    Created = 201,
    /**
     * @description 更新成功,如果游览器自动刷新，则改为使用200
     */
    Put = 205,
    /**
     * @description 部分更新成功，如果游览器出现不可预知的行为，则使用200
     */
    Patch = 206,
    /**
     * @description 永久重定向
     */
    Moved = 301,
    /**
     * @description 临时重定向
     */
    Found = 302,
    /**
     * @description 坏的请求，参数不正确等
     */
    BadRequest = 400,
    /**
     * @description 未登录
     */
    Unauthorized = 401,
    /**
     * @description 拒绝此请求，比如输入密码错误等
     */
    Forbidden = 403,
    /**
     * @description 未找到
     */
    NotFound = 404,
    /**
     * @description 请求超时
     */
    RequestTimeout = 408,
    /**
     * @description 冲突
     */
    Conflict = 409,
    /**
     * @description 服务器出现错误
     */
    InternalServerError = 500,
    /**
     * @description 网关请求错误
     */
    BadGateway = 502,
    /**
     * @description 网关请求超时
     */
    GatewayTimeout = 504,
}
