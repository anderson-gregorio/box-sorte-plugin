import { defineCustomElement } from 'vue'
import BoxSorte from './BoxSorte.ce.vue'

const SimpleSample = defineCustomElement(BoxSorte)

customElements.define('box-sorte-plugin', SimpleSample)
