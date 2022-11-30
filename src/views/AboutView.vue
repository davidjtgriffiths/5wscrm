
 <template>


<div>

</div>







</template>

<script setup>

import { ref, onMounted, computed } from 'vue'




   const props = defineProps(['value'])




const brand = ref()
const model = ref()
const plumbing = ref()
const cost = computed(() => {
return model.price + plumbing.pprice
})

const actual = ref(null)


</script>
