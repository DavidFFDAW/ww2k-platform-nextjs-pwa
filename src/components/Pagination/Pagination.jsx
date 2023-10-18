import { Link } from 'react-router-dom';

export function SimplePagination({ page, maxPages, currentPage, baseUrl, goUp = false }) {
    const pages = {
        next: Number(currentPage) + 1,
        prev: Number(currentPage) - 1,
    };
    const showPrev = currentPage > 1;
    const showNext = currentPage < maxPages;

    const movePageToTop = () => {
        if (goUp) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="w1 pagination flex between al-center">
            <div className="pagination-previous">
                {showPrev ? (
                    <Link to={`${baseUrl}/page/${pages.prev}`} className="page pagination-button" onClick={movePageToTop}>
                        &lt;
                    </Link>
                ) : null}
            </div>

            <div className="pagination-next">
                {showNext ? (
                    <Link to={`${baseUrl}/page/${pages.next}`} className="page pagination-button" onClick={movePageToTop}>
                        &gt;
                    </Link>
                ) : null}
            </div>
        </div>
    );
}

export function CompletePagination({ page, maxPages, currentPage, baseUrl }) {
    const pages = {
        next: Number(page) + 1,
        prev: Number(page) - 1,
    };
    const showPrev = currentPage > 1;
    const showNext = currentPage < maxPages;
    const totalPages = Array.from({ length: maxPages }, (_, i) => i + 1);

    return (
        <div className="pagination flex between al-center">
            <div className="pagination-previous">
                {showPrev && (
                    <button type="button" className="pagination-button" disabled={!showPrev}>
                        <Link to={`${baseUrl}/page/${pages.prev}`} className="unlink">
                            &lt;
                        </Link>
                    </button>
                )}
            </div>
            <div className="pagination-numbers">
                {totalPages.map(page => (
                    <button type="button" className="pagination-button">
                        <Link to={`${baseUrl}/page/${page}`} className="unlink">
                            {page}
                        </Link>
                    </button>
                ))}
            </div>
            <div className="pagination-next">
                {showNext && (
                    <button type="button" className="pagination-button" disabled={!showNext}>
                        <Link to={`${baseUrl}/page/${pages.next}`} className="unlink">
                            &gt;
                        </Link>
                    </button>
                )}
            </div>
        </div>
    );
}
