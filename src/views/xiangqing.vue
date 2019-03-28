<template>
	<div class="header">{{spli}}
		<div class="top">
			<router-link to="/">
				<span class="t1"><img src="../img/back_btn_normal.png" alt=""></span>
			</router-link>
			<span class="t2">影片详情</span>
			<span class="t3">分享</span>
		</div>
		<div class="title">
			<div class="imgg">

				<img :src="msg.image" alt="">
				<i class="imgi"><img src="../img/avsdk_video_btn_start.png" alt=""></i>
			</div>
			<div class="movie-name">
				<div class="topname" style="overflow: hidden;width: 100%; max-height: 50px;">
					<p class="chinese">{{msg.titleCn}}</p>
					<p class="source">{{msg.titleEn}}</p>
				</div>
				<div class="lastname" style="overflow: hidden;width: 100%; max-height: 90px;">
					<p class="source1">{{msg.type[0]}} / {{msg.type[1]}} / {{msg.type[2]}} / {{msg.runTime}}</p>
					<p class="source1">{{msg.release.date}} {{msg.release.location}}上映</p>
					<p class="source1" style="color: #fea54c;font-weight: 1000;font-size: 12px;">{{msg.personCount}}万人想看</p>
					<div class="star">
						<ElmStar :score="ratingFinal"></ElmStar>
						<div class="textr">{{ratingFinal}}分</div>
					</div>
				</div>



			</div>
		</div>
		<div class="mig"></div>
		<div class="kong"></div>
		<div class="news" @click="kan()">
			<p class="np1" v-if="showing">
				{{msg.content}}

			</p>
			<p class="np" v-else>
				{{msg.content}}
				<a class="aa">展开</a>
			</p>
		</div>
		<div class="kong2"></div>
		<div class="show-artists">
			<h2>演职人员</h2>
			<div class="show-artists-container">
				<div class="show-artist-list">
					<div class="yy" v-for="(good2) in msg4">
						<div class="y1">
							<img :src="good2.image" style="width: 100%;height: 100%;">
						</div>
						<dl>
							<dt>{{good2.name}}</dt>
							<dd class="profession director">{{good2.nameEn}}</dd>
						</dl>
					</div>

				</div>
			</div>
		</div>
		<div class="video">
			<video :src="msg.video" controls="controls" style="position: relative;width: 100%;height:100%;"></video>
		</div>
		<div class="black"></div>
		<div class="buy">
			<p>选座购票</p>
		</div>
	</div>

</template>

<script>
	import ElmStar from '../components/ElmStar'
	export default {
		name: "Goods",
		props: ['id', 'ratingFinal'],
		data() {
			return {
				msg: Array,
				msg2: Array,
				msg3: Array,
				msg4: Array,
				showing: false

			}
		},
		methods: {

			kan() {
				this.showing = !this.showing
				console.log(this.showing)
				console.log(this.msg4)
			}
		},
		created() {
			let apii = '/api/movie/detail.api?locationId=290&movieId=' + this.id

			let apii2 = '/api/Movie/MovieCreditsWithTypes.api?movieId=' + this.id



			this.$axios.get('/api/movie/detail.api', {
					params: {
						locationId: 290,
						movieId: this.id
					}
				})
				.then(response => {
					this.msg = response.data
					console.log(this.msg)
				}), err => {
					alert(err)
				}


			this.$axios.get('/api/Movie/MovieCreditsWithTypes.api', {
				params: {
					movieId: this.id
				}

			}).then(response => {
				this.msg2 = response.data.types[0].persons
				this.msg3 = response.data.types[1].persons.slice(0, 20)

				console.log(this.msg2)
				console.log(this.msg3)
			}), err => {
				alert(err)
			}
		},
		computed: {
			spli() {
				let obj = Object.assign(this.msg2, this.msg3)
				this.msg4 = obj

			}
		},
		components: {
			ElmStar
		}

	}
