<template>
  <div>
    <d-table :fields="fields" border :data="tableData" :self="_self"></d-table>
  </div>
</template>

<script>
import { FIELDS } from './config'
export default {
  name: 'TableDemo',
  data () {
    return {
      fields: FIELDS,
      tableData: [
        {
          prop1: '测试',
          prop2: '啊寞',
          status: 0
        }
      ],
      statusMap: {
        0: '已完成',
        1: '未完成',
        2: '进行中',
        3: '已取消'
      }
    }
  }
}
</script>

<style>

</style>
