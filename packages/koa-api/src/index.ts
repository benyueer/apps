import Koa from 'koa'
import cors from 'koa2-cors'
const app = new Koa()

// app.use(cors())
app.use(async(ctx: Koa.Context, next: Koa.Next) => {
  if (ctx.request.path === '/hello' && ctx.request.method === 'GET') {
    console.log('hello')
    ctx.body = 'Hello World'
    ctx.cookies.set('name', 'koa', {path: '/hello'})
    ctx.set('access-control-allow-origin', 'http://localhost:8806')
    ctx.set('access-control-allow-credentials', 'true')
  }
})


app.listen(12345)
