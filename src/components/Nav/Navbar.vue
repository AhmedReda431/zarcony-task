<template>
  <div class="nav-wrapper">
    <div class="container">
      <div class="nav-menu">
        <div
          class="row justify-content-between align-items-center"
          v-if="showMobileMenu"
        >
          <div class="col-6">
            <div
              class="logo"
              :class="{
                'float-left': $i18n.locale == 'en',
                'float-right': $i18n.locale == 'ar',
              }"
            >
              <router-link to="/" class="logo"> LOGO </router-link>
            </div>
          </div>
          <div class="col-6">
            <span
              :class="{
                'float-right': $i18n.locale == 'en',
                'float-left': $i18n.locale == 'ar',
              }"
            >
              <font-awesome-icon
                icon="fa-solid fa-bars"
                class="fa-2x barIcon"
                v-b-toggle.sidebar-backdrop
              />
            </span>
          </div>
        </div>
        <!-- <div class="nav-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"> -->
        <div class="nav-content" v-if="!showMobileMenu">
          <div
            class="row justify-content-center align-items-center text-center"
          >
            <div class="col-6">
              <div class="logo" >
                <router-link to="/" :class="{
                  'float-left': $i18n.locale == 'en',
                  'float-right': $i18n.locale == 'ar',
                }"> LOGO </router-link>
              </div>
            </div>
            <div class="col-6">
              <SharedNavLinks />
            </div>
            <!-- <div
              class="col-md-3 col-sm-12 d-flex align-items-center justify-content-around"
            >
              <SharedNavSocial />
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="side-menu">
      <b-sidebar
        id="sidebar-backdrop"
        :backdrop-variant="variant"
        backdrop
        shadow
      >
        <div class="px-3 py-2">
          <div class="logo">
            <router-link to="/"> logo </router-link>
          </div>
          <SharedNavLinks />
        </div>
        <div>
          <SharedNavSocial />
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
import SharedNavSocial from "./Social.vue";
import SharedNavLinks from "./Links.vue";
export default {
  data() {
    return {
      showMobileMenu: false,
      variant: "dark",
      lang: localStorage.getItem("lang") || "en",
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    resizeScreen() {
      if (window.innerWidth <= 992) {
        this.showMobileMenu = true;
        // this.$cookiz.set('mobileView', 'mobile')
      } else {
        this.showMobileMenu = false;
        // this.$cookiz.set('mobileView', 'deskTop')
      }
    },
    async logout() {
      await this.$store.dispatch("LogOut");
      localStorage.removeItem("vuex");
      this.$router.push("/login");
    },
    switchLang() {
      if (this.lang === "en") {
        this.lang = "ar";
      } else {
        this.lang = "en";
      }
      localStorage.setItem("lang", this.lang);
      window.location.reload();
    },
  },
  mounted() {
    window.addEventListener("resize", this.resizeScreen);
    window.addEventListener("load", this.resizeScreen);
  },
  components: {
    SharedNavSocial,
    SharedNavLinks,
  },
  created() {
    const locale = localStorage.getItem("lang");
    const browserLanguage = navigator.language.substring(0, 2);
    if (locale) {
      this.$i18n.locale = locale;
    } else if (Object.keys(this.$i18n.messages).includes(browserLanguage)) {
      this.$i18n.locale = browserLanguage;
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/Navbar.scss";
.nav-wrapper{
  background: $main-color;
}
</style>
