<template>
  <div>
    <p>vue 高级特性</p>
    <hr>

    <!-- 自定义 v-model -->
    <p>{{name}}</p>
    <custom-v-model v-model="name"/>
  </div>
</template>

<script>
import CustomVModel from './CustomVModel.vue'
export default {
  components: { CustomVModel },
  data() {
    return {
      name: '测试'
    }
  }
}
</script>
