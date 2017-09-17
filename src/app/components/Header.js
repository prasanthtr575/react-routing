import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-inline tabbar">
          <li className="tab"><a href="#">Home</a></li>
          <li className="tab"><a href="#">Custom</a></li>
        </ul>
      </div>
      );
  }
}
