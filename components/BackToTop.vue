<template>
    <div class="back-to-top">
        <a class="dim bw0" href="#top" @click="smoothScroll">
            <span class="fa-layers fa-fw fa-2x">
                <i class="fas fa-circle color-background"></i>
                <i class="fas fa-arrow-alt-circle-up" data-fa-transform="shrink-3"></i>
            </span>
            <!-- <i class="fas fa-arrow-alt-circle-up fa-lg"></i> -->
        </a>
    </div>
</template>

<script>
export default {
  methods: {
    smoothScroll(e) {
      e.preventDefault();
      
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top: 0
      });
    }
  }
}
</script>

<style>
  .back-to-top {
    bottom: 1em;
    position: fixed;
    right: 1em;
  }
</style>
