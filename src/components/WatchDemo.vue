<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="info.city">
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '测试',
      info: {
        city: '武汉'
      }
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log('watch name',newVal, oldVal);
    },
    info: {
      handler(newVal, oldVal) {
        console.log('watch info', newVal.city, oldVal.city);
      },
      deep: true
    }
  }
}
</script>
