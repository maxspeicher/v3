<template>
  <div class="fl pa2 w-100 w-50-m w-third-l">
    <div v-bind:class="'box f2 f3-m fw6 w-100 box-' + id">
        <div class="box-padding"></div>
        <nuxt-link v-bind:to="'/work/' + id" class="box-inner color-background">
            <div class="center pa2 w-100">
                <span v-html="title"></span>
                <div class="separator-thin"></div>
                <span class="f3 f4-m fw2" v-html="topic"></span>
            </div>
        </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "topic"]
}
</script>

<style scoped>
  
</style>