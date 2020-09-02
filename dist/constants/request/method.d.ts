/**
 * @description http请求方式枚举，使用 `RESTful` 标准
 * @export Method
 * @enum {number}
 */
export declare enum Method {
    /**
     * @description 用于获取目的资源所支持的通信选项
     */
    OPTIONS = 1,
    /**
     * @description 请求指定的资源,只用于获取数据
     */
    GET = 2,
    /**
     * @description 整体更新，非幂等请求，连续调用一次或多次效果不同（有副作用）
     * @example 典型例子就是create一个记录，每次调用都会创建一个
     */
    POST = 4,
    /**
     * @description 更新全部，不提供参数应当按照空来处理，幂等请求，连续调用一次或多次效果相同（无副作用）
     * @example 典型例子就是更新用户信息，每次调用相同数据都会产生相同的结果
     */
    PUT = 8,
    /**
     * @description 对资源进行部分修改，幂等请求
     * @example 只更新一部分信息，比如只更新头像，其他不动
     */
    PATCH = 16,
    /**
     * @description 用于删除指定的资源
     */
    DELETE = 32
}
export declare namespace Method {
    /**
     * @description 数字转Method枚举方法
     * @export Number2Method
     */
    function Number2Method(n: number): Method;
}
//# sourceMappingURL=method.d.ts.map