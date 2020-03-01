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
            "description": "<p>各等级报警数量.{\"1\":[],\"2\":[],\"3\":[],\"4\":[],\"5\":[]}.(1代表Diaster，2代表High，3代表Average，4代表Warning，5代表Info)</p>"
          },
          {
            "group": "Success 200",
            "type": "",
            "optional": true,
            "field": "实例",
            "description": "{\"id\": 1, \"name\": \"ubuntu1\", \"ip_addr\": \"172.16.16.106\", \"status\": \"online\", \"uptime\": null, \"last_update\": null, \"total_services\": null, \"ok_nums\": null, \"triggers\": {\"1\": [], \"2\": [], \"3\": [], \"4\": [], \"5\": []}}"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Container"
  },
  {
    "type": "get",
    "url": ":8000/api/graphs/?host_id=3&time_range=latest",
    "title": "主机监控详信息（latest：实时数据，10mins：每10分钟的平均数据，30mins：...，60mins：...）",
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
    "groupTitle": "container"
  }

] });
