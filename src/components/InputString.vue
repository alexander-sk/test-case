<template>
  <el-form-item :label="label">
    <el-input
      :type="multi ? 'textarea' : 'text'"
      placeholder="..."
      :value="value"
      @input="
        $emit('input', multi ? $event.split(',').map(s => s.trim()) : $event);
      "
      :class="{ error: error }"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "InputString",
  props: {
    label: String,
    value: [Array, String],
    error: Boolean,
    multi: Boolean
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
