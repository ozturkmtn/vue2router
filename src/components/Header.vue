<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="active" exact><a>User</a></router-link>
    <router-link to="/user/14" tag="li" active-class="active" exact><a>User 14</a></router-link>
    <router-link to="/user/12" tag="li" active-class="active" exact><a>User 12</a></router-link>
  </ul>
</template>
<script>
  export default {}
</script>
