import React from 'react';

// 1. Destructuring and Default Props
// We extract name, message, and onDismiss from props directly.
// We also set default values for name and message.
function Greeting({ 
  name = "Guest", 
  message = "Welcome to our site!", 
  onDismiss,
  children 
}) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '16px' }}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
      
      {/* 2. props.children is rendered here */}
      <div style={{ margin: '12px 0', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        {children}
      </div>

      {/* 3. Using a function passed as a prop */}
      {onDismiss && (
        <button 
          onClick={onDismiss}
          style={{ padding: '8px 16px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

// Example usage of the enhanced Greeting component
export default function GreetingDemo() {
  const handleDismiss = () => {
    alert("You clicked the dismiss button!");
  };

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Advanced Props Example</h1>
      
      {/* Example A: Standard usage with children */}
      <Greeting name="Michelle" message="Welcome to React Props!" onDismiss={handleDismiss}>
        <p><em>This text is passed as a child! It can be any React element.</em></p>
      </Greeting>

      {/* Example B: Relying on default props */}
      <Greeting onDismiss={() => console.log("Guest dismissed")}>
        <p><em>This greeting uses the default name and message.</em></p>
      </Greeting>
      
      {/* Example C: Passing different data types and no children */}
      <Greeting name="Alice" message="Hope you are having a great day." />
    </div>
  );
}

