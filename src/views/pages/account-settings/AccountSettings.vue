<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs v-model="tab" show-arrows >
      <v-tab v-for="tab in tabs" :key="tab.icon" >
        <v-icon size="20"  class="me-3"  >
          {{ tab.icon }}
        </v-icon>
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <mes-annonces></mes-annonces>
      </v-tab-item>

      <v-tab-item>
        <mes-favoris></mes-favoris>
      </v-tab-item>

      <v-tab-item>
        <produit-vendu :information-data="accountSettingData.information"></produit-vendu>
      </v-tab-item>

      <v-tab-item>
        <mes-informations></mes-informations>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiLockOpenOutline, mdiInformationOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

import MesAnnonces from './MesAnnonces.vue'
import MesFavoris from './MesFavoris.vue'
import ProduitVendu from './ProduitVendu.vue'
import MesInformations from './MesInformations.vue'

export default {
  components: {
    MesAnnonces,
    MesFavoris,
    ProduitVendu,
    MesInformations,
  },
  setup() {
    const tab = ref('')

    // tabs
    const tabs = [
      { title: 'Mes annonces', icon: mdiLockOpenOutline },
      { title: 'Mes favories', icon: mdiInformationOutline },
      { title: 'Produits vendu', icon: mdiInformationOutline },
      { title: 'Mes informations', icon: mdiAccountOutline },
    ]

    // account settings data
    const accountSettingData = {
      account: {
        avatarImg: require('@/assets/images/avatars/1.png'),
        username: 'johnDoe',
        name: 'john Doe',
        email: 'johnDoe@example.com',
        role: 'Admin',
        status: 'Active',
        company: 'Google.inc',
      },
      information: {
        bio: 'The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scaLabel 😀, and lightning 😍 fast search and discovery experiences.',
        birthday: 'February 22, 1995',
        phone: '954-006-0844',
        website: 'https://themeselection.com/',
        country: 'USA',
        languages: ['English', 'Spanish'],
        gender: 'male',
      },
    }

    return {
      tab,
      tabs,
      accountSettingData,
      icons: {
        mdiAccountOutline,
        mdiLockOpenOutline,
        mdiInformationOutline,
      },
    }
  },
}
</script>
