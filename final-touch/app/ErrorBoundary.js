// components/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log error information here
        console.error('Error caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return ( <
                div >
                <
                h2 > Oops, there is an error! < /h2> <
                button onClick = {
                    () => this.setState({ hasError: false }) } >
                Try again ?
                <
                /button> <
                /div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;