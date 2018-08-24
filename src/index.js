import Vue from 'vue'
import store from './store'
import vueCustomElement from 'vue-custom-element'
// import fk from './components/FakeButtin.vue'

Vue.use(vueCustomElement)

Vue.customElement('cm-button', () => new Promise((resolve) => {
	require(['./components/Button.vue'], (lazyComponent) => {
		lazyComponent.default.store = store
		resolve(lazyComponent.default)
	})
}), {
	props: ['label']
})