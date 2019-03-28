<template>
	<div class="about">
		<div class="topbar">
			<div class="topbar-mod">
				<div class="logo">
					<div class="city">广州</div>
					<!-- 				 <div class="city" id="10" ref="beijing" @click="beijing()">北京</div> -->
				</div>
			</div>
		</div>
		<div class="cinema">
			<div class="cinema">
				<ul class="ul">
					<li class="li" v-for="(item,i) in home" :key="i">
						<div class="msg">
							<div class="msgs">
								<h3 style="margin: 0;">
									<div class="title">
										<span class="title-name">{{item.nm}}</span>
									</div>
									<span class="price">
										<span class="pr1">{{item.sellPrice}}</span>
										<span class="pr2">元起</span></span>
								</h3>
								<div class="msg1">
									<div class="msg1-name">{{item.addr}}</div>
								</div>
								<div class="msg2">
									<div class="xiaobiao" v-if="item.tag.endorse == 1">改签</div>
									<div class="xiaobiao" v-if="item.tag.vipTag">折扣卡</div>
									<div class="xiaobiao2" v-if="item.tag.snack == 1">小吃</div>
									<div class="xiaobiao2" v-if="item.tag.hallType">{{item.tag.hallType[0]}}</div>
									<!-- 								<div class="xiaobiao" v-if="item.tag.hallType[1]">{{item.tag.hallType[1]}}</div> -->
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>


	</div>
</template>
<!-- http://m.maoyan.com/ajax/movie?forceUpdate=1551961323093 -->
<!-- /ajax/movie?forceUpdate=1551961323093 -->
<script>
	export default {
		methods: {
			beijing() {
				this.ctyiid = this.$refs.beijing.id
				console.log(this.ctyiid)
			}
		},
		data() {
			return {
				home: Array,
				ctyiid: 20
			}
		},

		created() {
			// const url ="/ajax/cinemaList"
			this.$axios.get('/ajax/ajax/cinemaList', {
					params: {
						day: '',
						offset: 0,
						limit: 20,
						districtId: -1,
						lineId: -1,
						hallType: -1,
						brandId: -1,
						serviceId: -1,
						areaId: -1,
						stationId: -1,
						item: '',
						updateShowDay: true,
						reqId: new Date().getTime(),
						cityId: this.ctyiid
					}
				})
				.then(response => {

					this.home = response.data.cinemas
					
				}), err => {
					alert(err)
				}
		}


	}
</script>
<style scoped>
	.topbar {
		position: relative;
		height: 35px;
		width: 100%;
	}

	.topbar-mod {
		display: block;
		width: 100%;
		color: #999;
		box-sizing: border-box;
		z-index: 100;
		background-color: #fff;
		position: relative;
	}

	.logo {
		position: absolute;
		text-align: left;
		width: 28vw;
		box-sizing: border-box;
		height: 35px;
		background-image: url(../../def_share_icon.png);
		color: #999;
		padding-left: 10.9vw;
		background-size: 6.7vw;
		background-repeat: no-repeat;
		background-position: 50%;
		background-position-x: 2.1vw;
		font-size: .875rem;
	}

	.city {
		display: inline-block;
		vertical-align: middle;
		height: 100%;
		margin-right: 5px;
		line-height: 35px;
		max-width: 13.3vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cinema {
		width: 100%;
		position: relative;
		bottom: 56px;
		padding-top: 56px;
	}

	.cinemas {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.ul {
		position: relative;
		width: 100%;
		height: 100%;
		list-style: none;
		padding: 0;
	}

	.li {
		font-size: 12px;
		position: relative;
		line-height: 200%;
		width: 100%;
		padding: 0 14.5px;
		padding-bottom: 1px;
		overflow: hidden;
	}

	.msg {
		position: relative;
		width: 100%;
		height: 116px;
		padding: 15px 0;
		border-bottom: 1px solid #ddd;
	}

	.msg h3 {
		margin-bottom: 2px;
		font-weight: 500;
		color: #000;
		display: flex;
	}

	.title {
		flex: 1;
		line-height: 32px;
	}

	.title-name {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		vertical-align: top;
		margin-right: 10px;
		font-size: 16px;
	}

	.pr1 {
		line-height: 6.4vw;
		vertical-align: baseline;
		color: #ff4d64;
		margin-right: .3vw;
		font-size: 15px;
		font-weight: 400;
		padding-left: 4vw;
	}

	.pr2 {
		font-size: .625rem;
	}

	.msg1 {
		position: relative;
		line-height: 1.5;
		padding-right: 4vw;
	}

	.msg1-name {
		width: 72vw;
		color: #666;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 13px;
	}

	.xiaobiao {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		user-select: none;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		white-space: nowrap;
		height: 18px;
		line-height: 15px;
		padding: 0 4px;
		border: 1px solid #349cec;
		border-radius: 2px;
		color: #349cec;
		margin-right: 5px;
		background-color: transparent;
		position: relative;
	}

	.xiaobiao2 {
		display: inline-block;
		text-align: center;
		vertical-align: middle;
		user-select: none;
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		white-space: nowrap;
		height: 18px;
		line-height: 15px;
		padding: 0 4px;
		border: 1px solid #f90;
		border-radius: 2px;
		color: #f90;
		margin-right: 5px;
		background-color: transparent;
		position: relative;
	}
</style>
