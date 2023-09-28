import React from 'react';

function EventBubblingExample() {
  const handleGrandparentClick = () => {
    alert('Grandparent clicked');
  };

  const handleParentClick = () => {
    alert('Parent clicked');
  };

  const handleChildClick = () => {
    alert('Child clicked');
  };

  return (
    <button onClick={handleGrandparentClick}>
      <p>Grandparent</p>
      <button onClick={handleParentClick}>
        <p>Parent</p>
        <button onClick={handleChildClick}>
          <p>Child</p>
        </button>
      </button>
    </button>
  );
}

export default EventBubblingExample;
