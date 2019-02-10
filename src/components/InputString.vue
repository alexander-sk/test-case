<template>
  <el-form-item :label="label">
    <el-input
      placeholder="..."
      :value="value"
      @input.native="$emit('input', $event.target.value);"
      :class="{ error: error }"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InputString",
  props: {
    label: String,
    value: String,
    error: Boolean
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
