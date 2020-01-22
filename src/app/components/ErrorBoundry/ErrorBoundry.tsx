import React, { Component } from 'react';

import { ErrorIndicator } from 'components/ErrorIndicator';

export class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return (
      hasError ? <ErrorIndicator /> : children
    );
  }
}
