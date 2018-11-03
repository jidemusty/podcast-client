<template>
    <div>
        <transition-group name="fade">
            <simple></simple>
        </transition-group>
        
        <a href="#" class="load-more">Load older podcasts</a>
    </div>
</template>

<script>
import Simple from '@/components/podcasts/Simple'

export default {
    components: {
        Simple
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
