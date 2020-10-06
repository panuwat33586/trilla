<template>
  <div class="col-sm"
  draggable
  @drop="moveTaskorColumn($event,column.tasks)"
  @dragenter.prevent
  @dragover.prevent
  @dragstart.self="pickupColumn($event,columnIndex)"
  >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          {{ column.name }}
        </h5>
        <Task
          v-for="(task, $taskIndex) in column.tasks"
          :key="$taskIndex"
          :task="task"
          :taskIndex="$taskIndex"
          :columnIndex="columnIndex"
        />
        <CreateColumnOrTask
          types="task"
          placeholder="Add task"
          :selectedColumnIndex="columnIndex"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Task from "./Task";
import CreateColumnOrTask from "./CreateColumnOrTask";

export default {
  name: "Column",
  components: {
    Task,
    CreateColumnOrTask,
  },
  props: {
    column: {
      type: Object,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    moveTaskorColumn(e,toTasks){
      const fromColumnIndex=e.dataTransfer.getData('from-column-index')
      const taskIndex=e.dataTransfer.getData('task-index')
      const type=e.dataTransfer.getData('type')
      this.$store.dispatch('MOVE_TASK_OR_COLUMN',{
        fromColumnIndex,
        toColumnIndex:this.columnIndex,
        toTasks,
        taskIndex,
        type
      })
    },
    pickupColumn(e,fromColumnIndex){
        e.dataTransfer.effectAllowed='move'
        e.dataTransfer.dropEffect='move'
        e.dataTransfer.setData('from-column-index',fromColumnIndex)
        e.dataTransfer.setData('type','column')
    }
  },
};
</script>

<style>
</style>