(function($, Backbone){

    /*
    // Model class. First letter of each is capitalized
    var TodoItem = Backbone.Model.extend({});

    // View class
    var TodoView = Backbone.View.extend({
        render: function(){
            var html = '<h3>' + this.model.get('description')  + '</h3>';
            //$(this.el).html(html);
            //console.log($el);
            $(this.el).html(html);
        }
    });

    // Model class instance
    var todoItem = new TodoItem();

    todoItem.url = 'data/to-do-items.json';
    todoItem.fetch();

    console.log(todoItem.get('status'));
    // todoItem.url = '/data/to-do-items.json';
    // todoItem.fetch();
    // console.log(todoItem.get('description'));

    // View class instance with the model instance as params
    var todoView = new TodoView({ model: todoItem, el: "myToDo" });

    todoView.render(); */

    var Rectangle = Backbone.Model.extend({});

    var RectangleView = Backbone.View.extend({
        tagName: 'div',
        className: 'rectangle',
        render: function(){
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;

        },
        setDimensions: function(){
            this.$el.css({
                width: this.model.get('width') + 'px',
                height: this.model.get('height') +'px'
            });
        },
        setPosition: function(){
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y
            });
        },
        setColor: function(){
            this.$el.css("background", this.model.get('color'));
        }
    });

    var models = [
        new Rectangle({
            width: 200,
            height: 60,
            color: "#4679bd",
            position: {
                x: 100,
                y: 300
            }
        }),
       new Rectangle({
            width: 100,
            height: 200,
            color: "gray",
            position: {
                x: 600,
                y: 100
            }
        })
    ];

    _(models).each(function(model) {
        $('#canvas').append(new RectangleView({ model: model }).render().el);
    });








})(jQuery, Backbone);



