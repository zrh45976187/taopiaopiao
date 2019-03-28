<template>
	<div class="search bar7">
		<form>
			<input type="text" placeholder="搜影片,影院...">
			<button type="submit"></button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bar7 form {
		height: 42px;
		padding-right: 10px;
	}

	.bar7 input {
		width: 222px;
		border-radius: 42px;
		background: #f84c7b;
		border: 1px solid #e0e0e0b8;
		transition: .3s linear;
		float: right;
	}

	.bar7 input:focus {
		width: 260px;
	}

	.bar7 button {
		background: none;
		top: -2px;
		right: 0;
	}

	.bar7 button:before {
		content: "\f002";
		font-family: FontAwesome;
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
		height: 42px;
		padding-left: 13px;
	}

	button {
		height: 42px;
		width: 42px;
		cursor: pointer;
		position: absolute;
	}
</style>
