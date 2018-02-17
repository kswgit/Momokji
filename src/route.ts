import * as Router from "koa-router"
import * as Keyboard from './controllers/keyboard'
import * as Message from './controllers/message'

export const router = new Router({
  prefix: '/api',
})


router.get("/keyboard", Keyboard.Get)
router.post("/message", Message.Post)

