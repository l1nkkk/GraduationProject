# 单点
## 单点任务下发
URL：/pointjob/save  
method：POST  
data_type:json  
post_data：{"name":"jobname","command":"sleep 3","cronExpr":"* * * * *","ip":"192.169.3.3"}

## 单点任务强杀
URL：/pointjob/kill  
method：POST  
data_type:application/x-www-form-urlencoded  
post_data：

## 单点任务删除
URL：/pointjob/delete  
method：POST  
data_type:application/x-www-form-urlencoded  
post_data：{"name":"jobname","command":"sleep 3","cronExpr":"* * * * *","ip":"192.169.3.3"}

## 单点任务删除
URL：/pointjob/list  
method：POST  
data_type:json  
post_data：{"name":"jobname","command":"sleep 3","cronExpr":"* * * * *","ip":"192.169.3.3"}

## 单点任务日志
URL：/pointjob/log  
method：POST  
data_type:json  
post_data：{"name":"jobname","command":"sleep 3","cronExpr":"* * * * *","ip":"192.169.3.3"}

# 任务群发
也就是调用多个单点就可以实现了


# 文件传送
（在认证开发完了之后弄这个）  
逻辑：从网页上传之后->到达服务器->服务器传送给了worker


