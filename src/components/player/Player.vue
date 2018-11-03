<template>
    <div class="player">
        <div class="player__header">
            <span>Now playing</span>: {{ podcast.title }}
        </div>
        <audio controls autoplay ref="player" class="player__audio">
            <source type="audio/mp3" v-if="podcast.files.mp3" :src="podcast.files.mp3"></source>
            <source type="audio/ogg" v-if="podcast.files.ogg" :src="podcast.files.ogg"></source>
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
export default {
    props: [
        'podcast'
    ],
    watch: {
        podcast () {
            this.$refs.player.load()
        }
    }
};
</script>

<style lang="scss">
    .player {
        width: 100%;

        &__audio {
            width: 100%;
        }

        &__header {
            font-weight: 500;
            margin-bottom: 20px;

            span {
                font-weight: 800;
            }
        }
    }
</style>
