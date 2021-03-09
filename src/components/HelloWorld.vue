<template>
  <div id="review_box">
    <ul id="comment1">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
    </ul>
    <ul id="comment2"></ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test1: undefined
    }
  },
  created() {
    this.test(50)
  },
  methods: {
    test(t) {
      this.$nextTick(() => {
        const ul1 =document.getElementById('comment1')
        const ul2 =document.getElementById('comment2')
        const ulbox =document.getElementById('review_box')
        ul2.innerHTML = ul1.innerHTML;
        ulbox.scrollTop = 0
        const timer = setInterval(this.rollStart, t)
      })
    },
    rollStart() {
      const ul1 =document.getElementById('comment1')
      const ul2 =document.getElementById('comment2')
      const ulbox =document.getElementById('review_box')
      if(ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
      } else {
        ulbox.scrollTop++;
      }
    }
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
#review_box {
    width: 100px;
    height: 63px; /* 必须 */
    overflow: hidden;/* 必须 */
    margin: 50px auto;
    border: 1px solid #000;
    text-align: center;
}
ul {
    list-style: none;
}
</style>
