# JSX 的使用

- jsx 中的注释

- jsx 嵌入变量

  - 情况一: 当变量是 Number,String,Array 类型时,可以直接显示
  - 情况二: 当变量是 null.undefined,Boolean 类型时,内容为空
    - 如果希望可以显示 null,undefined,Boolean,那么需要转成字符串
    - 转换的方式有很多,比如 toString 方法,和空字符串拼接,String(变量)等方法
  - 情况三: 对象类型不能作为子元素

- jsx 绑定属性
  - 比如元素都会有 title 属性
  - 比如 img 元素会有 src 属性
  - 比如 a 元素会有 href 属性
  - 比如元素可能需要绑定 class
  - 比如原生使用内联样式 style
