<template>
    <Navbar />
    <div>
        <h1>Car</h1>
    </div>
    <form @submit.prevent="handleSubmit">
    <label for="Fuel"> Fuel    </label>
    <select v-model="selected2">
    <option disabled value="">Please select one</option>
    <option>Diesel</option>
    <option>Petrol</option>
    </select>
    <br>
    <label for="Mileage"> Mileage    </label>
    <input type="number" name ="Mileage"  v-model ="Mileage"/>
    <select v-model="selected1">
    <option disabled value="">Please select one</option>
    <option>Km</option>
    <option>Miles</option>
    </select>
    <br>
    <label for="Efficiency"> Efficiency(MPG)   </label>
    <input type="number" name ="Efficiency"  v-model ="Efficiency"/>
    <br>
    <button> Calculate and Finish Carbon Footprint  </button>
    <br>
    <a>Total Carbon Footprint of Your Car = {{answer}} KG of CO2e</a>
    <br>
  </form>
  <h3>Cars and Carbon Emissions:</h3>
  <h4>  There are two ways to reduce C02 emissions from cars: by making vehicles more efficient or by changing the fuel used. In 2019, the majority of cars road transport in Europe used diesel (67%) followed by petrol(25%).However, electric cars are gaining traction, representing 17.8% of all new registered passenger vehicles in2021, a significant increase from10.7% in 2020.Sales of electric vehicles - battery electric vehicles and plug-in hybrid electric vehicles - have surged since 2017 and tripled in 2020 when the current CO2 targets started to apply.  </h4>
  <br>
  <h3>Carbon Footprint: </h3>
  <h4> According to the EPA (United States Environmental Protection Agency) a typical average vehicle that civilians use takes up about 4.6 metric tonnes of carbon dioxide every year- and to put that in scale- in 2010 New York City emitted 54 million tonnes this was equivalent to covering the Empire State Building with carbon emissions and some of Brooklyn and the Times Square. Not to mention that in Greater Manchester there were reported 1.1 million cars and this with the average carbon emission gives us 5,159,000 in total metric tonnes of carbon emission tis would dominate an entire village with its size in visual form- this is how just one city uses emissions with cars- now imagine San Francisco with the amount of cars there and the emissions- reducing this by eliminating diesel and slowly going from petrol to hybrid and then electric would reduce significant amounts of carbon emissions from the world.</h4>
  <h4>The amount of carbon-containing greenhouse gases released into the environment by an activity, process, individual, or group, expressed usually as the equivalent in kilograms of carbon dioxide, it is also the amount of carbon-containing greenhouse gases released into the environment by an activity, process, individual, or group, expressed usually as the equivalent in kilograms of carbon dioxide.</h4>
  <h5>WWF Carbon Footprints and their Impacts on the planet.https://footprint.wwf.org.uk/#/</h5>

</template>
<script>
import Navbar from "../Components/Navigation.vue"
export default{
    data() {
    return {
      selected1: '',
      selected2: '',
      Efficiency:0,
      Mileage:0,
      answer:0,
      miles:0,
      submitted:false,
    }
  },
  methods:{
    handleSubmit(e){
        this.submitted =true
        if(this.selected2 =="Diesel"){
            if(this.selected1 == "Miles"){
                this.answer = this.Mileage/this.Efficiency*2.68
            }
            else if(this.selected1 =="Km"){
                this.miles = this.Mileage * 5/8,
                this.answer = this.miles/this.Efficiency*2.68

            }
            else{
                return this.answer;
            }
        }
        else if(this.selected2 =="Petrol"){
            if(this.selected1 == "Miles"){
                this.answer = this.Mileage/this.Efficiency*2.2
            }
            else if(this.selected1 =="Km"){
                this.miles = this.Mileage * 5/8,
                this.answer = this.miles/this.Efficiency*2.2

            }
            else{
                return this.answer;
            }
        }else{
            return this.answer;
        }
    }

  },
    components:{
        Navbar
    }
}
</script>

