<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-tickets"></i>博客信息管理</template>
          <el-menu-item index="/articles/index">博客信息列表</el-menu-item>
          <el-menu-item index="/articles/create">新增博客信息</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: center; font-size: 12px;">
      <img src="./assets/logo.png" alt="">
      <h2 style="text-align: center; margin-top: 0">VV校园博客信息管理系统</h2>
    </el-header> 
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>

export default {
  name: 'app',
  components: {    
  },
  
}
</script>

<style>
  html,body{
    margin: 0;
    padding: 0;
  }
  img{
    width: 110px;
    height: 110px;
    float: left;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .el-header {
      background-color: #B3C0D1;
      color: #333;
      line-height: 60px;
      height: 60px;
      margin-top: 0px;
    }
  .el-main {
    margin-top: 50px;
  }
    
  .el-aside {
    color: #333;
  }
</style>
