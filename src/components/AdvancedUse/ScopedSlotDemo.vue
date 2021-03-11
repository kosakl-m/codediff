<template>
  <div>
    <a :href="website.url">
      <slot :slotData="test">
        {{website.subTitle}}
      </slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      website: {
        url: 'http://wangEditor.com/',
        title: 'wangEditor',
        subTitle: 'wangEditor编辑器'
      },
      test: '测试'
    }
  }
}
</script>
