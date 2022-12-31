<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!-- end col-10 -->
          <div class="col-md-3 col-sm-12">
            <div class="work-with-us mb-5">
              <router-link to="/" class="logo"> logo </router-link>
            </div>

            <div class="social mb-3">
              <span class=" icon">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </span>

              <span class="icon">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </span>

              <span class="icon">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </span>
            </div>
            <p class="text-dim">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate sunt labore nemo libero, dolores adipisci saepe sequi
              at, quos fugiat praesentium magnam ullam nesciunt, impedit
              consequuntur perspiciatis unde enim officia.
            </p>
          </div>
          <!-- end col-4 -->

          <!-- end col-4 -->
          <div class="col-md-3 col-sm-12">
            <h5 class="italic">{{ $t("important_links") }}</h5>
            <ul class="nav-items footer-links">
              <li data-aos="fade-right">
                <router-link to="/" class="text-white">{{
                  $t("home")
                }}</router-link>
              </li>
              <li data-aos="fade-right">
                <router-link to="/" class="text-white">{{
                  $t("packages")
                }}</router-link>
              </li>
              <li data-aos="fade-right">
                <router-link to="/" class="text-white">{{
                  $t("commmonQ")
                }}</router-link>
              </li>
              <li data-aos="fade-right">
                <router-link to="/" class="text-white">{{
                  $t("siteMap")
                }}</router-link>
              </li>
            </ul>
          </div>
          <!-- end col-4 -->
          <div class="col-md-3 col-sm-12">
            <h5 class="italic"></h5>
            <div class="some-data">
              <ul class="nav-items footer-links">
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("policy")
                  }}</router-link>
                </li>
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("useRules")
                  }}</router-link>
                </li>
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("electonic")
                  }}</router-link>
                </li>
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("blog")
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- <div class="col-12"></div> -->
          <!-- end col-12 -->
          <div class="col-md-3 col-sm-12">
            <h5 class="italic"></h5>
            <div class="some-data">
              <ul class="nav-items footer-links">
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("contactUs")
                  }}</router-link>
                </li>
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("userRights")
                  }}</router-link>
                </li>
                <li data-aos="fade-right">
                  <router-link to="/" class="text-white">{{
                    $t("complains")
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- end col-12 -->
        </div>
        <div class="my-1">
          <hr />
        </div>
        <p class="text-gray text-center">
          © {{ $t('footerRight') }}
        </p>
        <!-- new change -->
        <!-- end row -->
      </div>
      <!-- end container -->
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: $main-color no-repeat 50% -3%;
  padding: 5% 0 5px;
  color: #fff;
  background-size: cover;

  .form-holder {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    .emil-input {
      background: #bfd9d7;
      color: #333;
      padding: 26px 10px;
      border: none;
      box-shadow: none;
      outline: none;
    }

    button {
      background: $main-color;
      color: #fff;
      border: none;
      outline: none;
      box-shadow: none;
      border-radius: 0 5px 5px 0;
      font-size: 14px;
      padding: 10px;
    }
  }
}

.footer-links li {
  line-height: 45px !important;
}
.footer-links {
  @media (max-width: 992px) {
    padding: 0 !important;
  }
}

.icon {
  color: #fff;
  background: #13246d;
  padding: 15px;
  border-radius: 50%;
  margin: 0 5px;

}
address {
  p {
    line-height: 15px;
  }
}
.col-md-3 , .col-sm-12 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
