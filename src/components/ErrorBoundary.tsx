import React from 'react';
import NotFound from './Not-found';

interface State {
    hasError: boolean;
    error: string;
}

export class ErrorBoundary extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false, error: '' }
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        this.logErrorToMyService(error, errorInfo);
        this.setState({ ...this.state, error: error.message });
    }

    logErrorToMyService(error: any, errorInfo: any) {
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
