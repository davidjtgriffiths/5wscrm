<template>
  <TopSideWindow />
</template>

<script setup>
import TopSideWindow from './views/layouts/TopSideWindow.vue'
import { ref, reactive, onMounted, computed } from 'vue'
import { defineComponent } from 'vue';
import { useCatalogueStore } from './/stores/storeCatalogue'
import { useAuthStore } from './/stores/storeAuth'

const catalogueStore = useCatalogueStore()
const authStore = useAuthStore()

onMounted(() => {
    authStore.init()
    catalogueStore.getCatalogue()
    // console.log(catalogueStore.catalogue)
})
</script>
