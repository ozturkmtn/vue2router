<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr>
    <p>Kullanici ID bilgisi {{$route.params.id}}</p>
    <p>Ad : {{$route.query.name}}</p>
    <p>Soyad : {{$route.query.lastName}}</p>
    <hr>
    <p>Lokal ID bilgisi {{id}}</p>
    <p>Lokal Ad : {{name}}</p>
    <p>Lokal Soyad : {{lastName}}</p>
    <div style="height: 800px;"></div>

    <router-link tag="button" class="btn btn-primary" :to="joyLink">Joy</router-link>
    <router-link class="" tag="a" :to="joyLink">Joy Link</router-link>
    <div id="data" style="margin-bottom: 200px;">Bu bir Yer</div>
    <button class="btn btn-primary" @click="saved = true">Onayla</button>
    {{saved}}
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id: this.$route.params.id,
        name: this.$route.query.name,
        lastName: this.$route.query.lastName,
        joyLink: {
          name: 'user_joy',
          params:{id:34,joy:"JOYOyoY"},
        },
        saved: false
      }
    },
    beforeRouteEnter(to,from,next) {
      console.log("Component kontrol");
      if (to.query.name === 'Metin'){
        next();
      } else {
        next({name:'user_start'});
      }
    },
    beforeRouteLeave(to,from,next) {
      if (this.saved){
        next();
      } else {
        if (confirm("Çıkmak istiyor musunuz?")) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
