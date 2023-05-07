import React, { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: React.ReactElement
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error, errorInfo)
  }

  public render(): JSX.Element | React.ReactNode {
    if (this.state.hasError) {
      return <h1>Sorry.. Something went wrong.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
