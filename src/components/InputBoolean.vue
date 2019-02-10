<template>
  <el-form-item :label="label">
    <el-checkbox :value="value" @input="$emit('input', $event);"></el-checkbox>
  </el-form-item>
</template>

<script>
export default {
  name: "InputBoolean",
  props: {
    label: String,
    value: Boolean
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
