function writeCards(names, event) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}

function countDown(integer) {
  let i = integer;
  while (i > -1) {
    console.log(i);
    i--;
  }
}
