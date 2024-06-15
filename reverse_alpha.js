/**@param {string} params  */
function main(params = "NEGIE1") {
  /**@type{{index:number,value:number}[]} */
  const extractedNumber = [];
  const extractedAlpha = []

  params.split('').forEach((v, i) => {
    const s = parseFloat(v)
    if (!isNaN(s)) {
      extractedNumber.push({
        index: i,
        value: s
      });
    } else {
      extractedAlpha.push(v)
    }
  })

  params = extractedAlpha.reverse().toString().replaceAll(",", "")

  extractedNumber.forEach((y, i, a) => {
    params = params.slice(0, y.index) + y.value + params.slice(y.index)
  })

  return params;
}


console.log(main("maliki2brahim4"));