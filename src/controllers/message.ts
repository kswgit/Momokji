export const Post = async (ctx, next) => {
  ctx.body = {
    "message":{
      "text" : "학ㅋ식ㅋ"
    }
  }
  ctx.response.status = 200
  await next()
}
