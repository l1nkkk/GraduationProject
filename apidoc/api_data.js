define({ "api": [
  {
    "type": "get",
    "url": ":8070/",
    "title": "http控制台",
    "name": "getIndex",
    "group": "Crontab-Master",

    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "post",
    "url": ":8070/job/save",
    "title": "添加任务",
    "name": "saveJob",
    "group": "Crontab-Master",
    "parameter": {
      "fields": {
        "参数（key : job;value : json）": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>新添加任务的任务名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "command",
            "description": "<p>shell命令</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cronExpr",
            "description": "<p>cron表达式</p>"
          },
          {
            "group": "Parameter",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "job={\"name\":\"dwd\",\"command\":\"sleep 3\",\"cronExpr\":\"* * * * *\"}"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200(该api所有返回可以不处理)": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "errno",
            "description": "<p>错误编号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msg",
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "data",
            "description": "<p>被替代的Job信息.{name:任务名，command:shell语句，cronExpr:cron表达式}</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":{\"name\":\"dwd\",\"command\":\"sleep 3\",\"cronExpr\":\"* * * * *\"}}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "post",
    "url": ":8070/job/delete",
    "title": "删除任务",
    "name": "delJob",
    "group": "Crontab-Master",
    "parameter": {
      "fields": {
        "参数（key : name; value : string）": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>被删除的任务名</p>"
          },
          {
            "group": "Parameter",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "name=job1"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200(该api所有返回可以不处理)": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "errno",
            "description": "<p>错误编号.</p>该api所有返回可以不处理"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msg",
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "data",
            "description": "<p>被删除的Job信息.{name:任务名，command:shell语句，cronExpr:cron表达式}</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":{\"name\":\"dwd\",\"command\":\"sleep 3\",\"cronExpr\":\"* * * * *\"}}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "post",
    "url": ":8070/job/kill",
    "title": "强杀任务",
    "name": "killJob",
    "group": "Crontab-Master",
    "parameter": {
      "fields": {
        "参数（key : name; value : string）": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>强行杀死的任务名</p>"
          },
          {
            "group": "Parameter",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "name=job1"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "Errno",
            "description": "<p>错误编号.</p>该api所有返回可以不处理"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "Msg",
            "description": "<p>返回错误信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "Data",
            "description": "<p>null</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":null}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "get",
    "url": ":8070/job/list",
    "title": "获取任务列表",
    "name": "getJoblist",
    "group": "Crontab-Master",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>错误编号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回错误信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>任务信息列表。每一个元素的信息如下{name:任务名，command:shell语句，cronExpr:cron表达式}</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":[{\"name\":\"dwdw\",\"command\":\"dwdw\",\"cronExpr\":\"dwdw\"},{\"name\":\"sleep 12131\",\"command\":\"sleep 3\",\"cronExpr\":\"* * * * *\"},{\"name\":\"sleep12131\",\"command\":\"sleep 3\",\"cronExpr\":\"* * * * *\"},{\"name\":\"test\",\"command\":\"sleep 3\",\"cronExpr\":\"* * * * *\"}]}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "post",
    "url": ":8070/job/log",
    "title": "获取任务日志",
    "name": "getJoblog",
    "group": "Crontab-Master",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>查询日志的任务名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Errno",
            "description": "<p>错误编号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>返回错误信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Data",
            "description": "<p>日志信息(多条)，每一个日志元素的格式如下{jobName：任务名字,command:脚本命令,err:错误原因,output:脚本输出,planTime:计划开始时间,scheduleTime:实际调度时间,startTime:任务开始执行时间,endTime:任务执行结束时间}</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "get",
    "url": ":8070/worker/list",
    "title": "获取节点列表",
    "name": "getWorkerlist",
    "group": "Crontab-Master",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "errno",
            "description": "<p>错误编号.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回错误信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String-Array",
            "optional": false,
            "field": "data",
            "description": "<p>节点ip</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":[\"192.168.3.248\"]}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Crontab"
  },
  {
    "type": "get",
    "url": ":8000/api/hosts/status/",
    "title": "主机列表",
    "name": "hostlist",
    "group": "Container",

    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": true,
            "field": "id",
            "description": "<p>客户端主机ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>客户端主机名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "ip_addr",
            "description": "<p>客户端主机IP</p>"
          },
		  {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>客户端主机在线状态</p>"
          },
		  {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "uptime",
            "description": "<p>客户端主机上线时间</p>"
          },
		  {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "last_update",
            "description": "<p>最后一次更新配置时间</p>"
          },
		  {
            "group": "Success 200",
            "type": "Int",
            "optional": true,
            "field": "total_services",
            "description": "<p>监控的服务数量</p>"
          },
		  {
            "group": "Success 200",
            "type": "Int",
            "optional": true,
            "field": "ok_nums",
            "description": "<p>可用的监控服务数量</p>"
          },
		  {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "trigger",
            "description": "<p>各等级报警详情.{\"1\":[],\"2\":[],\"3\":[],\"4\":[],\"5\":[]}.(1代表Diaster，2代表High，3代表Average，4代表Warning，5代表Info)</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"id\": 1, \"name\": \"ubuntu1\", \"ip_addr\": \"172.16.16.106\", \"status\": \"online\", \"uptime\": null, \"last_update\": null, \"total_services\": null, \"ok_nums\": null, \"triggers\": {\"1\": [], \"2\": [], \"3\": [], \"4\": [], \"5\": []}}"
          }
        ],
		"Trigger": [
          {
            "group": "Trigger",
            "type": "Int",
            "optional": true,
            "field": "host_id",
            "description": "<p>客户端主机ID</p>"
          },
		  {
            "group": "Trigger",
            "type": "String",
            "optional": true,
            "field": "host_name",
            "description": "<p>客户端主机名</p>"
          },
		  {
            "group": "Trigger",
            "type": "String",
            "optional": true,
            "field": "host_ip",
            "description": "<p>客户端主机IP</p>"
          },
		  {
            "group": "Trigger",
            "type": "Int",
            "optional": true,
            "field": "Trigger_id",
            "description": "<p>触发器ID</p>"
          },
		  {
            "group": "Trigger",
            "type": "String",
            "optional": true,
            "field": "Msg",
            "description": "<p>报警详细信息</p>"
          },
		  {
            "group": "Trigger",
            "type": "String",
            "optional": true,
            "field": "Time",
            "description": "<p>当前时间</p>"
          },
		  {
            "group": "Trigger",
            "type": "String",
            "optional": true,
            "field": "Start_time",
            "description": "<p>报警开始时间戳</p>"
          },
		  {
            "group": "Trigger",
            "type": "Int",
            "optional": true,
            "field": "duration",
            "description": "<p>状态码</p>"
          },
		]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Container"
  },
  {
    "type": "get",
    "url": ":8000/api/graphs/?host_id=3&time_range=latest  （latest：实时数据，10mins：每10分钟的平均数据，30mins：...，60mins：...）",
    "title": "主机监控详信息",
    "name": "graphs",
    "group": "Container",
	
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "1",
            "description": "<p>监控插件ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>监控插件名称</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "index_data",
            "description": "<p>暂时不明</p>"
          },
		  {
            "group": "Success 200",
            "type": "true/false",
            "optional": true,
            "field": "has_sub_service",
            "description": "<p>暂时不明</p>"
          },
		  {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "raw_data",
            "description": "<p>实时监控数据</p>"
          },
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Container"
  },
  {
    "type": "get",
    "url": ":8000/api/triggers_list/?host_id=3",
    "title": "已触发的报警事件列表",
    "name": "triggers_list",
    "group": "Container",
	
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "event_type",
            "description": "<p>事件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "trigger",
            "description": "<p>触发器名称及报警事件等级</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "log",
            "description": "<p>报警事件详情</p>"
          },
		  {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>报警时间</p>"
          },
		  {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "示例",
            "description": "<p>http://139.180.193.16:8000/monitor/trigger_list/</p>"
          },
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Container"
  },
  {
    "type": "post",
    "url": ":8080/acc/request_auth",
    "title": "挑战请求响应",
    "name": "request_auth",
    "group": "Certification",
    "parameter": {
      "fields": {
        "参数(raw-data json)": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "class",
            "description": "<p>微服务种类，比如crontab</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "insID",
            "description": "<p>微服务的insID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>客户端时间戳Tc</p>"
          },
          {
            "group": "Parameter",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "{\"clientID\":\"111111ddd\",\"timestamp\":\"1584336471\"}"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "errno",
            "description": "<p>错误编号.0表示success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msg",
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "challengeCode",
            "description": "<p>挑战码N</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "timestamp",
            "description": "<p>服务器时间戳Ts</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "authenticator",
            "description": "<p>服务器认证信息Authenticator<sub>s</sub></p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"challengeCode\":\"1234wwww\",\"timestamp\":\"1584338328\",\"Authenticator\",\"feigj3ur98uf2rjfr92fjvf9efj9fdjc\"}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Certification"
  },
  {
    "type": "post",
    "url": ":8080/acc/client_auth",
    "title": "客户端认证与密钥分发",
    "name": "client_auth",
    "group": "Certification",
    "parameter": {
      "fields": {
        "参数(raw-data json)": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authenticator",
            "description": "<p>客户端认证信息Authenticator<sub>c</sub></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>客户端时间戳Tc，与request_auth是同一个Tc</p>"
          },
          {
            "group": "Parameter",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "{\"Authenticator\":\"feefwf32rff39vesddw\",\"timestamp\":\"1584336471\"}"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "errno",
            "description": "<p>错误编号.0表示success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msg",
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data",
            "description": "<p>E<sub>hash(N,K)</sub>(Tc+1,SK)，用对称密钥加密会话密钥SK后产生的数据。</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":\"12rffwr3g34tf34w21df3t3g4\"}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Certification"
  },
  {
    "type": "post",
    "url": ":8080/acc/secrectKey",
    "title": "微服务会话密钥查询接口",
    "name": "secrectKey",
    "group": "Certification",
    "parameter": {
      "fields": {
        "参数(raw-data json)": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ida",
            "description": "<p>请求源的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idb",
            "description": "<p>自己的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>时间戳Tb</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authenticator",
            "description": "<p>认证信息Authenticator<sub>B</sub></p>"
          },
          {
            "group": "Parameter",
            "type": "",
            "optional": false,
            "field": "实例",
            "description": "{\"ida\":\"feegeasad\",\"idb\":\"dwwqfca\",\"timestamp\":\"1584340507\",\"authenticator\":\"dwfwfsafewefasd1wdw321dfefe\"}"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "errno",
            "description": "<p>错误编号.0表示success</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "msg",
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "list-json",
            "optional": true,
            "field": "data",
            "description": "<p>esk:E<sub>hash(N,K)</sub>(Ts,SKa)，用对称密钥加密 会话密钥SKa后产生的数据。<br> expired:过期时间<br>需要两个是因为有时候刚好在秘钥过期的时候进行一个通信</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"errno\":0,\"msg\":\"success\",\"data\":[{\"esk\":\"12rffwr3g34tf34w21df3t3g4\",\"expired\":\"1584340507\"}，{\"esk\":\"t32e3f34grttg4fewfgrtgsd32\",\"expired\":\"1584340507\"}]}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Certification"
  },


] });