</script>
<style scoped>
	dl {
		margin-top: 1vw;
		text-overflow: ellipsis;
		font-size: 12px;
	}

	dl dd {
		color: #777;
		font-size: .75rem;
	}

	.profession {
		display: block;
		white-space: nowrap !important;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 5vw;
		line-height: 5vw;
	}

	.aa {
		background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff, #fff, #fff);
		position: absolute;
		bottom: 5px;
		right: 0;
		display: inline-block;
		color: #349cec;
	}

	#app {
		overflow: inherit;
	}

	.header {
		position: relative;
		width: 100%;
		height: 260px;
		z-index: 100;
		background: #e86f6f;
	}

	.top {
		position: relative;
		width: 100%;
		height: 60px;
		top: 0;
		padding: 10px 10px 10px 5px;
	}

	.t1 {
		position: relative;
		display: inline-block;
		height: 55%;
		width: 27px;
		float: left;
	}

	.t2 {
		position: relative;
		display: block;
		height: 100%;
		font-size: 18px;
		color: white;
		float: left;
	}

	.t3 {
		position: relative;
		display: block;
		height: 100%;
		color: white;
		float: right;
		font-size: 18px;
	}

	.t1 img {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.title {
		position: relative;
		width: 100%;
		height: 140px;
		bottom: -60px;
	}

	.imgg {
		position: relative;
		height: 100%;
		border-radius: 4px;
		width: 90px;
		border: 2px solid #fff;
		left: 30px;
		display: inline-block;
		background-color: #fff;
	}

	.imgg img {
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}

	.imgi {
		position: absolute;
		width: 28px;
		height: 28px;
		bottom: 8px;
		right: 0;
	}

	.imgi img {
		width: 100%;
		height: 100%;

	}

	.movie-name {
		position: absolute;
		right: 0;
		padding-left: 36%;
		height: 100%;
		width: 100%;
		display: inline-block;
	}

	.chinese {
		font-size: 1.375rem;
		color: #fff;
		display: -webkit-box;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-weight: 700;
		margin-bottom: 0;
		margin-top: 0;
	}

	.source {
		line-height: 17px;
		opacity: .8;
		font-size: .75rem;
		max-height: 17px;
		color: #fff;
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 1px;
	}

	.source1 {
		line-height: 12px;
		opacity: .8;
		font-size: .75rem;
		max-height: 12px;
		color: #6c6c6c;
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 6px 0;
	}

	.textr {
		font-size: 18px;
		position: relative;
		top: -23px;
		right: -142px;
		font-weight: 700;
		color: #fea54c;
		display: inline-block;
	}

	.mig {
		position: relative;
		width: 100%;
		border-top-left-radius: 18px;
		top: -26px;
		border-top-right-radius: 18px;
		height: 92px;
		background: #ffffff;
		margin: 0 auto;
		z-index: -99999;
	}

	.kong {
		width: 100%;
		position: relative;
		background: rgba(242, 242, 242);
		height: 10px;
		margin-top: -10px;
	}

	.kong2 {
		width: 100%;
		position: relative;
		background: rgba(242, 242, 242);
		height: 1px;
		margin-top: 0px;

	}

	.news {
		background: #fff;
		position: relative;
		width: 100%;
		padding-top: 4vw;
		border-bottom: 0 !important;
	}

	.np {
		white-space: normal;
		position: relative;
		max-height: 20.5vw;
		text-align: justify;
		display: inline-block;
		overflow: hidden;
		margin: 0;
		padding: 0 10px;
	}

	.np1 {
		white-space: normal;
		position: relative;

		text-align: justify;
		display: inline-block;
		overflow: hidden;
		margin: 0;
		padding: 0 10px;
	}

	.show-artists {
		background-color: #fff;
		position: relative;
		border-bottom: 0 !important;
	}

	.show-artists h2 {
		font-size: 17px;
		line-height: 10vw;
		padding-top: 2.5vw;
		color: #000;
		padding-left: 16px;
		font-weight: 400;
		padding-bottom: 2.5vw;
		margin: 0;
	}

	.show-artists-container {
		margin-left: 16px;
		position: relative;
		overflow-x: scroll;
	}

	.show-artist-list {
		display: -webkit-box;
		padding-right: 5vw;
		white-space: nowrap;
	}

	.yy {
		display: block;
		width: 23.2vw;
		vertical-align: top;
		text-align: center;
		margin-right: 10px;
	}

	.y1 {
		width: 23.2vw;
		position: relative;
		height: 32vw;
		background: #ccc 50% no-repeat;
		background-size: cover;
		overflow: hidden;
		margin: 0 auto;
		border-radius: 2px;
		background-image: url(//gw.alicdn.com/i1/TB1WXILDMHqK1RjSZFgXXa7JXXa_.jpg_320x320Q30.jpg_.webp);
	}

	.buy {
		position: fixed;
		width: 100%;
		height: 50px;
		bottom: 0;
		background-image: linear-gradient(45deg, #ff7ba0, #ff4d64);
	}

	.buy p {
		width: 100%;
		position: relative;
		height: 100%;
		display: flex;
		line-height: 50px;
		text-align: center;
		margin: 0 auto;
		color: white;
		font-size: 18px;
		font-weight: 500;
		list-style: none;
		text-decoration: none;
		padding: 0 40%;
		-webkit-box-align: center
	}

	.black {
		position: relative;
		height: 49px;
		width: 100%;
		background: white;
	}

	.video {
		position: relative;
		width: 100%;
		height: 213px;
	}
</style>
