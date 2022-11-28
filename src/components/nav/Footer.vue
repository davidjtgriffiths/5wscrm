<template>
    <!-- Don't think Tailowind is working -->
    <va-navbar fixed bottom color="#ffffff" class="border-solid border-black">
        <template #left>
        <va-navbar-item>Left</va-navbar-item>
        </template>
        <template #center>
        <va-navbar-item>Center</va-navbar-item>
        </template>
        <template #right>
            <va-navbar-item>Right</va-navbar-item>
        </template>
    </va-navbar>
</template>