/* ************************************ */
$(function () {

    /* 课程中心 */
    (function () {
        // 热门课程水平滑动
        var ulObj = $(".course_center_main .hot-course-list");
        var lis = ulObj.find(".hot-course");
        var totalWidth = 0;
        lis.each(function (index, ele) {
            totalWidth += $(this).outerWidth(true);
        });
        ulObj.width(totalWidth);
    }());

    /* ************************************ */
    /* 课程分类 */
    (function () {
        // 1、tab切换
        $(".class_main .nav-tab").on("click", function () {
            var curIndex = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
        });
        // 2、侧边菜单栏的显示隐藏
        $(".class_main .btn-aside-menu").on("click", function () {
            $(".aside_menu_container").show("slow");
        })
        $(".btn-menu-close").on("click", function () {
            $(".aside_menu_container").hide("slow");
        })
        // 3、侧边菜单栏子菜单的伸缩
        $(".aside_menu_container .menu-item").on("click", function () {
            $(this).find(".sub-menu").toggle("normal", function () {
                console.log($(this).css("display"))
                if ($(this).css("display") == "block") {
                    // 4、侧边菜单栏子菜单tab鼠标移入移出背景色改变
                    console.log($(this).find(".item"));
                    
                    // 鼠标移入事件怎么没有生效？？？
                    $(this).find(".item").on("mouseover", function () {
                        $(this).addClass("active").siblings().removeClass("active");
                    });
                    $(this).find(".item").on("mouseleave", function () {
                        $(this).removeClass("active");
                    })
                }
            });
        })

    }());



});