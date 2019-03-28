<template>
	<div>
		<div class="top">
			<div class="topmsg">
				<div class="name">
					<div class="imgg"><img src="../../public/img2/002.png" alt="" style="width: 100%; height: 100%;"></div>
					<p class="names">zrh</p>
				</div>
			</div>
		</div>
		<div class="mid">
			<div class="bor">
				<div class="md1">
					<i><img src="../../public/img2/001.png" alt="" style="width: 100%;height: 100%;"></i>
					<span>电影票</span>
				</div>
				<div class="md2">
					<i><img src="../../public/img2/003.png" alt="" style="width: 100%;height: 100%;"></i>
					<span>优惠券</span>
				</div>
			</div>

		</div>
		<div class="lst1">
			<div class="ms">
				<span style="line-height: 50px;font-size: 18px;">淘票票乐影卡</span>
			</div>
		</div>
		<div class="lst1">
			<div class="ms">
				<span style="line-height: 50px;font-size: 18px;">帮助与反馈</span>
			</div>
		</div>

	</div>
</template>

<script>
	// import Lunbo from '../components/lunbo'
	export default {
		name: "MineView",
		props: ['login'],
		beforeRouteEnter(to, from, next) {
			next(vm => {
				if (!vm.login) {
					vm.$router.replace('/bott')
				}
			})


		}


	}
</script>

<style scoped>
	.lst1 {
		position: relative;
		width: 100%;
		padding: 0 10px;
	}

	.ms {
		position: relative;
		width: 100%;
		padding: 0 10px;
		border-bottom: 1px solid #D2E0E6;
		margin-bottom: 10px;
		height: 50px;
	}

	.top {
		position: relative;
		width: 100%;
		top: -16px;
		height: 200px;
		background: #ff4d64;
	}

	.topmsg {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.name {
		position: relative;
		height: 45.33333333vw;
		padding-left: 6.66666667vw;
		padding-right: 6.66666667vw;
		padding-top: 8vw;
		width: 100%;
		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
		color: #fff;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
	}

	.imgg {
		height: 19.33333333vw;
		width: 19.33333333vw;
		border-radius: 50%;
		overflow: hidden;
		background-size: cover;
		background-position: 50%;
		background-repeat: no-repeat;
	}

	.names {
		line-height: 1.2;
		font-weight: 500;
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 64vw;
		font-size: 1.25rem;
		margin-left: 4vw;
	}

	.bor {
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0 10px;
		margin-top: -16px;
	}

	.md1 {
		position: relative;
		flex: 1;
		display: block;
		padding: 10px 0;
		border-bottom: 1px solid #D2E0E6;
		margin-top: 20px;
	}

	.md2 {
		position: relative;
		flex: 1;
		margin-top: 20px;
		padding: 10px 0;
		border-bottom: 1px solid #D2E0E6;
		display: block;
	}

	.md1 i {
		width: 9.2vw;
		height: 9.2vw;
		background-position: 50%;
		background-size: contain;
		background-repeat: no-repeat;
		display: block;
		position: relative;
		margin: 0 auto;
	}

	.md2 i {
		width: 9.2vw;
		height: 9.2vw;
		background-position: 50%;
		background-size: contain;
		background-repeat: no-repeat;
		display: block;
		position: relative;
		margin: 0 auto;
	}

	.md1 span {
		position: relative;
		width: 100%;
		display: inline-block;
		text-align: center;
	}

	.md2 span {
		position: relative;
		width: 100%;
		display: inline-block;
		text-align: center;
	}
</style>
