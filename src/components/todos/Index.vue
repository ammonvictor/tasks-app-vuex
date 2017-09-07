<template>
	<div class="todos">
		<todo-form></todo-form>
		<div class="container">
			<!-- Pending Tasks -->
			<todo-pending></todo-pending>

			<!-- Completed Tasks -->
			<todo-completed></todo-completed>
		</div>
	</div>
</template>

<script>
	import todoForm from './Form'
	import todoPending from './Pending'
	import todoCompleted from './Completed'

	export default {
		components:{ todoForm, todoPending, todoCompleted },
		mounted(){
			this.$store.dispatch('FETCH_FROM_LOCALSTORAGE')
		}
	}
</script>