export const Get = async (ctx, next) => {
  ctx.body = {
    "type" : "buttons",
    "buttons" : ["뭐먹지?"],
  }
  ctx.response.status = 200

  await next()
}

