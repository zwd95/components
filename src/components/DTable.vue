<template>
  <el-table v-bind="$attrs" v-on="$listeners">
    <template v-for="column in fields">
      <el-table-column
        v-if="['index', 'selection'].includes(column.type)"
        :key="column.prop"
        v-on="column"
        v-bind="column"
      ></el-table-column>
      <el-table-column
        v-else
        :key="column.prop"
        v-on="column"
        v-bind="column"
      >
        <template slot-scope="scope">
          <table-column-expand
            v-if="column.render"
            :row="scope.row"
            :column="scope.column"
            :index="scope.$index"
            :cell-value="scope.row[column.prop]"
            :self="self"
            :render="column.render"
          ></table-column-expand>
          <span v-else>
            {{ scope.row[column.prop] ? scope.row[column.prop] : '--' }}
          </span>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
import VNode from 'vue'
export default {
  name: 'DTable',
  props: {
    fields: {
      type: Array,
      default: () => {
        return []
      }
    },
    self: {
      type: VNode,
      default: null
    }
  },
  components: {
    tableColumnExpand: {
      functional: true,
      props: {
        row: Object,
        column: Object,
        index: Number,
        cellValue: [String, Number],
        render: Function,
        self: VNode
      },
      render (h, ctx) {
        return ctx.props.render(h, ctx, ctx.props.self)
      }
    }
  }
}
</script>

<style>

</style>
