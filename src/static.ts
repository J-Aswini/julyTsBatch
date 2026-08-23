class MathUtils {
    static generateRandomNumber() {
        return Math.random()
    }
}
console.log(Math.floor(MathUtils.generateRandomNumber() *1000))