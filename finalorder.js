$('.section').on("click", function afterPic(){
	console.log('Image Details:');
	console.log('alt: ' + this.alt);
	console.log('width: ' + this.width);
	console.log('height: ' + this.height);
});
    
$('h1, h2, h3, h4, h5, h6').on("click", function(){
	console.log('text: ' + $( this ).text());
	console.log('color: ' + $( this ).css( 'color' ));
	console.log('font-size: ' +  $( this ).css( 'fontSize' ));
});     
    
    
$(window).load(function() {
	var $windowWidth = $(window).width();
	console.log('browser width: ' + $windowWidth);   
});  
	
$(window).resize(function() {
	var $windowWidth = $(window).width();
	console.log('browser width: ' + $windowWidth);   
});  	