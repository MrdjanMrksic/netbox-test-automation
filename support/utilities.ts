class Utilities {
    generateRandomString(length: number, numbers: number) {
        const chars = numbers ? '1234567890' : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        const charLength = chars.length
        let result = ''
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * charLength))
        }
        return result
    }

    generateRandomNumberZeroToTen(){ 
        const num =  Math.ceil(Math.random()*10)
        return num
    }
}

export default new Utilities();