var React = require('react');
var liStyle = {
    'borderBottom': '1px solid #555',
    'fontFamily': 'sans-serif',
    'padding': 20
}
var spanStyle = {
    'margin': '0px 20px'
}
var removeButtonStyle = {
    'float': 'right'
}
var Todo = React.createClass({
    handleRemove: function() {
        this.props.removeTodo(this.props.todo.id);
    },
    handleChange: function(event) {
        this.props.setTodoChecked(this.props.todo.id, event.target.checked);
    },
    render: function() {
        return (<li style={liStyle}>
                    <input type='checkbox' checked={this.props.todo.isChecked} onChange={this.handleChange} />
                    <span style={spanStyle}>{this.props.todo.text}</span>
                    <button style={removeButtonStyle} onClick={this.handleRemove}>Remove</button>
                </li>);
    },
    propTypes: {
        todo: React.PropTypes.object,
        removeTodo: React.PropTypes.func,
        setTodoChecked: React.PropTypes.func
    }
});
module.exports = Todo;
