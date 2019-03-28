<template>
	<div class="body">
		<div class="top">
			<router-link to="/">
				<span class="t1"><img src="../img/back_btn_normal.png" alt=""></span>
			</router-link>
			<span class="t2">搜索</span>
			<span class="t3">分享</span>
			<div class="ss">
				<sousuo></sousuo>
			</div>
		</div>
		

	</div>
</template>
<script>
	import sousuo from '../components/sousuo'
	export default {
		name: 'ss',
		data(){
			return{
				movies2:Array
			}
		},
		components: {
			sousuo
		},
		created(){
				this.$axios.get('/api2/api/container/getIndex', {
					params: {
						containerid: 102803,
						openApp: 0
					}
				})
				.then(response => {
					

					console.log(response.data)
				}), err => {
					alert(err)
				}
			
		}
		}


</script>

<style scoped>
	.body {
		background-color: #d5d5d5;
		position: relative;
		z-index: 1000;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.top {
		position: relative;
		width: 100%;
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
	.ss{
		position: relative;
		width: 100%;
		height: 30px;
		display: inline-block;
	}
	.container {
    height: 30px;
    width: 100%;
}
.parent {
    position: relative;
}
.search {
    width: 100%;
    height: 30px;
    border-radius: 18px;
    outline: none;
    padding-left: 20px;
    position: absolute;
}
.btn {
    height: 35px;
    width: 35px;
    position: absolute;
    top: 6px;
    left: 285px;
    border: none;
    outline: none;
    cursor: pointer;
}
	.container button {
		background: none;
		top: 0px;
		right: 6px;
	}

	.container button:before {
		color: #324b4e;
	}
</style>
