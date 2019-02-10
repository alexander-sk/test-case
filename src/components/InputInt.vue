<template>
  <el-form-item :label="label">
    <el-input-number
      :controls="false"
      placeholder="..."
      :value="value"
      @change.native="$emit('input', parseInt($event.target.value));"
    ></el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: "InputInt",
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
