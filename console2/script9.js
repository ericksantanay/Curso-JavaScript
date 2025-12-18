/*
Maior número

Dado um array de números, mostre o maior.
*/

let nums = [34, 55, 2, 13, 567, 1000]

let maior = nums[0]

for (let n of nums) {
    if (n > maior) {
        maior = n
    }
}

console.log(maior)
