
// Сортировка выборкой
function sortSelect(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    let si = i
    for(let j = i+1; j < arr.length; j++) {
      if(arr[si] > arr[j]) {
        si = j
      }
    }
    if (si !== i) {
      const current = arr[i]
      arr[i] = arr[si]
      arr[si] = current
    }
  }
  return arr
}

const arr = [5, 7, 1, 4, 2, 9, 3, 5]

sortSelect(arr)
console.log('was:   ', [5, 7, 1, 4, 2, 9, 3, 5])
console.log('become:', arr)
