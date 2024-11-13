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
      <div className="flex flex-col items-center gap-3 px-4">
        {/* Display current items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.img}
                  alt="logo image"
                  className="link hover:opacity-50 hover:scale-105 hover:transition-opacity"
                />
                <p className="font-cinzel text-xl font-semibold text-left">
                  {item.name}
                </p>
                <p className="text-left">{item.desc}</p>
                <p className="text-[#D99904] font-semibold">{item.price}</p>
              </div>
            ))
          ) : (
            <p>No items available.</p>
          )}
        </div>

        {/* Pagination controls at the bottom */}
        <div className="pagination-container mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< Previous"
            containerClassName="pagination flex justify-center"
            pageLinkClassName="page-link"
            previousLinkClassName="prev-link"
            nextLinkClassName="next-link"
            activeClassName="active"
          />
        </div>
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
