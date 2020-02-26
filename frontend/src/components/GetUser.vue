<template>
  <div class="row">
    <div class="col-xs-9">
      <app-products-list v-for="(product, i) in products" v-if="product !== undefined" :product="product" :key="i"></app-products-list>
    </div>
  </div>
</template>
<script>
    export default {
        name: "GetUser"
    }
    <script>
    export default {
      props: ['cid'],
      computed: {
        items () {
          console.log(this.$store.getters.getShopingCart)
          return this.$store.getters.getShopingCart
        },

      },

      methods: {
        onCheckOut () {
          this.$router.push('/checkout')
        }
      },
      created () {
//      this.$store.dispatch('nullAddedArray')
      }
    }
</script>
