<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>字节转换</span>
    </div>
    <div class="text item">
      <el-form ref="ref" :model="model" :rules="rules" label-width="100px">
        <el-form-item label="比特(b)">
          <el-input v-model="model.b" type="number" clearable @input="value('b')" />
          <el-button icon="el-icon-document-copy" @click="copy(model.b, $event)" />
        </el-form-item>
        <el-form-item label="字节(B)">
          <el-input v-model="model.B" type="number" clearable @input="value('B')" />
          <el-button icon="el-icon-document-copy" @click="copy(model.B, $event)" />
        </el-form-item>
        <el-form-item label="千字节(KB)">
          <el-input v-model="model.KB" type="number" clearable @input="value('KB')" />
          <el-button icon="el-icon-document-copy" @click="copy(model.KB, $event)" />
        </el-form-item>
        <el-form-item label="兆字节(MB)">
          <el-input v-model="model.MB" type="number" clearable @input="value('MB')" />
          <el-button icon="el-icon-document-copy" @click="copy(model.MB, $event)" />
        </el-form-item>
        <el-form-item label="吉字节(GB)">
          <el-input v-model="model.GB" type="number" clearable @input="value('GB')" />
          <el-button icon="el-icon-document-copy" @click="copy(model.GB, $event)" />
        </el-form-item>
        <el-form-item label="太字节(TB)">
          <el-input v-model="model.TB" type="number" clearable @input="value('TB')" />
          <el-button icon="el-icon-document-copy" @click="copy(model.TB, $event)" />
        </el-form-item>
        <el-form-item>
          <el-button @click="clear()">清空</el-button>
          <el-button type="primary" @click="submit()">转换</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import clip from '@/utils/clipboard'
import { bytetran } from '@/api/admin-utils'

export default {
  name: 'Byte',
  components: {},
  data() {
    return {
      model: {
        type: '',
        value: '',
        b: '',
        B: '',
        KB: '',
        MB: '',
        GB: '',
        TB: ''
      },
      rules: {}
    }
  },
  created() { },
  methods: {
    value(type) {
      this.model.type = type
      this.model.value = this.model[type]
    },
    clear() {
      this.model = this.$options.data().model
    },
    submit() {
      this.$refs['ref'].validate(valid => {
        if (valid) {
          bytetran({
            type: this.model.type,
            value: this.model.value
          }).then(res => {
            this.model = res.data
          })
        }
      })
    },
    copy(text, event) {
      if (text) {
        clip(text, event)
      } else {
        this.$message.error('请转换字节')
      }
    }
  }
}
</script>

<style scoped>
  .el-input{width: 90%;}
</style>
