<template>
    <div class="main-container">
        <nuxt />
    </div>
</template>

<style lang="scss">
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
        color: $foreground;
    }

    header a, .box a {
        text-decoration: none;
    }

    .abril {
        font-family: "Abril Fatface", serif;
    }

    .background-dark {
        background-color: #111111;
    }

    .box {
        background-size: cover;
        border: 1px $foreground solid;
        box-shadow: 2px 2px $foreground;
        position: relative;
    }

    .box:hover {
        box-shadow: 4px 4px $foreground;
        left: -2px;
        position: relative;
        top: -2px;
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

    .main-container {
        max-width: 1080px;
    }

    .menu a:hover {
        text-decoration: underline;
    }

    .template-container {
        min-height: 100vh;
        position: relative;
    }
</style>