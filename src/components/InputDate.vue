<template>
  <el-form-item :label="label">
    <el-date-picker
      :value="value"
      @input="$emit('input', $event);"
      type="date"
      placeholder="..."
      :class="{ error: error }"
    >
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "InputDate",
  props: {
    label: String,
    value: Date,
    error: Boolean
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
