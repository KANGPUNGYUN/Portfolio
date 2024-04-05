function Pagination({
  currentPage,
  totalPosts,
  pageGroups,
  currentGroup,
  paginate,
  goToPrevGroup,
  goToNextGroup,
  getStartPage,
  getEndPage,
}) {
  const pageNumbers = Array.from(
    { length: getEndPage() - getStartPage() + 1 },
    (_, index) => index + getStartPage()
  );

  return (
    <nav className="mt-8 flex justify-center">
      <ul className="flex gap-3">
        <li className="page-item">
          <button
            onClick={goToPrevGroup}
            className={`page-link ${currentGroup === 1 ? "invisible" : ""}`}
            disabled={currentGroup === 1}
          >
            처음
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={goToPrevGroup}
            className={`page-link ${currentGroup === 1 ? "invisible" : ""}`}
            disabled={currentGroup === 1}
          >
            이전
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`page-link ${
                currentPage === number ? "text-emerald-500 font-bold" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={goToNextGroup}
            className={`page-link ${
              currentGroup === pageGroups.length ? "invisible" : ""
            }`}
            disabled={currentGroup === pageGroups.length}
          >
            다음
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={goToNextGroup}
            className={`page-link ${
              currentGroup === pageGroups.length ? "invisible" : ""
            }`}
            disabled={currentGroup === pageGroups.length}
          >
            마지막
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
