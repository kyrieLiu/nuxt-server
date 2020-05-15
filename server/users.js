const Router = require('koa-router')

const router = new Router({ prefix: '/users' })

router.get('/getUser', function (ctx) {
  ctx.body = {
    user: '用户名',
    email: '邮箱'
  }
})

module.exports = router
