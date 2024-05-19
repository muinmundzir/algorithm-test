// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
// Contoh:
// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// diagonal pertama = 1 + 5 + 9 = 15 
// diagonal kedua = 0 + 5 + 7 = 12 
// maka hasilnya adalah 15 - 12 = 3

const MATRIX = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const matrixSubstraction = (matrix) => {
  let diagonalLeft = 0
  let diagonalRight = 0

  for(let i = 0; i < matrix.length; i++) {
    diagonalLeft += matrix[i][i]
    diagonalRight += matrix[i][matrix.length - i - 1]
  }

  return diagonalLeft - diagonalRight
}

const output = matrixSubstraction(MATRIX)
console.log(output)
