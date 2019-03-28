<template>
	<div class="home">
		<div class="toping">
			<div class="littop">
				<span class="left"><img src="../img/def_share_icon.png" alt="">
				</span><span class="right">淘票票</span>
				<span class="r1">
					<sousuo></sousuo>
				</span>
			</div>
		</div>
		<div class="lunbo">
			<div id="demo" class="carousel slide" data-ride="carousel">
				<ul class="carousel-indicators">
					<li data-target="#demo" data-slide-to="0" class="active"></li>
					<li data-target="#demo" data-slide-to="1"></li>
					<li data-target="#demo" data-slide-to="2"></li>
					<li data-target="#demo" data-slide-to="3"></li>
					<li data-target="#demo" data-slide-to="4"></li>
				</ul>
				<div class="carousel-inner mg-fluid" style="border-radius: 5px;">
					<div class="carousel-item active" style="height: 145px;">
						<img src="../img/6a4c63f98e143b468ce94e1b66f5cac3664463.jpg" class="mg-fluid d-block w-100">
					</div>
					<div class="carousel-item" style="height: 145px;">
						<img src="../img/b0e1d1b0ff52affe8e72337dbd03342741216.jpg" class="mg-fluid">
					</div>
					<div class="carousel-item" style="height: 145px;">
						<img src="../img/p2549238013.png" class="mg-fluid">
					</div>
					<div class="carousel-item" style="height: 145px;">
						<img src="../img/p2547760211.png" class="mg-fluid">
					</div>
					<div class="carousel-item" style="height: 145px;">
						<img src="../img/timg.jpg" class="mg-fluid">
					</div>
				</div>
				<a class="carousel-control-prev" href="#demo" data-slide="prev">
					<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#demo" data-slide="next">
					<span class="carousel-control-next-icon"></span>
				</a>
			</div>
		</div>
		<div class="mid">
			<div class="one"><span class="logo"><img src="../img/福利.png" alt=""></span><span class="zi">超值抢购</span></div>
			<div class="one"><span class="logo"><img src="../img/福利.png" alt=""></span><span class="zi">绿皮书</span></div>
			<div class="one"><span class="logo"><img src="../img/福利.png" alt=""></span><span class="zi">会员中心</span></div>
			<div class="one"><span class="logo"><img src="../img/yx.png" alt="" style="height: 51px;width: 80px;"></span><span
				 class="zi">本周片单</span></div>
		</div>
		<div class="kong"></div>
		<div class="reying">
			<div class="title">
				<div class="lt"><span style="font-size: 18px;">正在热映</span></div>
				<div class="rt"><span style="position: relative;float: right;font-size: 14px;">全部{{movies.length}}部<img src="../img/triangle.png"
						 alt="" style="margin-bottom: 3px;height:11px;width: 20px;"></span></div>
			</div>
			<div class="move">
				<ul class="immg">

					<li v-for="(good,key) in movies" :key="key" class="mg-fluid" @click="conn()">
						<router-link tag="div" :to="{name: 'xiangqing',params:{id:good.movieId,ratingFinal:good.ratingFinal}}">
							<img :src="good.img" alt="" style="width: 112px;height: 163px;border-radius: 5px; position:relative">
							<span class="wenzi">{{good.titleCn}}</span>
							<span class="wenzi2">购票</span>
						</router-link>
					</li>
					<router-view :moiveid="moiveid"></router-view>

				</ul>
			</div>
		</div>
		<div class="kong"></div>
		<div class="reying2">
			<div class="title">
				<div class="lt"><span style="font-size: 18px;">即将上映</span></div>
				<div class="rt"><span style="position: relative;float: right;font-size: 14px;">全部{{movies2.length}}部<img src="../img/triangle.png"
						 alt="" style="margin-bottom: 3px;height:11px;width: 20px;"></span></div>
			</div>
			<div class="move">
				<ul class="immg">
					<li v-for="(good1) in movies2" :key="good1.id" class="mg-fluid">
						<router-link tag="div" :to="{name: 'xiangqing',params:{id:good1.id,ratingFinal:good1.rMonth}}">
							<img :src="good1.image" alt="" style="width: 112px;height: 163px;border-radius: 5px; position:relative">
							<span class="wenzi">{{good1.title}}</span>
							<span class="wenzi3">预售</span>
						</router-link>
					</li>
					<router-view :moiveid="moiveid"></router-view>
				</ul>
			</div>
		</div>

	</div>

</template>

