<template>
<div class="container-fluid">
  <div class="task-bg" v-if="isModalOpen" @click.self="closeModal">
           <router-view/>
    </div>
    <div class="trillaBoard">
    <Navbar />
    <h1>{{ board.name }}</h1>
    <div class="row">
      <Column
        v-for="(column, $columnIndex) in board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex='$columnIndex'
      />
      <div class="card">
        <div class="card-body">
         <CreateColumnOrTask
         types="createcolumn"
         placeholder="Add Column"
         />
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Column from "../components/Column";
import CreateColumnOrTask from '../components/CreateColumnOrTask'
import { mapState } from "vuex";
export default {
  name: "TrillaBoard",
  data () {
     return {
       newColumnName:''
     }
  },
  components: {
    Navbar,
    Column,
    CreateColumnOrTask
  },
  computed: {
    ...mapState(["board"]),
    isModalOpen() {
      return this.$route.name === "task";
    },
  },
  methods:{
    closeModal(){
       this.$router.push({name:'TrillaBoard'});
    },
  }
};
</script>

<style>
#board{
  width:100%;
  height:100%;
}
.task-bg {
  position: absolute;
  z-index: 100;
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
