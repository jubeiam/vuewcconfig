<template lang="pug">
	div
		ul
			li(v-for="n in names") {{ n }}
		slot
			cm-tab(name="bar") bar
</template>

<script>
// import Vue from 'vue'
import Tab from './Tab'

// Vue.component('cmTab', Tab)

export default {
  data() {
    return {
      names: []
    };
  },
  mounted() {
    console.log(this.$children);
  },
  methods: {
    registerTab(name) {
			this.names.push(name)
		}
	},
	components: {
		'cm-tab': Tab
	},
  watch: {
    $children: {
      handler() {
        console.log(this);
      },
      immediate: true
    }
	}
};
</script>

