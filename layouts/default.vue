<template>
  <div class="flex">
    <Icons/>
    <Aside/>
    <div class="w-full">
      <Header/>
      <nuxt class="px-6"/>
    </div>
    <transition name="home">
      <Logout v-if="logout.isActive"/>
    </transition>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Header from '@/components/header.vue'
import Aside from '@/components/aside.vue'
import Icons from '@/components/icons.vue'
import Logout from '@/components/modals/logout.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Icons,
    Aside,
    Logout
  },
  computed: {
    ...mapState({
      logout: state => state.logout
    })
  }
}
</script>
