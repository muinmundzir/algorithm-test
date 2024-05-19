// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
// Contoh:
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// longest(sentence) 
// mengerjakan: 11 character

const sentence = "Saya sangat senang mengerjakan soal algoritma"

const longest = (string) => {
 const arrayOfWords = string.split(" ")  
  console.log(arrayOfWords)
 
 let maxWords = ""
 for(let i = 0; i < arrayOfWords.length - 2; i++) {
  for(let j = 1; j < arrayOfWords.length; j++) {
    if(arrayOfWords[i].length < arrayOfWords[j].length) {
      maxWords = arrayOfWords[j]
    } else {
      maxWords = arrayOfWords[i]
    }
  }
 }

 return `${maxWords}: ${maxWords.length} characters`
}

const output = longest(sentence)
console.log(output)
