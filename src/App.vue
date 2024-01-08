<script lang="ts">
import BoxSorteCe from './BoxSorte.ce.vue'

export default {
  data() {
    return {
      showed: true
    }
  },
  methods: {
    show() {
      this.showed = !this.showed
    }
  },
  components: {
    BoxSorteCe
  }
}
</script>

<template>
  <BoxSorteCe :show="showed" />

  <button @click="show()">Teste</button>
</template>
