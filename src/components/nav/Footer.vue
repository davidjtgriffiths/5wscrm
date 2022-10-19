<template>
    <va-navbar>
        <template #left>
        <va-navbar-item>Left</va-navbar-item>
        </template>
        <template #center>
        <va-navbar-item>Center</va-navbar-item>
        </template>
        <template #right>
        <va-badge left text="99+" class="mr-4">
            <va-navbar-item><va-avatar src="https://randomuser.me/api/portraits/women/5.jpg" /></va-navbar-item>
        </va-badge>
        </template>
    </va-navbar>
</template>