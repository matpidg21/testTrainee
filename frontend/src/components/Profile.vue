<template>
  <div class="container">
    <div class="jumbotron mt-5">
      <div class="col-sm-8 mx-auto">
        <h1 class="text-center"> PROFILE</h1>
      </div>
      <table class="table col-md-6 mx-auto">
        <tbody>
        <tr>
          <tb><h2 class="text-center">HELLO </h2></tb>
        </tr>

        <tr>
          <tb><h2 class="text-center">Email </h2></tb>
          <tb> <h3 class="text-center">{{email}}</h3></tb>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import jwtDecode from 'jwt-decode'

  export default {
    data(){
      const token = localStorage.usertoken;
      const decoded = jwtDecode(token);
      return{
        email: decoded.email
      }
    }
  }
</script>

