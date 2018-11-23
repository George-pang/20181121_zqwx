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
        $(".aside_menu_container .menu-item .first-level-tab").on("click", function () {
            $(this).siblings(".sub-menu").toggle();
        });
        // 4、筛选菜单的显示隐藏
        $(".class_main .btn-filter").on("click", function () {
            $(".class_main .filter-menu-container").toggle("normal", function () {
                var flag = $(this).css("display");
                if (flag == "block") {
                    $(".class_main .btn-filter").html("收起");
                    // 5、筛选tab active类点击切换
                    $(this).find(".filter-tab").on("click", function () {
                        // 发送ajax请求...
                        $(this).addClass("active").siblings().removeClass("active");
                    });
                } else if (flag == "none") {
                    $(".class_main .btn-filter").html("筛选");
                    // $(this).find(".filter-tab").removeClass("active");
                }
            });
        });

    }());

    /* ************************************ */
    /* 课程搜索 */
    (function () {
        /* 最新、最热 tab切换 */
        $(".search_main .tab").on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
        /* 筛选菜单显示隐藏 */
        $(".search_main .btn-filter").on("click", function () {
            $(".search_main .filter-menu").toggle("normal", function () {
                var flag = $(this).css("display");
                if (flag == "block") {
                    $(".search_main .btn-filter").html("收起");
                    // 筛选菜单tab切换
                    $(this).find(".filter-tab").on("click", function () {
                        // 发送ajax请求...
                        $(this).addClass("active").siblings().removeClass("active");
                    });
                } else if (flag == "none") {
                    $(".search_main .btn-filter").html("筛选");
                    // 

                }
            });
        });
    }());

    /* ************************************ */
    /* 课程详情 */
    (function () {
        // 判断是否是课程详情页--若是，执行下面的代码
        if ($(".details_main").length>0) {
            console.dir($(".details_main"))
            // 1、tab点击跳转定位
            var navHeight = $(".details_main .nav-container").outerHeight(true);
            // console.log(navHeight);
            var cTop_0 = $(".details_main .nav-container").offset().top;
            var cTop_1 = $(".course-introduce").offset().top - navHeight;
            var cTop_2 = $(".course-list").offset().top - navHeight;
            var cTop_3 = $(".course-comment").offset().top - navHeight;
            console.log(cTop_1);
            $(".details_main .nav-tab").on("click", function () {
                // $(this).addClass("active").siblings().removeClass("active");
                var clickIndex = $(this).index();
                switch (clickIndex) {
                    case 0:
                        $("html,body").animate({
                            scrollTop: cTop_1 + 1,
                        }, 0);
                        break;
                    case 1:
                        $("html,body").animate({
                            scrollTop: cTop_2 + 1, //没有+1时，跳转后tab没有对应切换?
                        }, 0);
                        break;
                    case 2:
                        $("html,body").animate({
                            scrollTop: cTop_3 + 1,
                        }, 0);
                        break;
                }
            });

            // 2、向下滚动tab对应自动切换
            $(window).on("scroll", function () {
                var cTop = $(this).scrollTop();
                // 导航栏固定悬浮切换
                if (cTop >= cTop_0) {
                    $(".details_main .nav-container").addClass("fixed-nav");
                    $(".course-introduce").css("margin-top", 10 + navHeight);
                } else {
                    $(".details_main .nav-container").removeClass("fixed-nav");
                    $(".course-introduce").css("margin-top", 10);
                }

                // 当前tab对应切换
                if (cTop >= cTop_1 && cTop < cTop_2) {
                    $(".details_main .nav-tab").eq(0).addClass("active").siblings().removeClass("active");
                } else if (cTop >= cTop_2 && cTop < cTop_3) {
                    $(".details_main .nav-tab").eq(1).addClass("active").siblings().removeClass("active");
                } else if (cTop >= cTop_3) {
                    $(".details_main .nav-tab").eq(2).addClass("active").siblings().removeClass("active");
                }
            });
        }


        // 3、课程目录子菜单伸缩
    }());



});