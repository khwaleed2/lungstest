<template>
    <div class="admin-panel">
        <navbar />

        <div class="container mt-5">
            <div class="row">
                <div class="col-lg-2 col-md-3">
                    <side-nav />
                </div>
                <div class="col-lg-10 col-md-9">
                    <div class="tab-content" id="v-pills-tabContent">
                        <disclaimer />
                        <settings />
                        <meta-data />
                        <social-share />
                        <admin-settings />
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
import SocialShare from "../../components/admin/SocialShare.vue";
import AdminSettings from "../../components/admin/AdminSettings.vue";

export default {
    name: "admin-panel",
    components: {
        Navbar,
        SideNav,
        Disclaimer,
        MetaData,
        Settings,
        SocialShare,
        AdminSettings
    }
};
</script>

<style lang="scss" scoped></style>
