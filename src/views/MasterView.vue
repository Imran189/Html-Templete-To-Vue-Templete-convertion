<template>
     
    <!--================ Start Header Area =================-->
    <HeaderView></HeaderView>
    <!--================ End Header Area =================-->

    <!--================ Start Home Banner Area =================-->
      <router-view></router-view>
    <!--================ Start Newsletter Area =================-->
    <NewsletterVue></NewsletterVue>
    <!--================ End Newsletter Area =================-->

    <!--================Footer Area =================-->
    <FooterView></FooterView>

</template>

<script>
import HeaderView from "../components/frontend/HeaderView.vue";
import FooterView from "../components/frontend/FooterView.vue";
import NewsletterVue from "../components/frontend/NewsLetter.vue";
export default {
    name:"MasterView",

    components: { HeaderView, NewsletterVue, FooterView }
};
</script>

<style>

</style>
