<template>
    <va-sidebar hoverable minimizedWidth="64px" textColor="dark" color="#BA3232">
        <va-sidebar-item>
        <va-sidebar-item-content>
            <va-icon name="dashboard" />
            <va-sidebar-item-title>Dashboard</va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item active active-color="warning">
        <va-sidebar-item-content>
            <va-icon name="people" />
            <va-sidebar-item-title>
                <router-link to="/">Customers</router-link>
            </va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
        <va-sidebar-item-content>
            <va-icon name="request_quote" />
            <va-sidebar-item-title>
                <router-link to="/quote">Quote</router-link>
            </va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
        <va-sidebar-item-content>
            <va-icon name="photo_camera" />
            <va-sidebar-item-title>Inspection</va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
        <va-sidebar-item-content>
            <va-icon name="videocam" />
            <va-sidebar-item-title>Testimonials</va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
        <va-sidebar-item-content>
            <va-icon name="square_foot" />
            <va-sidebar-item-title>Specs</va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

        <va-sidebar-item>
        <va-sidebar-item-content>
            <va-icon name="settings" />
            <va-sidebar-item-title>Settings</va-sidebar-item-title>
        </va-sidebar-item-content>
        </va-sidebar-item>

    </va-sidebar>
</template>
