<template>
  <div v-if="show" class="modal active" id="modal-id">
    <div @click="closeModal()" class="modal-overlay" aria-label="Close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title h5">Box da Sorte</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <img
            class="img-loading"
            v-if="loading"
            alt="Loading"
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          />

          <p v-if="endereco">
            {{ endereco }}
          </p>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="closeModal()">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    show: Boolean,
    value: String
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false)
    },
    getCEP() {
      const cep = this.dataTransfer?.cep

      if (cep) {
        this.loading = true
        this.endereco = ''

        // Simular requisição

        setTimeout(() => {
          fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((data) => (this.endereco = `${data.logradouro} - ${data.bairro}`))

          this.loading = false
        }, 3500)
      }
    }
  },
  data() {
    return {
      dataTransfer: {} as any,
      loading: false,
      endereco: ''
    }
  },
  watch: {
    value: function (newValue) {
      if (newValue) {
        this.dataTransfer = JSON.parse(newValue)
      }

      this.getCEP()
    }
  },
  mounted() {
    if (this.value) {
      this.dataTransfer = JSON.parse(this.value)
    }

    this.getCEP()
  }
}
</script>
