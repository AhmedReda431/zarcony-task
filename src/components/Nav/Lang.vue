<template>
    <div class="lang">
        <router-link :to="switchLocalePath('ar')" class="ar" v-if="$i18n.locale == 'en'">
            العربية</router-link>
        <router-link :to="switchLocalePath('en')" class="en" v-if="$i18n.locale == 'ar'">
            English</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>