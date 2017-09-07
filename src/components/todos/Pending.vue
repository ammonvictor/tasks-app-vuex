<template>
	<ul id="pending" class="todo">
		<item @remove-item="remove" @complete-item="complete" v-for="task in pendingTasks" :key="task.id" :task="task"></item>
	</ul>
</template>

<script>
	import Item from './Item' 

	export default {
		components: { Item },
		computed: {
			pendingTasks(){
				return this.$store.getters.getPendingTasks
			}
		},
		methods: {
			remove(task){
				this.$store.commit('DELETE_PENDING_TASK', task)
			},
			complete(task){
				this.$store.commit('MOVE_PENDING_TO_COMPLETE', task)
			}
		},
		updated() {
			this.$store.dispatch('PUSH_TO_LOCALSTORAGE')
		}
	}
</script>