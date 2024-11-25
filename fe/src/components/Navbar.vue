<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item  ><router-link to="/">Danh sách</router-link> </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item >
          <a class="button">
           <router-link to="/user/create">Thêm mới </router-link>
          </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default{
    name:'nav-bar'
}
</script>
