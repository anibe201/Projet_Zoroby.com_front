<template>
  <main style="background-color: #E1DFDF;">
        <allHeader style="margin-bottom: 0px"/>
		<!-- BREADCRUMB -->
		
		<div id="breadcrumb" class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<div class="col-md-12">
						<ul class="breadcrumb-tree">
							<li style="font-family: Segoe UI;"><a href="#">Accueil</a></li>
							<li style="font-family: Segoe UI;"><a href="#">Magasin</a></li>
							<!-- <li style="font-family: Segoe UI;"><a href="#">Accessories</a></li>
							<li class="active" style="font-family: Segoe UI;">Headphones (227,490 Results)</li> -->
						</ul>
					</div>
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /BREADCRUMB -->

		<!-- SECTION -->
		<div class="section">
			<!-- container -->
			<div class="container">
				<!-- row -->
				<div class="row">
					<!-- ASIDE -->
					<div id="aside" class="col-md-3" style="background-color: white; border-radius: 15px; ">
						<!-- aside Widget -->
						<div class="aside" style="">
							<h3 class="aside-title">Categories {{ this.recherche }}</h3>
							<div class="checkbox-filter">

								<div class="input-checkbox">
									<input type="checkbox" id="category-1">
									<label for="category-1">
										<span></span>
										Légumes
										<small>(120)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-2">
									<label for="category-2">
										<span></span>
										Fruits
										<small>(740)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-3">
									<label for="category-3">
										<span></span>
										Céréale
										<small>(1450)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-4">
									<label for="category-4">
										<span></span>
										Noix
										<small>(578)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-5">
									<label for="category-5">
										<span></span>
										Tubercules
										<small>(120)</small>
									</label>
								</div>

							</div>
						</div>
						<!-- /aside Widget -->

						<!-- aside Widget -->
						<!-- <div class="aside">
							<h3 class="aside-title">Price</h3>
							<div class="price-filter">
								<div id="price-slider"></div>
								<div class="input-number price-min">
									<input id="price-min" type="number">
									<span class="qty-up">+</span>
									<span class="qty-down">-</span>
								</div>
								<span>-</span>
								<div class="input-number price-max">
									<input id="price-max" type="number">
									<span class="qty-up">+</span>
									<span class="qty-down">-</span>
								</div>
							</div>
						</div> -->
						<!-- /aside Widget -->

						<!-- aside Widget -->
						<div class="aside">
							<!-- <h3 class="aside-title">Brand</h3>
							<div class="checkbox-filter">
								<div class="input-checkbox">
									<input type="checkbox" id="brand-1">
									<label for="brand-1">
										<span></span>
										SAMSUNG
										<small>(578)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-2">
									<label for="brand-2">
										<span></span>
										LG
										<small>(125)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-3">
									<label for="brand-3">
										<span></span>
										SONY
										<small>(755)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-4">
									<label for="brand-4">
										<span></span>
										SAMSUNG
										<small>(578)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-5">
									<label for="brand-5">
										<span></span>
										LG
										<small>(125)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-6">
									<label for="brand-6">
										<span></span>
										SONY
										<small>(755)</small>
									</label>
								</div>
							</div> -->
						</div>
						<!-- /aside Widget -->
           <!--  -->
						<!-- aside Widget -->
						<!-- <div class="aside">
							<h3 class="aside-title">Liste publications</h3>
							<div class="product-widget" v-for="produit in liste_produit_tmp"
             :key="produit.id"
             style="margin-bottom: 30px;"
             @click="redirection(produit.id)">
								<div class="product-img">
									<img :src="produit.images"
                    alt="picture"
                    width="60"
                    height="60">
								</div>
								<div class="product-body">
									<p class="product-category">Category</p>
									<h3 class="product-name"><a href="#">{{ produit.libelle_produit }}</a></h3>
									<h4 class="product-price">{{ produit.prix_produit }} Fcfa</h4>
								</div>
							</div>

						</div> -->
						<!-- /aside Widget -->
					</div>
					<!-- /ASIDE -->

					<!-- STORE -->
					<div id="store" class="col-md-9">
						<!-- store top filter -->
						<div class="store-filter clearfix">
							<!-- <div class="store-sort">
								<label>
									Sort By:
									<select class="input-select">
										<option value="0">Popular</option>
										<option value="1">Position</option>
									</select>
								</label>

								<label>
									Show:
									<select class="input-select">
										<option value="0">20</option>
										<option value="1">50</option>
									</select>
								</label>
							</div> -->
              <div class="input-group mb-3">
                 <!-- <Button label="Rechercher"/>  -->
                <div class="form-floating">
                  <input type="text" class="form-control" id="floatingInputGroup1" v-model="recherche">
                  <label for="floatingInputGroup1">Entrer le nom du produit</label>
                </div>
              </div>

							<ul class="store-grid">
								<li class="active"><i class="fa fa-th"></i></li>
								<router-link to="/servicesListe"><li><a href="#"><i class="fa fa-th-list"></i></a></li></router-link>
							</ul>
						</div>
						<!-- /store top filter -->

						<!-- store products -->
						<div class="row">
							<!-- product -->
							<div class="col-md-4 col-xs-6" v-for="produit in filterProducts" :key="produit.id">
								<div class="product" style="border-radius: 10px 10px 0px 0px">
									<div class="product-img blog-card__image">
										<img :src="produit.images" alt="picture" width="290" height="205" style="border-radius: 10px 10px 0px 0px">
                    						<div class="product-label">
											<span class="sale" style="font-family: Segoe UI;">Catégorie</span>
											<span class="new"></span>
										</div>
									</div>
									<div class="product-body" >
										<h3 class="product-name" style="font-family: Segoe UI;  font-size: 20px"> <a href="#">{{ produit.Nom }}</a></h3>
										<p class="product-category" style="font-family: Segoe UI;">Quantité : {{ produit.quantite_produit }}</p>
                    					<h4 class="product-price" style="font-family: Segoe UI;">Prix : {{ produit.prix_produit }} Fcfa</h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-thumbs-up"></i><span class="tooltipp" >J'aime</span></button>
											<!-- <button class="add-to-compare"><i class="fas fa-comment-alt"></i><span class="tooltipp">Commenter</span></button> -->
											<button class="quick-view"><i class="fas fa-share"></i><span class="tooltipp">Partager</span></button>
											<button class="add-to-wishlist"><i class="fa fa-heart"></i><span class="tooltipp">Ajouter aux favoris</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn" @click="redirection(produit.id)"><i class="fa fa-shopping-cart"></i>VOIR</button>
									</div>
								</div>
							</div>
							<!-- /product -->
						</div>
						<!-- /store products -->

						<!-- store bottom filter -->
						<!-- <div class="store-filter clearfix">
							<ul class="store-pagination">
								<li class="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
							</ul>
						</div> -->
            				<Paginator :rows="12" :totalRecords="  listeProduits && listeProduits.donnees ? listeProduits.donnees.length : 0 " @page="onPage($event)" style="margin-top: 65px;"></Paginator>
						<!-- /store bottom filter -->
					</div>
					<!-- /STORE -->
				</div>
				<!-- /row -->
			</div>
			<!-- /container -->
		</div>
		<!-- /SECTION -->
        
    <allFooter />
  </main>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import allHeader from "../components/headFootPage/main-header.vue";
