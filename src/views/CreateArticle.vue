<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="书名">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="article.price"></el-input>
    </el-form-item>
    <el-form-item label="数量">
      <el-input v-model="article.mount"></el-input>
    </el-form-item>
    <el-form-item label="书籍简介">
      <el-input maxlength="20" type="textarea" v-model="article.context"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CreateArticle",
  data() {
    return {
      article: {}
    }
  },
  methods: {
    saveArticle() {
      this.$http.post('articles', this.article).then(res => {
        this.$message({
          message: "文章创建成功",
          type: "success"
        })
        console.log(res)
        this.$router.push('/articles/index')
      })
    }
  }
}
</script>

<style>

</style>