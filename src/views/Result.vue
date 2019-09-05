<template>
  <el-row class="about" type="flex" justify="center">
    <el-col :span="5" class="code">
      <pre v-if="getFormData">{{getFormData}}</pre>
      <p v-else> No results </p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'result',
  computed: {
    getFormData() {
      return this.$store.getters.getFormData;
    }
  }
}
</script>

<style>
  .code pre{
    text-align: left;
  }
  .code p{
    text-align: center;
  }
</style>
