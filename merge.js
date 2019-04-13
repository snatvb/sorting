// Функция сравнения для сортировки
// от меньшего к большму
function compareCallback(a, b) {
  return a - b
}

// Функция слияние для сортировки алгоритмом слияния
function mergeInSort(fh, sh, callback) {
  let result = []
  let j = 0
  let i = 0
  while(i < fh.length && j < sh.length) {
    const c = callback(fh[i], sh[j])
    if (c > 0) {
      result.push(sh[j])
      j++
    } else {
      result.push(fh[i])
      i++
    }
  }

  for(let k = i; k < fh.length; k++) {
    result.push(fh[k])
  }

  for(let k = j; k < sh.length; k++) {
    result.push(sh[k])
  }

  return result
}

// Функция сортировки методом слияния
function sortMerge(arr, callback) {
  if (!arr || !arr.length) {
    return null;
  }

  if (arr.length <= 1) {
      return arr;
  }

  let mi = Math.floor(arr.length / 2)
  const fh = arr.slice(0, mi)
  const sh = arr.slice(mi)

  return mergeInSort(
    sortMerge(fh, callback),
    sortMerge(sh, callback),
    callback
  )
}

const sorted = sortMerge([3, 55, 45, 573, 335, 12, 5, 66], compareCallback)

console.log('was:   ', [3, 55, 45, 573, 335, 12, 5, 66])
console.log('become:', sorted)