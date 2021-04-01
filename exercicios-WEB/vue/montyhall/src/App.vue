<template>
	<div id="app">
		<h1>Monty Hall Door Problem</h1>
		<Door number="1" :hasGift="false" />
	</div>
</template>

<script>
import Door from './components/Door';

export default { name: 'App', components: { Door } };
</script>

<style>
* {
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
body {
	color: #fff;
	background: linear-gradient(
		to right,
		#00b4db,
		#0083b0
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#app {
	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	border: 1px solid #000;
	background-color: #0004;
	padding: 20px;
	margin-bottom: 60px;
}
</style>
