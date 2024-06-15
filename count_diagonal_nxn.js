/**@param{number[][]} params */
function main(params = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]) {
  let matrixLength = params.length;
  if (matrixLength <= 1) {
    throw new Error('Matrix must NxN dimension');
  }

  const dimensions = [[], []];
  let r = matrixLength - 1;
  for (let i = 0; i < matrixLength; i++) {
    const dimension = params[i];
    if (matrixLength !== dimension.length) {
      throw new Error('Matrix dimensions must be the same');
    }


    dimensions[0].push(dimension[i]);
    dimensions[1].push(dimension[r]);

    r--;
  }

  const countedDimensions = dimensions.map((d, n, dd) => {
    return d.reduce((prev, curr, i, a) => {
      if (i === 0) {
        return curr;
      } else {
        return prev + curr
      }
    }, 0)
  })

  return countedDimensions[0] - countedDimensions[1];
}

console.log(main())