<template>
  <div class="color-background dib o-100 tc" style="margin: 0 auto; max-width: 100%; position: relative; width: 300px">
    <div class="box-padding"></div>
    <div class="ma4 shadow" style="background-color: ivory; bottom: 0; left: 0; position: absolute; right: 0; top: 0;">
        <div class="center pa3 w-100">
        <div class="mb3 f1">
            <i v-bind:class="icon"></i>
            <div class="fw7">{{ number }}</div>
        </div>
        <div class="fw4">
            {{ description }}
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "number", "description"]
}
</script>

<style scoped>
  
</style>