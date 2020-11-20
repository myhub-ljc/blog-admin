<template>
  <div>
    <el-table
    :data="articles"
    style="width: 100%; text-align: center;">
      <el-table-column prop="title" label="博客主" width="200">
      </el-table-column>
      <el-table-column prop="price" label="博客名称" width="200">
      </el-table-column>
      <el-table-column prop="mount" label="博客数量" width="200">
      </el-table-column>  
      <el-table-column prop="context" label="博客简介" width="200">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small"><i class="el-icon-tickets"> </i>编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small"><i class="el-icon-delete"> </i>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ListArticle",
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.$http.get('articles').then(res => {
      this.articles = res.data
    })
    },
    edit(id) {
      this.$router.push(`/articles/edit/${id}`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message({
          message: "删除成功",
          type: "success"
        });
        this.fetch()
        console.log(res)
      })
    }
  }
}
</script>

<style>
.el-table-column{
  text-align: center;
}
</style>