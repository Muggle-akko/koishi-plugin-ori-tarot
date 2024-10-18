import path from 'path';
import fs from 'node:fs'

// 导入 JSON 文件
import torotNames from './assets/name.json';
import upTexts from './assets/upText.json';
import reversedTexts from './assets/reversedText.json';
import tarotImgs from './assets/picUrl.json';

// 导入图片文件
const tarotImages = Object.fromEntries(
  Object.entries(tarotImgs).map(([key, value]) => [
    key,
    require(`${path.join(__dirname, value)}`)
  ])
);

export interface ITarot {
  /** 图片 Buffer */
  picBuffer: Buffer;
  /** 正位描述文案 */
  upText: string;
  /** 逆位描述文案 */
  reversedText: string;
  /** 卡牌名称 */
  name: string;
}

/** 拼装塔罗牌数据 */
const tarotData = async (): Promise<ITarot[]> => {
  const keys = Object.keys(torotNames);

  return keys.map((item) => {
    const picBuffer = fs.readFileSync(tarotImages[item]);  // 直接使用导入的图片

    return {
      picBuffer,
      upText: upTexts[item],
      reversedText: reversedTexts[item],
      name: torotNames[item],
    };
  });
};

export default tarotData;
