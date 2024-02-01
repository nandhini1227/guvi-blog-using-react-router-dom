class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Handle the error
    console.error(error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}

// Wrap your entire application with the ErrorBoundary
<ErrorBoundary>
  <App />
</ErrorBoundary>
