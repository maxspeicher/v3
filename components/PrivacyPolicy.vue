<template>
  <a href="https://www.iubenda.com/privacy-policy/16529602" class="iubenda-white iubenda-embed " title="Privacy Policy">Privacy Policy</a>
</template>

<script>
export default {
  mounted () {
    this.$nextTick(() => {
        const existingScript = document.querySelector("[src='https://cdn.iubenda.com/iubenda.js']");

        if (existingScript) {
            existingScript.remove();
        }

        (function(w,d) {
            var loader = function() {
                var s = d.createElement("script"),
                tag = d.getElementsByTagName("script")[0];
                
                s.src = "https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s, tag);
            };

            loader();
            
        })(window, document);
    });
  }
}
</script>
