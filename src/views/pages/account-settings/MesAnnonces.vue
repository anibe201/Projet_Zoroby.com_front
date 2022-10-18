<template>
  <v-card flat class="pa-3 mt-2" >

    <v-alert dense type="info" > <strong>Toutes mes publications</strong>
    </v-alert>

      <!-- Apple iPhone 11 Pro -->
      <!-- <v-col
        sm="6"
        cols="12"
      >
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
                Apple iPhone 11 Pro
              </v-card-title>
              <v-card-text>
                Apple iPhone 11 Pro smartphone. Announced Sep 2019. Features 5.8″ display Apple A13 Bionic
              </v-card-text>
              <v-card-text class="text--primary text-base">
                <span>Price :</span> <span class="font-weight-bold">$899</span>
              </v-card-text>
              <v-card-actions class="d-flex justify-space-between dense">
                <v-btn
                  text
                  color="primary"
                  dark
                >
                  <v-icon>{{ icons.mdiEyeOutline  }}</v-icon>
                  <router-link to="/product"><span class="ms-2">Regarder</span></router-link>
                </v-btn>
                <v-btn icon>
                  <router-link to="/modifier/produit"><v-icon>{{ icons.mdiPencil  }}</v-icon></router-link>
                </v-btn>
                <v-btn icon @click="confirm2($event)">
                  <v-icon>{{ icons.mdiDelete }}</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col> -->


      <div class="row text-center" style="margin-top: 8px">
        <div class="col-md-3 col-sm-6 col-xs-12" :key="pro.id" v-for="pro in listeComplet">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="600"
            >
              <v-img
                class="white--text align-end"
                :aspect-ratio="16/9"
                height="200px"
                src="../../../assets/img/categories/23.jpg"
              >
                <!-- <v-card-title>{{pro.type}} </v-card-title> -->
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >

              <v-btn v-if="hover" @click="redirection(pro.id)" class="" outlined>VOIR</v-btn>
                  </div>

                </v-expand-transition>
              </v-img>
              <v-card-text class="text--primary" style="margin-top: 15px">
                <div><a @click="redirection(produit.product_id)"
                  style="text-decoration: none">{{ pro.product_name }}</a></div>
                <div>{{ pro.product_price }} Fcfa</div>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </div>

    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-divider></v-divider>
        <v-spacer></v-spacer>
          <!-- alert -->
          <v-col cols="12">
            <v-alert color="error" text class="mb-0" >
              <div class="d-flex align-start">
                <v-icon color="warning">
                  {{ icons.mdiAlertOutline }}
                </v-icon>

                <div class="ms-3">
                  <p class="text-base font-weight-medium mb-1">
                    Vos informations sont visible par tout les acheteurs sur la platforme
                  </p>
                  <v-spacer></v-spacer>
                  <a href="javascript:void(0)" class="text-decoration-none warning--text"  >
                    <span class="text-sm">
                      Mettez donc des informations correcte</span>
                  </a>
                </div>
              </div>
            </v-alert>
          </v-col>
          <v-col cols="12">
            <v-btn color="primary" class="me-3 mt-4" >
              Retourner aux annonces
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {mdiDelete , mdiEyeOutline , mdiPencil , mdiCartPlus, mdiAlertOutline, mdiCloudUploadOutline, mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'

export default {
  data () {
        return {
          liste_produit_tmp: [],
          listeComplet: [],

product_id: "",
  product_name: "",
  product_price: "",
  product_location: "",
  product_categorie: "",
  product_description: "",
  product_picture: "",

          icons: {
            mdiDelete ,
            mdiEyeOutline ,
            mdiPencil ,
            mdiCartPlus,
            mdiAlertOutline,
            mdiCloudUploadOutline,
            mdiAccountOutline,
            mdiEmailOutline,
            mdiCellphone,
            mdiLockOutline,
          },
          status:  ['Active', 'Inactive', 'Pending', 'Closed'],

        }
      },

created () {
  this.GET_ALL_PRODUIT();
},

  watch: {
    listeProduits() {
      if (this.listeProduits) {
        console.log(this.listeProduits);
        this.listeComplet = this.listeProduits;

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
