<template>
  <el-form-item :label="label">
    <el-input
      :type="multi ? 'textarea' : ''"
      placeholder="..."
      :value="value"
      @input.native="
        $emit(
          'input',
          multi
            ? $event.target.value.split(',').map(s => s.trim())
            : $event.target.value
        );
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
