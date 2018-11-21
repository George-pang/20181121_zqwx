// jq入口函数
$(function(){

    /* register页************************************ */
    // 沙箱
    (function(){
        // 验证输入弹窗
        var value_1;
        var value_2;
        var value_3;
        var value_4;
        var value_5;
        $(".btn-submit").on("click",function(){
            value_1=$("#telInput").val().trim();
            value_2=$("#zymInput").val().trim();
            value_3=$("#pswInput").val().trim();
            value_4=$("#repswInput").val().trim();
            value_5=$("#cardInput").val().trim();
            if(value_1==""||value_2==""||value_3==""||value_4==""||value_5==""){
                layer.alert('请完善必填项~');//验证是否有未填项
            }else if(value_3!=value_4){
                layer.alert('两次密码输入不一致,请确认!');//验证两次密码一致性
            }else{
                layer.alert('注册成功!');//注册成功提示!
            }
        });

        /* function:获取验证码 
            参数1:选择器;
            参数2:防重复点击秒数
        */
        function getZym(selector,count){
            $(selector).on("click",function(){
                value_1=$("#telInput").val().trim();
                if(!value_1){ //判断手机号是否已输入
                    layer.alert("请先输入手机号!")
                    return false;
                }
                layer.msg('验证码已发送!',{time:1000});
                var temp=count;
                $(this).off("click");//暂时解绑click事件处理程序--60s内防重复点击
                $(this).html(temp+"s后重发!");
                var timeId=setInterval(function(){
                    temp--;
                    $(selector).html(temp+"s后重发!");
                    if(temp==0){
                        clearInterval(timeId);
                        $(selector).html("获取验证码");
                        getZym(selector,count);//递归
                    }
                },1000);
            })
        }
        getZym(".get-zym",60);

    }());

    /* login 页************************************ */
    // 沙箱
    (function(){
        var value_1;
        var value_2;
        $(".btn-dl-account").on("click",function(){
            value_1=$("#telInput").val().trim();
            value_2=$("#pswInput").val().trim();
            if(value_1==""||value_2==""){
                layer.alert("请完善必填项!");
            }else{
                layer.msg("登录成功!",{time:1000},function(){
                    location.assign("index.html");
                });

            }
        });
    }());


});