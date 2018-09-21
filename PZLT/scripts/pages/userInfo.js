$(function () {
    'use strice';
    var CustomersData = {
        Rows: [{
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }, {
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }, {
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }, {
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }, {
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }, {
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }, {
            "userName": "ERNSH",
            "loginAccount": "Ernst Handel",
            "workUnit": "Roland Mendel",
            "busiType": "Sales Manager",
            "userRole": "Kirchgasse 6",
            "userSource": "Graz",
            "lastLoginTime": null,
            "lastLoginIp": "8010",
            "status": "Austria",
            "action": "7675-3425",
        }],
        Total: 150,
    };
    var titleArr = ['用户姓名', '登录账号', '工作单位', '业务类型', '用户角色', '用户来源', '最后登录时间', '最后登录IP', '状态', '操作'];
    var newTable = table.initTable(CustomersData, 'maingrid4', titleArr);
    $("#maingrid4").ligerGrid({
        columns: [
            { display: '用户姓名', name: 'userName', align: 'center', width: 120 ,rowHeight:28},
            { display: '登录账号', name: 'loginAccount', align: 'center', width: 120 },
            { display: '工作单位', name: 'workUnit', align: 'center', width: 120 },
            { display: '业务类型', name: 'busiType', align: 'center', width: 120 },
            { display: '用户角色', name: 'userRole', align: 'center', width: 120 },
            { display: '用户来源', name: 'userSource', align: 'center', width: 120 },
            { display: '最后登录时间', name: 'lastLoginTime', align: 'center', width: 120 },
            { display: '最后登录IP', name: 'lastLoginIp', align: 'center', width: 120 },
            { display: '状态', name: 'status', align: 'center', width: 120 },
            { display: '操作', name: 'action', align: 'center', width: 120 },
        ],
        data: CustomersData, height: '620px', width: '100%',
    })


    http.request({
        method: "get",
        url: 'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=17621428563',
        dataType: 'jsonp'
    })
        .done(function (res) {
            console.log(res);
        })
        .fail(function (error) {
            console.log(error);
        })


     $("#morePopover").popover({
        placement:"bottom",
         html:true,
         template:`
         <form class="form-inline" id="moreForm" style="margin:30px 0px 0px 20px;">
            <div class="form-group">
                <div class="input-append date form-datetime" id="statDate">
                    <label for="statDate">开始日期</label>
                    <input type="text" class="form-control" value=""  readonly>
                </div>
             </div>
             <div class="form-group">
                <div  class="input-append date form-datetime" data-provide="datepicker" id="endDate">
                    <label for="endDate">结束日期</label>
                    <input type="text" class="form-control" value="" readonly>
                </div>       
             </div>
        </form>`
        });

       //日期选择控件
    //   $(".form-datetime").datetimepicker({
    //     format: "yyyy-mm-dd - hh:ii",
    //     autoclose: true,
    //     // todayBtn: true,
    //     pickerPosition: "bottom-left"
    // });
})
