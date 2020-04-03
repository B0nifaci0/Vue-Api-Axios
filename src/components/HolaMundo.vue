<template>
    <div id="app">
    <h1>Bienbenido a mi Blog</h1>
    <div class="post" v-for="pokemon in pokemons" :key='pokemon.name'>
        <p> {{pokemon.name}}</p>
   
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    data() {
        return{
            pokemons: []
        }
    },

 async mounted(){
    try{
     const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
     this.pokemons = data.results;   
             console.log(this.data);
 
    }catch(error){
        //console.log(this.pokemons);
        }
    }
}
</script>
