<template>
  <el-form-item :label="label">
    <el-input-number
      :controls="false"
      placeholder="..."
      :value="value"
      @change.native="$emit('input', parseFloat($event.target.value));"
      :precision="2"
      :step="0.1"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: "InputFloat",
  props: {
    label: String,
    value: Number
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
