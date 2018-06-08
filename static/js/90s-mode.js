(function(window, document, $) {

    let ninetiesModeOn = false;

    const $css = $(`<style type="text/css" id="nerd-css">
      body, .template-container {
        background-color: navy !important;
        color: gold !important;
        font-family: "Courier New", monospace !important;
      }
    
      a, .template-container a {
        color: gold !important;
      }

      .gradient {
        background-image: linear-gradient(rgba(0, 0, 128, 0.0) 30%, rgb(0, 0, 128, 1.0)) !important;
      }
    </style>`);

    window.toggle90sMode = function() {
        if (!ninetiesModeOn) {
            $("head").append($css);
        } else {
            $css.remove();
        }

        ninetiesModeOn = !ninetiesModeOn;
    };

    console.log(`
        /******************************/
        /**                          **/
        /**  window.toggle90sMode()  **/
        /**                          **/
        /******************************/
    `)

})(window, document, jQuery);
