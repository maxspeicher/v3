<template>
  <div class="mb4">
    <div class="f4 fw4 lh-title mb3">
        <a class="dim" :href="link">{{ title }}</a>
    </div>
    <div class="lh-copy">
        {{ publication }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "link", "publication"]
}
</script>

<style scoped>
  
</style>