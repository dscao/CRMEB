(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5846e102"],{1545:function(e,t,r){},"2f67":function(e,t,r){"use strict";var a=r("1545");r.n(a).a},"370a":function(e,t,r){"use strict";r.r(t);var a=r("c964"),s=r("f3f3"),i=(r("96cf"),r("d3b7"),r("159b"),r("a434"),r("4de4"),r("d81d"),r("a464")),n=r("f8b7"),o=r("2f62"),c=r("31b4"),l=r("fc48"),d=r("61f8"),m=r("417c"),u=r("d616"),p=r("a716");c={name:"table_list",components:{expandRow:i.a,editFrom:c.a,detailsFrom:l.a,orderRemark:d.a,orderRecord:m.a,orderSend:u.a,userDetails:p.a},props:["where","isAll"],data:function(){var e=this;return{delfromData:{},modal:!1,orderList:[],orderCards:[],loading:!1,orderId:0,columns:[{type:"expand",width:30,render:function(e,t){return e(i.a,{props:{row:t.row}})}},{width:50,align:"center",renderHeader:function(t,r){return t("div",{class:{"select-panel":!0},on:{mouseenter:function(t){e.display="block"},mouseleave:function(t){e.display="none"}}},[t("Checkbox",{props:{value:e.checkBox},on:{"on-change":function(t){e.checkBox=t,e.$refs.table.selectAll(e.checkBox),e.$emit("on-all",t?0:-1)}}}),t("div",{style:{position:"absolute",top:0,zIndex:2,display:e.display,width:"80px",height:"100%",padding:"0px 0",borderRadius:"4px",backgroundColor:"#fff",boxShadow:"0 0px 5px rgba(0, 0, 0, 0.2)",transform:"translateX(25%)"}},[t("div",{class:{"select-item":!0,on:0==e.isAll},style:{padding:"1px 6px",cursor:"pointer",height:"50%"},on:{click:function(t){0===e.isAll?(e.$emit("on-all",-1),e.checkBox=!1,e.$refs.table.selectAll(e.checkBox)):(e.$emit("on-all",0),e.formSelection.length||(e.checkBox=!0,e.$refs.table.selectAll(e.checkBox))),e.display="none"}}},"选择当页"),t("div",{class:{"select-item":!0,on:1==e.isAll},style:{padding:"1px 6px",cursor:"pointer",height:"50%"},on:{click:function(t){1===e.isAll?(e.isAll=-1,e.$emit("on-all",-1),e.checkBox=!1):(e.isAll=1,e.$emit("on-all",1),e.checkBox=!0),e.$refs.table.selectAll(e.checkBox),e.display="none"}}},"选择全部")])])},render:function(t,r){return t("Checkbox",{props:{value:r.row.checkBox},on:{"on-change":function(t){t?e.formSelection.push(r.row):(e.checkBox=!1,e.formSelection.forEach((function(t,a){t.id===r.row.id&&e.formSelection.splice(a,1)}))),e.$emit("on-all",e.formSelection.length?0:-1),r.row.checkBox=t,e.orderList[r.index].checkBox=t}},ref:"checkbox",refInFor:!0})}},{title:"订单号",align:"center",slot:"order_id",minWidth:150},{title:"订单类型",key:"pink_name",minWidth:120},{title:"用户信息",slot:"nickname",minWidth:100},{title:"商品信息",slot:"info",minWidth:330},{title:"实际支付",key:"pay_price",minWidth:70},{title:"支付时间",key:"_pay_time",minWidth:100},{title:"支付状态",key:"pay_type_name",minWidth:80},{title:"订单状态",key:"statusName",slot:"statusName",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150,align:"center"}],page:{total:0,pageNum:1,pageSize:10},data:[],FromData:null,orderDatalist:null,modalTitleSs:"",isDelIdList:[],checkBox:!1,formSelection:[],selectionCopy:[],display:"none",autoDisabled:!1,status:0}},computed:Object(s.a)({},Object(o.e)("admin/order",["orderPayType","orderStatus","orderTime","orderNum","fieldKey","orderType"])),mounted:function(){},created:function(){this.getList()},watch:{orderType:function(){this.page.pageNum=1,this.getList()},formSelection:function(e){this.$emit("order-select",e),e.length?this.$emit("auto-disabled",0):this.$emit("auto-disabled",1);var t=e.some((function(e){return 1===e.is_del}));this.getIsDel(t),this.getisDelIdListl(e)},orderList:{deep:!0,handler:function(e){var t=this;e.forEach((function(e){t.formSelection.forEach((function(t){t.id===e.id&&(e.checkBox=!0)}))})),e=this.orderList.filter((function(e){return e.checkBox}));this.orderList.length?this.checkBox=this.orderList.length===e.length:this.checkBox=!1}}},methods:Object(s.a)(Object(s.a)({},Object(o.d)("admin/order",["getIsDel","getisDelIdListl"])),{},{selectAll:function(e){var t=this;e.length&&(this.formSelection=e,this.selectionCopy=e),this.selectionCopy.forEach((function(e,r){e.checkBox=t.checkBox,t.$set(t.orderList,r,e)}))},showUserInfo:function(e){this.$refs.userDetails.modals=!0,this.$refs.userDetails.getDetails(e.uid)},changeMenu:function(e,t){var r=this;switch(this.orderId=e.id,t){case"1":this.delfromData={title:"修改立即支付",url:"/order/pay_offline/".concat(e.id),method:"post",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.$emit("changeGetTabs"),r.getList()})).catch((function(e){r.$Message.error(e.msg)}));break;case"2":this.getData(e.id);break;case"3":this.$refs.record.modals=!0,this.$refs.record.getList(e.id);break;case"4":this.$refs.remarks.modals=!0;break;case"5":this.getRefundData(e.id);break;case"6":this.getRefundIntegral(e.id);break;case"7":this.getNoRefundData(e.id);break;case"8":this.delfromData={title:"修改确认收货",url:"/order/take/".concat(e.id),method:"put",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.getList()})).catch((function(e){r.$Message.error(e.msg)}));break;case"10":this.delfromData={title:"立即打印订单",info:"您确认打印此订单吗?",url:"/order/print/".concat(e.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.$emit("changeGetTabs"),r.getList()})).catch((function(e){r.$Message.error(e.msg)}));break;case"11":this.delfromData={title:"立即打印电子面单",info:"您确认打印此电子面单吗?",url:"/order/order_dump/".concat(e.id),method:"get",ids:""},this.$modalSure(this.delfromData).then((function(e){r.$Message.success(e.msg),r.getList()})).catch((function(e){r.$Message.error(e.msg)}));break;default:this.delfromData={title:"删除订单",url:"/order/del/".concat(e.id),method:"DELETE",ids:""},this.delOrder(e,this.delfromData)}},submitModel:function(){this.getList()},pageChange:function(e){this.page.pageNum=e,this.getList()},limitChange:function(e){this.page.pageSize=e,this.getList()},getOrderList:function(e){Object(n.Q)(e).then((function(e){}))},getList:function(e){var t=this;this.page.pageNum=1===e?1:this.page.pageNum,this.loading=!0,Object(n.Q)(this.$route.query.id).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.data,t.orderList=a.map((function(e){return 1===t.isAll?e.checkBox=!0:e.checkBox=!1,e})),t.orderCards=a.stat,t.page.total=a.count,t.$emit("on-changeCards",a.stat),t.loading=!1;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},onSelectTab:function(e){var t=(this.formSelection=e).some((function(e){return 1===e.is_del}));this.getIsDel(t),this.getisDelIdListl(e)},edit:function(e){this.getOrderData(e.id)},splitOrderDetail:function(e){this.$router.push({path:"split_order",query:{id:e.id}})},delOrder:function(e,t){var r=this;1===e.is_del?this.$modalSure(t).then((function(e){r.$Message.success(e.msg),r.getList()})).catch((function(e){r.$Message.error(e.msg)})):this.$Modal.error({title:"错误！",content:"<p>您选择的的订单存在用户未删除的订单，无法删除用户未删除的订单！</p>"})},getOrderData:function(e){var t=this;Object(n.l)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===r.data.status)return e.abrupt("return",t.$authLapse(r.data));e.next=2;break;case 2:t.$authLapse(r.data),t.FromData=r.data,t.$refs.edits.modals=!0;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getData:function(e){var t=this;Object(n.e)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.detailss.modals=!0,t.orderDatalist=r.data,t.orderDatalist.orderInfo.refund_reason_wap_img)try{t.orderDatalist.orderInfo.refund_reason_wap_img=JSON.parse(t.orderDatalist.orderInfo.refund_reason_wap_img)}catch(e){t.orderDatalist.orderInfo.refund_reason_wap_img=[]}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},submitFail:function(){this.status=0,this.getList()},getRefundData:function(e){var t=this;this.$modalForm(Object(n.o)(e)).then((function(){t.getList(),t.$emit("changeGetTabs")}))},getRefundIntegral:function(e){var t=this;Object(n.N)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.FromData=r.data,t.$refs.edits.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},getNoRefundData:function(e){var t=this;this.$modalForm(Object(n.p)(e)).then((function(){t.getList(),t.$emit("changeGetTabs")}))},sendOrder:function(e){var t=this;this.$refs.send.modals=!0,this.orderId=e.id,this.status=e._status,this.$refs.send.getList(),this.$refs.send.getDeliveryList(),this.$nextTick((function(r){t.$refs.send.getCartInfo(e._status,e.id)}))},delivery:function(e){var t=this;Object(n.g)(e.id).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.FromData=r.data,t.$refs.edits.modals=!0;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},change:function(e){},exportData:function(){this.$refs.table.exportCsv({filename:"商品列表"})},bindWrite:function(e){var t=this;this.$Modal.confirm({title:"提示",content:"确定要核销该订单吗？",cancelText:"取消",closable:!0,maskClosable:!0,onOk:function(){Object(n.T)(e.order_id).then((function(e){t.$Message.success(e.msg),t.getList()}))},onCancel:function(){}})},onSelectCancel:function(e,t){}})},r("2f67"),l=r("2877"),d=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"i-layout-page-header"},[r("div",{staticClass:"i-layout-page-header"},[r("span",{staticClass:"ivu-page-header-title"},[e._v("子订单列表")]),r("span",{staticClass:"return",on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])])]),r("Table",{ref:"table",staticClass:"orderData mt25",attrs:{columns:e.columns,data:e.orderList,loading:e.loading,"highlight-row":"","no-data-text":"暂无数据","no-filtered-data-text":"暂无筛选结果"},on:{"on-selection-change":e.onSelectTab,"on-select-all":e.selectAll,"on-select-all-cancel":e.selectAll,"on-select-cancel":e.onSelectCancel},scopedSlots:e._u([{key:"order_id",fn:function(t){var a=t.row;return t.index,[r("span",{staticStyle:{display:"block"},domProps:{textContent:e._s(a.order_id)}}),r("span",{directives:[{name:"show",rawName:"v-show",value:1===a.is_del,expression:"row.is_del === 1"}],staticStyle:{color:"#ed4014",display:"block"}},[e._v("用户已删除")])]}},{key:"nickname",fn:function(t){var a=t.row;return t.index,[r("a",{on:{click:function(t){return e.showUserInfo(a)}}},[e._v(e._s(a.nickname))])]}},{key:"info",fn:function(t){var a=t.row;return t.index,e._l(a._info,(function(t,a){return r("div",{key:a,staticClass:"tabBox"},[r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:(t.cart_info.productInfo.attrInfo||t.cart_info.productInfo).image,expression:"\n              val.cart_info.productInfo.attrInfo\n                ? val.cart_info.productInfo.attrInfo.image\n                : val.cart_info.productInfo.image\n            "}]})]),r("span",{staticClass:"tabBox_tit"},[e._v("\n          "+e._s(t.cart_info.productInfo.store_name+" | ")+e._s(t.cart_info.productInfo.attrInfo?t.cart_info.productInfo.attrInfo.suk:"")+"\n        ")]),r("span",{staticClass:"tabBox_pice"},[e._v(e._s("￥"+t.cart_info.truePrice+" x "+t.cart_info.cart_num))])])}))}},{key:"statusName",fn:function(t){var a=t.row;return t.index,[r("div",{staticClass:"pt5",domProps:{innerHTML:e._s(a.status_name.status_name)}}),r("div",{staticClass:"pictrue-box"},e._l(a.status_name.pics||[],(function(t,s){return a.status_name.pics?r("div",{directives:[{name:"viewer",rawName:"v-viewer"}],key:s},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],staticClass:"pictrue mr10",attrs:{src:t}})]):e._e()})),0)]}},{key:"action",fn:function(t){var a=t.row;return t.index,[1===a._status?r("a",{on:{click:function(t){return e.edit(a)}}},[e._v("编辑")]):e._e(),2!==a._status&&8!==a._status||1!==a.shipping_type||null!==a.pinkStatus&&2!==a.pinkStatus?e._e():r("a",{on:{click:function(t){return e.sendOrder(a)}}},[e._v("发送货")]),4===a._status?r("a",{on:{click:function(t){return e.delivery(a)}}},[e._v("配送信息")]):e._e(),2==a.shipping_type&&0==a.status&&1==a.paid&&0===a.refund_status?r("a",{on:{click:function(t){return e.bindWrite(a)}}},[e._v("立即核销")]):e._e(),2===a._status||8===a._status?r("Divider",{attrs:{type:"vertical"}}):e._e(),8===a._status?r("a",{on:{click:function(t){return e.splitOrderDetail(a)}}},[e._v("查看子订单")]):e._e(),1===a._status||(2===a._status||8===a._status)&&(null===a.pinkStatus||2===a.pinkStatus)||4===a._status||2==a.shipping_type&&0==a.status&&1==a.paid&&0===a.refund_status?r("Divider",{attrs:{type:"vertical"}}):e._e(),[r("Dropdown",{on:{"on-click":function(t){return e.changeMenu(a,t)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n            更多\n            "),r("Icon",{attrs:{type:"ios-arrow-down"}})],1),r("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1===a._status&&0===a.paid&&"offline"===a.pay_type,expression:"row._status === 1 && row.paid === 0 && row.pay_type === 'offline'"}],ref:"ones",attrs:{name:"1"}},[e._v("立即支付")]),r("DropdownItem",{attrs:{name:"2"}},[e._v("订单详情")]),r("DropdownItem",{attrs:{name:"3"}},[e._v("订单记录")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:3<=a._status&&a.express_dump,expression:"row._status >= 3 && row.express_dump"}],attrs:{name:"11"}},[e._v("电子面单打印")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:2<=a._status,expression:"row._status >= 2"}],attrs:{name:"10"}},[e._v("小票打印")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:1!==a._status||3===a._status&&0<a.use_integral&&a.use_integral>=a.back_integral,expression:"\n                row._status !== 1 ||\n                (row._status === 3 && row.use_integral > 0 && row.use_integral >= row.back_integral)\n              "}],attrs:{name:"4"}},[e._v("订单备注")]),r("DropdownItem",{directives:[{name:"show",rawName:"v-show",value:4===a._status,expression:"row._status === 4"}],attrs:{name:"8"}},[e._v("已收货")]),1==a.is_del?r("DropdownItem",{attrs:{name:"9"}},[e._v("删除订单")]):e._e()],1)],1)]]}}])}),r("div",{staticClass:"acea-row row-right page"}),r("edit-from",{ref:"edits",attrs:{FromData:e.FromData},on:{submitFail:e.submitFail}}),r("user-details",{ref:"userDetails"}),r("details-from",{ref:"detailss",attrs:{orderDatalist:e.orderDatalist,orderId:e.orderId}}),r("order-remark",{ref:"remarks",attrs:{orderId:e.orderId},on:{submitFail:e.submitFail}}),r("order-record",{ref:"record"}),r("order-send",{ref:"send",attrs:{orderId:e.orderId,status:e.status},on:{submitFail:e.submitFail}})],1)}),[],!1,null,"7ac672ec",null);t.default=d.exports},"4adc":function(e,t,r){},"6a36":function(e,t,r){"use strict";var a=r("4adc");r.n(a).a},"6c7c":function(e,t,r){"use strict";var a=r("9010");r.n(a).a},"77ee":function(e,t,r){},9010:function(e,t,r){},a464:function(e,t,r){"use strict";var a={name:"table-expand",props:{row:Object}};r("6c7c"),r=r("2877"),r=Object(r.a)(a,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"expand"},[t("Row",{staticClass:"expand-row"},[t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("商品总价：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.total_price)}})]),t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("下单时间：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.add_time)}})]),t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("推广人：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.spread_nickname||"无")}})]),t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("事业部：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.division_name||"无")}})])],1),t("Row",[t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("用户备注：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.mark||"无")}})]),t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("商家备注：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.remark||"无")}})]),t("Col",{attrs:{span:"6"}},[t("span",{staticClass:"expand-key"},[e._v("核销码：")]),t("span",{staticClass:"expand-value",domProps:{textContent:e._s(e.row.verify_code||"无")}})])],1)],1)}),[],!1,null,"1e38a7f1",null);t.a=r.exports},a716:function(e,t,r){"use strict";var a=r("c964"),s=(r("96cf"),r("c24f")),i={name:"userDetails",data:function(){return{theme2:"light",list:[{val:"order",label:"消费记录"},{val:"integral",label:"积分明细"},{val:"sign",label:"签到记录"},{val:"coupon",label:"持有优惠券"},{val:"balance_change",label:"余额变动"},{val:"spread",label:"好友关系"}],modals:!1,spinShow:!1,detailsData:[],userId:0,loading:!1,userFrom:{type:"order",page:1,limit:20},total:0,columns:[],userLists:[],psInfo:{},activeName:"order"}},created:function(){},methods:{getDetails:function(e){var t=this;this.activeName="order",this.userId=e,this.spinShow=!0,Object(s.f)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===r.status?(a=r.data,t.detailsData=a.headerList,t.psInfo=a.ps_info,t.changeType("order"),t.spinShow=!1):(t.spinShow=!1,t.$Message.error(r.msg));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.spinShow=!1,t.$Message.error(e.msg)}))},pageChange:function(e){this.userFrom.page=e,this.changeType(this.userFrom.type)},changeType:function(e){var t=this;this.loading=!0,this.userFrom.type=e,this.activeName=e,""===this.userFrom.type&&(this.userFrom.type="order"),e={id:this.userId,datas:this.userFrom};Object(s.n)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200!==r.status?e.next=21:(a=r.data,t.userLists=a.list,t.total=a.count,e.t0=t.userFrom.type,e.next="order"===e.t0?7:"integral"===e.t0?9:"sign"===e.t0?11:"coupon"===e.t0?13:"balance_change"===e.t0?15:17);break;case 7:return t.columns=[{title:"订单ID",key:"order_id",minWidth:160},{title:"收货人",key:"real_name",minWidth:100},{title:"商品数量",key:"total_num",minWidth:90},{title:"实付金额",key:"pay_price",minWidth:120},{title:"交易完成时间",key:"pay_time",minWidth:120}],e.abrupt("break",18);case 9:return t.columns=[{title:"来源/用途",key:"title",minWidth:120},{title:"积分变化",key:"number",minWidth:120},{title:"变化前积分",key:"balance",minWidth:120},{title:"日期",key:"add_time",minWidth:120},{title:"备注",key:"mark",minWidth:120}],e.abrupt("break",18);case 11:return t.columns=[{title:"动作",key:"title",minWidth:120},{title:"获得积分",key:"number",minWidth:120},{title:"签到时间",key:"add_time",minWidth:120},{title:"备注",key:"mark",minWidth:120}],e.abrupt("break",18);case 13:return t.columns=[{title:"优惠券名称",key:"coupon_title",minWidth:120},{title:"面值",key:"coupon_price",minWidth:120},{title:"有效期(天)",key:"coupon_time",minWidth:120},{title:"兑换时间",key:"_add_time",minWidth:120}],e.abrupt("break",18);case 15:return t.columns=[{title:"动作",key:"title",minWidth:120},{title:"余额变动",slot:"number",minWidth:120},{title:"当前余额",key:"balance",minWidth:120},{title:"创建时间",key:"add_time",minWidth:120},{title:"备注",key:"mark",minWidth:120}],e.abrupt("break",18);case 17:t.columns=[{title:"ID",key:"uid",minWidth:120},{title:"昵称",key:"nickname",minWidth:120},{title:"等级",key:"type",minWidth:120},{title:"加入时间",key:"add_time",minWidth:120}];case 18:t.loading=!1,e.next=23;break;case 21:t.loading=!1,t.$Message.error(r.msg);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))}}};r("6a36"),r("f31e"),r=r("2877"),r=Object(r.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{width:"100%"}},[r("Drawer",{attrs:{title:"用户详情",closable:!1,width:"900",scrollable:""},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[e.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):e._e(),r("div",{staticClass:"acea-row"},[r("div",{staticClass:"avatar mr15"},[r("img",{attrs:{src:e.psInfo.avatar}})]),r("div",{staticClass:"dashboard-workplace-header-tip"},[r("p",{staticClass:"dashboard-workplace-header-tip-title",domProps:{textContent:e._s(e.psInfo.nickname||"-")}}),r("div",{staticClass:"dashboard-workplace-header-tip-desc"},e._l(e.detailsData,(function(t,a){return r("span",{key:a,staticClass:"dashboard-workplace-header-tip-desc-sp"},[e._v(e._s(t.title+"："+t.value))])})),0)])]),r("Row",{staticClass:"mt25",attrs:{type:"flex",justify:"space-between"}},[r("Col",{attrs:{span:"24"}},[r("Tabs",{staticClass:"mb20",attrs:{value:e.activeName},on:{"on-click":e.changeType}},e._l(e.list,(function(e,t){return r("TabPane",{key:t,attrs:{name:e.val,label:e.label}})})),1)],1),r("Col",{attrs:{span:"24"}},[r("Table",{ref:"table",attrs:{columns:e.columns,data:e.userLists,"max-height":"400",loading:e.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:e._u([{key:"number",fn:function(t){return t=t.row,[r("div",{class:t.pm?"plusColor":"reduceColor"},[e._v("\n              "+e._s(t.pm?"+"+t.number:"-"+t.number)+"\n            ")])]}}])}),r("div",{staticClass:"acea-row row-right page"},[r("Page",{attrs:{total:e.total,current:e.userFrom.page,"show-elevator":"","show-total":"","page-size":e.userFrom.limit},on:{"on-change":e.pageChange}})],1)],1)],1)],1)],1)}),[],!1,null,"ae6014ec",null);t.a=r.exports},c749:function(e,t,r){},ca0f:function(e,t,r){"use strict";var a=r("77ee");r.n(a).a},d616:function(e,t,r){"use strict";var a=r("c964"),s=(r("96cf"),r("a9e3"),r("d3b7"),r("159b"),r("a434"),r("b64b"),r("ac1f"),r("00b4"),r("7db0"),r("f8b7")),i={name:"orderSend",props:{orderId:Number,status:Number,pay_type:String,virtual_type:Number},watch:{orderId:function(e){3==this.virtual_type&&(this.formItem.type="3")}},data:function(){var e=this;return{orderStatus:0,total_num:0,splitSwitch:!0,formItem:{type:"1",express_record_type:"1",delivery_name:"",delivery_id:"",express_temp_id:"",to_name:"",to_tel:"",to_addr:"",sh_delivery:"",fictitious_content:""},modals:!1,express:[],expressTemp:[],deliveryList:[],temp:{},export_open:!0,manyFormValidate:[],header:[{type:"selection",width:60,align:"center"},{title:"商品信息",slot:"image",width:200,align:"center"},{title:"规格",slot:"value",align:"center",minWidth:120},{title:"价格",slot:"price",align:"center",minWidth:120},{title:"总数",key:"cart_num",align:"center",minWidth:120},{title:"待发数量",key:"surplus_num",align:"center",width:180,render:function(t,r){return t("div",[t("InputNumber",{props:{min:1,max:r.row.surplus_num,value:r.row.num||r.row.surplus_num},on:{"on-change":function(t){r.row.num=t||1,e.manyFormValidate[r.index]=r.row,e.selectData.forEach((function(t,a){t.cart_id===r.row.cart_id&&e.selectData.splice(a,1,r.row)}))}}})])}}],selectData:[]}},methods:{selectOne:function(e){this.selectData=e},changeModal:function(e){e||this.cancel()},changeSplitStatus:function(e){var t=this;e&&Object(s.O)(this.orderId).then((function(e){t.manyFormValidate=[],Object.keys(e.data).forEach((function(r){t.manyFormValidate.push(e.data[r])}))}))},changeRadio:function(e){switch(this.$refs.formItem.resetFields(),e){case"1":this.formItem.delivery_name="",this.formItem.delivery_id="",this.formItem.express_temp_id="",this.formItem.express_record_type="1",this.expressTemp=[],this.getList(1);break;case"2":this.formItem.sh_delivery="";break;case"3":this.formItem.fictitious_content=""}},changeExpress:function(e){switch(e){case"2":this.formItem.delivery_name="",this.formItem.express_temp_id="",this.expressTemp=[],this.getList(2);break;case"1":this.formItem.delivery_name="",this.formItem.delivery_id="",this.getList(1)}},reset:function(){this.formItem={type:"1",express_record_type:"1",delivery_name:"",delivery_id:"",express_temp_id:"",expressTemp:[],to_name:"",to_tel:"",to_addr:"",sh_delivery:"",fictitious_content:""}},getList:function(e){var t=this;e=2===e?1:"";Object(s.i)(e).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.express=r.data,t.getSheetInfo();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.loading=!1,t.$Message.error(e.msg)}))},putSend:function(e){var t=this,r={id:this.orderId,datas:this.formItem};if("1"===this.formItem.type&&"2"===this.formItem.express_record_type){if(""===this.formItem.delivery_name)return this.$Message.error("快递公司不能为空");if(""===this.formItem.express_temp_id)return this.$Message.error("电子面单不能为空");if(""===this.formItem.to_name)return this.$Message.error("寄件人姓名不能为空");if(""===this.formItem.to_tel)return this.$Message.error("寄件人电话不能为空");if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(this.formItem.to_tel))return this.$Message.error("请输入正确的手机号码");if(""===this.formItem.to_addr)return this.$Message.error("寄件人地址不能为空")}if("1"===this.formItem.type&&"1"===this.formItem.express_record_type){if(""===this.formItem.delivery_name)return this.$Message.error("快递公司不能为空");if(""===this.formItem.delivery_id)return this.$Message.error("快递单号不能为空")}if("2"===this.formItem.type&&""===this.formItem.sh_delivery)return this.$Message.error("送货人不能为空");this.splitSwitch?(r.datas.cart_ids=[],this.selectData.forEach((function(e){r.datas.cart_ids.push({cart_id:e.cart_id,cart_num:e.num||e.surplus_num})})),Object(s.P)(r).then((function(e){t.modals=!1,t.$Message.success(e.msg),t.$emit("submitFail"),t.reset(),t.splitSwitch=!1})).catch((function(e){t.$Message.error(e.msg)}))):Object(s.G)(r).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.modals=!1,t.$Message.success(r.msg),t.splitSwitch=!1,t.$emit("submitFail"),t.reset();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))},cancel:function(e){this.modals=!1,this.orderStatus=0,this.splitSwitch=!1,this.selectData=[],this.formItem.type="1",this.$emit("clearId"),this.reset()},expressChange:function(e){var t=this,r=this.express.find((function(t){return t.value===e}));void 0!==r&&(this.formItem.delivery_code=r.code,"2"===this.formItem.express_record_type&&(this.expressTemp=[],this.formItem.express_temp_id="",Object(s.v)({com:this.formItem.delivery_code}).then((function(e){t.expressTemp=e.data,e.data.length||t.$Message.error("请配置你所选快递公司的电子面单")})).catch((function(e){t.$Message.error(e.msg)}))))},getCartInfo:function(e,t){var r=this;this.$set(this,"orderStatus",e),this.$set(this,"splitSwitch",8===e||11===e),Object(s.O)(this.orderId).then((function(e){r.manyFormValidate=[],Object.keys(e.data).forEach((function(t){r.manyFormValidate.push(e.data[t])}))}))},getDeliveryList:function(){var e=this;Object(s.t)().then((function(t){e.deliveryList=t.data.list})).catch((function(t){e.$Message.error(t.msg)}))},getSheetInfo:function(){var e=this;Object(s.E)().then((function(t){var r,a=t.data;for(r in a)a.hasOwnProperty(r)&&(e.formItem[r]=a[r]);e.export_open=void 0===a.export_open||a.export_open,e.export_open||(e.formItem.express_record_type="1"),e.formItem.to_addr=a.to_add})).catch((function(t){e.$Message.error(t.msg)}))},shDeliveryChange:function(e){var t;e&&(t=this.deliveryList.find((function(t){return t.id===e})),this.formItem.sh_delivery_name=t.wx_name,this.formItem.sh_delivery_id=t.phone,this.formItem.sh_delivery_uid=t.uid)},expressTempChange:function(e){this.temp=this.expressTemp.find((function(t){return e===t.temp_id})),void 0===this.temp&&(this.temp={})},preview:function(){this.$refs.viewer.$viewer.show()}}};r("ca0f"),r=r("2877"),r=Object(r.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{staticClass:"order_box",attrs:{scrollable:"",title:"订单发送货",closable:!1,width:"1000"},on:{"on-visible-change":e.changeModal},model:{value:e.modals,callback:function(t){e.modals=t},expression:"modals"}},[e.modals?r("Form",{ref:"formItem",attrs:{model:e.formItem,"label-width":100},nativeOn:{submit:function(e){e.preventDefault()}}},[r("FormItem",{attrs:{label:"选择类型："}},[r("RadioGroup",{on:{"on-change":e.changeRadio},model:{value:e.formItem.type,callback:function(t){e.$set(e.formItem,"type",t)},expression:"formItem.type"}},[3!==e.virtual_type?r("Radio",{attrs:{label:"1"}},[e._v("发货")]):e._e(),3!==e.virtual_type?r("Radio",{attrs:{label:"2"}},[e._v("送货")]):e._e(),r("Radio",{attrs:{label:"3"}},[e._v("无需配送")])],1)],1),1==e.formItem.type?r("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.export_open,expression:"export_open"}],attrs:{label:"发货类型："}},[r("RadioGroup",{on:{"on-change":e.changeExpress},model:{value:e.formItem.express_record_type,callback:function(t){e.$set(e.formItem,"express_record_type",t)},expression:"formItem.express_record_type"}},[r("Radio",{attrs:{label:"1"}},[e._v("手动填写")]),r("Radio",{attrs:{label:"2"}},[e._v("电子面单打印")])],1)],1):e._e(),r("div",[1==e.formItem.type?r("FormItem",{attrs:{label:"快递公司："}},[r("Select",{staticStyle:{width:"80%"},attrs:{filterable:"",placeholder:"请选择快递公司"},on:{"on-change":e.expressChange},model:{value:e.formItem.delivery_name,callback:function(t){e.$set(e.formItem,"delivery_name",t)},expression:"formItem.delivery_name"}},e._l(e.express,(function(t,a){return r("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.value))])})),1)],1):e._e(),"1"===e.formItem.express_record_type&&1==e.formItem.type?r("FormItem",{attrs:{label:"快递单号："}},[r("Input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入快递单号"},model:{value:e.formItem.delivery_id,callback:function(t){e.$set(e.formItem,"delivery_id",t)},expression:"formItem.delivery_id"}}),"顺丰速运"==e.formItem.delivery_name?r("div",{staticClass:"trips"},[r("p",[e._v("顺丰请输入单号 :收件人或寄件人手机号后四位，")]),r("p",[e._v("例如：SF000000000000:3941")])]):e._e()],1):e._e(),"2"===e.formItem.express_record_type&&1==e.formItem.type?[r("FormItem",{staticClass:"express_temp_id",attrs:{label:"电子面单："}},[r("Select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择电子面单"},on:{"on-change":e.expressTempChange},model:{value:e.formItem.express_temp_id,callback:function(t){e.$set(e.formItem,"express_temp_id",t)},expression:"formItem.express_temp_id"}},e._l(e.expressTemp,(function(t,a){return r("Option",{key:a,attrs:{value:t.temp_id}},[e._v(e._s(t.title))])})),1),e.formItem.express_temp_id?r("Button",{attrs:{type:"text"},on:{click:e.preview}},[e._v("预览")]):e._e()],1),r("FormItem",{attrs:{label:"寄件人姓名："}},[r("Input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入寄件人姓名"},model:{value:e.formItem.to_name,callback:function(t){e.$set(e.formItem,"to_name",t)},expression:"formItem.to_name"}})],1),r("FormItem",{attrs:{label:"寄件人电话："}},[r("Input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入寄件人电话"},model:{value:e.formItem.to_tel,callback:function(t){e.$set(e.formItem,"to_tel",t)},expression:"formItem.to_tel"}})],1),r("FormItem",{attrs:{label:"寄件人地址："}},[r("Input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入寄件人地址"},model:{value:e.formItem.to_addr,callback:function(t){e.$set(e.formItem,"to_addr",t)},expression:"formItem.to_addr"}})],1)]:e._e()],2),r("div",{directives:[{name:"show",rawName:"v-show",value:"2"===e.formItem.type,expression:"formItem.type === '2'"}]},[r("FormItem",{attrs:{label:"送货人："}},[r("Select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择送货人"},on:{"on-change":e.shDeliveryChange},model:{value:e.formItem.sh_delivery,callback:function(t){e.$set(e.formItem,"sh_delivery",t)},expression:"formItem.sh_delivery"}},e._l(e.deliveryList,(function(t,a){return r("Option",{key:a,attrs:{value:t.id}},[e._v(e._s(t.wx_name)+"（"+e._s(t.phone)+"）")])})),1)],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"3"===e.formItem.type,expression:"formItem.type === '3'"}]},[r("FormItem",{attrs:{label:"备注："}},[r("Input",{staticStyle:{width:"80%"},attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"备注"},model:{value:e.formItem.fictitious_content,callback:function(t){e.$set(e.formItem,"fictitious_content",t)},expression:"formItem.fictitious_content"}})],1)],1),1<e.total_num?r("div",[r("FormItem",{attrs:{label:"分单发货："}},[r("i-switch",{attrs:{size:"large",disabled:8===e.orderStatus||11===e.orderStatus},on:{"on-change":e.changeSplitStatus},model:{value:e.splitSwitch,callback:function(t){e.splitSwitch=t},expression:"splitSwitch"}},[r("span",{attrs:{slot:"open"},slot:"open"},[e._v("开启")]),r("span",{attrs:{slot:"close"},slot:"close"},[e._v("关闭")])]),r("div",{staticClass:"trips"},[r("p",[e._v("可选择表格中的商品单独发货，发货后会生成新的订单且不能撤回，请谨慎操作！")])]),e.splitSwitch&&e.manyFormValidate.length?r("i-table",{attrs:{data:e.manyFormValidate,columns:e.header},on:{"on-selection-change":e.selectOne},scopedSlots:e._u([{key:"image",fn:function(t){var a=t.row;return t.index,[r("div",{staticClass:"product-data"},[r("img",{staticClass:"image",attrs:{src:a.cart_info.productInfo.image}}),r("div",{staticClass:"line2"},[e._v("\n                "+e._s(a.cart_info.productInfo.store_name)+"\n              ")])])]}},{key:"value",fn:function(t){var a=t.row;return t.index,[r("div",{staticClass:"product-data"},[r("div",[e._v(e._s(a.cart_info.productInfo.attrInfo.suk))])])]}},{key:"price",fn:function(t){var a=t.row;return t.index,[r("div",{staticClass:"product-data"},[r("div",[e._v(e._s(a.cart_info.truePrice))])])]}}],null,!1,1113423484)}):e._e()],1)],1):e._e()],1):e._e(),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{on:{click:e.cancel}},[e._v("取消")]),r("Button",{attrs:{type:"primary"},on:{click:e.putSend}},[e._v("提交")])],1),r("div",{directives:[{name:"viewer",rawName:"v-viewer"},{name:"show",rawName:"v-show",value:e.temp,expression:"temp"}],ref:"viewer"},[r("img",{staticStyle:{display:"none"},attrs:{src:e.temp.pic}})])],1)}),[],!1,null,"3782e2b0",null);t.a=r.exports},f31e:function(e,t,r){"use strict";var a=r("c749");r.n(a).a}}]);