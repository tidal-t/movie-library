export function movie_rate(rate) {
  if (typeof rate == "number") {
    return rate.toFixed(1);
  }
  return 0
}
export function movie_release(date) {
  const year = new Date(date);
  return year.getFullYear();
}
