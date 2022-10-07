<template>
  <div>
    <v-row>
      <Paginator :rows="12" :totalRecords="  listeProduits && listeProduits.donnees ? listeProduits.donnees.length : 0 " @page="onPage($event)" style="margin-top: 65px;"></Paginator>
  </v-row>
    <v-row>
      <!-- Apple iPhone 11 Pro -->
      <v-col sm="6" cols="12" v-for="produit in liste_produit_tmp" :key="produit.product_id">
        <v-card class="d-flex align-center">
          <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
            <div class="mx-auto">
              <v-img
                width="220"
                height="100%"
                src="@/assets/images/pages/card-basic-mobile.png"
              ></v-img>
            </div>
            <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
            <div>
              <v-card-title>
                {{ produit.product_name }}
              </v-card-title>
              <v-card-text>
                {{ produit.product_description }}
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span>Prix :</span> <span class="font-weight-bold">
                {{ produit.product_price }} Fcfa
                </span>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between dense">
                <v-btn
                  text
                  color="primary"
                  dark
                  @click="redirection(produit.product_id)"
                >
                  <v-icon>{{ icons.mdiCartPlus }}</v-icon>
                  <!-- <router-link to="/product"><span class="ms-2">Add to cart</span></router-link> -->
                  <span class="ms-2">Voir produit</span>
                </v-btn>
                <v-btn icon>
                  <v-icon>{{ icons.mdiShareVariantOutline }}</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    <!------------------------------------------ pagination -------------------------------------------->

    </v-row>
  </div>
</template>

<script>
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

export default {
  data() {
      return {
        liste_produit_tmp: [],

        product_id: "",
          product_name: "",
          product_price: "",
          product_location: "",
          product_categorie: "",
          product_description: "",
          product_picture: "",

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
    }


  },

created () {
  this.GET_ALL_PRODUIT();
},

  watch: {
    listeProduits() {
      if (this.listeProduits) {
        console.log(this.listeProduits);
        this.liste_produit_tmp = this.listeProduits.slice(0, 12);
        console.log(this.liste_produit_tmp);
      }
    },
    },

    computed: {
      ...mapGetters(["listeProduits", "produit"]),
    },

    methods: {
      ...mapActions(["GET_ALL_PRODUIT", "GET_SINGLE_PRODUIT"]),

      redirection(produit) {
        console.log(produit);
      const path = `/product/` + produit;
      if (this.$route.path !== path)
        this.$router.push({ path, params: { id: produit } });
    },

    onPage(event) {
      this.liste_produit_tmp = this.listeProduits.donnees.slice(
        event.first,
        event.first + 12
      );
    },
    },

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