<script>
	import sousuo from '../components/sousuo'

	export default {
		name: 'home',
		components: {
			sousuo
		},
		data() {
			return {
				movies: Array,
				movies2: Array,
				moiveid: Number,
				id: '290',
				ratingFinal: Number
			}
		},
		methods: {
			conn() {
				console.log(this.$route)


			}
		},
		computed: {


		},
		created() {
			let apii = '/api/Movie/MovieComingNew.api?locationId=' + this.id
			const url = "/api/PageSubArea/HotPlayMovies.api?locationId=290"
			const url2 = apii
			this.$axios.get('/api/PageSubArea/HotPlayMovies.api', {
					params: {
						locationId: 290
					}
				})
				.then(response => {
					this.movies = response.data.movies
					console.log(response)
					console.log(this.movies)
				}), err => {
					alert(err)
				}



			this.$axios.get('/api/Movie/MovieComingNew.api', {
					params: {
						locationId: 290
					}
				})
				.then(response => {
					this.movies2 = response.data.attention

					console.log(this.movies2)
				}), err => {
					alert(err)
				}

			// 	    this.axios.get('/api/movies')
			// 	        .then((response) => {
			// 	            let res = response.data
			// 				console.log(res)
			// 	            // 模拟errno判断 当前用户是否有权限获取该数据
			// 	            if (res && res.errno === 0) {
			// 	                // 请求成功,服务器返回数据正常
			// 					console.log('asdasdas')
			// 	                this.movies = res.data
			// 					console.log(this.movies,'123')
			// 					
			// 	            }
			// 	        }, err => {
			// 	            // eslint-disable-next-line
			// 	            console.error('服务器无响应', err)
			// 	        })
			// 			
			// 			this.axios.get('/api/attention')
			// 			    .then((response) => {
			// 			        let res = response.data
			// 					console.log(res)
			// 			        // 模拟errno判断 当前用户是否有权限获取该数据
			// 			        if (res && res.errno === 0) {
			// 			            // 请求成功,服务器返回数据正常
			// 						console.log('asdasdas')
			// 			            this.movies2 = res.data
			// 						console.log(this.movies2,'123')
			// 						
			// 			        }
			// 			    }, err => {
			// 			        // eslint-disable-next-line
			// 			        console.error('服务器无响应', err)
			// 			    })

		}
	}
</script>
<style scoped>
	.home {
		position: relative;
		width: 100%;
		height: 720px;
		overflow-y: auto;
	}

	.toping {
		position: relative;
		top: 0;
		width: 100%;
		height: 134px;
		background: #f84c7b;
		border-bottom-left-radius: 22%;
		border-bottom-right-radius: 22%;
	}

	.littop {
		display: flex;
		padding-top: 10px;
		padding: 10px 0 0 5px;
	}

	.left {
		height: 40px;
		overflow: hidden;
		flex: 1;
		position: relative;
		width: 40px;
	}

	.left img {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.right {
		font-size: 17px;
		flex: 2;
		line-height: 40px;
		color: white;
		font-weight: 500;
		margin-left: 5px;
	}

	.r1 {
		flex: 6;
	}

	.lunbo {
		position: relative;
		width: 92%;
		height: 145px;
		overflow: hidden;
		margin: 0 auto;
		margin-top: -66px;
	}

	.carousel-inner img {
		width: 100%;
		height: 100%;
	}

	.carousel-inner {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.carousel-indicators .active {
		width: 30px;
	}

	.carousel-indicators li {
		width: 10px;
	}

	.carousel-indicators {
		bottom: 0;
	}

	.mid {
		position: relative;
		width: 100%;
		height: 88px;
		display: flex;
		margin-top: 10px;
	}

	.one {
		height: 100%;
		flex: 1;
	}

	.one img {
		width: 93px;
		height: 55px;
	}

	.logo {
		display: inline-block;
		width: 100%;
		height: 55px;
		line-height: 30px;
		font-size: 25px;
		text-align: center;
	}

	.zi {
		display: inline-block;
		height: 14px;
		width: 100%;
		font-size: 14px;
		font-weight: 500;
		color: black;
		text-align: center;
	}

	.kong {
		width: 100%;
		position: relative;
		background: rgba(242, 242, 242);
		height: 10px;
	}

	.reying {
		position: relative;
		width: 100%;
		height: 279px;

	}

	.reying2 {
		position: relative;
		width: 100%;
		height: 327px;

	}

	.title {
		position: relative;
		width: 100%;
		height: 44px;
		padding: 10px 12px;
	}

	.lt {
		position: relative;
		float: left;
		width: 50%;
		height: 100%;
	}

	.rt {
		position: relative;
		float: right;
		width: 50%;
		height: 100%;
	}

	.rt i {
		width: 20px;
		height: 20px;
		background: url(../img/triangle.png) no-repeat;
	}

	.move {
		position: relative;
		width: 100%;
		height: 235px;

		padding: 0px 0 0 10px;
		;
	}

	.immg {
		padding: 0;
		margin: 0;
		list-style: none;
		padding-top: 5px;
		height: 100%;
		display: flex;
		overflow-x: auto;
		white-space: nowrap;
	}

	.immg li {

		position: relative;
		margin-right: 10px;
		height: 100%;
		width: 112px;
		float: left;
	}

	.wenzi {
		display: block;
		font-size: 17px;
		overflow: hidden;
		margin-top: 5px;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.wenzi2 {
		display: block;
		font-size: 15px;
		overflow: hidden;
		border-radius: 14px;
		width: 50px;
		color: white;
		text-align: center;
		background: rgb(236, 125, 155);
		margin-top: 5px;
		white-space: nowrap;
	}
	.wenzi3 {
		display: block;
		font-size: 15px;
		overflow: hidden;
		border-radius: 14px;
		width: 50px;
		color: white;
		text-align: center;
		background: linear-gradient(45deg,#55c2ff,#349cec);
		margin-top: 5px;
		white-space: nowrap;
	}

	.xq {
		position: relative;
		margin-right: 10px;
		height: 100%;
		width: 112px;
		float: left;
	}
</style>
