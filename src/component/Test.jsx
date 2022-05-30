

import React from 'react';
// function Test(props) {
function Test({quien, como, hacerAlert}) {
  return (
    <div>
        <h1>Aguante camada 32105!!</h1>
        <div onClick={() => hacerAlert()}>{quien} - {como}</div>
    </div>
  );
}

export default Test;
