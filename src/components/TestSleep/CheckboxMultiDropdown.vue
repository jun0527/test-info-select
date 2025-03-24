<script setup>
import Dropdown from "../Common/Dropdown.vue";
import { computed } from "vue";
import _ from "lodash";
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    console.log(props.modelValue);
    const days = _.map(props.modelValue, (day, index) => {
      if (day === "1") {
        return index + 1;
      }
    });
    return _.compact(days);
  },
  set(value) {
    console.log(value);
    let daysText = "";
    props.item.list.forEach((item) => {
      if (value.includes(item.id)) {
        daysText += "1";
      } else {
        daysText += "0";
      }
    });
    console.log(daysText);
    emit("update:modelValue", daysText);
  },
});
const getButtonText = computed(() => {
  return value.value
    ? _.map(
        value.value,
        (data) => _.find(props.item.list, (item) => item.id === data).title
      ).join(", ")
    : "select";
});
console.log(
  _.map(Array(24), (data, index) => ({
    title: `${JSON.stringify(index).padStart(2, "0")}:00`,
  }))
);
</script>
<template>
  <div>
    {{ value }}
    <Dropdown>
      <template #activator>
        <button>{{ getButtonText }}</button>
      </template>
      <ul>
        <li v-for="data in item.list" :key="data.id">
          <input
            type="checkbox"
            v-model="value"
            :value="data.value"
            :id="data.id"
          />
          <label :for="data.id">{{ data }}</label>
        </li>
      </ul>
    </Dropdown>
  </div>
</template>
