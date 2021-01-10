/*
    Carousel
*/
$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});



function prev_craousel() {
    console.log("prev")
    
    let img_div = $('.m-craousel')
    console.log(img_div)
    let current_img_no = img_div[0].children[0].src.slice(-4, 0)
    console.log(current_img_no)
    // img_div[0].children[0].src -= "/"

    
    
}

function validateForm() {
    var x = document.getElementsByClassName("form-control")

    for(let i=0; i<x.length; i++) {
        if(x[i].value == "") {
            return false;
            break;
        }
    }
    return true;
}



function thankyou() {
    if (validateForm()) {
        let a = window.location.href.split('/')
        
        let s = ""
        for (var i=0; i<a.length-1; i++){
            s += a[i] + "/"
        }
        s += "thankyou.html"
        // console.log(s)
        window.location.href = s;

    }
}
function thankyou1() {
    if (validateForm()) {
        let a = window.location.href.split('/')
        
        let s = ""
        for (var i=0; i<a.length-1; i++){
            s += a[i] + "/"
        }
        s += "template/thankyou.html"
        // console.log(s)
        window.location.href = s;

    }
}