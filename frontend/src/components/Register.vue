<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-5 mx-auto">
        <form v-on:submit.prevent="register">
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
          <div class="form-group">
            <label for="name">Last name</label>
            <input type="text" v-model="name" class="form-control" name="name" placeholder="Enter your name name">
          </div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" name="password" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="bio"> Bio</label>
            <input type="text" v-model="bio" class="form-control" name="bio" placeholder="Enter bio">
          </div>

          <button type="submit" class="btn btn-lg btn-primary btn-block">Register!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import router from '../router'
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',
        bio: ''
      }
    },
    methods: {
      register () {
        axios.post('/users/register',
          {
            name: this.name,
            email: this.email,
            password: this.password,
            bio: this.bio
          }
        ).then((res) => {
          router.push({ name: 'Login' });
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>
