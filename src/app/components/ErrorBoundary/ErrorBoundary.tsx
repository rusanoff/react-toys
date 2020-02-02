import React, { PureComponent, ReactNode } from 'react';
import { ErrorIndicator } from 'components/ErrorIndicator';

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends PureComponent<{}, IState> {
  state = {
    hasError: false,
  };

  componentDidCatch(): void {
    this.setState({
      hasError: true,
    });
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return (
      hasError ? <ErrorIndicator /> : children
    );
  }
}
