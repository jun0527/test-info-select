<script setup>
import { ref } from "vue";
defineOptions({
  name: "CommonDropdown",
});
const isExpanded = ref(false);
</script>
<template>
  <div :class="['relative']">
    <button
      @click="isExpanded = !isExpanded"
      :class="[
        'border border-[#000000]',
        'p-[5px] rounded-[5px]',
        'hover:bg-[#000000] hover:text-[#ffffff]',
      ]"
    >
      <slot name="activator" />
    </button>
    <div
      v-if="isExpanded"
      :class="[
        'absolute bg-[#ffffff]',
        'border border-[#000000]',
        'p-[5px] rounded-[5px]',
      ]"
    >
      <slot />
    </div>
  </div>
</template>
