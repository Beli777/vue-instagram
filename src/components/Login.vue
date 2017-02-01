<template>
  <div class="login">
    <h1>Login</h1>
    <form v-on:submit.prevent="handleLoginFormSubmit()">
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="txtEmail" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="password" type="password" class="form-control" id="txtPassword" placeholder="Password">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
import Firebase from 'firebase'

const option = {}
export default {
  name: 'login',
  data () {
    return {
            email: '',
            password: ''
    }
  },
  methods: {
      handleLoginFormSubmit(){
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email , password)
          .then(function(firebaseUser) {
                 console.log('nice')
                 firebase.auth().currentUser.getToken()
                .then(function(idToken) {
                    console.log(idToken)
                }).catch(function(error) {
                    console.log('fail hard')
                });
             })
            .catch(function(error) {
                  console.log('fail')
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
