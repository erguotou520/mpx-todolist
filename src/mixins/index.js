import mpx from '@mpxjs/core'

// 所有组件都是apply-share
mpx.mixin(
  {
    options: {
      styleIsolation: 'apply-shared'
    }
  },
  'component'
)

// 分享
mpx.mixin(
  {
    onShareAppMessage () {
      return {
        title: 'TODO list',
        path: '/pages/index'
      }
    }
  },
  'page'
)
