<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hr />
    <div id="selectByID">Selected by its id 'selectByID'</div>
    <br />
    <button data-step="3">Selected by the 'data-step="3"' attribute</button>
    <hr />
    <SecondComponent/>
    <VTour ref="tour" :steps="steps" />

</template>

<script setup>
    import { ref, onMounted } from 'vue';
    const tour = ref(null);

    const steps = [
        {
            target: '#selectByID',
            content: 'This is the 1. step',
        },
        {
            target: '.selectByClass',
            content: 'This is the second step, placed on the bottom of the target',
            placement: 'bottom',
        },
        {
            target: '[data-step="3"]',
            content: 'This is the third step',
        },
        {
            target: '#secondID',
            content: 'This is the Second Component - 4. step',
        },

    ];

    onMounted(() => {
        tour.value.startTour();
    });
</script>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import SecondComponent from './components/SecondComponent.vue'



export default {
  name: 'App',
  components: {
      HelloWorld,
    SecondComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
