import React,{ Suspense }  from 'react';
import './App.css'
// Lazy load import ComponentA and ComponentB
// lazy load individual components 
const ComponentA = React.lazy(() => import('./components/ComponentA'));
const ComponentB = React.lazy(() => import('./components/ComponentB'));
import ErrorBoundary from './components/ErrorBoundary';

function App() {

  return (
    <>
    <h1>React Lazy Demo</h1>
    {/* Suspense, fallback - > What to show when the component is not loaded */}
    {/* The Suspense component is used to display a fallback UI while a lazy-loaded component is being loaded.  */}
      <ErrorBoundary>
      <Suspense fallback={<div>Loading Component A...</div>}>
       <ComponentA />
     </Suspense>
     </ErrorBoundary>
       <ErrorBoundary>
     <Suspense fallback={<div>Loading Component B...</div>}>
       <ComponentB />
     </Suspense>
     </ErrorBoundary>

   
    </>
  )
}

export default App
