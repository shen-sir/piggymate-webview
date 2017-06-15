<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
html,body{
  /*height: 100%;*/
  /*border:1px solid black;*/
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html{
  font-size: calc(100vw/3.75);
  /*height: 100%;*/
}
body{
  font-size: 0.15rem;
  /*height: 100%;*/
}
input{
  -webkit-appearance:none;
  outline:none;
}
input:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-user-modify:read-write-plaintext-only;
}
*:focus {outline: none;}
a{
  text-decoration:none;
}
a,button,input{-webkit-tap-highlight-color:rgba(255,0,0,0);}
/*@media screen and (max-resolution:288dpi){
  body{
    background: red;
  }
}*/
</style>
