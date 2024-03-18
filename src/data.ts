import fs from 'fs';

export interface ITarot {
  /** 图片路径 */
  picPath: string;
  /** 正位描述文案 */
  upText: string;
  /** 逆位描述文案 */
  reversedText: string;
  /** 卡牌名称 */
  name: string;
}

/** 拼装塔罗牌数据 */
const tarotData = async (): Promise<ITarot[]> => {
  const torotNames = JSON.parse(fs.readFileSync(__dirname + '/assets/name.json', 'utf8'));
  const upTexts = JSON.parse(fs.readFileSync(__dirname + '/assets/upText.json', 'utf8'));
  const reversedTexts = JSON.parse(fs.readFileSync(__dirname + '/assets/reversedText.json', 'utf8'));
  const tarotImgs = JSON.parse(fs.readFileSync(__dirname + '/assets/picUrl.json', 'utf8'));
  const keys = Object.keys(torotNames);
  return keys.map((item) => ({
      picPath: tarotImgs[item],
      upText: upTexts[item],
      reversedText: reversedTexts[item],
      name: torotNames[item],
  }))
};

export default tarotData;