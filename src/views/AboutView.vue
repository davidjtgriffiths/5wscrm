
 <template>


<div>
  {{ quoteLines.database.company[0].category[0].name }}
</div>

<!-- <div v-for="cardMachine in quoteLines.database.company[0].category[0].cardMachine"> -->
<div v-for="cardMachine in quoteLines.database.company[0].category[0].merchandising">
  name          {{ cardMachine.description }}<br>
  array          {{ cardMachine }}
</div>

<div style="max-width: 300px;">
    <va-select v-model="value" :textBy="name" :options="quoteLines.database.company[0].category[0].cardMachine.name" />
    xxxxxxx {{ quoteLines.getUserById(1) }}

    yyyyyyyyyy {{ quoteLines.category(dave) }}
  </div>






</template>

<script setup>

import { ref, onMounted, computed } from 'vue'
import { useStoreQuoteLines } from "../stores/storeQuoteLines.js";



   const props = defineProps(['value'])
   const quoteLines = useStoreQuoteLines();
   console.log('xxx', quoteLines.getUserById)


const brand = ref()
const model = ref()
const plumbing = ref()
const cost = computed(() => {
return model.price + plumbing.pprice
})

const actual = ref(null)


</script>
