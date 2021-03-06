/*
 *
 *判断是否括号匹配
 */

// 判断左右括号是否匹配
function isMatch(left, right) {
    if (left === "{" && right === "}") return true
    if (left === "[" && right === "]") return true
    if (left === "(" && right === ")") return true
    return false
}

function matchBracket(str) {
    const length = str.length
    if (length === 0) return true

    const stack = []

    const leftSymbols = '{[('
    const rightSymbols = ')]}'

    for (let i = 0; i < length; i++) {
        const s = str[i]

        if (leftSymbols.includes(s)) {
            //左括号，压栈
            stack.push(s)
        } else if (rightSymbols.includes(s)) {
            //右括号，判断栈顶（是否出栈）
            const top = stack[stack.length - 1]
            if (isMatch(top, s)) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0

}


// 功能测试
const str = '{a[d((s)c]d}a'
console.info(123, matchBracket(str))