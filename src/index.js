import Vue from 'vue'
import store from './store'
import vueCustomElement from 'vue-custom-element'
import Fake from './components/Fake'
import Tab from './components/Tab.vue'
import Tabs from './components/Tabs.vue'


Vue.use(vueCustomElement)

Vue.config.ignoredElements = [
	'cm-tab'
]

Vue.customElement('cm-button', () => new Promise((resolve) => {
	require(['./components/Button.vue'], (lazyComponent) => {
		lazyComponent.default.store = store
		console.log(lazyComponent.default)
		resolve(lazyComponent.default)
	})
}), {
		props: ['label']
	})


Vue.customElement('cm-tabs', () => new Promise((resolve) => {
	require(['./components/Tabs.vue'], (lazyComponent) => {
		lazyComponent.default.store = store
		resolve(lazyComponent.default)
	})
}), {
 props: ['name']
})

Vue.customElement('cm-tab', () => new Promise((resolve) => {
	require(['./components/Tab.vue'], (lazyComponent) => {
		lazyComponent.default.store = store
		resolve(lazyComponent.default)
	})
}), {
 props: ['name']
})

// Vue.component('cm-fake', Fake)