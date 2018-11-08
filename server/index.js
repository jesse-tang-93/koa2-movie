const Koa = require('koa')
const app = new Koa()
// const { htmlTpl,ejsTpl,pugTpl } = require('./tpl')
// const ejs = require('ejs')
// const pug = require('pug')
const views = require('koa-views')
const { resolve } = require('path')
app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
} ))

app.use(async (ctx, next) => {
  await ctx.render('index', {
    you:'tianyanrong',
    me: 'tangxiaoqiang'
  })
})
app.listen(4455)
