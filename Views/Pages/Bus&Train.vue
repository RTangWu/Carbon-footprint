<template>
    <Navbar/>
    <div>
        <h1>Bus and Train</h1>
    </div>

    <form @submit.prevent="handleSubmit">
    <input type="radio" v-model="pick" value="Miles" >
    <label for="miles">Miles</label>
    <input type="radio"  v-model="pick" value="Km">
    <label for="km">km</label>
    <br>
    <div>Picked: {{ pick }}</div>
    <br>
    <label for="Bus"> Bus    </label>
    <input type="number" name ="Bus"  v-model ="Bus"/>
    <br>
    <label for="Train"> Train  </label>
    <input type="number" name ="Train"  v-model ="Train"/>
    <br>
    <label for="Tram"> Tram   </label>
    <input type="number" name ="Tram"  v-model ="Tram"/>
    <br>
    <button> Calculate and Finish Carbon Footprint  </button>
    <br>
    <a>Total Carbon Footprint of Your Car = {{answer}} KG of CO2e</a>
  </form>
  <h3>Rail Emissions:</h3>
  <h4>Diesel and electricity consumptionincreased in the year April 2021 toMarch 2022. These increases led to a 2%rise in the total estimated CO2eemissions for passenger and freight (to2,282 kilo tonnes). This is thesecond lowest level since the comparabletime series started in April2011.</h4>
    <br>
    <h3>Bus Emissions</h3>
  <h4>Buses are one of the least carbonintensive forms of road vehicle transportper passenger, per mile in the UK.Combined with coaches, they representedonly 3% of UK transport emissions and 1%of total mileage in 2019.They remain the most popular form ofpublic transport, accounting for around50% of all journeys on public transport.Between 1990 and 2019, emissions havedecreased by 42% as fuelefficiency has improved and zero emissionbuses have started to enterservice.</h4>
    <br>
  <h3>Carbon Footprint: </h3>
  <h4>The amount of carbon-containing greenhouse gases released into theenvironment by an activity, process, individual, or group, expressed usually as theequivalent in kilograms of carbon dioxide, it is also the amount of carbon-containinggreenhouse gases released into theenvironment by an activity, process, individual, or group, expressedusually as the equivalent in kilograms of carbon dioxide.</h4>
  
</template>
<script>
import Navbar from "../Components/Navigation.vue"
export default{
    data(){
        return{
            pick: 'Miles',
            submitted:false,
            answer:0,
            Bus:0,
            Train:0,
            Tram:0,
            BusMiles:0,
            TramMiles:0,
            TrainMiles:0,
        }
    },
    methods:{
      handleSubmit(e){
      this.submitted =true
      if(this.pick == "Miles"){
        this.BusMiles = this.Bus*0.299
        this.TrainMiles= this.Train*0.05945
        this.TramMiles = this.Tram *0.4625

        this.answer = this.TrainMiles+this.BusMiles+this.TramMiles

      }
      else if(this.pick =="Km"){
        this.BusMiles =  this.Bus* 5/8*0.299
        // this.BusMiles = this.BusMiles*0.299

        this.TrainMiles = this.Train*5/8*0.05945
        // this.TrainMiles= this.TrainMiles*0.05945

        this.TramMiles= this.Tram * 5/8*0.4625
        // this.TramMiles = this.TramMiles *0.4625

        this.answer = this.TrainMiles+this.BusMiles+this.TramMiles
      }
      else{
        return this.answer;
      }
      }
    },

    components:{
        Navbar
    }
}
</script>