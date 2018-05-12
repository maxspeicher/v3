(function(window, document, $) {

    let nerdModeOn = false;

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

    window.toggleNerdMode = function() {
        if (!nerdModeOn) {
            $("head").append($css);
        } else {
            $css.remove();
        }

        nerdModeOn = !nerdModeOn;
    };

    console.log(`
        /*******************************/
        /**                           **/
        /**  window.toggleNerdMode()  **/
        /**                           **/
        /*******************************/
    `)

})(window, document, jQuery);
