<template>
  <v-card flat class="pa-3 mt-2" >

    <v-alert
      dense
      type="info"
    >
      <strong>Mes informations personnel</strong>
    </v-alert>
    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col cols="12" md="4" >
            <div style="display: flex; justify-content: center; align-items: center; margin: 30px">
            <v-card-text class="d-flex">
              <v-avatar rounded size="120"  class="me-6" >
                <v-img src="@/assets/images/logos/logo.png"></v-img>
              </v-avatar>
            </v-card-text>
            <h2 class="app-title text--primary" >
              <strong> ZOROBY.COM </strong>
            </h2>
            </div>
          </v-col>
          <v-divider></v-divider>
        <v-spacer></v-spacer>
        <v-col
        cols="12"
        md="7"
      >
        <v-form>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <label for="firstnameHorizontalIcons">Nom</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
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
                id="emailHorizontalIcons"
                :prepend-inner-icon="icons.mdiEmailOutline"
                outlined
                dense
                value="anibe201@gmail.com"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <label for="mobileHorizontalIcons">Téléphone</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
                id="mobileHorizontalIcons"
                :prepend-inner-icon="icons.mdiCellphone"
                dense
                value="+225 01 40 99 04 99"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Message</label>
          </v-col>

          <v-col
            cols="12"
            md="9"
          >
            <v-textarea
            outlined
            name="input-7-4"
            label="Descriptions"
            value=""
          ></v-textarea>
          </v-col>

          <v-col
          cols="12"
          md="3"
        >
        </v-col>

        <v-col
          cols="12"
          md="9"
        >
        <v-btn color="primary" class="me-3 mt-4" >
          Envoyer
        </v-btn>
        </v-col>
          </v-row>
        </v-form>
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
