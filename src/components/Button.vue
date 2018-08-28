<template lang="pug">
div
	| {{ count }}
	button(@click="fake" ref="btn") {{ label }}
	Fake
</template>

<script>
import Fake from './Fake'

import { mapState, mapMutations } from 'vuex'

export default {
	props: {
		label: String
	},
	methods: {
		fake() {
			// const fake = document.createElement('dupa-fake')
			// document.body.appendChild(fake)
			this.increment()
		},
		...mapMutations(['increment'])
	},
	computed: {
		...mapState(['count'])
	},
	mounted() {
			this.increment()
	},
	components: {
		Fake
	}
}
</script>

<style scoped lang="sass">
@import 'variables'

button
	background: $white

</style>


