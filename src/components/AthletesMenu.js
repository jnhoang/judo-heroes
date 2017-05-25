import React, {Component} from 'react';
import {Link} from 'react-router';

class AthletesMenu extends Component {
  render() {
    return (
      <nav className="athletes-menu">
        {this.props.atheletes.map( (menuAthelete) => {
          <Link 
            key={menuAthlete.id}
            to={`/athlete/${menuAthlete.id}`}
            activeClassName="active"
          >
            {menuAthlete.name}
          </Link>
        })}
      </nav>

    );
  }
}

export default AthletesMenu;