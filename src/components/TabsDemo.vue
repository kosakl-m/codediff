<template>
  <div>
    <el-tabs type="card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">
        <div>测试</div>
      </el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: none !important;
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-tabs--card>.el-tabs__header .el-tabs__item {
    border-bottom: 1px solid transparent;
    border-left: none;
    -webkit-transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
    transition: color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1);
}
.el-tabs__item.is-active {
    color: #409EFF;
    border-top: 1px solid;
    border-left: 1px solid !important;
    border-right: 1px solid;
    border-bottom: 1px solid #fff !important;
}
.el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    top: 1px;
}
</style>
