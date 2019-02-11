<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="12">
      <el-card>
        <div slot="header">
          <span>{{ cfg.code }}</span>
        </div>
        <el-form
          ref="form"
          :model="formData"
          label-position="left"
          label-width="200px"
        >
          <component
            v-for="attribute in cfg.attributes"
            :is="
              attribute.type
                ? 'Input' +
                  attribute.type.charAt(0).toUpperCase() +
                  attribute.type.slice(1)
                : 'InputString'
            "
            :key="attribute.code"
            :label="attribute.title"
            :enumData="calcEnums[attribute.enumType]"
            :error="errorTriggers[attribute.code]"
            v-model="formData[attribute.code]"
          ></component>
          <el-form-item>
            <el-button type="primary" style="float: right;" @click="validateForm">Зберегти</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import InputInt from "./components/InputInt";
import InputFloat from "./components/InputFloat";
import InputString from "./components/InputString";
import InputDate from "./components/InputDate";
import InputBoolean from "./components/InputBoolean";
import InputEnum from "./components/InputEnum";
import * as validate from "./validators";

export default {
  name: "App",
  props: {
    cfg: Object,
    enums: Object
  },
  components: {
    InputInt,
    InputFloat,
    InputString,
    InputDate,
    InputBoolean,
    InputEnum
  },
  data() {
    return {
      formData: {},
      calcEnums: {},
      errorTriggers: {}
    };
  },
  methods: {
    validateForm() {
      let isOk = true;

      for (let attribute of this.cfg.attributes) {
        for (let item in attribute.validation) {
          let isRuleCheckPassed = validate[item](
            this.formData[attribute.code],
            attribute.validation[item]
          );
          this.$set(this.errorTriggers, attribute.code, false);

          if (!isRuleCheckPassed) {
            isOk = false;
            this.$set(this.errorTriggers, attribute.code, true);
            break;
          }
        }
      }

      if (isOk) console.log(this.formData);
    }
  },
  created: function() {
    // Расчет отступов
    for (let item in this.enums) {
      let pad = 0;
      let parentPrev = null;
      this.calcEnums[item] = [];

      for (let option of this.enums[item]) {
        if (option.hasOwnProperty("parentId")) {
          if (parentPrev == null) {
            parentPrev = option.parentId;
            pad++;
          }

          if (parentPrev !== option.parentId) {
            pad++;
          }

          parentPrev = option.parentId;
        } else {
          pad = 0;
        }

        this.calcEnums[item].push({
          value: option.id,
          label: option.title,
          padding: pad
        });
      }
    }
  }
};
</script>

<style>
.error input {
  box-shadow: 0px 0px 2px 1px rgba(252, 5, 5, 1);
}
</style>
