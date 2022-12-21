
 <template>

<div>
    Login
    <div class="wsPrice">
        <va-input
            v-model="credentials.email"
            label="email"
        />
    </div>

    <div class="profit">
        <va-input
            v-model="credentials.password"
            label="password"
        />
    </div>
    <va-button
        @click="onSubmit"
    >
        Button
    </va-button>
</div>







</template>

<script setup>

import { ref, onMounted, computed, reactive } from 'vue'
import { useAuthStore } from '@/stores/storeAuth';




const props = defineProps(['value'])

const storeAuth = useAuthStore()


const brand = ref()
const model = ref()
const credentials = reactive({
        email: '',
        password: ''
})
const cost = computed(() => {
return model.price + plumbing.pprice
})

const actual = ref(null)

const onSubmit = () => {
    storeAuth.signInUser(credentials)

}


</script>
