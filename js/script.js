(function($){

    var myObject = {
        init: function() {
            $('#myButton').on('click', this.alertUser);
        },
        alertUser: function() {
            alert("This is my version");
        }
    };

    function alertWorld(el) {
        this.el = el;

        this.sayHi = function() {
            alert("I say hello world!");
        };

        this.el.on('click', this.sayHi);
    }

    // Closure function
    var timer  = function() {
        var date = new Date();
        this.myTimer = function() {
            return date.getMilliseconds();
        };
    };


    $(function(){
        myObject.init();
        var theButton = new alertWorld($('#myButton2'));
        var closure = new timer();

        var timerObj = $('.timer');
        timerObj.html(closure.myTimer());


        setTimeout(function(){
            timerObj.append('<br>'+closure.myTimer());
        }, 500);

        var c = new Calculator('eq');
        c.add(2,2);

        var myCalc = new Calc('module');
        myCalc.add(3,3);





        // Revealing module pattern
        var newCalc = function(el){
            var elem = document.getElementById(el),
                doAdd = function(a,b) {
                    var val = a + b;
                    elem.innerHTML = val;
                };

            return { add: doAdd };
        }('reveal'); // Self invoking. No need for the new keyword contructor

        newCalc.add(7,4);

        var testCalc = new ProtCalc('revealProt');
        testCalc.add(10,5);
    });


    // To create a namespace. 
    // First test if some other library is using the same namespace
    // If not asign it to an empty object
    var myNS = myNS || {};

    myNS.test = function(){};


    // Prototyping start
    var Calculator = function(eq) {
        this.el = document.getElementById(eq);
    };

    Calculator.prototype = {
        add: function(a,b){
            var val = a + b;
            this.el.innerHTML = val;
        }
    };
    // Prototyping end

    // Note to the prototyping pattern 
    // No matter how many instances you create from the prototype 
    // all the functions will only be referenced and not duplicated
    // Very memory friendly
    // Prototyping is also very extendable

    // Module pattern
    var Calc = function(el){
        // private variable or functions
        var element = document.getElementById(el);
        return {
            // public return object literal
            add: function(a,b) {
                var val = a + b;
                element.innerHTML = val;
            }
        };
    };

    // Note to the module pattern!
    // If you create several instances of the function/class all the functions get duplicated !!
    // Not very memory friendly
    // Not very extendable


    // Revealing prototype pattern

    // Constructor
    var ProtCalc = function(el) {
        // Remember to this, because we want to address the specific instance of 
        // the prototype class
        this.element = document.getElementById(el);
    };

    // Public or private funtions
    ProtCalc.prototype = function(){
        var add = function(a,b) {
            var val = a+b;
            this.element.innerHTML = val;
        };
        return {
            add: add
        };
    }();
    // If passing around "this" gets messy then use "call" function
    // where you pass in "this" as the first argument


})(jQuery);
