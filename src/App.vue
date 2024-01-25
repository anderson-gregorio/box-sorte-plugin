<script lang="ts">
import BoxSorteCe from './BoxSorte.ce.vue'

export default {
  data() {
    return {
      showed: true,
      value: '{"nome": "Anderson", "cep": "30160042"}',
      theme: 'corinthians'
    }
  },
  methods: {
    show() {
      this.showed = !this.showed
    },
    updateValue() {
      this.value = (this.$refs.inputJson as any).value
    },
    updateTheme() {
      this.theme = this.theme === 'corinthians' ? 'palmeiras' : 'corinthians'
    }
  },
  components: {
    BoxSorteCe
  }
}
</script>

<template>
  <BoxSorteCe :show="showed" :value="value" :theme="theme" />

  <div>
    <button @click="show()">Show/Hide Plugin</button>
  </div>

  <div>
    <label for="">'Value' do plugin</label>
    <textarea ref="inputJson">{"nome": "Anderson", "cep": "30160042"}</textarea>
    <div>
      <button @click="updateValue()">Update 'Value' Plugin</button>
    </div>
    <div>
      <button @click="updateTheme()">Troca de Tema</button>
    </div>
  </div>
</template>

<style>
label {
  margin-top: 16px;
  display: block;
}
button {
  margin: 8px 0;
}
</style>
