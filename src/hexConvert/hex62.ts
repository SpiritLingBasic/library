export function hex62(number: number) {
    const chars = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ".split(
            ""
        ),
        radix = chars.length,
        arr = [];
    let mod: number;
    let qutient = +number;
    do {
        mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
    } while (qutient);
    return arr.join("");
}

export function reverseHex62(hex62_string: string) {
    const chars =
            "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ",
        radix = chars.length,
        len = hex62_string.length;
    hex62_string = String(hex62_string);
    let i = 0;
    let origin_number = 0;
    while (i < len) {
        origin_number +=
            Math.pow(radix, i++) * chars.indexOf(hex62_string.charAt(len - i));
    }
    return origin_number;
}
