$(function(){
    init();     //初始化

    // 初始化
    function init() {
        $("#homeMarquee").marquee({
            direction: 'left',      //方向（默認爲left，下同）
            duration: 10000,         //滾動時長（單位：毫秒）
            gap: 1,                //滾動一個週期的間距（單位：px）
            delayBeforeStart: 3000, //滾動開始延遲時間（單位：毫秒）
            startVisible: false,      //初始位置設置
            pauseOnHover:true
        });//jquery marquee的使用

        
        /*
        $(".marquee").bind('finished', function(){
            //Change text to something else after first loop finishes
            $(this).marquee('destroy');
            //Load new content using Ajax and update the marquee container
            $(this).html('　')
            //Apply marquee plugin again
            // .marquee()
        }).marquee({
            direction: 'left',      //方向（默認爲left，下同）
            duration: 10000,         //滾動時長（單位：毫秒）
            gap: 1,                //滾動一個週期的間距（單位：px）
            delayBeforeStart: 1000, //滾動開始延遲時間（單位：毫秒）
            startVisible: false,      //初始位置設置
            pauseOnHover:true
        });//jquery marquee的使用
        */
    }

    $("#logoPic").on('click',function(){
    
    });

    
     
});