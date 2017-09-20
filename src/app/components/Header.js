import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-inline tabbar">
          <li className="tab"><Link to='/'>Home</Link></li>
          <li className="tab"><Link to='/custom/prasanth'>Custom</Link></li>
        </ul>
      </div>
      );
  }
}
