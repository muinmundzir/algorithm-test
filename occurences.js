// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT Contoh:
// Contoh:
// INPUT = ['xc', 'dz', 'bbb', 'dz'] 
// QUERY = ['bbb', 'ac', 'dz']
// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']

const findOccurences = (query, input) => {
  let totalOccurences = []
  for(let i = 0; i < query.length; i++) {
    let occurences = 0
    for(let j = 0; j < input.length; j++) {
      if(query[i] === input[j]) {
        occurences += 1
      }
      else {
        occurences = occurences
      }
    } 
    totalOccurences = [...totalOccurences, occurences]
  }

  return `OUTPUT = ${totalOccurences}`
}

const output = findOccurences(QUERY, INPUT)
console.log(output)
