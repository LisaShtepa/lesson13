$(window).ready(function() {

    var $previousClicked = null;

    $('.accordion-header').click(function () {
        var $clicked = $(this).siblings('.accordion-item');
        $clicked.slideToggle(600);
        if( $previousClicked !== null && !$previousClicked.is( $clicked ) ){
            $previousClicked.slideUp( 600 );
        }
        $previousClicked = $clicked;
    });

});

/*Решение задачи
var result = 0;

for( let i = 1; i < 1000; i++ ){
		if( i % 5 === 0 || i % 3 === 0 ){
    		result += i;
    }
}
console.log( result );
*/



