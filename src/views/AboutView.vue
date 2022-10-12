
 <template>
  <va-navbar>
    <template #left>
      <va-navbar-item>Left</va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item>Center</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item><va-avatar src="https://randomuser.me/api/portraits/women/5.jpg" /></va-navbar-item>
    </template>
  </va-navbar>
  <div class="row">
  <div class="column" style="border: 1px solid var(--va-secondary);">
    <va-sidebar textColor="dark">
      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="dashboard" />
          <!-- User can hide item with css if he wants -->
          <va-sidebar-item-title>Dashboard</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item active>
        <va-sidebar-item-content>
          <va-icon name="request_quote" />
          <va-sidebar-item-title>Quote</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>


      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="add_location" />
          <va-sidebar-item-title>Survey</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="photo_camera" />
          <va-sidebar-item-title>Inspection</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
<!-- Hello tony! -->

      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="inventory" />
          <va-sidebar-item-title>Products</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="payments" />
          <va-sidebar-item-title>Sales</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item>
        <va-sidebar-item-content>
          <va-icon name="settings" />
          <va-sidebar-item-title>Settings</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>


    </va-sidebar>

  </div>
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
