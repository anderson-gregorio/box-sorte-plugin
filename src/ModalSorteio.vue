<template>
  <div v-if="show" class="modal active" id="modal-id">
    <div @click="closeModal()" class="modal-overlay" aria-label="Close"></div>
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title h5">Box da Sorte</div>
      </div>
      <div class="modal-body">
        <div class="content">
          <!-- content here -->
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
    show: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false)
    }
  }
}
</script>
