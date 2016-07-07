<script>
import Auth from '../auth/index.js'

export default {
	data() {
		return {
			shots: []
		}
	},
	methods: {
		getShots() {
			this.$http.get(`https://api.dribbble.com/v1/shots?list&access_token=${Auth.token}`)
				.then((response) => {
					this.shots = response.data
				}, (response) => console.error('Request error:', response))
		}
	},
	ready() {
		this.getShots()
	}
}
</script>

<template>
	<h1>Lista de Shots</h1>

	<div class="card" v-for="shot in shots">
		<a href="#!/detalhe/{{shot.id}}" title="{{shot.title}}">
			<p>{{shot.title}}</p>
			<img v-bind:src="shot.images.teaser">
		</a>
	</div>

</template>