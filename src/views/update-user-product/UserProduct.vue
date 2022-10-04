<template>
  <v-card flat class="pa-3 mt-2" >

    <v-alert
      dense
      type="info"
    >
      <strong>Modifier votre annonce gratuitement en quelques click</strong>
    </v-alert>
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col md="6" cols="12"  >
            <v-text-field label="Ville" dense outlined ></v-text-field>
          </v-col>

          <v-col md="6" cols="12" >
            <v-select dense outlined label="Catégorie" :items="status" ></v-select>
          </v-col>

          <v-col cols="12" md="6"  >
            <v-text-field label="Titre" dense outlined ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" >
            <v-text-field dense label="Prix" outlined ></v-text-field>
          </v-col>

          <v-col cols="12" md="12"  >
            <v-textarea
            outlined
            name="input-7-4"
            label="Descriptions"
            value=""
          ></v-textarea>
          </v-col>

          <v-col cols="12" md="12" >
            <v-card-text class="d-flex">

              <v-avatar rounded size="120"  class="me-6" >
                <v-img src="@/assets/images/avatars/1.png"></v-img>
              </v-avatar>

              <!-- upload photo -->
              <div>
                <v-btn color="primary" class="me-3 mt-5" @click="$refs.refInputEl.click()" >
                  <v-icon class="d-sm-none">
                    {{ icons.mdiCloudUploadOutline }}
                  </v-icon>
                  <span class="d-none d-sm-block">Charger une nouvelle photo</span>
                </v-btn>

                <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />

                <v-btn color="error" outlined  class="mt-5" >
                  Supprimer
                </v-btn>
                <p class="text-sm mt-5">
                  Seulement les images de type JPG, GIF or PNG.
                </p>
              </div>
            </v-card-text>
          </v-col>
          <v-divider></v-divider>
          <v-alert
          type="success"
        >Vos informations personnel associées</v-alert>
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
                value="Vianney Anibe"
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
            <v-btn color="primary" class="me-3 mt-4" >
              Modifier l'annonce
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
import { mdiAlertOutline, mdiCloudUploadOutline, mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'

export default {
  data () {
        return {
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
}
</script>



<!-- <template>
  <v-form>
    <v-text-field
      v-model="firstname"
      :prepend-inner-icon="icons.mdiAccountOutline"
      label="First Name"
      outlined
      dense
      placeholder="First Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :prepend-inner-icon="icons.mdiEmailOutline"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      :prepend-inner-icon="icons.mdiCellphone"
      label="Mobile"
      outlined
      dense
      type="number"
      placeholder="Number"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :prepend-inner-icon="icons.mdiLockOutline"
      label="Password"
      outlined
      dense
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary">
      Submit
    </v-btn>
    <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
}
</script> -->
