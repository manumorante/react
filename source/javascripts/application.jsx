import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './modules/Hello'
import Row from './modules/Row'
import Col from './modules/Col'

ReactDOM.render(
  <Row>
    <Col />
    <Col />
    <Col />
  </Row>,
  document.getElementById('root')
);
