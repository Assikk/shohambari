<template>
  <aside class="min-w-[255px] bg-[#4338CA] text-white h-screen px-2">
    <NuxtLink to="/main">
      <img width="175" height="30" src="/white-logo.svg" alt="White Logo" class="mx-auto my-6">
    </NuxtLink>
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-3 p-2 cursor-pointer rounded-md font-medium text-sm text-[#E0E7FF]"
      :class="$route.fullPath.includes(page.link) ? 'bg-[#3730A3]' : 'hover:bg-[#3730A3]'"
      v-for="page in pages" :key="page.id"
      @click="changePage(page)">
      <svg fill="none" stroke="#A5B4FC" width="24" height="24" class="min-w-[24px] min-h-[24px]">
        <use :xlink:href="'#' + page.icon"/>
      </svg>
        <div class="w-full">
          <div class="flex justify-between items-center">
            <p>
              {{page.name}}
            </p>
            <svg fill="#D1D5DB" stroke="none" width="20" height="20"
            :class="page.isShowChild ? 'rotate-90' : 'rotate-0'"
            v-if="page.child">
              <use xlink:href="#arrow"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: 'AsideComponent',
  data() {
    return {
      pages: [
        {
          id: 1,
          name: 'Главная',
          icon: 'home',
          link: '/main'
        },
        {
          id: 2,
          name: 'Пациенты',
          icon: 'twoPerson',
          link: '/patients'
        },
        {
          id: 3,
          name: 'Сотрудники',
          icon: 'thirdPerson',
          link: '/users'
        },
        {
          id: 4,
          name: 'Справочник',
          icon: 'cap',
          child: [],
          isShowChild: false
        }
      ]
    }
  },
  methods: {
    changePage(page) {
      if(page.child) { /* Если страница имеет дочерние страницы */
        page.isShowChild = !page.isShowChild /* Показываем/Скрываем дочерние страницы */
      } else { /* Страница не имеет дочерних страниц */
        this.$router.push(page.link) /* Направляем на другую страницу */
      }
    }
  },
}
</script>
