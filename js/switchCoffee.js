$(function () {

    const t1 = $('#t1');
    const t2 = $('#t2');
    const t3 = $('#t3');
    const circle = $('#circle');
    const imgCoffee = $('#coffee1');

    function switchCoffee() {

        t1.click(function () {

            t1.css('transform', 'translateY(-10px)');
            t2.css('transform', 'translateY(0px)');
            t3.css('transform', 'translateY(0px)');

            circle.css('background', '#017143');
            imgCoffee.attr('src','img/img1.png');

        });

        t2.click(function () { 

            t2.css('transform', 'translateY(-10px)');
            t1.css('transform', 'translateY(0px)');
            t3.css('transform', 'translateY(0px)');

            circle.css('background','#EDB4C2');
            imgCoffee.attr('src','img/img2.png');
            
        });


        t3.click(function (e) { 
            
            t3.css('transform', 'translateY(-10px)');
            t1.css('transform', 'translateY(0px)');
            t2.css('transform', 'translateY(0px)');

            circle.css('background','#C83E9F');
            imgCoffee.attr('src','img/img3.png');

        });

    }

    switchCoffee();

});