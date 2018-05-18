<template>
    <div class="main-container">
        <nuxt />
    </div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Montserrat:200,300,400,600');
    
    $background:             ivory;
    $background-transparent: rgba(17, 17, 17, .33);
    $foreground:             #111111;

    // $background:             navy;
    // $background-transparent: rgba(0, 0, 128, .33);
    // $foreground:             ivory;

    body {
        background-color: $background;
        color: $foreground;
        font-family: Montserrat, sans-serif;
        font-weight: 300;
    }

    a {
        border-bottom: 1px currentColor solid;
        color: $foreground;
        text-decoration: none;
    }

    header a, .box a, .prev-next a, .social-media a {
        border: 0;
        text-decoration: none;
    }

    .menu a:hover {
        border-bottom: 1px currentColor solid;
        text-decoration: none;
    }

    q {
        font: inherit;
        quotes: "“" "”" "‘" "’";
    }

    q:before {
        content: open-quote;
    }

    q:after {
        content: close-quote;
    }

    .abril {
        font-family: "Abril Fatface", serif;
    }

    .background-dark {
        background-color: #111111;
    }

    .box {
        background-color: #fff;
        background-position: center;
        background-size: cover;
        position: relative;
        transition: transform .2s;
    }

    .box:hover {
        transform: scale(1.05);
        // transform: perspective(500px) translateZ(.5em);
    }

    .box-padding {
        padding-top: 100%;
    }

    .box-inner {
        background-color: $background-transparent;
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }

    .center {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .color-background {
        color: $background;
    }

    .color-foreground {
        color: $foreground;
    }

    .color-ivory {
        color: ivory;
    }

    .fancy-list {
        border-left: 1px ivory solid;
        margin-left: .5em;
        padding: 0 0 2em 2em;
        position: relative;
    }

    .fancy-list::before {
        background-color: ivory;
        border: 1px ivory solid;
        border-radius: 100%;
        content: "";
        display: block;
        height: 1em;
        left: calc(-.5em - 1px);
        position: absolute;
        width: 1em;
    }

    .fancy-list:last-child {
        border: 0;
    }

    .menu a:hover {
        text-decoration: underline;
    }

    .separator-thin {
        background-color: $background;
        height: 1px;
        margin: .5em auto;
        max-width: 75%;
        width: 100px;
    }

    .shadow {
        box-shadow: 0 0 5px #000000;
    }

    .template-container-inner {
        margin: 0 auto;
        max-width: 1080px;
        min-height: 100vh;
    }

    /*** Project Template Specific ***/

    .bg-image {
        background-position: center;
        background-size: cover;
        height: 100vh;
        left: 0;
        opacity: .5;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    .gradient {
        bottom: 0px;
        height: 100%;
        left: 0px;
        position: absolute;
        width: 100%;
    }

    .on-top {
        position: relative;
        z-index: 2;
    }
</style>