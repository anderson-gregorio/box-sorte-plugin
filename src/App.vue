<script lang="ts">
import BoxSorteCe from './BoxSorte.ce.vue'

export default {
  data() {
    return {
      showed: true,
      value: '{"nome": "Anderson", "cep": "30160042"}'
    }
  },
  methods: {
    show() {
      this.showed = !this.showed
    },
    updateValue() {
      this.value = (this.$refs.inputJson as any).value
    }
  },
  components: {
    BoxSorteCe
  }
}
</script>

<template>
  <BoxSorteCe :show="showed" :value="value" />

  <div>
    <button @click="show()">Show/Hide Plugin</button>
  </div>

  <div>
    <label for="">'Value' do plugin</label>
    <textarea ref="inputJson">{"nome": "Anderson", "cep": "30160042"}</textarea>
    <button @click="updateValue()">Update 'Value' Plugin</button>
  </div>
</template>

<style>
label {
  margin-top: 16px;
  display: block;
}
</style>
