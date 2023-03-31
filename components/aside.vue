<template>
  <aside class="min-w-[255px] bg-[#4338CA] text-white h-screen px-2">
    <NuxtLink to="/main">
      <img width="175" height="30" src="/white-logo.svg" alt="White Logo" class="mx-auto my-6">
    </NuxtLink>
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-3 p-2 hover:bg-[#3730A3] cursor-pointer rounded-md font-medium text-sm text-[#E0E7FF]"
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
              <use xlink:href="#arrowRight"/>
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
          icon: 'home'
        },
        {
          id: 2,
          name: 'Справочник',
          icon: 'home',
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
        console.log('child');
      } else console.log(page); /* Страница не имеет дочерних страниц */
    }
  }
}
</script>
