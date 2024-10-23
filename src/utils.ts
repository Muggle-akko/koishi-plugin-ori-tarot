import crypto from 'crypto';

/** 获取正逆位 */
export const isUpright = (): boolean => crypto.randomBytes(1)[0] < 128;

/** 随机抽牌 */
export const drawCard = (): number => {
  const randomBytes = crypto.randomBytes(4);
  const randomNumber = randomBytes.readUInt32BE(0);
  return randomNumber % 22;
};

/** 洗牌函数 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(crypto.randomBytes(4).readUInt32BE(0) / (0xffffffff + 1) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
