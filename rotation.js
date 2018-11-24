(function ($) {
    
    var _img = document.getElementById('ipadpre');
    if(_img !== null){
        var newImg = new Image;
        newImg.onload = function() {
            _img.src = this.src;
            $("#videoD").show();
        };
        newImg.src = crusoInfo.base_dir + "/assets/front-page/tablet.png";
    }else{
        $("#videoD").show();
    }
    
   // var elem = document.getElementById("myBar");
    var width = 1;
    var dframe = 1;
    var play = false;
    function frame() {
        if (width >= 50) {
            if (!play) {
               // $("#myProgress").fadeOut();
            }
            play = true;

        } else {
            width += 1;
            //elem.style.width = width + '%';
        }
    }

    function pad(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    }
    var dframes = [];
    
    console.log(crusoInfo.base_dir);
    
    var t = $("#videoD").hasClass('png') ? ".png" : ".jpg";
    
    for (var di = 0; di < 193; di++) {
        dframes[di] = new Image();
        dframes[di].src = crusoInfo.base_dir + "/assets/rotating-diamond"+t+"/diamond" + pad(di, 3) + t;

    }
    var dvd = $('#videoD');

    var dtimer = setInterval(function () {
        if (dframes[ dframe ].src) {
            frame();
        }
        if (play) {
            dvd.attr("src", dframes[ dframe ].src);
        }
        dframe = (dframe + 1) % 193;
    }, 41);
}
)(jQuery);