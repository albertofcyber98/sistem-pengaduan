<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Sistem Pelaporan
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    link: '/dashboard-admin'
  },
  {
    title: 'Akun Admin',
    link: '/akun-admin'
  },
  {
    title: 'User Active',
    link: '/user-active'
  },
  {
    title: 'User Pending',
    link: '/user-pending'
  },
  {
    title: 'SKPD',
    link: '/skpd'
  },
  {
    title: 'Jenis Laporan',
    link: '/jenis-laporan'
  },
  {
    title: 'List Laporan',
    link: '/laporan-admin'
  },
  {
    title: 'Keluar',
    link: '/'
  },
]

export default defineComponent({
  name: 'AdminLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
q-header{
  padding: 20px !important;
}
</style>
