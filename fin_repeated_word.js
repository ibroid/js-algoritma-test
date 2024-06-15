/**@param {string[]} param */
/**@param {string[]} query */
function main(param = ['xc', 'dz', 'bbb', 'dz'], query = ['bbb', 'ac', 'dz']) {

  const res = query.map((v, i, a) => {
    let count = 0;
    param.forEach((y, n) => {
      if (y === v) {
        count += 1;
      }
    })
    return count;
  })

  return res
}

console.log(main())