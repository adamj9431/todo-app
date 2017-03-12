var React = require('react');
var Todo = require('./Todo');
var style = {
    'listStyleType': 'none',
    'margin': 0,
    'padding': 0,
    'padding-bottom': 50
}
var List = React.createClass({
    render: function() {
        var removeTodo = this.props.removeTodo;
        var setTodoChecked = this.props.setTodoChecked;
        var todoNodes = this.props.todos.map(function(todo) {
            return (<Todo key={todo.id} todo={todo} removeTodo={removeTodo} setTodoChecked={setTodoChecked}/>);
        });
        return (<ul style={style}>{todoNodes}</ul>);
    },
    propTypes: {
        todos: React.PropTypes.array,
        removeTodo: React.PropTypes.func,
        setTodoChecked: React.PropTypes.func
    }
});
module.exports = List;
