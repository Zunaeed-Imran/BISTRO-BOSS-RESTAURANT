// ./component/Countries.js

// prop validation.
import PropTypes from 'prop-types';

// for pagination
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';


function Countries({ countrys }) {
  const itemsPerPage = 6; // Number of items per page

  // States for pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // Effect to initialize pagination and current items when `countrys` data updates
  useEffect(() => {
    if (countrys && countrys.length > 0) {
      setPageCount(Math.ceil(countrys.length / itemsPerPage));
      setCurrentItems(countrys.slice(0, itemsPerPage));
    }
  }, [countrys]);

  // Handle page click
  const handlePageClick = event => {
    const newOffset = event.selected * itemsPerPage;
    setCurrentItems(countrys.slice(newOffset, newOffset + itemsPerPage));
  };

  return (
    <div>
      {/* Display current items */}
      {currentItems.length > 0 ? (
        currentItems.map((country, index) => (
          <p key={index}>{country.name.common}</p>
        ))
      ) : (
        <p>No countries available.</p>
      )}

      {/* Pagination controls */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Previous"
        containerClassName="pagination"
        pageLinkClassName="page-link"
        previousLinkClassName="prev-link"
        nextLinkClassName="next-link"
        activeClassName="active"
      />
    </div>
  );
}

export default Countries;

Countries.propTypes = {
  countrys: PropTypes.arrayOf(PropTypes.object),
};
