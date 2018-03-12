const express = require('express')
const fs = require('fs')
const path = require('path')
const {
  createBundleRenderer
} = require('vue-server-renderer')

const cors = require('cors')
const routes = require('./routes/index')

const server = express()
server.use(cors())
server.use('/', routes)
server.on('error', err => console.log(err))
server.listen(8088, () => {
  console.log(`server started at localhost:8088`)
})

const app = express()
const resolve = file => path.resolve(__dirname, file)
// 生成服务端渲染函数
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  // 推荐
  runInNewContext: false,
  // 模板html文件
  template: fs.readFileSync(resolve('./index.html'), 'utf-8'),
  // client manifest
  clientManifest: require('./dist/vue-ssr-client-manifest.json'),
  basedir: resolve('./dist')
})

// 引入静态资源
app.use(express.static(path.join(__dirname, 'dist')))
// 分发路由

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html')

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if (err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: 'Vue SSR demo', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    console.log('render')
    if (err) {
      return handleError(err)
    }
    res.send(html)
  })
})

app.on('error', err => console.log(err))
app.listen(3000, () => {
  console.log(`vue ssr started at localhost:3000`)
})
