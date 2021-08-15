import React from 'react'
import './styles/Title.css'
import PropTypes from 'prop-types'

const Title = (props) => {
    return (
        <h1>Companies List around the World</h1>
    )
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title 