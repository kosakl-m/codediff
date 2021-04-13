<template>
  <div id="app">
    <!-- <computed-demo/> -->
    <!-- <watch-demo/> -->
    <!-- <tabs-demo/> -->
    <!-- <event-demo/> -->
    <!-- <coponents-Demo/> -->
    <!-- <advanced-use/> -->
    <lineChart/>
  </div>
</template>

<script>
import AdvancedUse from './components/AdvancedUse/index'
import CoponentsDemo from './components/ComponentsDemo/index'
import ComputedDemo from './components/ComputedDemo.vue'
import EventDemo from './components/EventDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import WatchDemo from './components/WatchDemo.vue'
import lineChart from './eChart/lineChart'
export default {
  components: {
    // CoponentsDemo
    // EventDemo,
    // ComputedDemo,
    // WatchDemo,
    // TabsDemo,
    // AdvancedUse
    lineChart
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