import allFooter from "../components/headFootPage/main-footer.vue";
import carouselPrime from "../components/carouselPrime.vue";
// import ProductList from "../components/ProductList.vue";

export default {
  name: "Services",
  components: {
    allHeader,
    allFooter,
    carouselPrime,
  },
  data() {
    return {
      recherche: "",
      first: 0,
      liste_produit_tmp: [],
      
    };
  },
  watch: {
    listeProduits() {
      if (this.listeProduits) {
        console.log(this.listeProduits.donnees);
        // let idProduits = this.listeProduits.donnees.libelle_produit;
        // console.log(idProduits);
        // console.log(this.listeProduits.donnees.length);
        // console.log("mes produits :::: ");
        // console.log(this.listeProduits.donnees);
        // console.log(
        //   "Taille de mes donnees : ",
        //   this.listeProduits.donnees.length
        // );
        this.liste_produit_tmp = this.listeProduits.donnees.slice(0, 12);
        // console.log("mes 10 premiers elt sont : ");
        // console.log(this.liste_produit_tmp);
      }
    },
    msgSuccessProduit() {
      if(this.msgSuccessProduit === "Le produit a bien été envoyé") {
        this.getUserProducts()
        console.log("Le produit a bien été envoyé");
    }
    },
  },

  computed: {
    ...mapGetters(["listeProduits", "msgSuccessProduit"]),
    filterProducts() {
		console.log(this.recherche);
      return this.liste_produit_tmp.filter(produit => produit.Nom?.toLowerCase().includes(this.recherche.toLowerCase()))
    }
  },

  created() {
    this.getProduits();
  },

  methods: {
    ...mapActions(["getProduits"]),
    redirection(produit) {
      const path = `/detailduproduit/` + produit;
      if (this.$route.path !== path)
        this.$router.push({ path, params: { id: produit } });
    },
    onPage(event) {
      // console.log("la valeur du onPage : ");
      // console.log(event);
      // console.log("valeur de row & first :");
      // console.log(event.first, event.rows);
      // console.log("calcule de page, ma nouvelle liste sera :");
      this.liste_produit_tmp = this.listeProduits.donnees.slice(
        event.first,
        event.first + 12
      );
      // console.log(this.liste_produit_tmp);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/produit-detail.css";

</style>