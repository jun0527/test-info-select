<script setup>
defineOptions({
  name: "HomePage",
});
const routes = [
  {
    name: "TestSelect",
    to: "/test_select",
  },
  {
    name: "TestSleep",
    to: "/test_sleep",
  },
];
</script>

<template>
  <div :class="['p-[10px]']">
    <h2 :class="['text-[20px] font-bold', 'mb-[10px]']">home</h2>
    <ul>
      <li
        v-for="route in routes"
        :key="route.name"
        :class="['h-[30px]', 'mb-[10px]']"
      >
        <router-link
          :to="route.to"
          :class="[
            'border border-[#000000]',
            'p-[5px] rounded-[5px]',
            'hover:bg-[#000000] hover:text-[#ffffff]',
          ]"
          >{{ route.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
