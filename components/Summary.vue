<template>
  <div class="dib f3 f1-ns fw6 measure-wide tl w-100">
    {{ title }}
    <div class="f4 f3-ns fw4 lh-title mt4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style scoped>
  
</style>