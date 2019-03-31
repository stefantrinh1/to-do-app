
const multipler = {
    numbers: [1,2,3],
    multiplyBy: 2,
    divideBy: 2,
    multiply() {
        return this.numbers.map((num) => num*this.multiplyBy     
        );
    },
    divide() {
        return this.numbers.map((num) => num / this.divideBy)  
    },
    

}

console.log(multipler.multiply())
console.log(multipler.divide())