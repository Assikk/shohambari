<template>
<table class="w-full border border-[#E5E7EB] shadow__table rounded-lg">
  <thead class="text-left bg-[#F9FAFB]">
    <tr>
      <th v-for="item in head" :key="item.id" :class="`w-[${item.width}%]`"
      class="uppercase font-medium py-3 text-xs">
        <span class="px-6 text-[#6B7280]">
          {{item.title}}
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(list, index) in body" :key="index">
      <td v-for="item in list" :key="item"
      class="border-t border-[#E5E7EB] py-[26px]">
        <span class="px-6 text-[#6B7280] text-sm">
          {{item}}
        </span>
      </td>
    </tr>
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
    body: { /* Список данных для отображения */
      type: Array
    }
  },
}
</script>
