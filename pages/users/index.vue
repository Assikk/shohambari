<template>
  <div class="mt-8">
    <div class="flex items-center gap-6">
      <Search
      v-model="searchText"
      @search="searchUsers"
      placeholder="Введите ID, номер телефона или серию паспорта"/>
      <Button small
      @click="$router.push('/users/add')">
        <template #prev-icon>
          <svg fill="white" width="21" height="20">
            <use xlink:href="#plus"/>
          </svg>
        </template>
        Добавить
      </Button>
    </div>
    <Table :head="tableHead" class="my-6">
      <template #body>
        <tr v-for="(list, index) in tableBody" :key="index">
          <td>
            <span>
                {{list.name}}
            </span>
          </td>
          <td>
            <span>
              {{list.phone}}
            </span>
          </td>
          <td>
            <span>
              {{list.email}}
            </span>
          </td>
          <td>
            <span>
              {{list.post}}
            </span>
          </td>
          <td>
            <span class="status"
            :class="list.statusId == 1 ? 'bg-[#D1FAE5] text-[#065F46]' : list.statusId == 2 ? 'bg-[#FEE2E2] text-[#991B1B]' : ''">
              {{list.status}}
            </span>
          </td>
          <td>
            <svg fill="none" stroke="#121212" width="16" height="16" class="cursor-pointer"
            @click="$router.push(`/users/${list.id}`)">
              <use xlink:href="#edit"/>
            </svg>
          </td>
        </tr>
      </template>
    </Table>
    <Pagination/>
  </div>
</template>
<script>
import Search from '@/components/search.vue'
import Button from '@/components/button.vue'
import Table from '@/components/table.vue'
import Pagination from '@/components/pagination.vue'
export default {
  name: 'UsersPage',
  components: {
    Search,
    Button,
    Table,
    Pagination
  },
  data() {
    return {
      tableHead: [ /* Шапка таблицы */
        {
          id: 1,
          title: 'ФИО',
          width: '25'
        },
        {
          id: 2,
          title: 'номер телефона',
          width: '25'
        },
        {
          id: 3,
          title: 'email',
          width: '15'
        },
        {
          id: 4,
          title: 'должность',
          width: '15'
        },
        {
          id: 5,
          title: 'статус',
          width: '15'
        },
        {
          id: 6,
          type: 'edit',
          width: '5'
        },
      ],
      tableBody: [ /* Тело таблицы */
        {
          id: 1,
          name: 'Амир Саидов',
          phone: '992935554433',
          email: 'test@example.com',
          post: 'Админ',
          status: 'Активный',
          statusId: 1
        },
        {
          id: 2,
          name: 'Амир Саидов',
          phone: '992935554433',
          email: 'test@example.com',
          post: 'Админ',
          status: 'Активный',
          statusId: 1
        },
        {
          id: 3,
          name: 'Амир Саидов',
          phone: '992935554433',
          email: 'test@example.com',
          post: 'Админ',
          status: 'Неактивный',
          statusId: 2
        },
        {
          id: 4,
          name: 'Амир Саидов',
          phone: '992935554433',
          email: 'test@example.com',
          post: 'Админ',
          status: 'Неактивный',
          statusId: 2
        },
      ],
      searchText: '' /* Переменная хранящийся введеноое значение в поле поиска */
    }
  },
  methods: {
    searchUsers() { /* Функция для поиска юзеров */
      console.log(this.searchText);
    }
  }
}
</script>
