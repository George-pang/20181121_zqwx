/* 个人中心相关页 js代码 */
$(function () {

    /* ******************************************************************* */
    /* 个人中心页 */
    (function () {
        //实现我的课程-课程列表水平滚动
        // 让ul单行显示-即ul的宽度超出屏幕
        var totalWidth = 0;
        var ulObj = $(".my_main .course-list");
        var lis = ulObj.find(".course-item");
        lis.each(function (index, ele) {
            totalWidth += $(this).innerWidth();
            // 课程学习进度
            var progress = $(this).find(".num").html();
            $(this).find(".progress-color").css("width", progress + "%");
        })
        ulObj.width(totalWidth);

        //初始化iscroll插件
        // var myScroll = new IScroll("#wrapper", {
        //     scrollX: true,
        //     scrollY: false
        // });
    }());


    /* ****************************************************************** */
    /* 我的课程 */
    (function(){
        // tab切换
        var curIndex;
        $(".my_course_main .nav-tab").on("click",function(){
            curIndex=$(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            $(".my_course_main .tab-panel").eq(curIndex).show().siblings().hide();
        });
        var lis=$(".my_course_main .tab-panel .course");
        lis.each(function(index,ele){
            var barObj= $(this).find(".bar");
            // console.log(barObj);
            var length=barObj.data("width");//获取data自定义属性值
            console.log(length);
            barObj.width(length);
        })


    }());






});