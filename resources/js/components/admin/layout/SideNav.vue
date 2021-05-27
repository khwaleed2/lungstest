<template>
    <div
        class="nav flex-md-column justify-content-center mb-4 nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
    >
        <template v-for="(item, index) in navList">
            <a
                :key="index"
                class="nav-link"
                :class="{ active: activePage === item.slug }"
                :id="`v-pills-${item.slug}-tab`"
                data-toggle="pill"
                :href="`#v-pills-${item.slug}`"
                role="tab"
                :aria-controls="`v-pills-${item.slug}`"
                aria-selected="true"
                @click="current(item.slug)"
                >{{ item.name }}</a
            >
        </template>
    </div>
</template>

<script>
export default {
    name: "side-nav",

    data() {
        return {
            activePage: localStorage.getItem("cPage") || "disclaimer",
            navList: [
                {
                    slug: "disclaimer",
                    name: "Disclaimer"
                },
                {
                    slug: "settings",
                    name: "App Settings"
                },
                {
                    slug: "metaData",
                    name: "Meta Data"
                },
                {
                    slug: "socialShare",
                    name: "Social Share"
                },
                {
                    slug: "adminSettings",
                    name: "Admin Settings"
                }
            ]
        };
    },

    methods: {
        current(e) {
            localStorage.setItem("cPage", e);
        }
    }
};
</script>
