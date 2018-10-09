const api = require('./api')
const Koa = require('koa')

const app = new Koa()

app.use(api.routes())
app.use(ctx => {
    ctx.body = 'Hello World'
})


app.listen(4000, () => {
    console.log('listening to port 4000')
})