import { Component, type ErrorInfo, type ReactNode } from 'react';
import RemoteErrorFallback from './RemoteErrorFallback';

type RemoteErrorBoundaryProps = {
  children: ReactNode;
  fallbackTitle: string;
  fallbackMessage: string;
};

type RemoteErrorBoundaryState = {
  hasError: boolean;
};

class RemoteErrorBoundary extends Component<
  RemoteErrorBoundaryProps,
  RemoteErrorBoundaryState
> {
  state: RemoteErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): RemoteErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Remote render error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <RemoteErrorFallback
          title={this.props.fallbackTitle}
          message={this.props.fallbackMessage}
        />
      );
    }

    return this.props.children;
  }
}

export default RemoteErrorBoundary;