<template>
  <div>
    <v-row>
      <!-- Lifetime Membership -->
      <v-col
        md="12"
        lg="12"
        cols="12"
      >
        <v-card class="overflow-hidden">
          <v-row class="ma-0 h-full">
            <v-col
            cols="12"
            sm="4"
            md="12"
            lg="5"
            order="2"
            order-lg="1"
            class="memberpricing-bg"
          >
          <v-carousel :show-arrows="false">
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
          </v-col>
            <v-col
              cols="12"
              sm="8"
              md="12"
              lg="7"
              order="1"
              order-lg="2"
            >
              <v-card-title> <strong> {{ show.product_name }} </strong>
                <v-spacer></v-spacer>

                <h2>{{ show.product_price }} FCFA</h2>
              </v-card-title>
              <v-card-text>
              </v-card-text>
              {{ show.product_description }}
              <v-card-text>
              <br>
              </v-card-text>
              <v-divider></v-divider>

              <v-card-actions class="d-flex justify-center">
                <div class="me-auto pe-4">
                  <p class="d-flex align-center mb-6">
                    <v-icon color="primary">
                      {{ icons.mdiAccountOutline }}
                    </v-icon>
                    <span class="ms-3"> vendeur : <strong> Kassoum</strong></span>
                  </p>
                  <p class="d-flex align-center mb-0">
                    <v-icon color="primary">
                      {{ icons.mdiLockOpenOutline }}
                    </v-icon>
                    <span class="ms-3">Lieu : <strong> Abobo</strong></span>
                  </p>
                </div>

                <v-divider
                  v-if="$vuetify.breakpoint.smAndUp"
                  vertical
                  inset
                >
                </v-divider>

                <div class="ms-auto ps-4">
                  <p class="d-flex align-center mb-6">
                    <v-btn
                    color="primary"
                    dark
                    x-small
                  >
                  Afficher le téléphone
                  </v-btn>
                  </p>
                  <p class="d-flex align-center mb-0">
                    <v-btn
                    color="primary"
                    dark
                    x-small
                  >
                  Contacter par email
                  </v-btn>
                  </p>
                </div>



              </v-card-actions>
              <v-card-actions class="d-flex justify-center">
                <div class="me-auto pe-4">
                  <p class="d-flex align-center mb-6">
                    <v-icon color="primary">
                      {{ icons.mdiAccountOutline }}
                    </v-icon>
                    <span class="ms-3"> Publiée : <strong> Aujourd'hui</strong></span>
                  </p>
                  <p class="d-flex align-center mb-0">
                    <v-icon color="primary">
                      {{ icons.mdiLockOpenOutline }}
                    </v-icon>
                    <span class="ms-3">Marque : <strong> Samsung</strong></span>
                  </p>
                </div>

                <!-- <v-divider
                  v-if="$vuetify.breakpoint.smAndUp"
                  vertical
                  inset
                >
                </v-divider>

                <div class="ms-auto ps-4">
                  <p class="d-flex align-center mb-6">

                    <v-btn
                    color="primary"
                    dark
                    x-small
                  >
                  Ajouter aux favoris
                  </v-btn>
                  </p>
                  <p class="d-flex align-center mb-0">
                    <v-btn
                    x-small
                    color="primary"
                    dark
                  >
                  Partager l'annonce
                  </v-btn>
                  </p>
                </div> -->

              </v-card-actions>
              <v-divider></v-divider>
              <div style="display: flex; justify-content: center; align-items: center; margin: 30px">
                <v-btn color="primary" dark x-small style="margin: 8px">
                Ajouter aux favoris
                </v-btn>
                <v-btn x-small color="primary" dark style="margin: 8px">
                Partager l'annonce
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <carousel-recent-produit> </carousel-recent-produit >
        </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mapActions, mapGetters } from "vuex";


import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'
import CarouselRecentProduit from './CarouselRecentProduit.vue'

export default {

    setup() {
        const isCardDetailsVisible = false;
        const rating = ref(5);
        return {
            show: "",
            isCardDetailsVisible,
            rating,
            items: [
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                },
            ],
            // icons
            icons: {
                mdiChevronUp,
                mdiChevronDown,
                mdiCartPlus,
                mdiShareVariantOutline,
                mdiLockOpenOutline,
                mdiStarOutline,
                mdiAccountOutline,
                mdiTrendingUp,
                mdiHelpCircleOutline,
            },
        };
    },

    components: {
      CarouselRecentProduit
    },

    mounted() {
      // this.getTutorial(this.$route.params.id);
    },

    watch: {
    // <!-------------------------------------SECTION WATCH PRODUITS------------------------------------------------------------------------------------->
    produit() {
      console.log(this.produit);
      if (this.produit) {
        this.show = this.produit;
      }
    },
    },

    created () {
      this.GET_SINGLE_PRODUIT(this.$route.params.id);
    },

    computed: {
      ...mapGetters(["produit"]),
    },

    methods: {
      ...mapActions(["GET_SINGLE_PRODUIT"]),
    }
}
</script>

<style lang="scss" scoped>
@import '@/plugins/vuetify/default-preset/preset/mixins.scss';

.avatar-center {
  top: -2rem;
  left: 1rem;
  border: 3px solid white;
  position: absolute;
}

// membership pricing
@include theme--child(memberpricing-bg) using ($material) {
  background-color: rgba(map-deep-get($material, 'primary-shade'), map-deep-get($material, 'states', 'hover'));
}

.memberpricing-bg {
  position: relative;
}
.membership-pricing {
  text-align: center;
  sup {
    font-size: 3.75rem;
    top: 9px;
  }
}
</style>
