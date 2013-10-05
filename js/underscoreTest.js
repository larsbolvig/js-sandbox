(function($){
    $(function(){
            

        // EACH function    
        var author = {
                firstName: "Lars",
                lastName: "Bolvig"
            },
            messager = {
                getGreeting: function() {
                    return "Hello! ";
                },
                getMessage: function(msg) {
                    return this.getGreeting() + msg;
                }
            };

        _.each(author, function(value, key) {
            console.log(this.getMessage(value));
        }, messager); // <- Sets the context of 'this'


        var names = ["Tormod", "Lisa", "Lea", "Lars" ];
        // _.each(names, function(element, index, list) {
        //     console.log(
        //         "Element: " + element + "," +
        //         "Index: " + index + "," +
        //         "list length: " + list.length
        //     );
        // });

    });
})(jQuery);
