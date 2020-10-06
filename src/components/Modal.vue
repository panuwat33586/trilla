<template>
  <div class="modal">
    <div class="card">
      <div class="card-header">
          <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">Task Name</span>
          </div>
          <input 
          type="text" 
          class="form-control" 
          :value="selectedTask.name" 
          @change="updateSelectedTask($event,'name')"
          />
        </div>
      </div>
      <div class="card-body">
         <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Description</span>
            </div>
            <textarea
              class="form-control"
              aria-label="With textarea"
              :value="selectedTask.description"
              @change="updateSelectedTask($event,'description')"
            ></textarea>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Modal",
  computed: {
    ...mapGetters(["getSelectedTask"]),
    selectedTask() {
      return this.getSelectedTask(this.$route.params.id);
    },
  },
  methods:{
    updateSelectedTask(e,key){
         this.$store.commit('UPDATE_TASK',{
           task:this.selectedTask,
           key,
           newValue:e.target.value
         })
    }
  }
};
</script>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  width: 400px;
  height: 600px;
  margin-left: 35%;
  margin-right: 35%;
}
</style>