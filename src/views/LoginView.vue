
 <template>


<div>
Login
</div>







</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/storeAuth';




const props = defineProps(['value'])

const storeAuth = useAuthStore()


const brand = ref()
const model = ref()
const plumbing = ref()
const cost = computed(() => {
return model.price + plumbing.pprice
})

const actual = ref(null)


</script>
