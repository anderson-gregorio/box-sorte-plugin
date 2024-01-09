<template>
  <div>
    <div class="fab-wrapper cursor" v-if="show" role="button" @click="showPopup()">
      <img alt="Box da Sorte" src="https://gamecomm.s3.amazonaws.com/Upload/1/favicon.png" />
    </div>

    <ModalSorteio v-model:show="showModal" :value="value" />
  </div>
</template>

<script lang="ts">
import ModalSorteio from './ModalSorteio.vue'

export default {
  props: {
    show: Boolean,
    value: String
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    showPopup() {
      this.showModal = true
    }
  },
  components: {
    ModalSorteio
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
</style>
