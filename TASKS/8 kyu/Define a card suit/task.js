function defineSuit(card) {
  const cardArr = card.split('');

  if (cardArr.includes('♣')) return 'clubs';
  if (cardArr.includes('♦')) return 'diamonds';
  if (cardArr.includes('♥')) return 'hearts';
  if (cardArr.includes('♠')) return 'spades';
}