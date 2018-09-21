$(function () {
    'use strice';
    var UsersData = {
        Rows: [{
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        },
        {
            "UserName": "",
            "LoginAccount": "",
        }
        ]       
    };
    var titleArr = ['用户姓名','登录账号'];
    var newTable = table.initTable(UsersData,'maingrid4',titleArr);
	$("#maingrid4").ligerGrid({
        columns: [
        { display: '用户姓名', name: 'UserName', align: 'center'},
        { display: '登录账号', name: 'LoginAccount',align:'center'},
        ], data:UsersData, height:440 
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
            $("#tree2").ligerTree({
                data: [
                { text: '玉龙雪山工作台', icon: myaccount, children: [
                    { text: '用户管理', icon: myaccount, children: [
                    	 { text: '用户信息', icon: archives },
                         { text: '角色管理', icon: archives },
                         { text: '权限管理', icon: archives }
                    ]
                    },
                    { text: '合作单位', icon: myaccount, children: [
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
