<script setup>
import DirectionDropdown from "../Common/DirectionDropdown.vue";
defineOptions({
  name: "TestDirectionDropdownList",
});
const list = [
  {
    id: 1,
    title: "Item 1",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
      {
        id: 2,
        title: "2",
      },
    ],
  },
  {
    id: 2,
    title: "Item 2",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
      {
        id: 2,
        title: "2",
      },
    ],
  },
  {
    id: 3,
    title: "Item 3",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
    ],
  },
  {
    id: 4,
    title: "Item 4",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
    ],
  },
  {
    id: 5,
    title: "Item 5",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
    ],
  },
  {
    id: 6,
    title: "Item 6",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
    ],
  },
  {
    id: 7,
    title: "Item 7",
    type: "dropdown",
    list: [
      {
        id: 1,
        title: "1",
      },
    ],
  },
];
</script>
<template>
  <ul
    :class="[
      'relative',
      'w-[200px] h-[200px] overflow-y-scroll',
      'border border-black',
    ]"
  >
    <li
      v-for="item in list"
      :key="item.id"
      :class="['flex', 'items-center', 'mb-[4px]']"
    >
      {{ item.title }}
      <DirectionDropdown>
        <template #activator>
          <div
            :class="[
              'w-[80px] h-[28px]',
              'bg-black text-white',
              'rounded-[5px]',
            ]"
          >
            {{ item.title }}
          </div>
        </template>
        <template #default>
          <ul
            :class="[
              'w-[80px] bg-white',
              'rounded-[5px]',
              'border border-black',
            ]"
          >
            <li v-for="item in item.list" :key="item.id">
              {{ item.title }}
            </li>
          </ul>
        </template>
      </DirectionDropdown>
    </li>
  </ul>
</template>
