import React,{ Suspense }  from 'react';
import './App.css'
// Lazy load import ComponentA and ComponentB
// lazy load individual components 
const ComponentA = React.lazy(() => import('./components/ComponentA'));
const ComponentB = React.lazy(() => import('./components/ComponentB'));

function App() {

  return (
    <>
    {/* Suspense, fallback - > What to show when the component is not loaded */}
    {/* The Suspense component is used to display a fallback UI while a lazy-loaded component is being loaded.  */}
      <Suspense fallback={<div>Loading Component A...</div>}>
       <ComponentA />
     </Suspense>
     <Suspense fallback={<div>Loading Component B...</div>}>
       <ComponentB />
     </Suspense>

   
    </>
  )
}

export default App
