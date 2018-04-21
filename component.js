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
            React.createElement('span', {}, 'result: ' + this.state.counter),
            React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, '+10'),
                React.createElement('button', {onClick: this.decrement}, '-10')
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