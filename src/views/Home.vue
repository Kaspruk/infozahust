<template>
  <el-container class="home">
    <el-row type="flex" justify="center">
      <el-col :span="10">
        <form-ui :fields="dynamicForm"></form-ui>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import FormUi from '@/components/formUi/FormUi.vue'

export default {
  name: 'home',
  components: { FormUi },
  computed: {
    dynamicForm() {
      return this.$store.getters.getDynamicForm;
    }
  },
}
</script>

<style>
  .el-row{
    width: 100%;
  }
</style>
