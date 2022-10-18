import Api from "../../Api/index"
import HTTP from "../../Api/auth"


const formData = new FormData()
formData.append("grant_type", "client_credentials")
formData.append("client_id", 2)
formData.append("client_secret", process.env.VUE_APP_TOKEN)

const state = {
  // state enregistrement vendeur-acheteur
  MSG_SUCCESS_CLIENT: "",
  MSG_ERROR_CLIENT: null,

  MSG_AUTH_SUCESS_CLIENT: [],
  MSG_AUTH_ERROR_CLIENT: "",

  // userMsg: "",
  // errors: "",
  // errorConnexion1: false,
  // istokenSet: false,
}

const getters = {
  // getters enregistrement vendeur-acheteur
  MSG_SUCCESS_CLIENT: state => state.MSG_SUCCESS_CLIENT,
  MSG_ERROR_CLIENT: state => state.MSG_ERROR_CLIENT,

  MSG_AUTH_SUCESS_CLIENT: state => state.MSG_AUTH_SUCESS_CLIENT,
  MSG_AUTH_ERROR_CLIENT: state => state.MSG_AUTH_ERROR_CLIENT,

  // userMsg: state => state.userMsg,
  // errors: state => state.errors,
  // successClient: state => state.successClient,
  // istokenSet: state => state.istokenSet,
  // errorConnexion1: state => state.errorConnexion1,

}

const actions = {

  // action enregistrement vendeur-acheteur
  ADD_CLIENT({ commit }, data) {
    Api.post("/auth/signup", data)
      .then(response => {
        commit("SET_MSG_SUCCESS_CLIENT", 'User registered successfully!')
        console.log(response.data);
    })
      .catch(errors => {
        commit("SET_MSG_ERROR_CLIENT", errors.response)
        // console.log(errors.response.data.erreurs);
        console.log(errors.response);
        // console.log(errors.response.data.code_http);
        // commit("setmsgSuccessClient", "")
      })
  },












  // getToken({ commit }) {
  //   Api.post(process.env.VUE_APP_BASEURL + "oauth/token", formData)
  //     .then(response => {
  //       localStorage.setItem("token", response.data.access_token)
  //       commit("setToken", true)
  //       commit("setErors", "")
  //       console.log("get token success")
  //     })
  //     .catch(errors => {
  //       console.log(errors)
  //       commit("setToken", false)
  //       commit("setErors", errors.response.data)
  //       console.log("get token error")
  //     })
  // },

  AUTH_CLIENT({ commit }, data) {
      Api.post("/auth/signin", data)
        .then(response => {
          commit("SET_MSG_AUTH_SUCESS_CLIENT", response.data, "connexion reussi")
          console.log(response.data);
          const userdetails = {
            user_id: response.data.id,
            username: response.data.username,
          //   prenom: response.data.oauth.utilisateur.prenom,
          //   contact: response.data.oauth.utilisateur.contact,
          //   localisation: response.data.oauth.utilisateur.localisation,
            email: response.data.email,
          //   profil: response.data.oauth.utilisateur.profil,
          //   photo: response.data.oauth.utilisateur.photo,
          //   photofond: response.data.oauth.utilisateur.photofond,
            role: response.data.roles,
          }
          console.log(userdetails);
          localStorage.setItem("user", JSON.stringify(userdetails))
          const authkey = {
            accessToken: response.data.accessToken,
          //   expiry: response.data.oauth.expires_at
          }
          console.log(authkey);
          localStorage.setItem("userauth", JSON.stringify(authkey))
        })
        .catch(errors => {
          commit("SET_MSG_AUTH_ERROR_CLIENT", errors.response)
          console.log(errors.response.data);
        })
  },

  // updateUser({ commit }, data) {
  //   console.log();
  //   HTTP.put(process.env.VUE_APP_AUTHURL + "utilisateurs", data)
  //     .then(() => {
  //       commit("setUserMsg", "Modification effectuée avec succès.")
  //       console.log("Modification effectuée avec succès.");
  //     })
  //     .catch(errors => {
  //       commit("setErors", errors)
  //     })
  // }
}

const mutations = {
    // mutations enregistrement vendeur-acheteur
    SET_MSG_SUCCESS_CLIENT: (state, usermsg) => (state.MSG_SUCCESS_CLIENT = usermsg),
    SET_MSG_ERROR_CLIENT: (state, error) => (state.MSG_ERROR_CLIENT = error),

    SET_MSG_AUTH_SUCESS_CLIENT: (state, users) => (state.MSG_AUTH_SUCESS_CLIENT = users),
    SET_MSG_AUTH_ERROR_CLIENT: (state, errorconnex) => (state.MSG_AUTH_ERROR_CLIENT = errorconnex),

  // setErors: (state, data) => (state.errors = data),
  // setUserMsg: (state, usermsg) => (state.userMsg = usermsg),
  // setToken: (state, hasToken) => (state.istokenSet = hasToken),
  // seterrorConnexion1: (state, haserrorConnexion1) => (state.errorConnexion1 = haserrorConnexion1),

}

export default {
  state,
  getters,
  actions,
  mutations
}
