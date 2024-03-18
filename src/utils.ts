/** 获取正逆位 */
export const upOrReverse = (): boolean => {
  return Math.random() < 0.5;
}

/** 随机抽牌 */
export const drawCards = (): number => {
  return Math.floor(Math.random() * 22);
}