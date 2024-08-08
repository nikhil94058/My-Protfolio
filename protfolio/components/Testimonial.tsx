import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card1 from './Card1';

const Testimonial = ({ comments }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8">
      {/* <div className="w-2 h-8 bg-green-700 rounded-full"></div>*/}
        {/*<div className="text-white text-2xl md:text-4xl font-bold font-inter leading-12">My Happy Clients</div>*/}
      </div>

      {/*<div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
        {currentComments.map((comment, index) => (
          <Card1 key={index} comment={comment.comment} name={comment.name} role={comment.roles} location={comment.location} />
        ))}
      </div>*/}

      {/* Pagination */}
      {/*<div className="flex justify-center mt-8">
        {comments.length > itemsPerPage && (
          <div className="flex gap-2 md:gap-4">
            {[...Array(Math.ceil(comments.length / itemsPerPage)).keys()].map((number, index) => (
              <button
                key={index}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-green-700 ${currentPage === number + 1 ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-300 hover:bg-green-700 hover:text-white'}`}
                onClick={() => paginate(number + 1)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        )}
      </div>*/}

      {/* Scroll to top button */}
      <div
        className={`fixed bottom-5 right-5 bg-white p-3 rounded-full cursor-pointer shadow-lg ${currentPage > 1 ? 'block' : 'hidden'}`}
        onClick={scrollToTop}
      >
        <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
      </div>

      {/* Contact Section */}
      <div className="m-8 p-4 w-full flex flex-col md:flex-row items-center md:justify-between bg-gray-800 rounded-lg">
        <div className="flex flex-col items-start gap-4 mb-4 md:mb-0">
          <div className="text-white text-xl md:text-2xl font-bold font-inter">Have any project in mind?</div>
          <div className="text-zinc-500 text-base font-normal font-inter leading-7">
            Feel free to contact me or just say a friendly hello!
          </div>
        </div>
        <a href="/contact">
        <button className="py-2 px-4 bg-green-700 text-white text-lg font-bold font-inter rounded-lg" >
          Contact Me
        </button>
        </a>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      roles: PropTypes.string.isRequired,
      location: PropTypes.string,
    })
  ).isRequired,
};

export default Testimonial;
