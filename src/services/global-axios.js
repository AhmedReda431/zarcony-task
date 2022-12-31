import axios from "axios";

import router from "../router/index";

let lang = null;

lang = localStorage.getItem("lang") || "en";


let userExist = localStorage.getItem("userInfo");

const country = localStorage.getItem("country");



let country_parsed = JSON.parse(country);


const getToken = function () {
  if (
    localStorage.getItem("userInfo") &&
    localStorage.getItem("userInfo") != "undefined" &&
    localStorage.getItem("userInfo") != undefined
  ) {
    let hasToken = JSON.parse(localStorage.getItem("userInfo"));
    localStorage.removeItem("guest-id");
    return hasToken ? `Bearer ${hasToken.access_token}` : "";
  }
  return "";
};

const getCurrency = function () {
  if (country) {
    const currencyId = localStorage.getItem("currencyId");
    if(currencyId){
      return currencyId ? currencyId : country.currencies[0].id || 3
    }else{
      return country.default_currency ? country.default_currency.id : 3
    }
  }
  return "";
}

export { getToken };
// let guestUser = null;
let guestUser = localStorage.getItem("guest-id");

let checkGuest = function () {
  if (localStorage.getItem("userInfo")) {
    localStorage.removeItem("guest-id");
  } else {
    return guestUser ? guestUser : "";
  }
};






export { checkGuest };
const globalAxios = axios.create({
  baseURL: process.env.VUE_APP_AXSIOS_LINK,
  headers: {
    Authorization: getToken(),
    "Accept-Language": lang,
    "guest-id": checkGuest(),
    "currency-id": getCurrency(),
    "country-id": country_parsed ? (country_parsed.id ? country_parsed.id : null) : ''
  },
});


globalAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // console.log("error", error);
    if (
      (error.response.status == 403 && userExist) ||
      (error.response.status == 401 && userExist)
    ) {
      userExist.type === "buyer"
        ? router.push(`/b2b-login`) //routing changed  from b2b-login to /b2b-login
        : router.push({ path: '/', query: { force_login: 'true' } });
    }

    return Promise.reject(error);
  }
);

export default globalAxios;
