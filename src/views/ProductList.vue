<template>
  <div>

    <div class="filters">
    <v-select
        :selected="selected"
        :options="categories"
        @select="selectCategory"
    />
    </div>

    <template>
      <div id="app" class="container my-5">
        <h1>My online store</h1>

        <div class="row">
          <Product
              v-for="product in filteredProducts"
              :key="product.productId"
              :productId="product.productId"
              :productName="product.productName"
              :productCategory="product.category.categoryName"
              :productImage="product.productImage"
              :productPrice="product.productPrice"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import ProductService from '../services/productService'
import Product from "@/views/Product";
import vSelect from "@/views/SelectItem";

export default {
  name: 'products',
  data() {
    return {
      products: [],
      categories: [
        // {categoryId: 0, categoryName: 'ALL'},
        // {categoryId: 1, categoryName: 'cat1'},
        // {categoryId: 2, categoryName: 'cat2'},
      ],
      selected: 'All',
      sortedProducts: [],
    }
  },
  selected: {
    type: String,
    default: ''
  },

  computed: {
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.products
      }
    },
  },

  methods: {
    retrieveProducts() {
      ProductService.getAllProducts()
          .then(response => {
            this.products = response.data
          })
          .catch(e => {
            alert(e)
          })
    },

    getCategories() {
      ProductService.getCategories()
          .then(response => {
            this.categories = response.data
          })
          .catch(e => {
            alert(e)
          })
    },

    selectCategory(option) {
      this.selected = option.categoryName;
      this.sortedProducts = this.products.filter(function(product) {
        return product.category.categoryId === option.categoryId
      })
    },

    // sortByCategories(category) {
    //   let vm = this;
    //   this.sortedProducts = []
    //   this.products.map(function (product) {
    //     if (product.category.categoryId === category.categoryId) {
    //       vm.sortedProducts.push(product);
    //     }
    //   })
    //   // this.selected === category.categoryName
    // }




  //   getProduct() {
  //   ProductService.getProduct(id)
  //       .then(response => {
  //         this.products = response.data
  //       })
  //       .catch(e => {
  //         alert(e)
  //       })
  // }
},


  mounted() {
    this.retrieveProducts()
    this.getCategories()
  },

  components: {
    Product,
    vSelect
  }
}

</script>


