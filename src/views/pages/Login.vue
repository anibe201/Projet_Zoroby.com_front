<template>
  <div class="auth-wrapper auth-v1" >
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link to="/" class="d-flex align-center"  >
            <v-img
              :src="require('@/assets/images/logos/logo.png')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>
            <h2 class="text-2xl font-weight-semibold">
              ZOROBY.COM
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="mb-2 text-center">
            Connectez-vous
          </p>
          <!-- <v-alert
          dense
          outlined
          type="error"
          v-if="userNotFound"
        >
        <strong>Nom d'utilisateur</strong> ou <strong>mot de passe</strong> incorrect
        </v-alert>
        <v-alert
        dense
        outlined
        type="error"
        v-if="pswdInvalid"
      >
      <strong>Mot de passe</strong> incorrect
      </v-alert> -->





      <vs-button id="shoow" dark flat @click="active=true" :hidden="true">
        Open Alert 10s
      </vs-button>
      <vs-alert danger :progress="progress" v-model="active">
        <template #title>
          Erreur :
        </template>
        <strong>Il semble votre nom d'utilisateur</strong> ou <strong>mot de passe</strong> sois incorrect
      </vs-alert>

      <vs-button id="shoow2" dark flat @click="active2=true" :hidden="true">
        Open Alert 10s
      </vs-button>
      <vs-alert danger :progress="progress2" v-model="active2">
        <template #title>
          Erreur :
        </template>
        Nous avons verifié, votre nom d'utilsateur est correct mais votre <strong>mot de passe</strong> incorrect
      </vs-alert>



          <!-- <p class="mb-2">
            Please sign-in to your account and start the adventure
          </p> -->
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="Email"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Mot de passe"
              placeholder="············"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Se souvenir de moi"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>

              <!-- forgot link -->
              <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
              @click="submit()"
            >
              SE CONNECTER
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Nouveau sur notre plateforme ?
          </span>
          <router-link :to="{name:'pages-register'}">
            Créer un compte
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn
            v-for="link in socialLink"
            :key="link.icon"
            icon
            class="ms-1"
          >
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { mapActions, mapGetters } from "vuex";
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')
    const password = ref('')
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      active: false,
        time: 6000,
        progress: 0,

        active2: false,
        progress2: 0,




      userNotFound: false,
      pswdInvalid: false,
      isPasswordVisible,
      email,
      password,
      socialLink,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },

  watch: {

        active(val) {
          if(val) {
            var interval = setInterval(() => {
              this.progress++
            }, this.time / 100);

            setTimeout(() => {
              this.active = false
              clearInterval(interval)
              this.progress = 0
            }, this.time);
          }
        },

        active2(val) {
          if(val) {
            var interval = setInterval(() => {
              this.progress2++
            }, this.time / 100);

            setTimeout(() => {
              this.active2 = false
              clearInterval(interval)
              this.progress2 = 0
            }, this.time);
          }
        },

    MSG_AUTH_SUCESS_CLIENT() {
      console.log('le guetter de authentification fonctionne');
      if (this.MSG_AUTH_SUCESS_CLIENT.code_http === 200) {
        console.log('utilisateur connecté');

        this.$router.push({ name: "pages-account-settings" });
        this.openNotification();
      }
    },

    MSG_AUTH_ERROR_CLIENT() {
      if (this.MSG_AUTH_ERROR_CLIENT.status === 401) {
        // this.pswdInvalid = true
        shoow2.click();
        return
      }
      if (this.MSG_AUTH_ERROR_CLIENT.status) {
        // this.userNotFound = true;
        shoow.click();
        return
      }

    }
  },

  computed: {
      ...mapGetters(["MSG_AUTH_SUCESS_CLIENT", "MSG_AUTH_ERROR_CLIENT"]),
    },

  methods: {
    ...mapActions(["AUTH_CLIENT"]),

    submit() {
        let User = {
          email: this.email,
          password: this.password,
        };
        this.AUTH_CLIENT(User);
        },

        openNotification(position = null, color = 'success', icon) {
          const noti = this.$vs.notification({
            square: true,
            color,
            position,
            title: 'Connexion reussi ',
            text: `Bienvenu sur Zoroby.com`
          })
        }
      },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
