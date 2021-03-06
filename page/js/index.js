const message = `
~~~~~~~~~~~~~~~~~~~~~~~~~
亲爱的！
您的订单已经送达

您的激活码: XX
激活任意一个，其余的版本会自动激活！

修改器使用说明
http://bilibili.com/video/av49413063
~~~~~~~~~~~~~~~~~~~~~~~~~
`.trim();

// 入口
$(function() {
    new ClipboardJS('#copy');
    loadEvents();
});



function loadEvents() {
    // 单独生成激活码
    $('#generate').click((e) => {
        let txt = $('#mcode').val();
        let acode = active(txt);

        console.log(acode);

        $('#console').text(acode);
        $('#foo').val(acode);

        // 设置剪贴板内容
        $("#copy").trigger("click");
    });

    // 清空
    $('#clear').click(() => {
        $('#console').text('激活码');
    });


    $('#copy').click(() => {
        console.log('copy');
    });

}