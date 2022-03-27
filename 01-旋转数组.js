function rotate1(arr, k) {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值

    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n != null) {
            arr.unshift(n) //数组是一个有序结构，unshift操作非常慢 O(n)       
        }
    }
    return arr
}

function rotate2(arr, k) {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值

    const part1 = arr.slice(-step) // O(1)
    const part2 = arr.slice(0, length - step)
    const part3 = part1.concat(part2)
    return part3
}



// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7]
// const arr1 = rotate2(arr, 3)
// console.info(arr1);
// 性能测试
const arr1 = []
for (let i = 1; i < 10 * 10000; i++) {
    arr1.push(i)
}
console.time('rotate1')
rotate1(arr1, 9 * 1000)
console.timeEnd('rotate1') //152.12ms O(n^2)

const arr2 = []
for (let i = 1; i < 10 * 10000; i++) {
    arr2.push(i)
}
console.time('rotate2')
rotate2(arr2, 9 * 1000)
console.timeEnd('rotate2') //0.41ms O(1)