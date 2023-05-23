<template>
  <div class="flex flex-col items-end py-3">
    <div class="flex items-center h-[38px]">
      <div class="flex flex-col justify-center px-[9px] border border-[#D1D5DB] rounded-l-md h-full cursor-pointer">
        <svg fill="#6B7280" width="20" height="20">
          <use xlink:href="#arrowOutlined"/>
        </svg>
      </div>
      <div class="flex flex-col justify-center px-[17px] border border-[#D1D5DB] h-full cursor-pointer hover:border-[#6366F1] hover:bg-[#EEF2FF]" v-for="num in 3" :key="num">
        {{num}}
      </div>
      <div class="flex flex-col justify-center px-[17px] border border-[#D1D5DB] h-full">
        ...
      </div>
      <div class="flex flex-col justify-center px-[17px] border border-[#D1D5DB] h-full cursor-pointer hover:border-[#6366F1] hover:bg-[#EEF2FF]">
        8
      </div>
      <div class="flex flex-col justify-center px-[17px] border border-[#D1D5DB] h-full cursor-pointer hover:border-[#6366F1] hover:bg-[#EEF2FF]">
        9
      </div>
      <div class="flex flex-col justify-center px-[17px] border border-[#D1D5DB] h-full cursor-pointer hover:border-[#6366F1] hover:bg-[#EEF2FF]">
        10
      </div>
      <div class="flex flex-col justify-center px-[9px] border border-[#D1D5DB] border-l-0 rounded-r-md h-full cursor-pointer">
        <svg fill="#6B7280" width="20" height="20" class="rotate-180">
          <use xlink:href="#arrowOutlined"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaginationComponent'
}
</script>
