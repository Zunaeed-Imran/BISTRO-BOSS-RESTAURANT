import { Helmet } from "react-helmet"
import PropTypes from 'prop-types';

function PageTitle({title}) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </div>
  )
}

export default PageTitle

PageTitle.propTypes = {
  title: PropTypes.string,
};