<template>
  <div>
    <div id="selectByID">Selected by its id 'selectByID'</div>
    <p class="selectByClass">Telected by its class 'selectByClass'</p>
    <button data-step="3">Selected by the 'data-step="3"' attribute</button>

    <VTour :steps="steps" autoStart/>
  </div>
</template>

<script setup>
const steps = [
  {
    target: '#selectByID',
    content: 'This is the first step',
  },
  {
    target: '.selectByClass',
    content: 'This is the second step, placed on the bottom of the target',
    placement: 'bottom',
  },
  {
    target: '[data-step="3"]',
    content: 'This is the third step',
  }
];
</script>