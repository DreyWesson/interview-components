import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch() {
        return this.setState({ hasError: true });
    }
    render() {
        return this.state.hasError ? (
            <h1>Some nasty error</h1>
        ) : (
            this.props.children
        );
    }
}
export default ErrorBoundary;
