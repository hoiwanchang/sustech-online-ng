(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{406:function(t,e,s){"use strict";s.r(e);s(72);var r={mounted:function(){function t(t){var e=new Date;e.setMinutes(e.getMinutes()-t);var s=e.getHours(),r=s<10?"0"+s:s,a=e.getMinutes();return r+":"+(a<10?"0"+a:a)}function e(e){for(var s=t(20),r=t(0),a=0,n=0,o=e.length;n<o;n++)e[n][0]<s?(e[n][2]="已到达",a=n):e[n][0]<r?e[n][2]="在途中":e[n][2]="未发车";return{row:a,now_table:e}}var s=[["07:00","",""],["07:05","",""],["07:10","",""],["07:15","高峰",""],["07:20","",""],["07:23","高峰",""],["07:26","高峰",""],["07:29","",""],["07:32","高峰",""],["07:36","高峰",""],["07:41","高峰",""],["07:44","高峰",""],["07:47","高峰",""],["07:50","高峰",""],["07:55","",""],["08:00","",""],["08:05","",""],["08:08","",""],["08:10","",""],["08:15","",""],["08:20","",""],["08:23","",""],["08:25","",""],["08:30","",""],["08:35","",""],["08:37","",""],["08:40","",""],["08:45","",""],["08:50","",""],["08:55","",""],["08:57","",""],["09:00","",""],["09:05","",""],["09:15","",""],["09:20","",""],["09:25","",""],["09:30","",""],["09:35","",""],["09:40","",""],["09:43","高峰",""],["09:46","高峰",""],["09:50","",""],["09:53","高峰",""],["09:56","高峰",""],["10:00","",""],["10:10","",""],["10:20","",""],["10:25","",""],["10:30","",""],["10:40","",""],["10:50","",""],["11:00","",""],["11:10","",""],["11:15","",""],["11:30","",""],["11:45","",""],["11:50","",""],["11:55","",""],["12:00","",""],["12:05","高峰",""],["12:10","",""],["12:16","高峰",""],["12:20","",""],["12:23","高峰",""],["12:26","高峰",""],["12:30","",""],["12:35","高峰",""],["12:40","",""],["12:50","",""],["13:00","",""],["13:15","",""],["13:20","",""],["13:25","高峰",""],["13:30","",""],["13:36","高峰",""],["13:40","高峰",""],["13:40","",""],["13:45","高峰",""],["13:50","",""],["13:55","高峰",""],["14:00","",""],["14:15","",""],["14:30","",""],["14:40","",""],["14:50","",""],["15:00","",""],["15:15","",""],["15:30","",""],["15:40","高峰",""],["15:50","",""],["15:53","高峰",""],["16:00","高峰",""],["16:05","高峰",""],["16:10","",""],["16:20","",""],["16:40","",""],["16:50","",""],["17:00","",""],["17:15","",""],["17:20","",""],["17:30","",""],["17:35","",""],["17:40","",""],["17:42","",""],["17:45","",""],["17:50","",""],["17:55","",""],["18:00","",""],["18:05","",""],["18:10","",""],["18:15","",""],["18:20","",""],["18:25","高峰",""],["18:25","",""],["18:30","",""],["18:35","",""],["18:40","",""],["18:45","",""],["18:50","",""],["19:00","",""],["19:10","",""],["19:20","",""],["19:30","",""],["19:45","",""],["20:00","",""],["20:20","",""],["20:30","",""],["20:40","",""],["21:00","",""],["21:20","",""],["21:30","",""],["21:40","",""]],r=[["07:20","",""],["07:25","",""],["07:30","",""],["07:35","高峰",""],["07:40","",""],["07:43","高峰",""],["07:46","",""],["07:50","",""],["07:55","高峰",""],["08:00","",""],["08:03","",""],["08:06","",""],["08:10","",""],["08:15","",""],["18:19","",""],["08:22","",""],["08:25","",""],["08:28","",""],["08:34","",""],["08:38","",""],["08:42","",""],["08:45","",""],["08:48","",""],["08:52","",""],["08:55","",""],["08:58","",""],["09:02","",""],["09:05","",""],["09:10","",""],["09:15","",""],["09:20","",""],["09:25","",""],["09:30","",""],["09:40","",""],["09:45","",""],["09:50","",""],["09:55","高峰",""],["09:55","高峰",""],["10:00","高峰",""],["10:05","高峰",""],["10:05","",""],["10:10","",""],["10:20","",""],["10:25","",""],["10:30","",""],["10:40","",""],["10:45","",""],["10:50","",""],["11:00","",""],["11:15","",""],["11:30","",""],["11:40","",""],["11:45","",""],["11:50","",""],["12:00","",""],["12:05","高峰",""],["12:10","",""],["12:16","高峰",""],["12:19","高峰",""],["12:20","",""],["12:25","高峰",""],["12:30","",""],["12:36","高峰",""],["12:40","高峰",""],["12:45","",""],["12:50","高峰",""],["12:55","",""],["13:00","",""],["13:15","",""],["13:30","",""],["13:40","",""],["13:45","高峰",""],["13:50","",""],["13:56","高峰",""],["13:59","高峰",""],["14:00","",""],["14:10","",""],["14:15","高峰",""],["14:20","",""],["14:30","",""],["14:40","",""],["14:50","",""],["15:00","",""],["15:10","",""],["15:20","",""],["15:40","",""],["15:50","高峰",""],["16:00","",""],["16:06","高峰",""],["16:10","高峰",""],["16:20","",""],["16:30","",""],["16:45","",""],["17:00","",""],["17:10","",""],["17:20","",""],["17:30","",""],["17:40","",""],["17:50","",""],["18:00","",""],["18:06","高峰",""],["18:10","",""],["18:16","高峰",""],["18:20","高峰",""],["18:20","",""],["18:25","高峰",""],["18:30","",""],["18:40","",""],["18:45","高峰",""],["18:50","",""],["19:00","",""],["19:20","",""],["19:40","",""],["19:50","",""],["20:00","",""],["20:20","",""],["20:40","",""],["20:55","高峰",""],["21:00","",""],["21:03","高峰",""],["21:20","",""],["21:58","高峰",""],["22:00","高峰",""],["22:00","",""],["22:10","高峰",""],["22:30","",""]],a=[["11:50","",""],["17:45","",""]];function n(){if(!$.fn.DataTable.isDataTable("#hl2rb")){var t={scrollY:300,paging:!1,searching:!1,bFilter:!1,info:!1,columns:[{title:"发车时间"},{title:"平时/高峰",orderable:!1},{title:"状态",orderable:!1}],rowCallback:function(t,e,s){"已到达"==e[2]?($("td",t).css("background-color","#003f43"),$("td",t).css("color","#FFFFFF")):"在途中"==e[2]&&($("td",t).css("background-color","#ed6c00"),$("td",t).each((function(){$(this).html("<b>"+$(this).text()+"</b>")})))}},n=e(s);s=n.now_table;var o=n.row,l=$("#work-bus-hl2rb").DataTable($.extend(!0,{data:s},t)),u=$(l.row(Math.min(o,s.length)).node()).offset().top-$(l.row(0).node()).offset().top;$("#bus-table-hl2rb .dataTables_scrollBody").scrollTop(u);n=e(r);r=n.now_table;var d=n.row,c=$("#work-bus-rb2hl").DataTable($.extend(!0,{data:r},t));u=$(c.row(Math.min(d,r.length)).node()).offset().top-$(c.row(0).node()).offset().top;$("#bus-table-rb2hl .dataTables_scrollBody").scrollTop(u);n=e(a);a=n.now_table;var _=n.row,i=$("#work-bus-ip2lh").DataTable($.extend(!0,{data:a},t));u=$(i.row(Math.min(_,a.length)).node()).offset().top-$(i.row(0).node()).offset().top;$("#bus-table-ip2lh .dataTables_scrollBody").scrollTop(u)}}document.addEventListener("DOMContentLoaded",n,!1),$(document).ready((function(){n()}))}},a=s(46),n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"🚌校园巴士-工作日-2020年5月15日更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🚌校园巴士-工作日-2020年5月15日更新"}},[t._v("#")]),t._v(" 🚌校园巴士 - 工作日 (2020年5月15日更新)")]),t._v(" "),s("h2",{attrs:{id:"欣园-→-科研楼（共132班）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#欣园-→-科研楼（共132班）"}},[t._v("#")]),t._v(" 欣园 → 科研楼（共132班）")]),t._v(" "),s("p",[s("strong",[t._v("欣园")]),t._v("⇋"),s("strong",[t._v("慧园")]),t._v("⇋（荔园←）【创园⇋】（慧园←）"),s("strong",[t._v("荔园")]),t._v("⇋"),s("strong",[t._v("学生宿舍")]),t._v("⇋【社康中心⇋】"),s("strong",[t._v("教工餐厅")]),t._v("⇋【专家公寓⇋三号门⇋一号门⇋行政楼⇋】"),s("strong",[t._v("七号门")]),t._v("⇋"),s("strong",[t._v("科研楼")])]),t._v(" "),s("ul",[s("li",[t._v("（此区间，单向停靠）")]),t._v(" "),s("li",[t._v("【此区间，高峰线越站】")])]),t._v(" "),s("ClientOnly",[s("div",{attrs:{id:"bus-table-hl2rb"}},[s("table",{staticClass:"dataTable",attrs:{id:"work-bus-hl2rb"}})])]),t._v(" "),s("h2",{attrs:{id:"科研楼-→-欣园（共126班）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#科研楼-→-欣园（共126班）"}},[t._v("#")]),t._v(" 科研楼 → 欣园（共126班）")]),t._v(" "),s("ClientOnly",[s("div",{attrs:{id:"bus-table-rb2hl"}},[s("table",{staticClass:"dataTable",attrs:{id:"work-bus-rb2hl"}})])]),t._v(" "),s("h2",{attrs:{id:"智园-→-教工食堂-→-荔园（共2班）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#智园-→-教工食堂-→-荔园（共2班）"}},[t._v("#")]),t._v(" 智园 → 教工食堂 → 荔园（共2班）")]),t._v(" "),s("ClientOnly",[s("div",{attrs:{id:"bus-table-ip2lh"}},[s("table",{staticClass:"dataTable",attrs:{id:"work-bus-ip2lh"}})])]),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("2020年5月15日 "),s("code",[t._v("校园服务办公室 <ocs@sustech.edu.cn>")]),t._v(" 邮件《【工作通知】关于调整校园巴士运行时刻的通知 Notice on Adjustment of Campus Bus Schedule【2020】22号》")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_2020.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("（右键 / 长按保存）")])])]),t._v(" "),s("li",[s("p",[t._v("2019年9月29日 "),s("code",[t._v("校园服务办公室 <ocs@sustech.edu.cn>")]),t._v(" 邮件《关于调整校园巴士运行时刻及路线的通知 Notice on Adjustment of Campus Bus Schedule and Routes【2019】39号》")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_1939.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("（右键 / 长按保存）")])])]),t._v(" "),s("li",[s("p",[t._v("2019年8月30日 "),s("code",[t._v("校园服务办公室 <ocs@sustech.edu.cn>")]),t._v(" 邮件《关于调整校园巴士运行时刻及路线的通知 Notice on Adjustment of Campus Bus Schedule and Routes【2019】30号》")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_1930.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("（右键 / 长按保存）")])])]),t._v(" "),s("li",[s("p",[t._v("2019年5月16日 "),s("code",[t._v("校园服务办公室 <ocs@sustech.edu.cn>")]),t._v(" 邮件《关于调整校园巴士运行时刻的通知 Notification about Adjustments of the Campus Bus Schedule【2019】12号》")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_1912.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("（右键 / 长按保存）")])])]),t._v(" "),s("li",[s("p",[t._v("2018年12月29日 "),s("code",[t._v("校园服务办公室 <ocs@sustc.edu.cn>")]),t._v(" 邮件《关于调整校园巴士运行时刻的通知 Notification about Adjustments of the Campus Bus Schedule【2018】50号》")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_1850.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("（右键 / 长按保存）")])])]),t._v(" "),s("li",[s("p",[t._v("2018年9月29日 "),s("code",[t._v("校园服务办公室 <ocs@sustc.edu.cn>")]),t._v(" 邮件《通知：调整校园巴士运行时刻 Notification: Adjustments of the Campus Bus Schedule【2018】31号》")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cdn.jsdelivr.net/gh/sustc/sustech-online-ng@master/docs/transport/Campus_Bus_Schedule_1831.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),s("OutboundLink")],1),t._v("（右键 / 长按保存）")])])])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);