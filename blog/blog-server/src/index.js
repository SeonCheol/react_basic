const api = require('./api')
require('dotenv').config()
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const mongoose = require('mongoose')
const {
    PORT: port = 400,
    MONGO_URI: mongoURI
} = process.env

mongoose.Promise = global.Promise
mongoose.connect(mongoURI).then(() => {
    console.log('connect to mongodb')
}).catch((e) => {
    console.error(e)
})

const app = new Koa()
const router = new Router()

router.use('/api', api.routes())

app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => {
    console.log('listening to port 4000')
})