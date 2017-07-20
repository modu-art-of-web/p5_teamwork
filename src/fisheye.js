import * as d3 from 'd3';
var pixelRatio = 1,
    storeRatio = 1;

export function enableFisheye(p, d, ps) {
	console.log('enableFisheye');
    d.enabled = true;

    var that = this,
        link = that.parentNode,
        div = link.parentNode,
        width = p.width,
        height = p.height,
        touchtime;

    var normalWidth = width / d.size,   //평소 사이즈
            image = new Image,
            imageWidth = 229*height / 350,  //이미지 width
            imageWidth = 300,
            imageHeight = 350,  //이미지 height
            // imageHeight = height,   
            desiredDistortion = 0,
            desiredFocus,
            progress = 0,
            idle = true;

            // 350*height / 229

    var x = fisheye()
            .distortion(0)
            .extent([0, width]);

    var annotation = d3.select(div).selectAll("li");

    console.log('d.slug : ' + d.slug);
    console.log('pixelRatio : ' + pixelRatio);
    // if(d.slug === 'b_web_coat'){
    //     image.src = "./burberry_imgs/burberry2.jpg";
    //     imageWidth = 229;
    //     imageHeight = 305;
    // }else if( d.slug=== 'only_cloth'){
    //     image.src = "./burberry_imgs/burberry3.jpg";
    //     imageWidth = 300;
    //     imageHeight = 350;
    // }else if( d.slug=== 'fashion_show_2016'){
    //     image.src = "./burberry_imgs/burberry4.jpg";
    //     imageWidth = 405;
    //     imageHeight = 607;
    // }
    image.src = "http://localhost.htdocs/burberry/burberry_imgs/burberry2.jpg";
    imageWidth = 229;
    imageHeight = 305;
    
    image.onload = initialize;
    // initialize();
    d3.timer(function() {
        if (progress < 0) return true;
        var context = d.context;
        context.clearRect(0, 0, width, 2);
        context.fillStyle = "#777";
        context.fillRect(0, 0, ++progress, 2);
    });

    d.resize = function() {
        width = p.width;
        height = p.height;
        var f = x.focus() / x.extent()[1],
                d1 = imageWidth / normalWidth - 1,
                d0 = x.distortion() / d1;
        normalWidth = width / d.size;
        x.distortion(d0 * d1).extent([0, width]).focus(f * width);
        changePos();
    };

    d3.select(window)
            .on("scroll", scroll)
            .on("resize", resize);
            
    function resize() {
        console.log('resize');
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        d.resize();

        scroll();
    }

    // Recompute which canvases are visible in the viewport.
    function scroll() {
        console.log('scroll');
        // var dy = innerHeight;
        // if (!canvas.filter(function() {
        //                     var box = this.getBoundingClientRect();
        //                     console.log('box : ' + box);
        //                     return box.bottom > 0 && box.top < dy;
        //                 })
        //                 .each(enableFisheye)
        //                 .empty()) {
        //     canvas = canvas.filter(function(d) { return !d.enabled; });
        // }
    }

    function initialize() {
        progress = -1;

        d3.select(that)
                .on("mousedown", mousedown)
                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mouseout", mouseout)
                .on("touchstart", touchstart)
                .on("touchmove", mousemove)
                .on("touchend", mouseout);

        changePos();
    }

    function changePos() {
        ps.setPosX(x, p.windowHeight);
    }

    function move() {
        if (idle) d3.timer(function() {
            var currentDistortion = x.distortion(),
                    currentFocus = currentDistortion ? x.focus() : desiredFocus;
            idle = Math.abs(desiredDistortion - currentDistortion) < .01 && Math.abs(desiredFocus - currentFocus) < .5;
            x.distortion(idle ? desiredDistortion : currentDistortion + (desiredDistortion - currentDistortion) * .14);
            x.focus(idle ? desiredFocus : currentFocus + (desiredFocus - currentFocus) * .14);
            changePos();
            return idle;
        });
    }

    function mouseover() {
        // console.log('mouseover!');
        desiredDistortion = imageWidth / normalWidth - 1;
        mousemove();
    }

    function mouseout() {
        // console.log('mouseout!');
        desiredDistortion = 0;
        mousemove();
    }
    function mousemove() {
        // console.log('mousemove!');
        var mousePos;
        if(isNaN(d3.mouse(that)[0])){
            mousePos = d3.touches(that)[0][0];
        }else{
            mousePos = d3.mouse(that)[0];
        };
        desiredFocus = Math.max(0, Math.min(width - 1e-6, mousePos));
        move();
    }

    function mousedown() {
        console.log('mousedown!!!!!!!!!!!');
        console.log('desiredFocus :' + desiredFocus);
        console.log(' d.size :' +  d.size);
        // console.log('window.innerWidth / d.size :' + window.innerWidth / d.size);
        console.log('normalWidth :' + normalWidth);
        console.log('desiredFocus / normalWidth :' + desiredFocus / normalWidth);
        console.log('desiredFocus / normalWidth :' + parseInt(desiredFocus / normalWidth));

        
        // return;
        var m = Math.max(0, Math.min(width - 1e-6, d3.mouse(that)[0]));
        for (var i = 0, n = d.size; i < n && x(i * normalWidth) < m; ++i);
        link.href = "http://www.nytimes.com/fashion/runway/" + d.slug + "/spring-2014-rtw/" + i + "?fingerprint=true";
        link.href = 'https://kr.burberry.com/wool-cashmere-blend-military-coat-p40438771?search=true';

        ps.openLink([parseInt(desiredFocus / normalWidth)]);
        // window.open(b_link[parseInt(desiredFocus / normalWidth)]);
        
    }

    function touchstart() {
        d3.event.preventDefault();
        mouseover();
        if (d3.event.touches.length === 1) {
            var now = Date.now();
            if (now - touchtime < 500) mousedown(), link.click();
            // if (now - touchtime < 500) mousedown();
            touchtime = now;
        }
    }

    return x;
}

export function fisheye() {
    var min = 0,
            max = 1,
            distortion = 3,
            focus = 0;

    function G(x) {
        return (distortion + 1) * x / (distortion * x + 1);
    }

    function fisheye(x) {
        var Dmax_x = (x < focus ? min : max) - focus,
                Dnorm_x = x - focus;
        return G(Dnorm_x / Dmax_x) * Dmax_x + focus;
    }

    fisheye.extent = function(_) {
        if (!arguments.length) return [min, max];
        min = +_[0], max = +_[1];
        return fisheye;
    };

    fisheye.distortion = function(_) {
        if (!arguments.length) return distortion;
        distortion = +_;
        return fisheye;
    };

    fisheye.focus = function(_) {
        if (!arguments.length) return focus;
        focus = +_;
        return fisheye;
    };

    return fisheye;
}