<script setup>
import { ref, computed } from "vue";
defineOptions({
  name: "CommonDropdown",
});
const isExpanded = ref(false);
const directionDropdown = ref(null);
const list = ref(null);
const direction = computed(() => {
  const parentHeight = directionDropdown.value?.offsetParent?.offsetHeight;
  const dropdownHeight = directionDropdown.value?.offsetHeight;
  const dropdownTop = directionDropdown.value?.offsetTop;
  const listHeight = list.value?.offsetHeight;
  console.log(parentHeight, dropdownHeight, dropdownTop, listHeight);

  if (parentHeight - dropdownHeight - dropdownTop >= listHeight) {
    console.log("bottom");

    return { top: `${dropdownHeight}px` };
  }
  console.log("top");

  return { bottom: `${dropdownHeight}px` };
  // const { width, height } = directionDropdown.value?.getBoundingClientRect();
  // return { width, height };
});
</script>
<template>
  <div :class="['relative']" ref="directionDropdown">
    <button @click="isExpanded = !isExpanded">
      <slot name="activator" />
    </button>
    <div
      ref="list"
      v-if="isExpanded"
      :class="['absolute', 'z-10']"
      :style="direction"
    >
      <slot />
    </div>
  </div>
</template>
