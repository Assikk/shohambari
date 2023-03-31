<template>
  <section class="pt-5 pb-[26px]">
    <div class="grid grid-cols-3 gap-5">
      <NuxtLink :to="block.link" v-for="block in blocks" :key="block.id"
      class="shadow rounded-lg p-6 flex items-center gap-5">
        <div class="relative w-12 h-12 bg-[#6366F1] rounded-md">
          <svg fill="none" stroke="white" width="24" height="24" class="center">
            <use :xlink:href="`#${block.icon}`"/>
          </svg>
        </div>
        <div>
          <p class="text-[#6B7280] text-sm font-medium">{{block.title}}</p>
          <p class="text-[#111827] font-semibold text-2xl">{{block.value}}</p>
        </div>
      </NuxtLink>
    </div>
    <h1 class="my-6 text-[24px] leading-5 font-medium">
      Список пациентов на сегодня
    </h1>
    <Table :head="tableHead" :body="tableBody"/>
    <div class="mt-8">
      pagination
    </div>
  </section>
</template>
<script>
import Table from '@/components/table.vue'
export default {
  name: 'MainPage',
  components: {
    Table
  },
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: 'Кол-во амбулаторных пациентов',
          value: 23,
          icon: 'twoPerson',
          link: '/main'
        },
        {
          id: 2,
          title: 'Кол-во стационарных пациентов',
          value: 48,
          icon: 'library',
          link: '/main'
        },
        {
          id: 3,
          title: 'Общее кол-во пациентов',
          value: 71,
          icon: 'thirdPerson',
          link: '/main'
        },
        {
          id: 4,
          title: 'Заявки на бронирование',
          value: 4,
          icon: 'book',
          link: '/main'
        },
        {
          id: 5,
          title: 'Врачи онлайн',
          value: 3,
          icon: 'form',
          link: '/main'
        },
        {
          id: 6,
          title: 'Свободные комнаты',
          value: 8,
          icon: 'key',
          link: '/main'
        },
      ],
      tableHead: [
        {
          id: 1,
          title: 'id',
          width: '10'
        },
        {
          id: 2,
          title: 'фио',
          width: '30'
        },
        {
          id: 3,
          title: 'тип клиента',
          width: '15'
        },
        {
          id: 4,
          title: 'номер комнаты',
          width: '15'
        },
        {
          id: 5,
          title: 'дата въезда',
          width: '15'
        },
        {
          id: 6,
          title: 'дата выезда',
          width: '15'
        },
      ],
      tableBody: [
        {
          id: '0025',
          name: 'Саидов Умар',
          type_client: 'Стационарный',
          room_number: '10',
          date_entry: '10/10/2023',
          date_exit: '11/10/2023'
        },
        {
          id: '0025',
          name: 'Саидов Умар',
          type_client: 'Стационарный',
          room_number: '10',
          date_entry: '10/10/2023',
          date_exit: '11/10/2023'
        },
        {
          id: '0025',
          name: 'Саидов Умар',
          type_client: 'Стационарный',
          room_number: '10',
          date_entry: '10/10/2023',
          date_exit: '11/10/2023'
        },
      ]
    }
  }
}
</script>
<style scoped>
.shadow {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
}
.shadow__table {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
}
</style>
