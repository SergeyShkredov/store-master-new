<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="productImage" :alt="productName" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ productName }}</h4>
        <div class="card-text">{{ productCategory }}</div>
        <div class="card-text">{{ productPrice }}</div>
<!--        <div class="row justify-content-end">-->
<!--          <button class="btn btn-primary" @click="getProduct(productId)">Add to cart</button>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// import ProductService from "@/services/productService";

export default {
  name: "product",
  props: ['productId', 'productName', 'productImage', 'productPrice', 'productCategory'],
  // methods: {


    // getProduct(productId) {
    //   ProductService.getProduct(productId)
    //       .then(response => {
    //         this.product = response.data
    //       })
    //       .catch(e => {
    //         alert(e)
    //       })
    // },

  //   getProduct(productId) {
  //     ProductService.getProduct(productId)
  //         .then(response => {
  //           this.currentProduct = response.data;
  //           console.log(response.data);
  //         })
  //         .catch(e => {
  //           console.log(e);
  //         });
  //   },
  // },
  // mounted() {
  //   this.getProduct()
  // },


};

</script>

<style scoped>

</style>