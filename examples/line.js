import React from 'react';
import ReactDOM from 'react-dom';
import Testone, { LINE } from '../src';
import DATA from '../src/DATA/data1';

const reactContainer = document.getElementById('__react-content');
const bodyContainer = document.getElementsByTagName('body')
bodyContainer[0].style.padding = '10px'
reactContainer.style.cssText = `
                                border: 1px solid #11d0bc;
                                padding: 10px;
                                margin-bottom: 10px;
                               `;

const config = {
  forceFit: true,
}


function render(container) {
  ReactDOM.render(
    <div>
      <Testone />
      <div>
        <LINE data={DATA} config={config} />
      </div>
    </div>, container
  )
}

render(reactContainer)
