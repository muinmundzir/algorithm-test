// 1. Terdapat string "NEGIE1", 
// silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
const input = 'NEGIE1';

const reverseWithoutNumbers = (input: string) => {
    const nonNumericChars = input.match(/[^\d]/g) || [];
    
    const reversedChars = nonNumericChars.reverse();
    
    let reversedStr = '';
    let reversedIndex = 0;
    
    for (let i = 0; i < input.length; i++) {
      if (isNaN(parseInt(input[i]))) {
        reversedStr += reversedChars[reversedIndex++];
      } else {
        reversedStr += input[i];
      }
    }
    
    return reversedStr;
}

const output = reverseWithoutNumbers(input);
console.log(output); // Output: EIGEN1
