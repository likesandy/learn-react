# JSX 的使用

- JSX 中的注释

- JSX 嵌入变量
  - 情况一: 当变量是 Number,String,Array 类型时,可以直接显示
  - 情况二: 当变量是 null.undefined,Boolean 类型时,内容为空
    - 如果希望可以显示 null,undefined,Boolean,那么需要转成字符串
    - 转换的方式有很多,比如 toString 方法,和空字符串拼接,String(变量)等方法
  - 情况三: 对象类型不能作为子元素
