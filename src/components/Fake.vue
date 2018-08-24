<template lang="pug">
div
	h2 {{ count }}
	h3 {{ now }}
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import moment from 'moment'
const getLang = () => navigator.language || navigator.browserLanguage || ( navigator.languages || [ "en" ] ) [ 0 ]

moment.locale(getLang())

export default {
	props: {
		dupa: String
	},
	computed: {
		now() {
			return moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
		},
		...mapState(['count'])
	}
}
</script>

