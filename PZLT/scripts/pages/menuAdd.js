
    //js方法
	function test(event, treeId, treeNode){
		 alert(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);
	}
	
   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
   var setting = {
	check:{
		enable: false,
		autoCheckTrigger:true,
		chkStyle:"checkbox"
	},
	callback:{
		onCheck:test
	}
   };
   // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
   var zNodes = [
   {name:"综合管理平台", open:false,"checked":"true", children:[
      {name:"综合管理平台"}, {name:"综合管理平台"}]},
      
   {name:"景区管理平台", open:true, children:[
      {name:"景区管理平台"}, {name:"景区管理平台"}]},
      
   {name:"智能分销平台", open:true, children:[
      {name:"智能分销平台"}, {name:"智能分销平台"}]},
      
   {name:"旅游社订票平台", open:true, children:[
      {name:"用户管理",open:true,children:[{name:"用户信息",children:[{name:"用户信息"}]},{name:"角色管理",open:true,children:[{name:"角色管理"}]},{name:"用户特权",children:[{name:"用户特权"}]},{name:"权限分配",children:[{name:"权限分配"}]},]},
      {name:"订单管理",open:true,children:[{name:"订单信息"},{name:"订单信息"},{name:"订单信息"},{name:"订单信息"},]},
      {name:"统计分析",children:[{name:"数据统计"},{name:"数据统计"},{name:"数据统计"},{name:"数据统计"},]}, 
      {name:"合作伙伴",children:[{name:"合作伙伴"},{name:"合作伙伴"},{name:"合作伙伴"},{name:"合作伙伴"},]},
      {name:"账户管理",children:[{name:"账户信息"},{name:"账户信息"},{name:"账户信息"},{name:"账户信息"},]},
      {name:"系统设置",children:[{name:"系统设置"},{name:"系统设置"},{name:"系统设置"},{name:"系统设置"},]},
      {name:"营销分析",open:true,children:[{name:"营销分析"},{name:"营销分析"},{name:"营销分析"},{name:"营销分析"},]},
      {name:"微信购票平台"}]},
      
   {name:"手机APP", open:true, children:[
      {name:"手机APP"}, {name:"手机APP"}]},
   ];
   $(document).ready(function(){
     //页面加载成功后,开始加载树形结构
   $.fn.zTree.init($("#treeDemo"), setting, zNodes);
   });

