<template>
  <ul
    class="nav-items"
    :class="{
      'float-right': $i18n.locale == 'en',
      'float-left': $i18n.locale == 'ar',
    }"
  >
    <li data-aos="fade-right">
      <router-link to="/">{{ $t("home") }}</router-link>
    </li>
    <li data-aos="fade-right">
      <router-link to="/">{{ $t("packages") }}</router-link>
    </li>
    <li data-aos="fade-right">
      <router-link to="/">{{ $t("commmonQ") }}</router-link>
    </li>
    <li data-aos="fade-right">
      <router-link to="/">{{ $t("login") }}</router-link>
    </li>
    <li data-aos="fade-right">
      <span class="cart"
        ><font-awesome-icon icon="fa-solid fa-cart-shopping"
      /></span>
    </li>
    <li>
      <div class="lang">
        <button @click="switchLang()" v-if="lang == 'ar'">
          <font-awesome-icon icon="fa-solid fa-globe" /> En
        </button>
        <button @click="switchLang()" v-if="lang == 'en'">
          <font-awesome-icon icon="fa-solid fa-globe" /> ar
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      lang: localStorage.getItem("lang") || "en",
    };
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/Navbar.scss";
.navbar-links li.navbar-dropdown .dropdown {
  padding: 20px;
  width: 200px;
}
</style>
