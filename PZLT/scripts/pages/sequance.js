$(function () {
    'use strice';
    var CustomersData = {
        Rows: [{
            "CustomerID": "ALFKI",
            "CompanyName": "Alfreds Futterkiste",
            "ContactName": "Maria Anders",
            "ContactTitle": "Sales Representative",
            "Address": "Obere Str. 57",
            "City": "Berlin",
            "Region": null,
            "PostalCode": "12209",
            "Country": "Germany",
            "Phone": "030-0074321",
            "Fax": "030-0076545"
        }, {
            "CustomerID": "ANATR",
            "CompanyName": "Ana Trujillo Emparedados y helados",
            "ContactName": "Ana Trujillo",
            "ContactTitle": "Owner",
            "Address": "Avda. de la Constitución 2222",
            "City": "México D.F.",
            "Region": null,
            "PostalCode": "05021",
            "Country": "Mexico",
            "Phone": "(5) 555-4729",
            "Fax": "(5) 555-3745"
        }, {
            "CustomerID": "ANTON",
            "CompanyName": "Antonio Moreno Taquería",
            "ContactName": "Antonio Moreno",
            "ContactTitle": "Owner",
            "Address": "Mataderos  2312",
            "City": "México D.F.",
            "Region": null,
            "PostalCode": "05023",
            "Country": "Mexico",
            "Phone": "(5) 555-3932",
            "Fax": null
        }, {
            "CustomerID": "AROUT",
            "CompanyName": "Around the Horn",
            "ContactName": "Thomas Hardy",
            "ContactTitle": "Sales Representative",
            "Address": "120 Hanover Sq.",
            "City": "London",
            "Region": null,
            "PostalCode": "WA1 1DP",
            "Country": "UK",
            "Phone": "(171) 555-7788",
            "Fax": "(171) 555-6750"
        }, {
            "CustomerID": "BERGS",
            "CompanyName": "Berglunds snabbköp",
            "ContactName": "Christina Berglund",
            "ContactTitle": "Order Administrator",
            "Address": "Berguvsvägen  8",
            "City": "Luleå",
            "Region": null,
            "PostalCode": "S-958 22",
            "Country": "Sweden",
            "Phone": "0921-12 34 65",
            "Fax": "0921-12 34 67"
        }, {
            "CustomerID": "BLAUS",
            "CompanyName": "Blauer See Delikatessen",
            "ContactName": "Hanna Moos",
            "ContactTitle": "Sales Representative",
            "Address": "Forsterstr. 57",
            "City": "Mannheim",
            "Region": null,
            "PostalCode": "68306",
            "Country": "Germany",
            "Phone": "0621-08460",
            "Fax": "0621-08924"
        }, {
            "CustomerID": "BLONP",
            "CompanyName": "Blondel père et fils",
            "ContactName": "Frédérique Citeaux",
            "ContactTitle": "Marketing Manager",
            "Address": "24, place Kléber",
            "City": "Strasbourg",
            "Region": null,
            "PostalCode": "67000",
            "Country": "France",
            "Phone": "88.60.15.31",
            "Fax": "88.60.15.32"
        }, {
            "CustomerID": "BOLID",
            "CompanyName": "Bólido Comidas preparadas",
            "ContactName": "Martín Sommer",
            "ContactTitle": "Owner",
            "Address": "C/ Araquil, 67",
            "City": "Madrid",
            "Region": null,
            "PostalCode": "28023",
            "Country": "Spain",
            "Phone": "(91) 555 22 82",
            "Fax": "(91) 555 91 99"
        }, {
            "CustomerID": "BONAP",
            "CompanyName": "Bon app'",
            "ContactName": "Laurence Lebihan",
            "ContactTitle": "Owner",
            "Address": "12, rue des Bouchers",
            "City": "Marseille",
            "Region": null,
            "PostalCode": "13008",
            "Country": "France",
            "Phone": "91.24.45.40",
            "Fax": "91.24.45.41"
        }, {
            "CustomerID": "BOTTM",
            "CompanyName": "Bottom-Dollar Markets",
            "ContactName": "Elizabeth Lincoln",
            "ContactTitle": "Accounting Manager",
            "Address": "23 Tsawassen Blvd.",
            "City": "Tsawwassen",
            "Region": "BC",
            "PostalCode": "T2F 8M4",
            "Country": "Canada",
            "Phone": "(604) 555-4729",
            "Fax": "(604) 555-3745"
        }, {
            "CustomerID": "BSBEV",
            "CompanyName": "B's Beverages",
            "ContactName": "Victoria Ashworth",
            "ContactTitle": "Sales Representative",
            "Address": "Fauntleroy Circus",
            "City": "London",
            "Region": null,
            "PostalCode": "EC2 5NT",
            "Country": "UK",
            "Phone": "(171) 555-1212",
            "Fax": null
        }, {
            "CustomerID": "CACTU",
            "CompanyName": "Cactus Comidas para llevar",
            "ContactName": "Patricio Simpson",
            "ContactTitle": "Sales Agent",
            "Address": "Cerrito 333",
            "City": "Buenos Aires",
            "Region": null,
            "PostalCode": "1010",
            "Country": "Argentina",
            "Phone": "(1) 135-5555",
            "Fax": "(1) 135-4892"
        }, {
            "CustomerID": "CENTC",
            "CompanyName": "Centro comercial Moctezuma",
            "ContactName": "Francisco Chang",
            "ContactTitle": "Marketing Manager",
            "Address": "Sierras de Granada 9993",
            "City": "México D.F.",
            "Region": null,
            "PostalCode": "05022",
            "Country": "Mexico",
            "Phone": "(5) 555-3392",
            "Fax": "(5) 555-7293"
        }, {
            "CustomerID": "CHOPS",
            "CompanyName": "Chop-suey Chinese",
            "ContactName": "Yang Wang",
            "ContactTitle": "Owner",
            "Address": "Hauptstr. 29",
            "City": "Bern",
            "Region": null,
            "PostalCode": "3012",
            "Country": "Switzerland",
            "Phone": "0452-076545",
            "Fax": null
        }, {
            "CustomerID": "COMMI",
            "CompanyName": "Comércio Mineiro",
            "ContactName": "Pedro Afonso",
            "ContactTitle": "Sales Associate",
            "Address": "Av. dos Lusíadas, 23",
            "City": "São Paulo",
            "Region": "SP",
            "PostalCode": "05432-043",
            "Country": "Brazil",
            "Phone": "(11) 555-7647",
            "Fax": null
        }, {
            "CustomerID": "CONSH",
            "CompanyName": "Consolidated Holdings",
            "ContactName": "Elizabeth Brown",
            "ContactTitle": "Sales Representative",
            "Address": "Berkeley Gardens\r\n12  Brewery ",
            "City": "London",
            "Region": null,
            "PostalCode": "WX1 6LT",
            "Country": "UK",
            "Phone": "(171) 555-2282",
            "Fax": "(171) 555-9199"
        }, {
            "CustomerID": "DRACD",
            "CompanyName": "Drachenblut Delikatessen",
            "ContactName": "Sven Ottlieb",
            "ContactTitle": "Order Administrator",
            "Address": "Walserweg 21",
            "City": "Aachen",
            "Region": null,
            "PostalCode": "52066",
            "Country": "Germany",
            "Phone": "0241-039123",
            "Fax": "0241-059428"
        }, {
            "CustomerID": "DUMON",
            "CompanyName": "Du monde entier",
            "ContactName": "Janine Labrune",
            "ContactTitle": "Owner",
            "Address": "67, rue des Cinquante Otages",
            "City": "Nantes",
            "Region": null,
            "PostalCode": "44000",
            "Country": "France",
            "Phone": "40.67.88.88",
            "Fax": "40.67.89.89"
        }, {
            "CustomerID": "EASTC",
            "CompanyName": "Eastern Connection",
            "ContactName": "Ann Devon",
            "ContactTitle": "Sales Agent",
            "Address": "35 King George",
            "City": "London",
            "Region": null,
            "PostalCode": "WX3 6FW",
            "Country": "UK",
            "Phone": "(171) 555-0297",
            "Fax": "(171) 555-3373"
        }, {
            "CustomerID": "ERNSH",
            "CompanyName": "Ernst Handel",
            "ContactName": "Roland Mendel",
            "ContactTitle": "Sales Manager",
            "Address": "Kirchgasse 6",
            "City": "Graz",
            "Region": null,
            "PostalCode": "8010",
            "Country": "Austria",
            "Phone": "7675-3425",
            "Fax": "7675-3426"
        }, {
            "CustomerID": "FAMIA",
            "CompanyName": "Familia Arquibaldo",
            "ContactName": "Aria Cruz",
            "ContactTitle": "Marketing Assistant",
            "Address": "Rua Orós, 92",
            "City": "São Paulo",
            "Region": "SP",
            "PostalCode": "05442-030",
            "Country": "Brazil",
            "Phone": "(11) 555-9857",
            "Fax": null
        }, {
            "CustomerID": "FISSA",
            "CompanyName": "FISSA Fabrica Inter. Salchichas S.A.",
            "ContactName": "Diego Roel",
            "ContactTitle": "Accounting Manager",
            "Address": "C/ Moralzarzal, 86",
            "City": "Madrid",
            "Region": null,
            "PostalCode": "28034",
            "Country": "Spain",
            "Phone": "(91) 555 94 44",
            "Fax": "(91) 555 55 93"
        }, {
            "CustomerID": "FOLIG",
            "CompanyName": "Folies gourmandes",
            "ContactName": "Martine Rancé",
            "ContactTitle": "Assistant Sales Agent",
            "Address": "184, chaussée de Tournai",
            "City": "Lille",
            "Region": null,
            "PostalCode": "59000",
            "Country": "France",
            "Phone": "20.16.10.16",
            "Fax": "20.16.10.17"
        }, {
            "CustomerID": "FOLKO",
            "CompanyName": "Folk och fä HB",
            "ContactName": "Maria Larsson",
            "ContactTitle": "Owner",
            "Address": "Åkergatan 24",
            "City": "Bräcke",
            "Region": null,
            "PostalCode": "S-844 67",
            "Country": "Sweden",
            "Phone": "0695-34 67 21",
            "Fax": null
        }, {
            "CustomerID": "FRANK",
            "CompanyName": "Frankenversand",
            "ContactName": "Peter Franken",
            "ContactTitle": "Marketing Manager",
            "Address": "Berliner Platz 43",
            "City": "München",
            "Region": null,
            "PostalCode": "80805",
            "Country": "Germany",
            "Phone": "089-0877310",
            "Fax": "089-0877451"
        }, {
            "CustomerID": "FRANR",
            "CompanyName": "France restauration",
            "ContactName": "Carine Schmitt",
            "ContactTitle": "Marketing Manager",
            "Address": "54, rue Royale",
            "City": "Nantes",
            "Region": null,
            "PostalCode": "44000",
            "Country": "France",
            "Phone": "40.32.21.21",
            "Fax": "40.32.21.20"
        }, {
            "CustomerID": "FRANS",
            "CompanyName": "Franchi S.p.A.",
            "ContactName": "Paolo Accorti",
            "ContactTitle": "Sales Representative",
            "Address": "Via Monte Bianco 34",
            "City": "Torino",
            "Region": null,
            "PostalCode": "10100",
            "Country": "Italy",
            "Phone": "011-4988260",
            "Fax": "011-4988261"
        }, {
            "CustomerID": "FURIB",
            "CompanyName": "Furia Bacalhau e Frutos do Mar",
            "ContactName": "Lino Rodriguez ",
            "ContactTitle": "Sales Manager",
            "Address": "Jardim das rosas n. 32",
            "City": "Lisboa",
            "Region": null,
            "PostalCode": "1675",
            "Country": "Portugal",
            "Phone": "(1) 354-2534",
            "Fax": "(1) 354-2535"
        }, {
            "CustomerID": "GALED",
            "CompanyName": "Galería del gastrónomo",
            "ContactName": "Eduardo Saavedra",
            "ContactTitle": "Marketing Manager",
            "Address": "Rambla de Cataluña, 23",
            "City": "Barcelona",
            "Region": null,
            "PostalCode": "08022",
            "Country": "Spain",
            "Phone": "(93) 203 4560",
            "Fax": "(93) 203 4561"
        }, {
            "CustomerID": "GODOS",
            "CompanyName": "Godos Cocina Típica",
            "ContactName": "José Pedro Freyre",
            "ContactTitle": "Sales Manager",
            "Address": "C/ Romero, 33",
            "City": "Sevilla",
            "Region": null,
            "PostalCode": "41101",
            "Country": "Spain",
            "Phone": "(95) 555 82 82",
            "Fax": null
        }],
        Total: 91
    };
    var column = [
        {display:"公司名",name:"CompanyName"},
        {display:"联系方式",name:"ContactName"},
        {display:"抬头",name:'ContactTitle'}
        ]

    var newTable = table.initTable(CustomersData,'maingrid4',column);
    
    http.request({
        method:"get",
        url:'http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=17621428563',
        dataType:'jsonp',
    })
    .done(function(res){
        console.log(res);
    })
    .fail(function(error){
        console.log(error);
    })

    //文件上传控件
    var file = FileInput.oFile;
    file.Init('input-id',"/api/action");

   // 日期选择控件
    datePicker.init('datetimepicker','yyyy-mm-dd')
    //下拉选择
    // $('.selectpicker').selectpicker({
    //     liveSearch:true,
    //     title:'请选择',
    //     liveSearchPlaceholder:'请输入关键字',
    // });
    // $('.select').select2({
    //     placeholder:'请选择',
    //     width:'220',
    //     multiple:true,
    //     language:'zh-CN',
    //     data:[{id:'1',text:'qwetr'},{id:'2',text:'poing'},{id:'3',text:'konh'}],
    //     theme:'bootstrap'
    // });
    //var data = [{idc:'1',tsext:'qwetr'},{idc:'2',tsext:'poing'},{idc:'3',tsext:'konh'}]
    select.init({
        data:[{idc:'1',tsext:'撒地方'},{idc:'2',tsext:'勇气阿文'},{idc:'3',tsext:'去微软'}],
        id:'idc',
        text:'tsext',
        ele:'select'
    });
    select.init({
        data:[{idc:'1',tsext:'撒地方'},{idc:'2',tsext:'勇气'},{idc:'3',tsext:'去微软'}],
        id:'idc',
        text:'tsext',
        ele:'select'
    });
    //select.reload('select',[{y:'1',val:'qqq'},{y:'2',val:'vvv'},{y:'2',val:'lko'}])

    $('#getMore').click(function(e){
        $(this).toggleClass('getMore').find('span').toggleClass('fa-angle-up').toggleClass('fa-angle-down');
    })

    resize.resizePage();


   Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) 
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
    
}

 console.log(new Date().Format('yyyy-MM-dd'));

    // function CreateSelect(domID){
    //   var elem = $('#'+domID);
    //   var arr = elem.find('select');
    //   var style = [
    //       'color: #337ab7',
    //       'position: absolute',
    //       'z-index: 999',
    //       'margin-top: -3px',
    //       'width: 220px',
    //       'height: 40px',
    //       'vertical-align: 40px',
    //       'text-align: right',
    //       'padding-right: 50px',
    //       'padding-top: 12px'
    //   ].join(';')
    //   var loading = "<span style='"+style+"'><i class='fa fa-circle-o-notch fa-spin'></i></span>";
    //   var ids = [];
    //   $.each(arr,function(i,item){
    //        select.init({
    //            id:'idc',
    //            text:'tsext',
    //            ele: $(item).attr('id'),
    //            data:[],
    //        });
    //     ids.push($(item).attr('id'));

    //     $(item).on('select2:opening',function(e){
    //         if(i==0&&$(item).find('option').length<2)
    //         { 
    //             $(item).before(loading);
    //             setTimeout(function(){
    //                 select.reload({
    //                     data:[{idc:'1',tsext:'撒地方'},{idc:'2',tsext:'what'},{idc:'3',tsext:'去微软'}],
    //                     ele:$(item).attr('id'),
    //                     id:'idc',
    //                     text:'tsext',
    //                 });
    //                 $(item).select2('open');
    //                 $(item).prev().remove();
    //             },1500);
    //         }
    //     })

    //     $(item).on('change',function(){
    //         console.log(i);
    //         if(i>=(arr.length-1))
    //           return
    //         $(arr[i+1]).before(loading);
    //         setTimeout(function(){
    //             select.reload({
    //                 data:[{idc:'1',tsext:'撒地方'},{idc:'2',tsext:'what'},{idc:'3',tsext:'vchange'}],
    //                 ele:$(arr[i+1]).attr('id'),
    //                 id:'idc',
    //                 text:'tsext',
    //             });
    //             $(arr[i+1]).prev().remove();
    //         },1500);
    //     })
    //   });
    // //  console.log(ids);
    // }

    comboSelect.createSelect('comboSelect');
})
