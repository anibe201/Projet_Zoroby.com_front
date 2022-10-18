<template>
  <v-card flat class="pa-3 mt-2" >

    <v-alert
      dense
      type="info"
    >
      <strong>Publiez votre annonce gratuitement en quelques click</strong>
    </v-alert>
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col md="6" cols="12"  >
            <v-text-field label="Ville" dense outlined v-model="product_location" ></v-text-field>
          </v-col>

          <v-col md="6" cols="12" >
            <v-select dense outlined label="Catégorie" :items="status" v-model="product_categorie"></v-select>
          </v-col>

          <v-col cols="12" md="6"  >
            <v-text-field label="Titre" dense outlined v-model="product_name"></v-text-field>
          </v-col>

          <v-col cols="12" md="6" >
            <v-text-field dense label="Prix" outlined v-model="product_price"></v-text-field>
          </v-col>

          <v-col cols="12" md="12"  >
            <v-textarea
            outlined
            name="input-7-4"
            label="Descriptions"
            value=""
            v-model="product_description"
          ></v-textarea>
          </v-col>

          <v-col cols="12" md="9" >
            <v-card-text class="d-flex">

              <v-avatar rounded size="120"  class="me-6" >
                <v-img src="@/assets/images/avatars/1.png"></v-img>
              </v-avatar>

              <!-- upload photo -->
              <div>
                <v-btn color="primary" class="me-3 mt-5" >
                  <v-icon class="d-sm-none">
                    {{ icons.mdiCloudUploadOutline }}
                  </v-icon>
                  <input
                  type="file"
                  name="photoUser"
                  id="photoUser"
                  ref="photoUser"
                  @change="onFileCharge('photoUser')"
                />
                  <!-- <span class="d-none d-sm-block">Upload new photo</span> -->
                </v-btn>

                <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />

                <v-btn color="error" outlined  class="mt-5" >
                  Reset
                </v-btn>
                <p class="text-sm mt-5">
                  Accepté : JPG or PNG
                </p>
              </div>
            </v-card-text>
          </v-col>
          <!-- <v-col
            cols="12"
            md="5"
          >
            <v-select
            disabled
              outlined
              dense
              multiple
              chips
              small-chips
              label="Langue"
              :items="['English','Spanish','French','German']"
            ></v-select>
          </v-col> -->
          <!-- <v-divider></v-divider>
          <v-alert
          type="success"
        >Vos informations personnel</v-alert> -->
<v-spacer></v-spacer>
        <v-col
        cols="12"
        md="10"
      >
        <v-form>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <label for="firstnameHorizontalIcons">First Name</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
              disabled
                id="firstnameHorizontalIcons"
                :prepend-inner-icon="icons.mdiAccountOutline"
                outlined
                dense
                placeholder="Vianney Anibe"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="emailHorizontalIcons">Email</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
              disabled
                id="emailHorizontalIcons"
                :prepend-inner-icon="icons.mdiEmailOutline"
                outlined
                dense
                placeholder="anibe201@gmail.com"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="mobileHorizontalIcons">Mobile</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
              disabled
                id="mobileHorizontalIcons"
                type="number"
                outlined
                :prepend-inner-icon="icons.mdiCellphone"
                dense
                placeholder="+225 01 40 99 04 99"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              offset-md="3"
              cols="12"
            >
              <v-checkbox
                label="Fonctionne avec whatsapp ?"
                class="mt-0"
                hide-details
              ></v-checkbox>
            </v-col>

          </v-row>
        </v-form>
      </v-col>
      <v-col
      cols="12"
      md="2"
    >
  </v-col>

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
            <v-btn color="primary" class="me-3 mt-4" @click="submit()">
              Créer l'annonce
            </v-btn>
            <v-btn color="error" outlined class="mt-4" type="reset" >
              Annulé
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>



<script>
  import { mapActions, mapGetters } from "vuex";
  import { mdiAlertOutline, mdiCloudUploadOutline, mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
  // import TutorialDataService from "../../services/TutorialDataService";


  export default {

    data() {
      return {
        productID: null,
        data: null,
        percent: 0,
          uploadfile: "photoUser",
          inputFiles: { photoUser: "" },
          product_name: "",
          product_price: "",
          product_location: "",
          product_categorie: "",
          product_description: "",
          product_picture: "",
          id_user: "",

          icons: {
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

    watch: {
      msgSuccessProduit() {
        console.log("Le produit a bien été envoyé");
        // if(msgSuccessProduit === "succes !") {
          console.log(this.msgSuccessProduit);
          this.productID = this.msgSuccessProduit.id;
          console.log(this.productID);
           console.log("Le produit a bien été envoyé");
           this.$router.push({ name: "publication-annonce-publier" , params: { id: this.productID}});
        // }
      },
      FILES_PRODUCT() {
        console.log("le fichier a bien été chargé");
      // if (this.filesPictureUser.code_http === 200 || this.filesPictureUser.code_http === 201) {
      //   this.msg_Success_Photo_User();
      //   let imageUser = process.env.VUE_APP_UPLOAD + this.filesPictureUser["url"] ;
      //   console.log(imageUser);
      //   localStorage.setItem('image', imageUser);
      //   this.image_url  = localStorage.getItem('image')
      // }
    },
    },

    computed: {
      ...mapGetters(["msgSuccessProduit", "listeProduits", "produit", "updateProduit", "FILES_PRODUCT"]),
    },

    methods: {
      ...mapActions(["POST_PRODUIT", "GET_ALL_PRODUIT", "GET_SINGLE_PRODUIT", "UPDATE_A_PRODUCT", "SAVE_PRODUCT_FILES"]),

      onFileCharge(filename) {
        // this.inputFiles[filename] = this.$refs[filename].files[0].name;
        this.SAVE_PRODUCT_FILES(this.$refs[filename].files[0]);
      },
      submit() {
        this.data = {
            product_name: this.product_name,
            product_price: this.product_price,
            product_location: this.product_location,
            product_categorie: 'Telephones & Tablettes',
            product_description: this.product_description,
            product_picture: 'C:\Users\AlexisAnohVianneyANI\Desktop\PERSO HYPER IMPORTANT\PROJETS\Projet Zoroby.com\test Projet Zoroby\AUTH\nodejs-upload-image-mysql-master/resources/static/assets/uploads/1666026541428-bezkoder-15.png',
            id_user: '1'
      };

      this.openLoading()
        // console.log(data);
        // this.UPDATE_A_PRODUCT(data);
      },
      openLoading() {

          const loading = this.$vs.loading({
            percent: this.percent
          })
          const interval = setInterval(() => {
            if (this.percent < 100) {
              // loading.changePercent(`${this.percent = this.percent + 10}%`)
              loading.changePercent(`${this.percent = this.percent + 4}%`)
            }
          }, 60)
          setTimeout(() => {
            console.log('100% finish');
            this.POST_PRODUIT(this.data);
            loading.close()
            clearInterval(interval)
            this.percent = 0
          }, 3000)
        }
    },
  };
  </script>
