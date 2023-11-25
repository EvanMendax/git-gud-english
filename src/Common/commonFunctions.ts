export const shuffleQuestion = (array: any[]) => {
    const temporaryArray = [...array]
    for (let i = temporaryArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [temporaryArray[i], temporaryArray[j]] = [temporaryArray[j], temporaryArray[i]];
    }
    return temporaryArray
}
export const groupQuestion = (question: any[], size: number): any[] => {
    let subarray = []
    for (let i = 0; i <Math.ceil(question.length/size); i++){
        subarray[i] = question.slice((i*size), (i*size) + size)
    }
    return subarray
}