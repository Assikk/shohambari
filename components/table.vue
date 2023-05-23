<template>
<table class="w-full border border-[#E5E7EB] shadow__table rounded-lg">
  <thead class="text-left bg-[#F9FAFB]">
    <tr>
      <th v-for="item in head" :key="item.id"
      class="uppercase font-medium py-3 text-xs"
      :style="`width: ${item.width}%;`">
        <span class="px-6 text-[#6B7280]">
          {{item.title}}
        </span>
      </th>
    </tr>
  </thead>
  <!-- <tbody>
    <tr v-for="(list, index) in body" :key="index">
      <td v-for="item in list" :key="item"
      class="border-t border-[#E5E7EB] py-[26px]">
        <span class="px-6 text-[#6B7280] text-sm">
          {{item}}
        </span>
      </td>
    </tr>
  </tbody> -->
  <tbody>
    <slot name="body"/>
  </tbody>
</table>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    head: { /* Принимает массив, обязательно должен иметь ширину в %, в сумме которую даст 100% */
      type: Array,
      required: true
    },
  },
}
</script>
<style scoped>
tbody tr td {
  border-top: 1px solid #E5E7EB;
  padding: 26px 0;
}
tbody tr td span {
  padding: 0 24px;
  color: #6B7280;
  font-size: 14px;
  line-height: 20px;
}
tbody tr td .status {
  color: inherit;
  padding: 2px 32px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 16px;
}
</style>
