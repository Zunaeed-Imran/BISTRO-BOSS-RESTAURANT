import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../assets/styles/SmallMenu.css';

function ManuCardPagination({ items }) {
  const itemsPerPage = 2; // Number of items per page

  // States for pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // Effect to initialize pagination and current items when `items` data updates
  useEffect(() => {
    if (items && items.length > 0) {
      setPageCount(Math.ceil(items.length / itemsPerPage));
      setCurrentItems(items.slice(0, itemsPerPage));
    }
  }, [items]);

    // Handle page click
  const handlePageClick = event => {
    const newOffset = event.selected * itemsPerPage;
    setCurrentItems(items.slice(newOffset, newOffset + itemsPerPage));
  };


    return (
      <div className="flex justify-center gap-3 px-4">
        {/* Display current items */}
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.img}
                alt="logo image"
                className="hover:opacity-50"
              />
              <p className="font-cinzel text-xl font-semibold">{item.name}</p>
              <p>{item.desc}</p>
              <p className="text-[#D99904] font-semibold">{item.price}</p>
            </div>
          ))
        ) : (
          <p>No items available.</p>
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

export default ManuCardPagination;


ManuCardPagination.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
