<template>
  <v-card flat class="pa-3 mt-2" >

    <v-alert
      dense
      type="success"
    >
      <strong>VOTRE ANNONCE À ÉTÉ PUBLIÉ AVEC SUCCÈS</strong>
    </v-alert>
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>

          <v-col cols="12" md="8" >
            <v-card-text class="d-flex">

              <v-avatar rounded size="120"  class="me-6" >
                <v-img src="@/assets/images/logos/logo.png"></v-img>
              </v-avatar>

              <!-- upload photo -->
              <div>

                  <v-btn color="primary" class="me-3 mt-5" @click="redirection()">
                  <v-icon class="d-sm-none">
                    <!-- {{ icons.mdiCloudUploadOutline }} -->
                    {{ icons.mdiEyeArrowRight }}
                  </v-icon>
                  <span class="d-none d-sm-block">Voir l'annonce</span>
                </v-btn>
                <v-btn color="error" outlined  class="mt-5" >
                  Voir profil
                </v-btn>
                <!-- <p class="text-sm mt-5">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p> -->
              </div>
            </v-card-text>
          </v-col>

          <!-- <v-alert type="error"> Attention</v-alert> -->
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
                    Si vous voulez que votre annonce sois bien visible, remplissez tout les champs
                  </p>
                  <v-spacer></v-spacer>
                  <a href="javascript:void(0)" class="text-decoration-none warning--text"  >
                    <span class="text-sm">
                      En déposant votre annonce, vous acceptez les Conditions d'Utilisation et la Politique de confidentialité.</span>
                  </a>
                </div>
              </div>
            </v-alert>
          </v-col>

          <v-col cols="12">
            <v-btn color="primary" class="me-3 mt-4" >
              Publier nouvelle annonce
            </v-btn>
            <v-btn color="error" outlined class=" me-3 mt-4">
              Accueil
            </v-btn>
            <v-btn color="error" outlined class="mt-4">
              Annonces
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>



<script>
import { mapGetters, mapActions } from 'vuex'
  import { mdiAlertOutline, mdiCloudUploadOutline, mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline, mdiEyeArrowRight } from '@mdi/js'


  export default {

    data() {
      return {
        productID: null,
          icons: {
            mdiEyeArrowRight,
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

    mounted() {
      this.productID = this.$route.params.id;
      console.log(this.productID);
    },

    methods: {

      redirection() {
      const path = `/product/` + this.productID;
      if (this.$route.path !== path)
        this.$router.push({ path, params: { id: this.productID } });
    },
    }
  };
  </script>
