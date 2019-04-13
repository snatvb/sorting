
// Сортировка пузырьком
const sortBubble = (arr) => {
  let wasChanges = false
  const endIndex = arr.length - 1
  do {
    wasChanges = false
    for(let i = 0; i < endIndex; i++) {
      const current = arr[i]
      const next = arr[i+1]
      if (next < current) {
        wasChanges = true
        arr[i] = next
        arr[i+1] = current
      }
    }
  } while (wasChanges)
  return arr
}

const sortedBubble = sortBubble([4, 5, 6, 3, 6, 5, 2, 1, 88])

console.log('was:   ', [4, 5, 6, 3, 6, 5, 2, 1, 88])
console.log('become:', sortedBubble)
