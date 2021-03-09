<template>
  <div>
    <p>num {{ num }}</p>
    <p>double1 {{double1}}</p>
    <input type="text" v-model="double2"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 10
    }
  },
  computed: {
    double1() {
      return this.num * 2
    },
    double2: {
      get() {
        return this.num* 2
      },
      set(val) {
        console.log(val);
        this.num = val/2
      }
    }
  }
}
</script>
