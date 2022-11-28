<template>
    <div class="grid-container">

    <div class="item1">
        <TopNav />
    </div>

    <div class="item2">
        <SideNav />
    </div>

    <div class="item3">
        <router-view />
    </div>

    <div class="item5">
        <MainFooter />
    </div>
</div>

</template>

<script setup>
import TopNav from '../../components/nav/TopNav.vue'
import SideNav from '@/components/nav/SideNav.vue';
import MainFooter from '@/components/nav/Footer.vue';

</script>
