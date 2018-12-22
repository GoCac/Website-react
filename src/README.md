# 导航栏

## 写在前面 - JS 端要注册的方法

`common.onPressBackSyn()` 详见下文 [返回按钮控制权](#返回按钮控制权)

    ```javascript
    dsBridge.register("common.onPressBackSyn",function(o,n){ 
        // 按下返回键后的操作
    })
    ```


### 返回按钮控制权
native 持有一个布尔变量 flag 来标记是否由 JS 控制返回，默认 false。

JS 调用 ` dsBridge.call("common.controlBackSyn","1")` 来通知 native 改变控制权，1 为 js 控制，0 为 native 控制。

点击返回按钮之后：

判断返回键控制权 flag
 - 为 true，判断 js 是否定义方法 `common.onPressBackSyn()`
  - 实现了，则调用  js 的 `common.onPressBackSyn()`
  - 没实现，走 native 默认
 - 为 false，走 native 默认

>**[注：]**
>
>第二个页面的问题。
>
>如果 H5 初始页面（后称 A）获取了返回按钮控制权的情况下，打开了另个页面，比如查看合同（后称 B）。如果 B 页面没有加载 dsbridge 的 script，那么点击返回按钮会没有反应。
>
>简而言之：H5如果获取了返回按钮控制权， 其打开的新页面都**需要加载 script**。



### URL 控制 header

**注1：** CommonBridge 提供了 JS 端动态修改 native 导航栏标题、按钮的能力，详见 [配置顶部导航栏](./../Bridge/CommonBridge/headerSetOption.md)

**注2：** 导航栏的颜色以及返回按钮有些特殊，如果通过 bridge 动态修改会出现“闪一下”的情况，用户体验不好，故对其的控制信息交由 url 携带，在加载 h5 之前就确定下来。

**注3：** 返回按钮永远存在（除非 isShow=false），控制逻辑如上文所述。

###### 参数结构

| 字段名 | 必选 | 类型            | 说明                                                         |
| :----- | :--- | :-------------- | ------------------------------------------------------------ |
| header | 否   | [JSON](#header) | 设置导航栏，可空，不传或为 `null` 则走默认。                 |
| wv     | 否   | String          | 安卓使用，如果有该参数，且值为`do`，则使用我们的 Webview 加载。 |

```

```

######  header

| 字段名        | 必选 | 类型   | 说明                                                         |
| :------------ | :--- | :----- | ------------------------------------------------------------ |
| backBtColor   | 否   | String | 指定返回按钮，可选值为 `white`(白色+阴影) 和 `black`（黑色），不传或为 `null` 或传其他值则当做 white 处理。 |
| headerBgColor | 否   | String | 导航栏背景色，可空，不传或字符串无法解析成颜色则为透明。     |
| isShow        | 否   | Bool   | 是否显示导航栏，可空，不传则当做 true 处理。`该字段是为了解决特殊需求，一般情况下不需要传 false`。 |
示例 URL： https://xxx/xxx/xx?header={isShow:false,backBtColor:"black",headerBgColor:"000000"}&wv=do



<div style="text-align:center;">    <img style="border-radius: 0.3125em; box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" src="./default.png">    <br/>    <div style="color: #999999; border-bottom: 1px solid #d9d9d9; display: inline-block; color: #999; padding: 2px;">默认情况下导航栏</div></div>

<div style="text-align:center;">    <img style="border-radius: 0.3125em; box-shadow: 0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.08);" src="./white+000000.png">    <br/>    <div style="color: #999999; border-bottom: 1px solid #d9d9d9; display: inline-block; color: #999; padding: 2px;">header={backBtColor:"white",headerBgColor:"000000"}</div></div>