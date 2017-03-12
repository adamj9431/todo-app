var React = require('react');
var editorStyle = {
    width: '100%',
    position: 'fixed',
    top: 'calc(100% - 50px)',
    height: 50,
    backgroundColor: '#EEE',
    borderTop: '1px solid #555'
}
var inputStyle = {
    margin: 14,
    width: 'calc(100% - 90px)'
}
var Editor = React.createClass({
    getInitialState: function() {
        return { todoText: '' };
    },
    handleChange: function(event) {
        this.setState({todoText: event.target.value});
    },
    handleClick: function() {
        if (this.state.todoText.length > 0) {
            this.props.addTodo(this.state.todoText);
            this.setState({todoText: ''});
        }
    },
    handleKeyDown: function(event) {
        if (event.keyCode == 13) {
            this.handleClick();
        }
    },
    render: function() {
        var todoText = this.state.todoText;
        return (<div style={editorStyle}>
                    <input style={inputStyle} value={todoText} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                    <button onClick={this.handleClick}>Add</button>
                </div>);
    },
    propTypes: {
        addTodo: React.PropTypes.func
    }
});
module.exports = Editor;
