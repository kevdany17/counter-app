// en la importación granulada hay que especificar el nombre
// en la exportación default se puede reemplazar el nombre

import PropTypes from 'prop-types'

export const App = ({ title }) => {
    return <h1>{ title }</h1>
}

App.propTypes = {
    title: PropTypes.string.isRequired,
}

App.defaultProps = {
    title: "Hola Mundo!"
}