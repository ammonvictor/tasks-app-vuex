import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		tasks: {
			pending: [],
			completed: []
		}
	},
	getters:{
		getPendingTasks(state){
			return state.tasks.pending;
		},
		getCompletedTasks(state){
			return state.tasks.completed;
		},
		getAllTasks(state){
			return state.tasks
		}
	},
	mutations:{
		ADD_NEW_PENDING_TASK(state, task) {
			state.tasks.pending.push(task)
		},
		ADD_NEW_COMPLETED_TASK(state, task) {
			state.tasks.completed.push(task)
		},

		DELETE_PENDING_TASK(state, task) {
			let index = state.tasks.pending.indexOf(task)
			state.tasks.pending.splice(index, 1);
		},
		MOVE_PENDING_TO_COMPLETE(state, task) {
			let index = state.tasks.pending.indexOf(task)
			state.tasks.pending.splice(index, 1);

			state.tasks.completed.push(task);
		},

		DELETE_COMPLETED_TASK(state, task) {
			let index = state.tasks.completed.indexOf(task)
			state.tasks.completed.splice(index, 1);
		},
		MOVE_COMPLETE_TO_PENDING(state, task) {
			let index = state.tasks.completed.indexOf(task)
			state.tasks.completed.splice(index, 1);

			state.tasks.pending.push(task);
		},

		UPDATE_STATE(state, payload){
			state.tasks = payload
		}
	},
	actions:{
		FETCH_FROM_LOCALSTORAGE(context) {
			if (localStorage.getItem('tasks')) {
				let fetchedTasks = JSON.parse(localStorage.getItem('tasks'))
				context.commit('UPDATE_STATE', fetchedTasks);
			}
		},
		PUSH_TO_LOCALSTORAGE(context) {
			let data = context.getters.getAllTasks
			localStorage.setItem('tasks', JSON.stringify(data));
		}
	}
})