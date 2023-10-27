import React from 'react';
import { MemoryRouter } from 'react-router-dom';

function TestRouter({ children }) {
  return <MemoryRouter>{children}</MemoryRouter>;
}

export default TestRouter;
