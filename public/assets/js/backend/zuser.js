define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'zuser/index' + location.search,
                    add_url: 'zuser/add',
                    edit_url: 'zuser/edit',
                    del_url: 'zuser/del',
                    multi_url: 'zuser/multi',
                    import_url: 'zuser/import',
                    table: 'zuser',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                fixedColumns: true,
                fixedRightNumber: 1,
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'nickname', title: __('Nickname'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        // {field: 'openid', title: __('Openid')},
                        {field: 'mobile_num', title: __('Mobile_num'), operate: 'LIKE'},
                        {field: 'type_id', title: __('Type_id'), searchList: {"1":__('Type_id 1'),"2":__('Type_id 2')}, formatter: Table.api.formatter.normal},
                        {field: 'code_num', title: __('Code_num'), operate: 'LIKE'},
                        {field: 'avatar_image', title: __('Avatar_image'), operate: false, events: Table.api.events.image, formatter: Table.api.formatter.image},
                        {field: 'switch', title: __('Switch'), searchList: {"1":__('Switch 1'),"2":__('Switch 2')}, table: table, formatter: Table.api.formatter.toggle},
                        {field: 'is_business', title: __('Is_business'), searchList: {"1":__('Is_business 1'),"2":__('Is_business 2')}, formatter: Table.api.formatter.normal},
                        {field: 'is_designer', title: __('Is_designer'), searchList: {"1":__('Is_designer 1'),"2":__('Is_designer 2')}, formatter: Table.api.formatter.normal},
                        {field: 'scc_code', title: __('Scc_code'), operate: 'LIKE'},
                        {field: 'address', title: __('Address'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'idcard_front', title: __('Idcard_front'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'idcard_opposite', title: __('Idcard_opposite'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'business_license', title: __('business_license'), operate: 'LIKE', table: table, class: 'autocontent', formatter: Table.api.formatter.content},
                        {field: 'is_vip', title: __('Is_vip'), searchList: {"1":__('Is_vip 1'),"2":__('Is_vip 2')}, formatter: Table.api.formatter.normal},
                        {field: 'vip_endtime', title: __('Vip_endtime'), operate: 'LIKE'},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        // {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', autocomplete:false, formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});
