/**
 * @param{string} params
 */
function main(params = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.") {
  const words = params.split(' ');

  const longest = words.reduce((longest, word) => {

    if (word.length > longest.length) {
      longest = word;
    }

    return longest;
  }, '');

  return longest;
}

console.log(main());

