<template>
	<div class="hello">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
				<div class="swiper-slide">Slide 3</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>

			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>

			<!-- 如果需要滚动条 -->
			<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script>
	import './assets/animate.min.css'
	export default {
		name: 'Lunbo',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				scrollbar: '.swiper-scrollbar',
			})
		}
	}
</script>

<style scoped>
	/* @import'../../public/animate.min.css'; */
	body {
		margin: 0;
		padding: 0;
	}

	.swiper-container {
		width: 500px;
		height: 300px;
		margin: 20px auto;
	}
</style>
