<template>
    <div class="admin-panel">
        <navbar />

        <div class="container mt-5">
            <div class="row">
                <div class="col-2">
                    <side-nav />
                </div>
                <div class="col-10">
                    <div class="tab-content" id="v-pills-tabContent">
                        <disclaimer />
                        <settings />
                        <meta-data />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Disclaimer from "../../components/admin/Disclaimer.vue";
import MetaData from "../../components/admin/MetaData.vue";
import Settings from "../../components/admin/Settings.vue";
import Navbar from "../../components/admin/layout/Navbar.vue";
import SideNav from "../../components/admin/layout/SideNav.vue";

export default {
    name: "admin-panel",
    components: {
        Navbar,
        SideNav,
        Disclaimer,
        MetaData,
        Settings
    }
};
</script>

<style lang="scss" scoped></style>
