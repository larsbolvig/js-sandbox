(function($){
  $(function(){
    
    $.getJSON( "/data/skoler.json", function( data ) {
      var items = [];
      $.each( data.schools, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val.school +', '+val.zipcode+', '+val.city+ "</li>" );
      });
     
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });


  });
})(jQuery);
