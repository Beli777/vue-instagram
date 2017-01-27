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
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
        login: {
            email: '',
            password: '',
        }
    }
  },
  methods: {
      handleLoginFormSubmit(){
          console.log('success')
      }
  }
}
</script>
