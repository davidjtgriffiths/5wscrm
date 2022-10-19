
 <template>

  <div class="row">

  <div class="column mt-6">
  <div class="row-span-3">
    <va-select class="mb-4" label="Default" v-model="value" :options="options" />
    <va-select class="mb-4" label="Price" v-model="value" :options="options" text-by="price" />

    <va-input
      class="mb-4"
      v-model="actual"
      :value="value.price"
    />

<va-input class="mb-4">{{ (actual - value.price) }}</va-input>
  </div>

  <div class="row-span-3">
    <va-select class="mb-4" label="Default" v-model="value" :options="options" />
    <va-select class="mb-4" label="Price" v-model="value" :options="options" text-by="price" />

    <va-input
      class="mb-4"
      v-model="actual"
      :value="value.price"
    />

<va-input class="mb-4">{{ (actual - value.price) }}</va-input>
  </div>

  <va-form style="width: 300px;">
    <va-select class="mb-4" label="Default" v-model="value" :options="options" />

    <va-select class="mb-4" label="Text by" v-model="value" :options="options" text-by="textBy" />

    <va-select class="mb-4" label="Text by (function)" v-model="value" :options="options" :text-by="(option) => option.textBy" />

    <va-select class="mb-4" label="value by" v-model="value" :options="options" value-by="valueBy" />

    <va-select class="mb-4" label="value by (function)" v-model="value" :options="options" :value-by="(option) => option.valueBy" />
  </va-form>
</div>
<div class="column mt-6">

<va-form style="width: 300px;">
  <va-select class="mb-4" label="Default" v-model="value" :options="options" />

  <va-select class="mb-4" label="Text by" v-model="value" :options="options" text-by="textBy" />

  <va-select class="mb-4" label="Text by (function)" v-model="value" :options="options" :text-by="(option) => option.textBy" />

  <va-select class="mb-4" label="value by" v-model="value" :options="options" value-by="valueBy" />

  <va-select class="mb-4" label="value by (function)" v-model="value" :options="options" :value-by="(option) => option.valueBy" />
</va-form>
</div>
</div>

</template>

<script setup>

import { ref, onMounted } from 'vue'

const options = [
      {
        text: 'First',
        textBy: 'First text by',
        value: '1',
        valueBy: 'first',
        price: 100,
      },
      {
        text: 'Second',
        textBy: 'Second text by',
        value: '2',
        valueBy: 'second',
        price: 500,
      },
      {
        text: 'Third',
        textBy: 'Third text by',
        value: '3',
        valueBy: 'third',
        price: 200,
      },
    ]
   const props = defineProps(['value'])
const value = ref(options[0])
const actual = ref(null)


</script>
