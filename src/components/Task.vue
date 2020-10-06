<template>
  <div class="task"
  draggable
  @dragstart="pickupTask($event)"
  >
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col">
            {{ task.name }}
          </div>
          <div class="col">
            <button 
            type="button" 
            class="btn btn-primary"
            @click="editTask"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p>
          {{ task.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
    columnIndex:{
      type:Number,
      required:true
    }
  },
  methods:{
    editTask(){
      this.$router.push({ name: 'task', params: { id: this.task.id }})
    },
    pickupTask(e){
        e.dataTransfer.effectAllowed='move'
        e.dataTransfer.dropEffect='move'
        e.dataTransfer.setData('task-index',this.taskIndex)
        e.dataTransfer.setData('from-column-index',this.columnIndex)
        e.dataTransfer.setData('type','task')
    }
  }
};
</script>

<style lang="css">
.task {
  margin-bottom: 20px;
}
</style>