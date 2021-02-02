import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            remainingTime: props.delay
        };

        this.timerId = null;
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.remainingTime) {
                this.setState({ remainingTime: this.state.remainingTime - 1 });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { remainingTime } = this.state;
        return <span>{remainingTime}</span>;
    }
}