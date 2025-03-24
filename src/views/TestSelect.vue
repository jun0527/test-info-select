<script setup>
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import moment from "moment-timezone";
import { countries } from "countries-list";
import { getNames, getData } from "country-list";
import worldCountries from "world-countries";
import { DateTime } from "luxon";

// import countries from "i18n-iso-countries";
// import en from "i18n-iso-countries/langs/en.json";
// import zhTW from "i18n-iso-countries/langs/zh-TW.json";
import { ref } from "vue";
// countries.registerLocale(en);
// countries.registerLocale(zhTW);
const phone = ref("");
const timezones = moment.tz.names();
// const zones = DateTime.now().setZone("Asia/Taipei").offset / 60;
const newZones = timezones.map((zone) => {
  const offset = DateTime.now().setZone(zone).toFormat("ZZ");
  return {
    name: zone,
    offset: offset,
  };
});
console.log(newZones);

console.log(timezones);
console.log(countries);
console.log(worldCountries);
// const countryNamesInChinese = Object.keys(countries).map(
//   (code) => countries[code].name["zh-TW"]
// );
// console.log(countryNamesInChinese);
// console.log(countries.getNames("en"));
// console.log(countries.getNames("zhTW"));
console.log(getNames());
console.log(getData());
// const countryNamesInTraditionalChinese = Object.keys(countries).map(
//   (code) => countries[code].name["zh"]
// );
// console.log(countryNamesInTraditionalChinese);
</script>
<template>
  <div>
    <div>select</div>
    <!-- Tel Input -->
    <vue-tel-input v-model="phone"></vue-tel-input>
  </div>
</template>
