import React from 'react';

export default class Custom extends React.Component {
  render() {
    let name = this.props.match.params.username;

    return (
      <div className="custom full-height">
        <h1>Custom</h1>
        <hr/>
        <h3>User: {name}</h3>
      </div>
      );
  }
}
