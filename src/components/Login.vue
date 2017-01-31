<template>
  <div class="login">
    <h1>Login</h1>
    <form v-on:submit.prevent="handleLoginFormSubmit()">
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <ul class="listUsers">
    <li v-text="" v-for="user in users">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
const option = {}
export default {
  http: {
    emulateJSON: true,
    emulateHTTP: true
},
  name: 'login',
  data () {
    return {
        login: {
            email: '',
            password: ''
        },
        users: []
    }
  },
  methods: {
      handleLoginFormSubmit(){
          this.$http.get('https://jsonplaceholder.typicode.com/users/', { email: this.login.email })
          .then(function(response){
            this.users = response.data
            });
      }
  }
}
</script>
<style lang="scss" scoped>
.listUsers{
  li{
    font-size: 1.6rem;
  }
}
</style>
