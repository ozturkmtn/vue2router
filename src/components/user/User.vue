<template>
  <div class="container">
    <hr>
    <p>Same Component User ID : {{id}}</p>
    <hr>

    <router-view></router-view>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Navigate To Home</button>
    <hr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      joy:this.$route.params.joy
    }
  },
  methods: {
    navigateToHome() {
      // this.$router.push("/")
      // this.$router.push({path: "/"})
      this.$router.push({name: "anasayfa"})
    }
  },
  // watch:{
  //   "$route"(to,from){
  //     this.id = to.params.id;
  //     console.log('User.vue',from.params.id);
  //   }
  // }
}
</script>
