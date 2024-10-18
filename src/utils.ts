/** 获取正逆位 */
export const upOrReverse = (): boolean => {
  const options = [true, false];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options[0];
}

/** 随机抽牌 */
export const drawCards = (): number => {
  const cards = Array.from({ length: 22 }, (_, i) => i);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards[0];
}
