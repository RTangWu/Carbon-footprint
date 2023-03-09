<template>
      <div id="nav">
        <nav class="navbar fixed-top">
        <a class="navbar-brand" href="#">
            <br />
            <img src="../Assets/Logo.png" alt="CarbonFootprintLogo" width="64" height="64"/>
            <br />
        </a>
        
          <div class="navbar-nav mr-auto">
                <router-link to="/">Home</router-link>
                <router-link to="/BusAndTrain">Bus&Train</router-link>
                <router-link to="/Car">Car</router-link>
                <router-link to="/House">House</router-link>
        </div>
    </nav>
     </div>
      <router-view/>
    </template>
  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1a925c;
}

#nav a.router-link-exact-active {
  color: rgb(238, 255, 238);
  background: rgb(21, 152, 86);
  border-radius: .10rem;
}

html, 
body {
   margin: 90;
   padding: 90;
   background-color:rgb(227, 199, 163);
}

.fixed-top {
  position: fixed;;
  top: 0;
  width: 100%;
}

</style>

<script>

export default{
    data(){
        return{
            logo: 'Assets/Logo.png'
        }
    }
    


    
}
</script>