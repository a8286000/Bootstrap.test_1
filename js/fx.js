// 自定義 Function
// ---------------------------------------------------------------------------------------

function openShareWin(share_url, winWidth, winHeight) {
	var winTop = (screen.height / 2) - (winHeight / 2);
	var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open(share_url, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
};

function chk_mod() {
    if (/ipad/i.test(navigator.userAgent.toLowerCase())) {
        return 'ipad';    // 目前是用ipad瀏覽
    }
    else if (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) {
        return 'mobile';  // 目前是用手機瀏覽
    }
    else {
        return 'pc';      // 目前是用電腦瀏覽
    }	
}

function watchForHover() {
    var hasHoverClass = false,
        container = document.body,
        lastTouchTime = 0;

    function enableHover() {
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        container.className += ' hasHover';
        hasHoverClass = true;
    }

    function disableHover() {
        if (!hasHoverClass) return;

        container.className = container.className.replace(' hasHover', '');
        hasHoverClass = false;
    }

    function updateLastTouchTime() {
        lastTouchTime = new Date();
    }

    document.addEventListener('touchstart', updateLastTouchTime, true);
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);

    enableHover();
}

function setScrollPos($el, pos, time) {
    $el.animate({
        scrollTop: pos
    }, time);
}

	
// 全域變數
// ---------------------------------------------------------------------------------------
var winW, winH, device;

// 網頁本身的 HTML 載入後觸發
// ---------------------------------------------------------------------------------------
$(document).ready(function() {
    
    winW = $(window).width();
    winH = $(window).height();
    device = chk_mod();
    
    watchForHover();
    

	// 網頁 HTML 標籤中引用的圖檔、內嵌物件(如Flash)、iframe 等內容皆載入後觸發
	// ---------------------------------------------------------------------------------------
	$(window).on("load", function(e) {
        
    });	
});
