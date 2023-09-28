<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada Seleccionado</h1>

  </div>
  <FloatAButton/>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components:{
    FloatAButton:defineAsyncComponent(()=>import('../components/FloatingActionButton.vue'))
  }
}
</script>

<style lang="scss" scoped>
div{
    height: 100%;
}
</style>