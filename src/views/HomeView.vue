<template>
  <div class="home">
    <div class="package text-left">
      <div class="container">
        <h1
          :class="{
            'text-right': $i18n.locale == 'ar',
            'text-left': $i18n.locale == 'en',
          }"
        >
          {{ $t("package_company_name") }}
        </h1>
        <ul class="d-flex">
          <li class="">
            <router-link to="/" class="text-white">{{ $t("home") }} /</router-link>
          </li>
          <li class="">
            <router-link to="/" class="text-white">{{
              $t("companyName")
            }} /</router-link>
          </li>
          <li class="">
            <router-link to="/" class="text-white">{{
              $t("packageName")
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <section class="packages-data">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 my-2">
            <div class="stc-package">
              <h2 class="h1">STC</h2>
              <p>{{ $t("package_company_name") }}</p>
              <p class="text-dim">
                {{ $t("packagePenifit") }}
              </p>
              <h3><b class="h1">90</b> {{ $t("riyal") }}</h3>
              <p class="text-dim">+ {{ $t("extraMony") }}</p>
              <button
                class="btn btn-light bg-white text-info btn-block subscribe-btn"
              >
                {{ $t("subscribeNow") }}
              </button>
              <div
                class="options-btns row mt-4 justify-content-center align-items-center text-center"
              >
                <div class="col-md-6 col-sm-12">
                  <button class="conpare">
                    <font-awesome-icon icon="fa-solid fa-code-compare" />
                    {{ $t("comparePAckages") }}
                  </button>
                </div>
                <div class="col-md-6 col-sm-12">
                  <button class="conpare">{{ $t("packagesCard") }}</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 my-2">
            <div class="package-prop">
              <h3 class="title">{{ $t("packageProp") }}</h3>
              <div class="loopNow" v-for="(x, index) in 2" :key="index">
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Signal.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("network") }}</h5>
                      <span class="package-title">20 {{ $t("giga") }}</span>
                    </div>
                  </div>
                </div>
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Phone_Rotate.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("localMinutes") }}</h5>
                      <span class="package-title">{{ $t("unlimited") }}</span>
                    </div>
                  </div>
                </div>
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Group 639.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("validity") }}</h5>
                      <span class="package-title">90 {{ $t("day") }}</span>
                    </div>
                  </div>
                </div>
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Users.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("socialContact") }}</h5>
                      <span class="package-title">{{ $t("unlimited") }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="notes my-3">
              <div class="">
                <span class="notes-text"
                  ><b>{{ $t("notes") }}</b></span
                >
                <p class="notes-text">
                  {{ $t("notesData") }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 my-2">
            <div class="package-prop">
              <h3 class="title">{{ $t("suitability") }}</h3>
              <div class="package-info">
                <div class="media">
                  <img
                    class="mr-3"
                    src="@/assets/images/packagesData/chip.png"
                    alt="Generic placeholder image"
                  />
                  <div class="media-body">
                    <h5 class="mt-0">{{ $t("simType") }}</h5>
                    <span class="package-title">{{ $t("fatora") }} </span>
                  </div>
                </div>
              </div>
              <div class="package-info">
                <div class="media">
                  <img
                    class="mr-3"
                    src="@/assets/images/packagesData/Group 637.png"
                    alt="Generic placeholder image"
                  />
                  <div class="media-body">
                    <h5 class="mt-0">{{ $t("suitable") }}</h5>
                    <span class="package-title">{{ $t("chip") }}</span>
                  </div>
                </div>
              </div>
              <div class="package-info">
                <div class="media">
                  <img
                    class="mr-3"
                    src="@/assets/images/packagesData/chip.png"
                    alt="Generic placeholder image"
                  />
                  <div class="media-body">
                    <h5 class="mt-0">{{ $t("suitable") }}</h5>
                    <span class="package-title">{{ $t("dualShip") }}</span>
                  </div>
                </div>
              </div>
              <div class="package-info">
                <div class="media">
                  <img
                    class="mr-3"
                    src="@/assets/images/packagesData/pin-1.png"
                    alt="Generic placeholder image"
                  />
                  <div class="media-body">
                    <h5 class="mt-0">{{ $t("cities") }}</h5>
                    <span class="package-title">{{ $t("actalCities") }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="sectionSimilarPackages">
      <div class="container">
        <h2 class="h1 holdAfter">
          {{ $t("similarPackages") }}
        </h2>
        <div class="row my-5">
          <div class="col-md-4 col-sm-12 my-3" v-for="(x, index) in 3" :key="index">
            <div class="packageName first">
              <div class="package-data-holder">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <h5>
                      <b>{{ $t("package_company_name") }}</b>
                    </h5>
                  </div>
                  <div class="col-md-6 col-sm-12">package logo</div>
                </div>
              </div>
              <div class="package-data">
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Signal.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("network") }}</h5>
                      <span class="package-title">20 {{ $t("giga") }}</span>
                    </div>
                  </div>
                </div>
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Phone_Rotate.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("localMinutes") }}</h5>
                      <span class="package-title">{{ $t("unlimited") }}</span>
                    </div>
                  </div>
                </div>
                <div class="package-info">
                  <div class="media">
                    <img
                      class="mr-3"
                      src="@/assets/images/packagesData/Group 639.png"
                      alt="Generic placeholder image"
                    />
                    <div class="media-body">
                      <h5 class="mt-0">{{ $t("validity") }}</h5>
                      <span class="package-title">90 {{ $t("day") }}</span>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-6 col-sm-12">
                    <h3 class="package-title">
                      <b class="h1">90</b> {{ $t("riyal") }}
                    </h3>
                    <p class="text-dim">+ {{ $t("extraMony") }}</p>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <button class="btn btn-block smallPackageButton">
                      {{ $t("packageDetails") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="compareFloatingButton">
      <button class="btn floating-btn"><font-awesome-icon icon="fa-solid fa-code-compare" /></button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.package {
  background: $main-color;
  color: #fff;
  text-align: left;
  padding: 5% 0;
}
section {
  padding: 4% 0;
}
.media {
  display: flex;
  align-items: center;
  .media-body {
    margin: 0 20px;
  }
  margin: 20px 0;
}
.package-title {
  color: $main-color;
  font-size: 20px;
  font-weight: bold;
}
.packages-data {
  .stc-package {
    background: url("../assets/images/stc.jpg") no-repeat center center;
    background-size: cover;
    color: #fff;
    border-radius: 20px;
    padding: 25px;
    .subscribe-btn {
      background: #fff;
      color: $main-color !important;
      width: 100%;
      padding: 15px;
      font-size: 20px;
    }
  }
  .options-btns {
    button {
      background: transparent;
      color: #fff;
      border: 1px solid;
      padding: 13px 0;
      border-radius: 8px;
      width: 100%;
    }
  }

  .package-prop {
    padding: 20px;
    box-shadow: 0px 3px 16px #4766b633;
    border-radius: 23px;
  }

  .notes-text {
    color: #00105c;
  }
}
.sectionSimilarPackages {
  background: #f9f9fb;
  .holdAfter {
    position: relative;
    display: inline-block;
    font-weight: bold;
    color: $main-color;
    z-index: 1;
    &::after {
      position: absolute;
      content: "";
      background: #bbe54a;
      height: 6px;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 10px;
      z-index: -1;
    }
  }
  .package-data {
    padding: 20px;
    box-shadow: 0px 3px 16px rgb(71 102 182 / 20%);
    border-radius: 23px;
    background: #fff;
    margin-top: -50px;
    z-index: 9 !important;
    position: relative;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
  .package-data-holder {
    background: transparent
      linear-gradient(292deg, #502c8467 0%, #ffffff24 100%) 0% 0% no-repeat
      padding-box;
    box-shadow: 15px 15px 50px #075a2e26;
    border: 1px solid #0000000d;
    border-radius: 18px;
    opacity: 0.9;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    position: relative;
    padding: 20px;
    z-index: 1;
    border-radius: 20px 20px 50px 50px;
    min-height: 200px;
    min-height: 150px;
    text-align: center;
  }
  .smallPackageButton {
    background: #e2fdff;
    color: $main-color;
    border: 2px solid $main-color;
  }
}
.compareFloatingButton{
  .floating-btn{
    position: fixed;
    right: 50px;
    bottom: 50px;
    background: $main-color;
    color: #fff;
    border-radius: 50%;
    border: none;
    width: 50px;
    height: 50px;
    line-height: 50px;
    padding: 0;
    margin: 0;
    z-index: 99;
  }
}
</style>
