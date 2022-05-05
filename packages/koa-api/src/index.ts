import Koa from 'koa'
import cors from 'koa2-cors'
const app = new Koa()
import kstatic from 'koa-static'
import krange from 'koa-range'
import path from 'path'

app.use(cors())
// app.use(async(ctx: Koa.Context, next: Koa.Next) => {
//   if (ctx.request.path === '/hello' && ctx.request.method === 'GET') {
//     console.log('hello')
//     ctx.body = 'Hello World'
//     ctx.cookies.set('name', 'koa', {path: '/hello'})
//     ctx.set('access-control-allow-origin', 'http://localhost:8806')
//     ctx.set('access-control-allow-credentials', 'true')
//   }
// })

// app.use(async (ctx: Koa.Context, next: Koa.Next) => {
//   ctx.body = 'hello'
// })

app.use(kstatic(path.join(__dirname, 'public')))
// app.use(krange)


app.listen(12345)
