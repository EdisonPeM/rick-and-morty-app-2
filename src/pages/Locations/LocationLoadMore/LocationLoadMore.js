const LocationLoadMore = ({ hide, onLoadMore }) => {
  return !hide ? (
    <>
      <hr />
      <div className="text-center">
        <button
          className="btn btn-secondary btn-lg w-100 w-md-auto"
          onClick={onLoadMore}
        >
          Load More
        </button>
      </div>
    </>
  ) : null;
};

export default LocationLoadMore;
