import React, { Component, type ReactNode } from 'react';

// Props-. The React Node
//  In this case, children will be everything that is in between <ErrorBoundary></ErrorBoundary>
{/* <ErrorBoundary>
      <Suspense fallback={<div>Loading Component A...</div>}>
           <ComponentA />
         </Suspense>
         <Suspense fallback={<div>Loading Component B...</div>}>
           <ComponentB />
         </Suspense>

    </ErrorBoundary> */}
interface ErrorBoundaryProps {
 children: ReactNode;
}

// It will have one state , hasErrot
interface ErrorBoundaryState {
 hasError: boolean;
}

// Class component extends React Component
// Prop interface, State type/interface  -> TS
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    // in CC -> We initialize the state in constructor
 constructor(props: ErrorBoundaryProps) {
   super(props);
   this.state = { hasError: false };
 }


 // Component lifecycle related to error
 // It intercepts JavaScript errors thrown by child components during rendering
 static getDerivedStateFromError(): ErrorBoundaryState {
   return { hasError: true };
 }

 // is a lifecycle method in React. These special components catch JavaScript errors anywhere in their child component tree.
 //  to log those errors and display a fallback UI instead of crashing the entire web application.

 componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
   console.error('ErrorBoundary caught an error', error, errorInfo);
 }

// In CC we show the UI in render method
 render() {
// If there is an error, I show the error
   if (this.state.hasError) {
     return <div>Something went wrong.</div>;
   }

// If everything is ok, I show the children
   return this.props.children;
 }
}


export default ErrorBoundary;
