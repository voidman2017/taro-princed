
<script>
export default {
  name: 'comp',
  render: (createElement) => {
    return createElement('view', [
      createElement('button', '这是测试按钮111'),
      createElement(
        'swiper',
        {
          class: 'swiper-1111',
          attrs: {
            indicatorColor: '#999',
            indicatorActiveColor: '#333',
            circular: true,
            indicatorDots: true,
            autoplay: true,
          },
        },
        [
          createElement('swiper-item', [createElement('view', '111')]),
          createElement('swiper-item', [createElement('view', '222')]),
          createElement('swiper-item', [createElement('view', '333')]),
        ]
      ),
    ])
  },
}

/* export default {
  name: 'comp',
  render: function (createElement) {
    return createElement('view', [
      createElement('button', '这是测试按钮222'),
      createElement(
        'swiper',
        {
          class: 'swiper-1111',
          attrs: {
            indicatorColor: '#999',
            indicatorActiveColor: '#333',
            circular: true,
            indicatorDots: true,
            autoplay: true,
          },
        },
        [
          createElement('swiper-item', [createElement('view', '1111')]),
          createElement('swiper-item', [createElement('view', '2222')]),
          createElement('swiper-item', [createElement('view', '3333')]),
        ]
      ),
    ])
  },
}  */

/* export default {
  name: 'comp',
  render(createElement) {
    return createElement('view', [
      createElement('button', '这是测试按钮333'),
      createElement(
        'swiper',
        {
          class: 'swiper-1111',
          attrs: {
            indicatorColor: '#999',
            indicatorActiveColor: '#333',
            circular: true,
            indicatorDots: true,
            autoplay: true,
          },
        },
        [
          createElement('swiper-item', [createElement('view', '11111')]),
          createElement('swiper-item', [createElement('view', '22222')]),
          createElement('swiper-item', [createElement('view', '33333')]),
        ]
      ),
    ])
  },
} */
</script>

