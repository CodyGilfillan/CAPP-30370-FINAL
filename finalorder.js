$('.section').on("click", function afterPic(){
	console.log('Image Details:');
	console.log('alt: ' + this.alt);
	console.log('width: ' + this.width);
	console.log('height: ' + this.height);
    });
    
$('h1, h2, h3, h4, h5, h6').on("click", function(){
	console.log('text: ' + this.text);
	console.log('color: ' + 'white');
	console.log('font-size: ' + this.fontsize);
    });    
    
    
$(window).load(function() {
	var $windowWidth = $(window).width();
	console.log('width: ' + $windowWidth);   
	});  
	
$(window).resize(function() {
	var $windowWidth = $(window).width();
	console.log('width: ' + $windowWidth);   
	});  	