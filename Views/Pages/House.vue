<template>
    <Navbar />
    <div>
        <h1>House</h1>
    </div>

    <form @submit.prevent="handleSubmit">
    <label for="Electricity"> Electricity    </label>
    <input type="number" name ="Electricity"  v-model ="Electricity"/>
    <br>
    
    <label for="Heating Oil"> Heating Oil   </label>
    <input type="number" name ="Heating Oil"  v-model ="HeatingOil"/>
    <select v-model="selected2">
    <option disabled value="">Please select one</option>
    <option>kWh</option>
    <option>litres</option>
    </select>
    <br>
    <label for="Gas"> Gas   </label>
    <input type="number" name ="Gas" v-model ="Gas" />
    <select v-model="selected1">
    <option disabled value="">Please select one</option>
    <option>kWh</option>
    <option>Therms</option>
    </select>
    <br>
    <button> Calculate and Finish Carbon Footprint  </button>
    <br>
    <a>Total Carbon Footprint of Your Car = {{answer}} KG of CO2e</a>
  </form>
  <h3>House Emissions:</h3>
  <h4>Residential properties are responsible forbetween 17-21% of energy-related carbonemissions globally. That figure coverseverything from the electricity we use topower televisions and other electronicdevices, as well as the fuel we use to heatour water and cook – but in cold climatesthe majority of a house's energy budgetgoes on heating. Add in the carbonemissions released in the manufacture ofconcrete, metal and other buildingmaterials along with the constructionprocess itself, and it's clear that housinghas a considerable role to play if the worldis to meet its ambition to reduce globalcarbon emissions to net zero by 2050.Shifting to lower carbon building materialsis also necessary. Today around 10% ofglobal energy-related emissions comefrom materials used in construction andmaintenance of buildings, includinghousing. "Cement and iron and steel areenergy intensive in both their productionand also in their transport," says AngelHsu, professor of public policy and theenvironment at the University of NorthCarolina-Chapel Hill. "Building materialsare critical in helping the housing sectorreach net zero."</h4>
    <br>
  <h3>Carbon Footprint: </h3>
  <h4>The amount of carbon-containing greenhouse gases released into theenvironment by an activity, process, individual, or group, expressed usually as theequivalent in kilograms of carbon dioxide, it is also the amount of carbon-containinggreenhouse gases released into theenvironment by an activity, process, individual, or group, expressedusually as the equivalent in kilograms of carbon dioxide.</h4>
</template>
<script>

import Navbar from "../Components/Navigation.vue"
export default{
    data() {
    return {
      selected1: '',
      selected2: '',
      answer:0,
      Electricity:0,
      Gas:0,
      HeatingOil:0,
      submitted:false,
      ElectricityAnswer:0,
      GasAnswer:0,
      HeatingOilAnswer:0,

    }
  },
  methods:{
    handleSubmit(e){
        this.submitted =true
       if(this.selected1 =='' && this.selected2 ==''){
          this.answer = this.Electricity*0.193

        }

        
        if (this.selected2 ==''){
          if(this.selected1 == "kWh"){
            this.ElectricityAnswer = this.Electricity*0.193
            this.GasAnswer= this.Gas*0.183
            this.answer = this.ElectricityAnswer+this.GasAnswer
          }
          else if(this.selected1 =="Therms"){
            this.ElectricityAnswer = this.Electricity*0.193
            this.GasAnswer= this.Gas*29.3*0.183
            this.answer = this.ElectricityAnswer+this.GasAnswer
          }
          else{
            return this.answer;
          }
        }
        else if(this.selected1 =="kWh"){
            if(this.selected2 == "kWh"){
              this.ElectricityAnswer = this.Electricity*0.193
              this.GasAnswer = this.Gas*0.183
              this.HeatingOilAnswer= this.HeatingOil*0.245
              this.answer = this.ElectricityAnswer+this.GasAnswer+this.HeatingOilAnswer
            }
            else if(this.selected2 =="litres"){
              this.ElectricityAnswer = this.Electricity*0.193
              this.GasAnswer = this.Gas*0.183
              this.HeatingOilAnswer =this.HeatingOil*10*0.245
              this.answer = this.ElectricityAnswer+this.GasAnswer+this.HeatingOilAnswer

            }
            else{
                return this.answer;
            }
        }
        else if(this.selected1 =="Therms"){
            if(this.selected2 == "kWh"){
              this.ElectricityAnswer = this.Electricity*0.193
              this.GasAnswer = this.Gas*29.3*0.183
              this.HeatingOilAnswer= this.HeatingOil*0.245
              this.answer = this.ElectricityAnswer+this.GasAnswer+this.HeatingOilAnswer
            }
            else if(this.selected2 =="litres"){
              this.ElectricityAnswer = this.Electricity*0.193
              this.GasAnswer = this.Gas*29.3*0.183
              this.HeatingOilAnswer= this.HeatingOil*10*0.245
              this.answer = this.ElectricityAnswer+this.GasAnswer+this.HeatingOilAnswer

            }
            else{
                return this.answer;
            }
        }
       

       
        else if(this.selected1 =="" ){
          if(this.selected2 == "kWh"){
            this.ElectricityAnswer = this.Electricity*0.193
            this.HeatingOilAnswer= this.HeatingOil*0.245
            this.answer = this.ElectricityAnswer+this.HeatingOilAnswer
          }
          else if(this.selected2 =="litres"){
            this.ElectricityAnswer = this.Electricity*0.193
            this.HeatingOilAnswer= this.HeatingOil*10*0.245
            this.answer = this.ElectricityAnswer+this.HeatingOilAnswer
          }
          else{
            return this.answer;
          }
        }

       

        else{
            return this.answer
        }
    }

  },
    components:{
        Navbar
    }
}

</script>