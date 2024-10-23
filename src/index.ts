import { Context, Schema, h } from "koishi";
import { getTarotData } from "./data";
import { isUpright, shuffleArray } from "./utils";

export const name = "bili-tarot";

export interface Config { }

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  let shuffledDeck: number[] = [];

  ctx.command("塔罗牌").action(async ({ session }) => {
    const data = await getTarotData();

    // 如果牌组为空,重新洗牌
    if (shuffledDeck.length === 0) {
      shuffledDeck = shuffleArray([...Array(22).keys()]);
    }

    // 从洗好的牌组中抽取一张牌
    const cardIndex = shuffledDeck.pop()!;
    const card = data[cardIndex];
    const upright = isUpright();

    await session.send(`看看
      ${h("at", { id: session.userId })}
      抽到了什么：
      ${h.image(card.picBuffer, 'image/webp')}
      ${card.name}（${upright ? "正位" : "逆位"}）：
      ${h("br")}${upright ? card.upText : card.reversedText}`);
  });
}
