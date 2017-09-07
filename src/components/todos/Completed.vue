<template>
	<ul id="completed" class="todo">
		<item @remove-item="remove" @complete-item="complete" v-for="task in completedTasks" :key="task.id" :task="task"></item>
	</ul>
</template>

<script>
	import Item from './Item' 

	export default {
		components: { Item },
		computed: {
			completedTasks(){
				return this.$store.getters.getCompletedTasks
			}
		},
		methods: {
			remove(task){
				this.$store.commit('DELETE_COMPLETED_TASK', task)
			},
			complete(task){
				this.$store.commit('MOVE_COMPLETE_TO_PENDING', task)
			}
		},
		updated() {
			this.$store.dispatch('PUSH_TO_LOCALSTORAGE')
		}
	}
</script>