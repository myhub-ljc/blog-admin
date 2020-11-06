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
    <el-input v-model="article.context"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">保存</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  name: "EditArticle",
  data() {
    return {
      article: {}
    }
  },
  methods: {
    saveArticle() {
      this.$http.put(`articles/${this.$route.params.id}`, this.article).then(res => {
        this.$message({
          message: "文章修改成功",
          type: "success"
        })
        this.$router.push('/articles/index')
        console.log(res)
      })
    },
    fetch(){
      this.$http.get(`articles/${this.$route.params.id}`).then(res => {
        this.article = res.data
      })
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style>

</style>