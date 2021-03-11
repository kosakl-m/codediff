<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>

    <keep-alive>
      <keep-alive-a v-if="state === 'A'"/>
      <keep-alive-b v-if="state === 'B'"/>
      <keep-alive-c v-if="state === 'C'"/>

    </keep-alive>

    <div>
      <span ref="k-card-0"></span>
      <span ref="k-card-1"></span>
    </div>
  </div>
</template>

<script>
import KeepAliveA from './KeepAliveA.vue'
import KeepAliveB from './KeepAliveB.vue'
import KeepAliveC from './KeepAliveC.vue'
export default {
  components: { KeepAliveA, KeepAliveB, KeepAliveC },
  data() {
    return {
      state: 'A'
    }
  },
  methods: {
    changeState(value) {
      this.state = value
    }
  }
}
</script>
