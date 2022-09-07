<script setup>
	import {
		ref
	} from 'vue'
</script>

<template>
	<span class="titlef">Flue</span>
	<p></p>
	<span class="en">Simple blog framework</span>
	<p></p>
	<span class="zh">快速、简单、防脱发的博客框架</span>
	
</template>

<style scoped>
	template{
		font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif; 
	}
	a {
		color: #7A52E0;
		text-decoration: none;
	}

	.en {
		font-size: 32px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;	
	}
	
	@font-face {
		font-family:'SF Pro Display';
		font-style:normal;
		font-weight:100;
		src:url("www.apple.com.cn/wss/fonts/SF-Pro-Display/v3/sf-pro-display_ultralight.woff2") format("woff2"), url("www.apple.com.cn/wss/fonts/SF-Pro-Display/v3/sf-pro-display_ultralight.woff") format("woff"), url("www.apple.com.cn/wss/fonts/SF-Pro-Display/v3/sf-pro-display_ultralight.ttf") format("truetype");
		/* (C) 2019 Apple Inc. All rights reserved.
	 */
		/* 用的苹果的字体,勿喷 */
	}

	.zh {
		font-size: 18px;
		font-family:SF Pro Display;
		/* 使用字体 */
	}

	.titlef {
		background-image: linear-gradient(90deg, #a161e0, #8692e0);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		display: inline-block;
		font-size: 100px;
		margin-top: 70px;
	}

	.code {
		padding: 0.2em 0.4em;
		margin: 0;
		font-size: 85%;
		background-color: rgba(27, 31, 35, 0.05);
		border-radius: 3px;
	}
</style>
