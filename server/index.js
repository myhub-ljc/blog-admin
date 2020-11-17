const express = require('express');
const app = express();

//允许跨域
app.use(require('cors')());
//要告诉express识别客户端传过来的json数据
app.use(express.json());

//配置数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/element-admin', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true
});

//建立数据模型(这个是书籍模型)
const Article = mongoose.model('Article', new mongoose.Schema({
  title: {type: String},
  price: {type: String},
  mount: {type: Number},
  context: {type: String}
}));

app.get('/', async (req, res) => {
  res.send('index')
});

//新增文章的接口
app.post('/api/articles', async (req, res) => {
  const article = await Article.create(req.body)
  res.send(article)
});

//文章列表的接口
app.get('/api/articles', async (req, res) => {
  const articles = await Article.find()
  res.send(articles)
});

//删除文章
app.delete('/api/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
});

//文章详情
app.get('/api/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
});

//修改文章
app.put('/api/articles/:id', async (req, res) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body)
  res.send(article)
});

app.listen(3001, () => {
  console.log('数据库连接成功https://localhost:3001/')
});