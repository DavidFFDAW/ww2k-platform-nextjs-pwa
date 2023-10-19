import { ITEMS_PER_PAGE } from "@/constants/config";
import Link from "next/link";

interface PaginationProps {
    page: number;
    total: number;
}

export function Pagination({ page, total }: PaginationProps) {
    const realPage = page || 1;
    const innerPages = [...Array(Math.round(total / ITEMS_PER_PAGE))];

    const lastPage = innerPages.length;

    return (
        <div className="flex center acenter">
            <div className="w1 pagination flex center acenter">
                <div className="pagination-item">
                    <Link href={`?page=${realPage - 1}`} className="pagination__item">
                        &lt;
                    </Link>
                </div>
                {innerPages.slice(page, 5).map((_, i) => {
                    const pageNumber = i + 1;
                    return (
                        <div className="pagination-item" key={pageNumber}>
                            <Link href={`?page=${pageNumber}`} className={`pagination__item ${realPage === pageNumber ? 'active' : ''}`}>
                                {pageNumber}
                            </Link>
                        </div>
                    )
                })}
                <div className="pagination-item">
                    ...
                </div>
                <div className="pagination-item">
                    <Link href={`?page=${lastPage}`} className="pagination__item">
                        {lastPage}
                    </Link>
                </div>
                <div className="pagination-item">
                    <Link href={`?page=${realPage + 1}`} className="pagination__item">
                        &gt;
                    </Link>
                </div>
            </div>
        </div >
    );
}