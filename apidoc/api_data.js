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
        "Parameter": [
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
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "Data",
            "description": "<p>被替代的Job信息.{name:任务名，command:shell语句，cronExpr:cron表达式}</p>"
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>被删除的任务名</p>"
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
            "description": "<p>返回信息.</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "Data",
            "description": "<p>被删除的Job信息.{name:任务名，command:shell语句，cronExpr:cron表达式}</p>"
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
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>强行杀死的任务名</p>"
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
            "description": "<p>\"\"</p>"
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
            "description": "<p>任务信息列表。每一个元素的信息如下{name:任务名，command:shell语句，cronExpr:cron表达式}</p>"
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
  }

] });
