webpackJsonp([37],{LZoq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("woOf"),n=a.n(r),s=a("vqn8"),o={props:["setData"],data:function(){var e=function(e,t,a){if(!t||1*t<=0)return a(new Error("整数，>=1"));a()};return{brokerage:{firstRebateAmount:"",firstRebateStagingNum:"",secondRebateAmount:"",secondRebateStagingNum:"",experienceStoreRebateAmount:"",experienceStoreRebateStagingNum:"",nonPartnerRecommendedCommission:"",nonPartnerRebateStagingNum:1,partnerRecommendedCommission:"",partnerRebateStagingNum:1},ruleBrokerage:{firstRebateAmount:[{required:!0,message:"请输入佣金",trigger:"blur"}],firstRebateStagingNum:[{validator:e,trigger:"blur"}],secondRebateAmount:[{required:!0,message:"请输入佣金",trigger:"blur"}],secondRebateStagingNum:[{validator:e,trigger:"blur"}],nonPartnerRecommendedCommission:[{required:!0,message:"请输入佣金",trigger:"blur"}],nonPartnerRebateStagingNum:[{validator:e,trigger:"blur"}],partnerRecommendedCommission:[{required:!0,message:"请输入佣金",trigger:"blur"}],partnerRebateStagingNum:[{validator:e,trigger:"blur"}]}}},created:function(){this.brokerage={firstRebateAmount:0===this.setData.firstRebateAmount?this.setData.firstRebateAmount+"":this.setData.firstRebateAmount,firstRebateStagingNum:0===this.setData.firstRebateStagingNum?this.setData.firstRebateStagingNum+"":this.setData.firstRebateStagingNum,secondRebateAmount:0===this.setData.secondRebateAmount?this.setData.secondRebateAmount+"":this.setData.secondRebateAmount,secondRebateStagingNum:0===this.setData.secondRebateStagingNum?this.setData.secondRebateStagingNum+"":this.setData.secondRebateStagingNum,experienceStoreRebateAmount:0===this.setData.experienceStoreRebateAmount?this.setData.experienceStoreRebateAmount+"":this.setData.experienceStoreRebateAmount,experienceStoreRebateStagingNum:0===this.setData.experienceStoreRebateStagingNum?this.setData.experienceStoreRebateStagingNum+"":this.setData.experienceStoreRebateStagingNum,nonPartnerRecommendedCommission:0===this.setData.nonPartnerRecommendedCommission?this.setData.nonPartnerRecommendedCommission+"":this.setData.nonPartnerRecommendedCommission,nonPartnerRebateStagingNum:1,partnerRecommendedCommission:0===this.setData.partnerRecommendedCommission?this.setData.partnerRecommendedCommission+"":this.setData.partnerRecommendedCommission,partnerRebateStagingNum:1}},methods:{submitFun:function(){var e=this;if("1"===this.setData.ytype){var t={styStrategyBaseId:this.setData.testId,firstRebateAmount:"",firstRebateStagingNum:"",secondRebateAmount:"",secondRebateStagingNum:"",experienceStoreRebateAmount:"",experienceStoreRebateStagingNum:"",nonPartnerRecommendedCommission:"",nonPartnerRebateStagingNum:1,partnerRecommendedCommission:"",partnerRebateStagingNum:1,orderType:this.setData.orderType};t=n()({},t,this.brokerage),Object(s.a)(t).then(function(t){e.$emit("relClose")}).catch(function(t){e.$message.error(t)})}else{var a={id:this.setData.pId,firstRebateAmount:"",firstRebateStagingNum:"",secondRebateAmount:"",secondRebateStagingNum:"",experienceStoreRebateAmount:"",experienceStoreRebateStagingNum:"",nonPartnerRecommendedCommission:"",nonPartnerRebateStagingNum:1,partnerRecommendedCommission:"",partnerRebateStagingNum:1,orderType:this.setData.orderType};a=n()({},a,this.brokerage),Object(s.e)(a).then(function(t){e.$emit("relClose")}).catch(function(t){e.$message.error(t)})}},rewSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.submitFun()})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"ruleBrokerage",attrs:{model:e.brokerage,rules:e.ruleBrokerage,"label-width":"150px"}},[a("div",{staticClass:"base-title"},[a("span",{staticClass:"s1",staticStyle:{width:"14%"}},[e._v("合伙人设置")]),e._v(" "),a("span",{staticClass:"s2",staticStyle:{width:"86%"}}),e._v(" "),a("div",{staticStyle:{clear:"both"}})]),e._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"一级合伙人提佣：",prop:"firstRebateAmount"}},[a("el-input",{attrs:{placeholder:"设为0时无佣金",onkeyup:"value=value.replace(/[^\\d{1,}\\.\\d{1,}|\\d{1,}]/g,'')"},model:{value:e.brokerage.firstRebateAmount,callback:function(t){e.$set(e.brokerage,"firstRebateAmount",t)},expression:"brokerage.firstRebateAmount"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-col",{attrs:{span:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("分")])]),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{prop:"firstRebateStagingNum","label-width":"5px"}},[a("el-input",{attrs:{placeholder:"整数，>=1",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.brokerage.firstRebateStagingNum,callback:function(t){e.$set(e.brokerage,"firstRebateStagingNum",t)},expression:"brokerage.firstRebateStagingNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("期返佣")])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"二级合伙人提佣：",prop:"secondRebateAmount"}},[a("el-input",{attrs:{placeholder:"设为0时无佣金",onkeyup:"value=value.replace(/[^\\d{1,}\\.\\d{1,}|\\d{1,}]/g,'')"},model:{value:e.brokerage.secondRebateAmount,callback:function(t){e.$set(e.brokerage,"secondRebateAmount",t)},expression:"brokerage.secondRebateAmount"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-col",{attrs:{span:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("分")])]),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{prop:"secondRebateStagingNum","label-width":"5px"}},[a("el-input",{attrs:{placeholder:"整数，>=1",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.brokerage.secondRebateStagingNum,callback:function(t){e.$set(e.brokerage,"secondRebateStagingNum",t)},expression:"brokerage.secondRebateStagingNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("期返佣")])])],1)],1),e._v(" "),a("div",{staticClass:"base-title"},[a("span",{staticClass:"s1",staticStyle:{width:"14%"}},[e._v("体验店设置")]),e._v(" "),a("span",{staticClass:"s2",staticStyle:{width:"86%"}}),e._v(" "),a("div",{staticStyle:{clear:"both"}})]),e._v(" "),a("el-row",{staticStyle:{"margin-top":"20px"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"非合伙人推荐提佣：",prop:"nonPartnerRecommendedCommission"}},[a("el-input",{attrs:{placeholder:"设为0时无佣金",onkeyup:"value=value.replace(/[^\\d{1,}\\.\\d{1,}|\\d{1,}]/g,'')"},model:{value:e.brokerage.nonPartnerRecommendedCommission,callback:function(t){e.$set(e.brokerage,"nonPartnerRecommendedCommission",t)},expression:"brokerage.nonPartnerRecommendedCommission"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-col",{attrs:{span:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("分")])]),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{prop:"nonPartnerRebateStagingNum","label-width":"5px"}},[a("el-input",{attrs:{disabled:"",placeholder:"整数，>=1",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.brokerage.nonPartnerRebateStagingNum,callback:function(t){e.$set(e.brokerage,"nonPartnerRebateStagingNum",t)},expression:"brokerage.nonPartnerRebateStagingNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("期返佣")])])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"合伙人推荐提佣：",prop:"partnerRecommendedCommission"}},[a("el-input",{attrs:{placeholder:"设为0时无佣金",onkeyup:"value=value.replace(/[^\\d{1,}\\.\\d{1,}|\\d{1,}]/g,'')"},model:{value:e.brokerage.partnerRecommendedCommission,callback:function(t){e.$set(e.brokerage,"partnerRecommendedCommission",t)},expression:"brokerage.partnerRecommendedCommission"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-col",{attrs:{span:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("分")])]),e._v(" "),a("el-col",{attrs:{span:10,offset:1}},[a("el-form-item",{attrs:{prop:"partnerRebateStagingNum","label-width":"5px"}},[a("el-input",{attrs:{disabled:"",placeholder:"整数，>=1",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.brokerage.partnerRebateStagingNum,callback:function(t){e.$set(e.brokerage,"partnerRebateStagingNum",t)},expression:"brokerage.partnerRebateStagingNum"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4,offset:1}},[a("span",{staticStyle:{"line-height":"32px"}},[e._v("期返佣")])])],1)],1),e._v(" "),a("div",{staticClass:"re-set-submit",attrs:{align:"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.rewSubmit("ruleBrokerage")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var l=a("VU/8")(o,i,!1,function(e){a("Sm+Y")},null,null);t.default=l.exports},"Sm+Y":function(e,t,a){var r=a("itjQ");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("65ffbe80",r,!0)},itjQ:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.re-set-submit {\n  margin-top: 20px;\n}\n",""])}});