import React from "react";
import "./styles/ItemUser.css";
import PropTypes from 'prop-types'



class ItemUser extends React.Component {
  state = {};

  render() {
    const { name, country, year } = this.props.company;
    return (
      <div className="item">
        <p>
          <strong>Nombre: </strong> {name}
        </p>
        <p>
          <strong>Country: </strong> {country}
        </p>
        <p>
          <strong>year: </strong> {year}
        </p>
      </div>
    );
  }
}



ItemUser.propTypes = {
    company: PropTypes.shape({
        name: PropTypes.string, 
        country: PropTypes.string.isRequired, 
        year: PropTypes.number }
    )

}


ItemUser.defaultProps = {
    company: {
        name: 'Default Name', 
        country: 'Default country', 
        year: '1980'
    }
    
}

export default ItemUser;
