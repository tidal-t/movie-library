export function getBestRatedItem(items, m = 10) {
  const C =
    items.reduce((sum, item) => sum + item.vote_average, 0) / items.length;

  let bestItem = null;
  let highestScore = -Infinity;

  for (const item of items) {
    const v = item.vote_count;
    const R = item.vote_average;

    const weightedScore = (v / (v + m)) * R + (m / (v + m)) * C;

    if (weightedScore > highestScore) {
      highestScore = weightedScore;
      bestItem = item;
    }
  }

  return bestItem;
}
