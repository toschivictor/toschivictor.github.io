<script>
import Auth from '../auth/index.js'

export default {
	data() {
		return {
			shot: [],
			images: []
		}
	},
	methods: {
		getShot() {
			var shotId = this.$route.params.shotId;

			this.$http.get(`https://api.dribbble.com/v1/shots/${shotId}?access_token=${Auth.token}`)
				.then((response) => {
					this.shot = response.data
					this.images = response.data.images
				}, (response) => console.error('Request error:', response))
		}
	},
	ready() {
		this.getShot()
	}
}
</script>

<template>
	<h1>Shot: {{shot.title}}</h1>	

	<section id="description">
		<img v-bind:src="images.normal">
		<p>{{{shot.description}}}</p>
		<p class="back"><a href="#!/">Voltar</a></p>
	</section>
</template>