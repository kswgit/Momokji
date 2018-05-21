export const Post = async (ctx, next) => {
  ctx.body = {
    "message":{
      "text" : "학ㅋ식ㅋ"
    },
    "keyboard": {
    "type": "buttons",
    "buttons": [
      "뭐먹지?",
    ]
    }
  }
  ctx.response.status = 200
  await next()
}
