
// You should implement your task here.

module.exports = function towelSort (matrix) {
  console.log(matrix)

  if (matrix !== undefined){
    matrix.map((item, index) => {
    if (index % 2 === 1) {item.reverse();}
  })
  return matrix.flat();  
} else {
  return [];
}
}
