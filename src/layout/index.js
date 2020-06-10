import React from 'react';

export default function Layout(props) {
  return (
    <div>
      <h3>全局layout</h3>
      {props.children}
    </div>
  );
}
