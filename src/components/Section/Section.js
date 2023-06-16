
import PropTypes from 'prop-types';


function Section({title, children}) {
    return (
      <>
        <h2>{title}</h2>
        {children}
      </> 
    )
}

export default Section;



Section.propTypes = {
  title: PropTypes.string.isRequired
}