<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      :placeholder="this.placeholder"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      v-model="text"
    />
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="CreateColumnOrTask()"
      >
        ADD
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateColumnOrTask",
  data() {
    return {
      text: "",
    };
  },
  props: {
    types: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    selectedColumnIndex:{
      type:Number
    }
  },
  methods: {
    CreateColumnOrTask() {
      if (this.types === "createcolumn") {
        this.$store.commit("CREATE_COLUMN", {
          name:this.text
        })
         
      }else{
        console.log(this.selectedColumnIndex)
        this.$store.commit("CREATE_TASK",{
          name:this.text,
          columnIndex:this.selectedColumnIndex
        })
        this.text=''
      }
    },
  },
};
</script>

<style>
</style>