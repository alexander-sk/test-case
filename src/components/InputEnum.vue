<template>
  <el-form-item :label="label">
    <el-select :value="value" @change="$emit('change', $event);">
      <el-option
        v-for="item in enumData"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span :style="'padding-left: ' + item.padding * 10 + 'px'">{{
          item.label
        }}</span>
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: "InputEnum",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    label: String,
    enumData: Array,
    value: Number
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
