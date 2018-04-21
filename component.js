var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 10
        })
    },

    decrement: function() {
        this.setState({
            counter:this.state.counter - 10
        })
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('h2', {}, 'Counter'),
            React.createElement('h4', {}, 'result: ' + this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment, className: 'btn btn-success'}, '+10'),
                React.createElement('button', {onClick: this.decrement, className: 'btn btn-danger'}, '-10')
            )
        )
    }
})

var element = React.createElement('div', {className: 'counter'},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
)

ReactDOM.render(element, document.getElementById('app'))