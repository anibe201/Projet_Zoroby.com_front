<template>
  <v-card>
    <div style="display: flex; justify-content: center; align-items: center">
      <v-card-title class="align-start">
        <span class="font-weight-semibold">
          <h2 style="margin: 10px">
          Site de Petites Annonces en Côte d’Ivoire
        </h2>
        <h6 class="text-center">Retrouver tous vos produits que vous cherchez dans les différentes catégories</h6>
        </span>
        <v-spacer></v-spacer>
      </v-card-title>
    </div>
    <!-- <div style="display: flex; justify-content: center; align-items: center; margin: 30px"> -->

    <!-- <v-card-subtitle class="mb-8 mt-n5">
      <span class="font-weight-semibold text--primary me-1">Retrouver tous vos produits que vous cherchez dans les différentes catégories</span>
    </v-card-subtitle> -->
  <!-- </div> -->

    <vs-card-group>
      <vs-card>
        <template #title>
          <h3 class="text-center">Téléphones - Tablettes</h3>
        </template>
        <template #img>
          <img src="../../assets/img/categories/17.png" width="50" alt="">
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <v-icon>
              {{ icons.mdiDotsVertical }}
            </v-icon>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <v-icon>
              {{ icons.mdiDotsVertical }}
            </v-icon>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>








      <vs-card>
        <template #title>
          <h3 class="text-center">Informatique & Multimédia</h3>
        </template>
        <template #img>
          <img src="../../assets/img/categories/22.jpg" alt="">
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>









            <vs-card>
        <template #title>
          <h3 class="text-center">Véhicules</h3>
        </template>
        <template #img>
          <img src="../../assets/img/categories/23.jpg" alt="">
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>
      <vs-card>







        <template #title>
          <h3 class="text-center">Immobilier</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>





      <vs-card>
        <template #title>
          <h3 class="text-center"> Mode & Vêtements</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>







      <vs-card>
        <template #title>
          <h3 class="text-center">Loisirs</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>









      <vs-card>
        <template #title>
          <h3 class="text-center">Electroménager</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>









      <vs-card>
        <template #title>
          <h3 class="text-center">Offres d'emploi</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>









      <vs-card>
        <template #title>
          <h3 class="text-center">Services</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>











      <vs-card>
        <template #title>
          <h3 class="text-center">Massages Pro</h3>
        </template>
        <template #img>
          <!-- <img src="../assets/images/pages/card-basic-mobile.png" alt=""> -->
        </template>
        <template #text>
          <p>
            <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. -->
          </p>
        </template>
        <template #interactions>
          <vs-button danger icon>
            <i class='bx bx-heart'></i>
          </vs-button>
          <vs-button class="btn-chat" shadow primary>
            <i class='bx bx-chat' ></i>
            <span class="span">
              54
            </span>
          </vs-button>
        </template>
      </vs-card>













    </vs-card-group>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'

export default {
  setup() {
    const statisticsData = [
      {
        title: 'Sales',
        total: '245k',
      },
      {
        title: 'Customers',
        total: '12.5k',
      },
      {
        title: 'Product',
        total: '1.54k',
      },
      {
        title: 'Revenue',
        total: '$88k',
      },
    ]

    const resolveStatisticsIconVariation = data => {
      if (data === 'Sales') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Customers') return { icon: mdiAccountOutline, color: 'success' }
      if (data === 'Product') return { icon: mdiLabelOutline, color: 'warning' }
      if (data === 'Revenue') return { icon: mdiCurrencyUsd, color: 'info' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,

      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,

      },
    }
  },
}
</script>
