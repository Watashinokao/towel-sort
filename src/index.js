
module.exports = function towelSort(matrix) {
  if (!matrix) return []
  else {
    matrix.map((arr, index) => {
      if (index % 2) {
        arr.reverse()
      }
    })
    let arr = []
    matrix.map(el => {
      for (let i = 0; i < el.length; i++) {
        arr.push(el[i])
      }
    })
    return arr
  }
}

