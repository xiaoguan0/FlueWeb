<script setup>
	import {
		ref
	} from 'vue'

	// defineProps({
	//   logo: String
	// })
</script>

<template>
	<header class="nav bar">
		<a href="/" class="title"><img src="../assets/logo.svg" alt="" style="height: 20px; width: 20px;"> <span style="font-size: 20px;">Flue</span></a>
		<div class="links">
			<a href="/" >π ι¦ι‘΅</a>
			<a href="docs.html">πζζ‘£</a>
			<a href="themes.html">π§ͺδΈ»ι’</a>
			<a href="download.html">πδΈθ½½</a>
			<a href="about.html">π¨π»βπ»ε³δΊ</a>
		</div>
	</header>
</template>

<style scoped>
	.links > a :hover{
		color: #8012e0;
	}
	.title{
		color: black;
	}
	.bar {
		backdrop-filter: saturate(50%) blur(8px);
		-webkit-backdrop-filter: saturate(50%) blur(8px);
		padding: 10px 15px;
		position:fixed;
		left:0px;
		top:0px;
		width:100%;
		height: 40px;
	}

	.nav >a {
		margin-left: 20px;
		margin-right: 20px;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.links>a {
		margin-left: 20px;
		margin-right: 20px;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	a {
		color: #7A52E0;
		text-decoration: none;
	}

	.logo {
		width: 40px;
		height: 40px;
	}

	.nav {
		padding: 10px 15px;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 20px
	}
</style>
