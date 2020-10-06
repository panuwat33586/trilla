import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from '../default-board'
import {saveStatePlugin, uuid} from '../utils'

Vue.use(Vuex)
const board =JSON.parse(localStorage.getItem('board')) || defaultBoard
export default new Vuex.Store({
  plugins:[saveStatePlugin],
  state: {
    board
  },
  mutations: {
    CREATE_COLUMN (state,{name}) {
        state.board.columns.push({
          name,
          tasks:[]
        })
    },
    CREATE_TASK(state,{name,columnIndex}){
      state.board.columns[columnIndex].tasks.push({
        id:uuid(),
        name,
        description:''
      })

    },
    UPDATE_TASK(state,{task,key,newValue}){
      task[key]=newValue

    },
    MOVE_TASK(state,{fromColumnIndex,toTasks,taskIndex}){
      const taskToMove=state.board.columns[fromColumnIndex].tasks.splice(taskIndex,1)[0]
      toTasks.push(taskToMove)
    },
    MOVE_COLUMN(state,{fromColumnIndex,toColumnIndex}){
      const columnList=state.board.columns
      const columnToMove=columnList.splice(fromColumnIndex,1)[0]
      columnList.splice(toColumnIndex,0,columnToMove)

    }
  },
  actions: {
    MOVE_TASK_OR_COLUMN({commit},{fromColumnIndex,toColumnIndex,toTasks,taskIndex,type}){
      if(type==='task'){
        commit('MOVE_TASK',{fromColumnIndex,toTasks,taskIndex})
      }else{
        commit('MOVE_COLUMN',{fromColumnIndex,toColumnIndex})
      }
    }
  },
  modules: {
  },
  getters:{
    getSelectedTask(state){
       return (id)=>{
         for(const column of state.board.columns){
           for(const task of column.tasks){
             if(task.id===id){
               return task
             }
           }
         }
       }
    }
  }
})
