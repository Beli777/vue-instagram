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
    <li v-text="" v-for="user in user">{{user.name}}</li>
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
        user: []
    }
  },
  methods: {
      handleLoginFormSubmit(){
          this.$http.get('https://jsonplaceholder.typicode.com/users/')
          .then(function(response){
                if(this.login.email === "Sincere@april.biz"){
                    this.user = response.data
                }else{
                  alert('error')
                }
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
