<template>
	<div class="login">
		<div class="top">淘票票电影</div>
		<div class="log">
			<dl style="background-color: #fff;">
				<dd>
					<ul>
						<li><a class="rect" @click="left()">淘票票登录</a></li>
						<li><a class="rect" @click="right()">手机验证登录</a></li>
						<div class="leff" ref="leff"></div>
					</ul>
				</dd>
			</dl>
			<div class="abc" v-if="show == true">
				<form>
					<div class="w1">
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="输入手机号码" aria-label="Recipient's username" aria-describedby="basic-addon2">
							<div class="input-group-append">
								<button class="btn btn-outline-secondary" type="button">获取验证码</button>
							</div>
						</div>
					</div>
					<div class="w1"><input class="form-control" type="text" placeholder="请输入短信验证码" readonly></div>
				</form>
			</div>
			<div class="abc" v-if="show == false">
				<form>
					<div class="w1">
						<div class="ipt"> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
							 placeholder="账户名/手机号/Email"></div>
					</div>
					<div class="w1">
						<div class="ipt"> <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
							 placeholder="请输入您的密码"></div>
					</div>
				</form>
			</div>

		</div>
		<button type="button" class="btn btn-success btn-lg btn-block" @click="login" style="width: 96%;margin: 0 auto;margin-top: 10px;">登录</button>
		<!--     <button @click="login">登录</button> -->
	</div>
</template>
<script>
	export default {
		name: "Login",
		data() {
			return {
				from: null,
				show: false
			}
		},
		methods: {
			login() {
				this.$emit('login')
				// 路由跳转
				if (this.from) {

					this.$router.replace(this.from.path)
				} else {
					this.$router.replace('/')
				}
			},
			left() {
				this.$refs.leff.style.left = '2%'
				this.show = false
			},
			right() {
				this.$refs.leff.style.left = '50%'
				this.show = true

			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.from = from
			})
		},
		beforeRouteLeave(to, from, next) {
			this.from = null
			next()
		}
	}
</script>
<style scoped>
	.login {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;
		z-index: 100;
	}

	.top {
		position: relative;
		width: 100%;
		height: 50px;
		background: #f84c7b;
		text-align: center;
		line-height: 50px;
		color: white;
		font-size: 18px;
		font-weight: 700;
	}

	.log {}

	ul {
		display: -webkit-box;
		padding-left: 1.2rem;
		padding-right: 1.2rem;
		position: relative;
		list-style: none;
		border-bottom: .08rem solid #d6d6d6;
	}

	li {
		display: block;
		text-align: center;
		-webkit-box-flex: 1;
		position: relative;
	}

	.rect {

		display: block;
		color: inherit;
		height: 100%;
		overflow-x: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 12px 0;
	}

	.leff {
		position: absolute;
		bottom: 0;
		border-bottom: .08rem solid #df2d2d;
		transition: all 1s;
		width: 48%;
		height: 10px;
		left: 2px;
	}

	.abc {
		position: relative;
		width: 100%;
		height: 84px;
		margin-top: -15px;
	}

	.w1 {
		position: relative;
		width: 100%;
		height: 42px;
	}

	.ipt {
		position: relative;
		width: 100%;
		height: 100%;
	}

	input {
		position: relative;
		width: 100%;
		height: 42px;
	}
</style>
