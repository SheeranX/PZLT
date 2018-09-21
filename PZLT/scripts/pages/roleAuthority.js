$(function () {
    'use strice';
    var RoleData = {
        Rows: [{
            "RoleName": "天涯营销部总监",
            "Remarks": "",
        },
        {
            "RoleName": "海角营销部总监",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        },
        {
            "RoleName": "",
            "Remarks": "",
        }
        ],
        Total: 10
    };
    var titleArr = ['角色名称','备注'];
    var newTable = table.initTable(RoleData,'maingrid4',titleArr);
    $("#maingrid4").ligerGrid({
        columns: [
        { display: '角色名称', name: 'RoleName', align: 'center'},
        { display: '备注', name: 'Remarks',align:'center'},
        ], data:RoleData, height:440 
    });
    
            var myaccount = '../../../../vendors/ligerUI/skins/icons/myaccount.gif';
            var memeber = '../../../../vendors/ligerUI/skins/icons/memeber.gif';
            var archives = '../../../../vendors/ligerUI/skins/icons/archives.gif';
            $("#tree1").ligerTree({
                data: [
                { text: '玉龙雪山工作台', icon: memeber, children: [
                    { text: '用户管理', icon: memeber, children: [
                    	 { text: '用户信息', icon: archives },
                         { text: '角色管理', icon: archives },
                         { text: '权限管理', icon: archives }
                    ]
                    },
                    { text: '合作单位', icon: memeber, children: [
                         { text: '旅游景区', icon: archives },
                         { text: '旅行社', icon: archives },
                         { text: '分销商', icon: archives }
                    ]
                    },
                    
                 ]
               }
            ]
            });
})
