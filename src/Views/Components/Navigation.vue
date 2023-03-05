<template>
    <!-- <div>
        <img  alt = "Logo" src="../Assets/logo.png">
    </div> -->
<div>

    <nav>
        <img  alt = "Logo" src="../Assets/logo.png">
      <router-link to="/"> Home  </router-link>
      <router-link to="/BusAndTrain">   Bus&Train </router-link>
      <router-link to="/Car"> Car   </router-link>
      <router-link to="/House">  House</router-link>
    </nav>
    <router-view />
  </div>

 

</template>

<script>

export default{
    data(){
        return{
            logo: 'Assets/Logo.png'
        }
    }
    


    
}
</script>