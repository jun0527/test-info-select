<script setup>
import CheckboxMultiDropdown from "../components/TestSleep/CheckboxMultiDropdown.vue";
import { reactive } from "vue";
import TestDirectionDropdownList from "../components/TestDirectionDropdownList/index.vue";
const setting = {
  list: [
    {
      id: 1,
      title: "monday",
      value: 1,
    },
    {
      id: 2,
      title: "tuesday",
      value: 2,
    },
    {
      id: 3,
      title: "wednesday",
      value: 3,
    },
    {
      id: 4,
      title: "thursday",
      value: 4,
    },
    {
      id: 5,
      title: "friday",
      value: 5,
    },
    {
      id: 6,
      title: "saturday",
      value: 6,
    },
    {
      id: 7,
      title: "sunday",
      value: 7,
    },
  ],
};
const data = reactive({
  sleep: {
    day: "0000001",
  },
});
</script>
<template>
  <div :class="['p-[10px]']">
    <h2 :class="['text-[20px] font-bold', 'mb-[10px]']">TestSleep</h2>
    <div>
      <CheckboxMultiDropdown
        v-model="data.sleep.day"
        :item="setting"
        :class="['mb-[10px]']"
      />
      {{ data }}
    </div>
    <div>
      <TestDirectionDropdownList />
    </div>
  </div>
</template>
