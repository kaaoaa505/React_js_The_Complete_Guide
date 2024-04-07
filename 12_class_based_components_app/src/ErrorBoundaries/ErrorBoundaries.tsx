import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundaries extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { error_found: false }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // todo handle errors
        console.log('error is: ', error);
        console.log('errorInfo is: ', errorInfo);
        this.setState({error_found: true});
    }

    render(): ReactNode {
        if(this.state.error_found){
            return <p>Error: Please try again later.</p>
        }

        return this.props.children;
    }
}

export default ErrorBoundaries;