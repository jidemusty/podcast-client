<template>
    <div>
        <transition-group name="fade">
            <simple v-for="podcast in podcasts" :podcast="podcast" :key="podcast.id"></simple>
        </transition-group>
        
        <a href="#" class="load-more" v-if="page.hasMore()" @click.prevent="getMorePodcasts">Load older podcasts</a>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Simple from '@/components/podcasts/Simple'

export default {
    components: {
        Simple
    },
    computed: {
        ...mapGetters({
            podcasts: 'podcasts/getPodcasts',
            page: 'podcasts/getPage'
        })
    },
    methods: {
        ...mapActions({
            getPodcasts: 'podcasts/getPodcasts',
            getMorePodcasts: 'podcasts/getMorePodcasts'
        })
    },
    mounted () {
        this.getPodcasts()
    }
};
</script>

<style lang="scss">
    .load-more {
        display: block;
        width: 100%;
        padding: 20px;
        background-color: #FFF;
        text-align: center;
        margin-bottom: 40px;
        text-decoration: none;
        color: inherit;
        font-weight: 500; 
    }
</style>
