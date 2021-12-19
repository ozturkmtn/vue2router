<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr>
    <p>Kullanici ID bilgisi : {{$route.params.id}}</p>
    <p v-if="$route.params.joy">Joy : {{$route.params.joy}}</p>
    <router-link tag="button" class="btn btn-primary" :to="navigationLink">Edit</router-link>
    <router-link tag="button" class="btn btn-primary" :to="joyLink">Joy</router-link>


    <p v-if="$route.query.name" style="padding: 20px;">$route.query.name :
      {{$route.query.name}}
    </p>

  </div>
</template>
<script>
  export default {
    data(){
      return {
        navigationLink: {
          name:'user_edit',
          params:{id:this.$route.params.id},
          query:{name:'Metin',lastName:'Ozturk'},
          hash:'#data'
        },
        joyLink: {
          name: 'user_joy',
          params:{id:this.$route.params.id,joy:"JOYOyoY"},
          query: {name:"NAME-IS-HERE"}
        }
      }
    }
  }
</script>
