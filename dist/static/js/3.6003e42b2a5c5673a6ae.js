webpackJsonp([3],{"9QFV":function(t,e,a){"use strict";(function(t){var i=a("Dd8w"),n=a.n(i),l=a("Wj15"),o=a("TIfe");e.a={data:function(){return{formTest:{start:1,pageSize:10,companySn:"",carNo:"",vin:"",maintainStatus:"",carType:"",maintainPeriod:"",startTime:"",endTime:""},timeValue:[],carTayes:[],aresArr:[],maintainPeriods:[{name:"新车",value:"0"},{name:"一保",value:"1"},{name:"二保",value:"2"},{name:"三保",value:"3"},{name:"四保",value:"4"},{name:"五保",value:"5"},{name:"六保",value:"6"},{name:"七保",value:"7"},{name:"八保",value:"8"},{name:"九保",value:"9"}],list:[],pagination:{total:0,sizes:[100,50,20,10]},selectedOptions:[],obj:{token:Object(o.a)()},diaObj:{title:"",diaIndex:-1,width:"400px",dialogTableVisible:!1},newDate:{},historyData:{},logData:{},downLoading:!1}},components:{"upload-file":function(){return a.e(42).then(a.bind(null,"4XOP"))},"new-log":function(){return a.e(44).then(a.bind(null,"QdiQ"))},"history-log":function(){return a.e(46).then(a.bind(null,"y7tN"))},"operate-log":function(){return a.e(49).then(a.bind(null,"5ckO"))}},mounted:function(){this.getVehicleType(),this.getAreaList(),this.getList()},methods:{handleSizeChange:function(t){this.formTest.pageSize=t,this.getList()},handleCurrentChange:function(t){this.formTest.start=t,this.getList()},getUploadData:function(t){t.code,t.data,t.msg;this.$message({message:"导入完成",type:"success"})},leadOut:function(){var e=this;this.downLoading=!0;var a=Object(o.a)();this.timeValue&&this.timeValue.length>0?(this.formTest.startTime=this.timeValue[0],this.formTest.endTime=this.timeValue[1]):(this.formTest.startTime="",this.formTest.endTime="");var i=document.createElement("form");for(var l in document.body.appendChild(i),i.id="myFrom",i.method="post",i.action="http://test.evcoming.com:9001/partner-admin-api/api/maintenance/maintenanceOutput",i.onsubmit="bc",this.formTest){var s=document.createElement("input");s.type="hidden",s.name=l,s.value=this.formTest[l],i.appendChild(s)}var r=document.createElement("input");r.type="hidden",r.name="token",r.value=a,i.appendChild(r);var c=document.createElement("input");c.type="submit",c.value="submit",i.appendChild(c),document.getElementById("myFrom").submit(),t.ajax({url:"http://test.evcoming.com:9001/partner-admin-api/api/maintenance/maintenanceOutput",type:"post",data:n()({token:a},this.formTest),success:function(){e.downLoading=!1,document.body.removeChild(i)}})},getList:function(){var t=this;this.timeValue&&this.timeValue.length>0?(this.formTest.startTime=this.timeValue[0],this.formTest.endTime=this.timeValue[1]):(this.formTest.startTime="",this.formTest.endTime=""),Object(l.g)(this.formTest).then(function(e){t.list=e.list,t.list.length>0&&t.list.forEach(function(t){t.totalMileage=(1*t.totalMileage).toFixed(2),t.lastMaintainMileage=(1*t.lastMaintainMileage).toFixed(2)}),t.pagination.total=e.recordTotal}).catch(function(t){console.log(t)})},getAreaList:function(){var t=this;Object(l.c)().then(function(e){t.aresArr=e}).catch(function(t){console.log(t)})},getVehicleType:function(){var t=this;Object(l.h)().then(function(e){t.carTayes=e}).catch(function(t){console.log(t)})},submit:function(){this.formTest.start=1,this.getList()},changeAres:function(t){this.formTest.companySn=t[t.length-1]},exitDialog:function(){this.diaObj.dialogTableVisible=!1,this.diaObj.diaIndex=-1},refreshList:function(){this.diaObj.dialogTableVisible=!1,this.diaObj.diaIndex=-1,this.getList()},newLog:function(t){var e=n()({},t);e.lastMaintainPeriod++,e.lastMaintainPeriodName=this.maintainPeriods[1*e.lastMaintainPeriod].name,this.newDate=e,this.diaObj.width="850px",this.diaObj.title="新增记录",this.diaObj.dialogTableVisible=!0,this.diaObj.diaIndex=0},getHistory:function(t){this.historyData=t,this.diaObj.width="860px",this.diaObj.title="历史记录",this.diaObj.dialogTableVisible=!0,this.diaObj.diaIndex=1},openLog:function(t){this.logData=t,this.diaObj.width="600px",this.diaObj.title="操作记录",this.diaObj.dialogTableVisible=!0,this.diaObj.diaIndex=2}}}}).call(e,a("7t+N"))},ABl7:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.xlsx-box {\n  padding-top: 10px;\n  border-top: 1px solid #DCDFE6;\n  border-bottom: 1px solid #DCDFE6;\n  padding-bottom: 10px;\n}\n.xlsx-box .btn1 {\n  float: left;\n}\n.xlsx-box .btn2 {\n  float: right;\n}\n.box-table {\n  margin-top: 18px;\n}\n",""])},Wj15:function(t,e,a){"use strict";e.g=function(t){return Object(i.a)({url:"/vehicleMaintain/getVehicleMaintainList",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"/vehicleMaintain/getAreaList",method:"post",data:t})},e.h=function(t){return Object(i.a)({url:"/vehicleMaintain/getVehicleType",method:"post",data:t})},e.d=function(t){return Object(i.a)({url:"/vehicleMaintain/getMaintainItemList",method:"post",data:t})},e.i=function(t){return Object(i.a)({url:"/vehicleMaintain/initMaintainInfo",method:"post",data:t})},e.a=function(t){return Object(i.a)({url:"/vehicleMaintain/addVehicleMaintainRecord",method:"post",data:t})},e.e=function(t){return Object(i.a)({url:"/vehicleMaintain/getMaintainRecordListById",method:"post",data:t})},e.b=function(t){return Object(i.a)({url:"/vehicleMaintain/deleteVehicleMaintainRecord",method:"post",data:t})},e.j=function(t){return Object(i.a)({url:"/vehicleMaintain/updateVehicleMaintainRecord",method:"post",data:t})},e.f=function(t){return Object(i.a)({url:"/vehicleMaintain/getOperateLogList",method:"post",data:t})};var i=a("vLgD")},hkeX:function(t,e,a){var i=a("ABl7");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("3fa5f039",i,!0)},kSJR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("9QFV"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{attrs:{model:t.formTest,inline:!0}},[a("el-form-item",{attrs:{label:"所属区域"}},[a("el-cascader",{attrs:{options:t.aresArr,props:{value:"companySn",label:"companyName"},filterable:"","show-all-levels":!1,clearable:"","change-on-select":""},on:{change:t.changeAres},model:{value:t.selectedOptions,callback:function(e){t.selectedOptions=e},expression:"selectedOptions"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车牌号"}},[a("el-input",{attrs:{placeholder:"车牌号",clearable:""},model:{value:t.formTest.carNo,callback:function(e){t.$set(t.formTest,"carNo",e)},expression:"formTest.carNo"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"车架号"}},[a("el-input",{attrs:{placeholder:"车架号",clearable:""},model:{value:t.formTest.vin,callback:function(e){t.$set(t.formTest,"vin",e)},expression:"formTest.vin"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"上次保养时间"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至",clearable:"","value-format":"yyyy-MM-dd","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.timeValue,callback:function(e){t.timeValue=e},expression:"timeValue"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"保养状态"}},[a("el-select",{attrs:{placeholder:"保养状态",clearable:""},model:{value:t.formTest.maintainStatus,callback:function(e){t.$set(t.formTest,"maintainStatus",e)},expression:"formTest.maintainStatus"}},[a("el-option",{attrs:{label:"立即保养",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"待保养",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"保养完成",value:"2"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"车辆类型"}},[a("el-select",{attrs:{clearable:"",placeholder:"选择车辆类型"},model:{value:t.formTest.carType,callback:function(e){t.$set(t.formTest,"carType",e)},expression:"formTest.carType"}},t._l(t.carTayes,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"上次完成保期"}},[a("el-select",{attrs:{clearable:"",placeholder:"上次完成保期"},model:{value:t.formTest.maintainPeriod,callback:function(e){t.$set(t.formTest,"maintainPeriod",e)},expression:"formTest.maintainPeriod"}},t._l(t.maintainPeriods,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})}))],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("查询")])],1)],1),t._v(" "),a("div",{staticClass:"xlsx-box"},[t.partner.permission.authority.HHR_MAINTAIN_MONITOR.includes("HHR_MAINTENANCE_OUTPUT")?a("el-button",{staticClass:"btn2",attrs:{type:"success",loading:t.downLoading},on:{click:t.leadOut}},[t._v("导出")]):t._e(),t._v(" "),t.partner.permission.authority.HHR_MAINTAIN_MONITOR.includes("HHR_MAINTENANCE_IMPORT")?a("upload-file",{staticClass:"btn1",attrs:{text:"批量导入",template:"车辆保养.xlsx","template-url":"/static/excel/vehicle-car-upkeep.xlsx",action:"/api/maintenance/maintenanceImport"},on:{success:t.getUploadData}}):t._e(),t._v(" "),a("div",{staticStyle:{clear:"both"}})],1),t._v(" "),a("el-table",{staticStyle:{"margin-top":"20px"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{label:"区域",width:"150",prop:"companyName"}}),t._v(" "),a("el-table-column",{attrs:{label:"车架号",prop:"vin",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"车牌号",prop:"carNo",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"车辆类型",prop:"carTypeName"}}),t._v(" "),a("el-table-column",{attrs:{label:"注册日期",width:"150",prop:"registerTimeStr"}}),t._v(" "),a("el-table-column",{attrs:{label:"上次保养时间",width:"150",prop:"lastMaintainTimeStr"}}),t._v(" "),a("el-table-column",{attrs:{label:"总里程(KM)",width:"100",prop:"totalMileage"}}),t._v(" "),a("el-table-column",{attrs:{label:"上次保养里程(KM)",width:"130",prop:"lastMaintainMileage"}}),t._v(" "),a("el-table-column",{attrs:{label:"保养状态",prop:"maintainStatusName"}}),t._v(" "),a("el-table-column",{attrs:{label:"上次完成保期",width:"150",prop:"lastMaintainPeriodName"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.partner.permission.authority.HHR_MAINTAIN_MONITOR.includes("HHR_ADD_VEHICLE_MAINTAIN_RECORD")?a("el-button",{staticStyle:{color:"#0C7D9D"},attrs:{type:"text"},on:{click:function(a){t.newLog(e.row)}}},[t._v("新增记录")]):t._e(),t._v(" "),a("el-button",{staticStyle:{color:"#F0930D"},attrs:{type:"text"},on:{click:function(a){t.getHistory(e.row)}}},[t._v("历史记录")]),t._v(" "),a("el-button",{staticStyle:{color:"#B2CE0D"},attrs:{type:"text"},on:{click:function(a){t.openLog(e.row)}}},[t._v("操作记录")])]}}])})],1),t._v(" "),a("div",{staticClass:"block",attrs:{align:"center"}},[a("el-pagination",{attrs:{"current-page":t.formTest.start,"page-sizes":t.pagination.sizes,"page-size":t.formTest.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.diaObj.title,width:t.diaObj.width,visible:t.diaObj.dialogTableVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.$set(t.diaObj,"dialogTableVisible",e)},close:t.exitDialog}},[0==t.diaObj.diaIndex?a("new-log",{attrs:{"data-row":t.newDate},on:{refeClose:t.refreshList,closeDialog:t.exitDialog}}):1==t.diaObj.diaIndex?a("history-log",{attrs:{"data-row":t.historyData}}):2==t.diaObj.diaIndex?a("operate-log",{attrs:{"data-row":t.logData}}):t._e()],1)],1)},staticRenderFns:[]};var l=function(t){a("hkeX")},o=a("VU/8")(i.a,n,!1,l,null,null);e.default=o.exports}});