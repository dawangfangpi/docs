name: Bug 报告
description: 发起 bug 报告
body:
  - type: markdown
    attributes:
      value: |
        在报告问题之前，请确保您已经 **认真** 阅读：
        - [说明]([https://blessing.netlify.app/report.html](https://docs.monday-ovo.top/guide/#%E8%AF%B4%E6%98%8E))
  - type: input
    id: bs
    attributes:
      label: 当前时间
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: 出现问题时所使用的浏览器
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
    validations:
      required: true
  - type: textarea
    id: what-happened
    attributes:
      label: 出现了什么问题？
      description: 顺便告诉我们，您期望的行为是怎样的？
    validations:
      required: true
  - type: textarea
    id: reproduction
    attributes:
      label: 重现步骤
      description: 详细描述您出错前的操作步骤
    validations:
      required: true
