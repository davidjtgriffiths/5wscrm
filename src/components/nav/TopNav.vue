<template>
    <va-navbar color="#25621F">
        <template #left>
        <va-navbar-item>Left</va-navbar-item>
        </template>
        <template #center>
        <va-navbar-item>Center</va-navbar-item>
        </template>
        <template #right>
            <va-button
                v-if="storeAuth.user.uid"
                @click="storeAuth.logoutUser()"
            >
                Logout {{ storeAuth.user.email }}
            </va-button>
            <va-button
                v-else
                @click="storeAuth.logoutUser()"
                >
                <!-- TODO: change this ^ to redirect to login page  -->
                Login
            </va-button>
        </template>
    </va-navbar>
</template>

<script setup>

    import { useAuthStore } from '@/stores/storeAuth';
    const storeAuth = useAuthStore()




</script>