<template>
  <div class="cf lh-copy mt5 mt6-ns tl">
    <div class="f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l">
    {{ title }}
    </div>
    <div class="fl w-100 w-two-thirds-m w-75-l">
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
