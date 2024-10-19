import { Context, Schema, h } from "koishi";
import tarotData from "./data";
import { drawCards, upOrReverse } from "./utils";

export const name = "bili-tarot";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  ctx.command("bili塔罗牌").action(async (props) => {
    const data = await tarotData();
    const card = data[drawCards()];
    const location = upOrReverse();
    const { session } = props;

    session.send(`看看
      ${h("at", { id: session.userId })}
      抽到了什么：
      ${h.image(card.picBuffer, 'image/avif')}
      ${card.name}（${location ? "正位" : "逆位"}）：
      ${h("br")}${location ? card.upText : card.reversedText}`);
  });
}
