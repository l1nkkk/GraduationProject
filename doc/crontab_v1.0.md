# 任务下发
> API

http://127.0.0.1:8070/crontab/job/save POST


> 参数

| 字段     | 类型   | 描述               |
| -------- | ------ | ------------------ |
| name     | String | 新添加任务的任务名 |
| command  | String | shell命令          |
| cronExpr | String | cron表达式         |

- name
  - 单点模式：nodename:任务名-1
    - 表示单点执行一次
  - 全部模式：all:任务名-2
    - 表示对全部节点执行两次
  - 抢锁模式：任务名
    - 持续抢锁调用

- cronExpr
  - 用法格式和linux的crontab类似。
  - 多支持了秒级和年级
  - 秒 分钟 分钟 小时 天 月 星期 年
  - eg：*/3 * * * * * *
    - 表示每隔三秒


> Success 200

| 字段  | 类型   | 描述                                                                                         |
| ----- | ------ | -------------------------------------------------------------------------------------------- |
| errno | Number | 错误编号.                                                                                    |
| msg   | String | 返回信息.                                                                                    |
| data  | json   | 被替代的Job信息.{name:任务名，command:shell语句，cronExpr:cron表达式}                        |
| 实例  |        | {"errno":0,"msg":"success","data":{"name":"dwd","command":"sleep 3","cronExpr":"* * * * *"}} |


# 获取节点信息
> api


http://127.0.0.1:8070/worker/list GET

> Success 200

| 字段  | 类型       | 描述                                                                                     |
| ----- | ---------- | ---------------------------------------------------------------------------------------- |
| errno | Number     | 错误编号.                                                                                |
| msg   | String     | 返回错误信息.                                                                            |
| data  | json-Array | 节点实例名和节点ip                                                                       |
| 实例  |            | {"errno":0,"msg":"success","data":[{"workerName":"worker-l1nkkk","ip":"192.168.3.248"}]} |