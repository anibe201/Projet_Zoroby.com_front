<template>
  <v-card flat class="pa-3 mt-2" >

    <v-alert dense type="info" > <strong>Tous les produits que vous avez vendu</strong>
    </v-alert>

      <!-- Apple iPhone 11 Pro -->
      <v-col
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
                <!-- <v-btn
                  text
                  color="primary"
                  dark
                >
                  <v-icon>{{ icons.mdiEyeOutline  }}</v-icon>
                  <router-link to="/product"><span class="ms-2">Voir l'annonce</span></router-link>
                </v-btn> -->
                <v-btn icon @click="confirm2()">
                  <v-icon>{{ icons.mdiDelete }}</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>

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
import {mdiDelete , mdiEyeOutline , mdiPencil , mdiCartPlus, mdiAlertOutline, mdiCloudUploadOutline, mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'

export default {
  data () {
        return {
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

      methods: {
        confirm2() {
          console.log("supprimé produit vendu");
        }
    }
}
</script>
