import React from 'react';
import NotFound from './Not-found';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.logErrorToMyService(error, errorInfo);
        this.setState({ ...this.state, error: error.message });
    }

    logErrorToMyService(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <NotFound title="Error" message={this.state.error} />
                </>
            );
        }

        return this.props.children;
    }
}
