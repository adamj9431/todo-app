var React = require('react');
var Editor = require('./Editor');
var List = require('./List');
window.id = 0;
var App = React.createClass({
    getInitialState: function() {
        return {todos: []};
    },
    addTodo: function(text) {
        var todo = {text: text, id: window.id++, isChecked: false}
        this.state.todos.push(todo);
        this.setState({todos: this.state.todos});
    },
    removeTodo: function(id) {
        var remainingTodos = this.state.todos.filter(function(todo) {
            if (todo.id != id) return todo;
        })
        this.setState({todos: remainingTodos});
    },
    setTodoChecked: function(id, isChecked) {
        var newTodos = this.state.todos.filter(function(todo) {
            if (todo.id == id) {
                todo.isChecked = isChecked;
            }
            return todo;
        });
        this.setState({todos: newTodos});
    },
    render: function() {
        return (
            <div>
                <List todos={this.state.todos} removeTodo={this.removeTodo} setTodoChecked={this.setTodoChecked} />
                <Editor addTodo={this.addTodo} />
            </div>
        );
    }
});
module.exports = App;
