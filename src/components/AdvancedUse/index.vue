<template>
  <div>
    <!-- <p>vue 高级特性</p>
    <hr> -->

    <!-- 自定义 v-model -->
    <!-- <p>{{name}}</p>
    <custom-v-model v-model="name"/> -->


    <!-- solt -->
    <!-- <slot-demo :url="website.url">
      {{website.title}}
    </slot-demo> -->

    <!-- <scoped-slot-demo v-slot="slotParent">
      {{slotParent.slotData}}
    </scoped-slot-demo> -->

    <!-- <FormDemo v-if="showFormDemo"/>
    <button @click="showFormDemo = true">show form demo</button> -->
    <keep-alive ref='test'/>


  </div>
</template>

<script>
import SlotDemo from './SlotDemo.vue'
import CustomVModel from './CustomVModel.vue'
import ScopedSlotDemo from './ScopedSlotDemo.vue'
import KeepAlive from './KeepAlive.vue'
export default {
  components: {
    CustomVModel,
    SlotDemo,
    ScopedSlotDemo,
    FormDemo: () => import('../BaseUse/FormDemo'),
    KeepAlive
  },
  data() {
    return {
      name: '测试',
      website: {
        url: 'http://imooc.com/',
        title: 'imooc',
        subTitle: '程序员的梦工厂'
      },
      showFormDemo: false
    }
  },
  mounted() {
    console.log(this.$refs);
    console.log(this.$refs.test.$refs['k-card-0']);
  }
}
</script>
