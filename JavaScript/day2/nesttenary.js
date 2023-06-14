const totalMark = 99
// if (totalMark >= 90 && totalMark <= 100) {
//   console.log('Genius')
// } else if (totalMark >= 80 && totalMark <= 89) {
//   console.log('A+ grade')
// } else if (totalMark >= 60 && totalMark <= 79) {
//   console.log('A Grade')
// } else if (totalMark >= 40 && totalMark <= 59) {
//   console.log('B Grade')
// } else {
//   console.log('You need  to work hard')
// }

console.log(
  totalMark >= 90 && totalMark <= 100
    ? 'Genius'
    : totalMark >= 80 && totalMark <= 89
    ? 'A+ Grade'
    : totalMark >= 60 && totalMark <= 79
    ? 'A Grade'
    : totalMark >= 40 && totalMark <= 59
    ? 'B Grade'
    : 'you need to work hard',
)
