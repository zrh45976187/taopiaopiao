<template>
	<div class="search bar7">
		<form>
			 <router-link tag="div" to="/sousuo">
			<input type="text" placeholder="搜影片,影院...">
			</router-link>
			<button type="submit"><span class="icon icon---2"></span></button>
		</form>
	</div>

</template>

<script>
	export default {
		name: 'sousuo',
		props: {
			msg: String
		}
	}
</script>

<style scoped>
	.bar7 form {
		height: 42px;
		padding-right: 10px;
		width: 100%;
	}

	.bar7 input {
		width: 100%;
		border-radius: 42px;
		background: #d5d5d5;
		border: 1px solid #a89b9b;
		transition: .3s linear;
		float: right;
	}



	.bar7 button {
		background: none;
		top: 0px;
		right: 6px;
	}

	.bar7 button:before {
		color: #324b4e;
	}

	form {
		position: relative;
		width: 235px;
		margin: 0 auto;
	}

	input,
	button {
		border: none;
		outline: none;
	}

	input {
		width: 100%;
		height: 30px;
		padding-left: 13px;
	}

	button {
		height: 30px;
		width: 42px;
		cursor: pointer;
		position: absolute;
	}
</style>
