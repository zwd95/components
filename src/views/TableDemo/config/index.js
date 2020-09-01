export const FIELDS = [
  {
    label: '序号',
    type: 'index',
    width: 50
  },
  {
    label: '表头1',
    prop: 'prop1'
  },
  {
    label: '表头2',
    prop: 'prop2'
  },
  {
    label: '状态',
    prop: 'status',
    render (h, ctx, self) {
      return h('div', self.statusMap[ctx.props.row.status])
    }
  },
  {
    label: '操作',
    render (h, ctx) {
      return h('div',
        [
          h('el-button',
            {
              props: {
                type: 'primary',
                size: 'small'
              }
            },
            '编辑'
          ),
          h('el-button',
            {
              props: {
                type: 'primary',
                size: 'small'
              }
            },
            '详情'
          ),
          h('el-button',
            {
              props: {
                size: 'small'
              }
            },
            '删除'
          )
        ]
      )
    }
  }
]
