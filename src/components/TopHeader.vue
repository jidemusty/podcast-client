<template>
    <header class="topheader">
        <div class="container">
            <!-- <p class="welcome">
                Oh, hi. <strong>Choose something to play.</strong>
            </p> -->
            <player></player>
        </div>
    </header>
</template>

<script>
import Player from '@/components/player/Player'

export default {
    components: {
        Player
    }
};
</script>

<style lang="scss">
    @import '~@/assets/sass/variables';

    .welcome {
        font-size: 1.1em;
        text-align: center;
    }

    .topheader {
        display: flex;
        align-items: center;
        width: 100%;
        height: $header-height;
        background-color: #FFF;
        position: fixed;
        top: 0; left: 0;
        padding: 20px;
        z-index: 2;
    }
</style>
