import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
};

type PageButtonProps = {
    page: number,
    currentPage: number,
    onPageChange: (page: number) => void,
    baseButton: string
};

function PageButton({ page, currentPage, onPageChange, baseButton }: PageButtonProps) {
    const isActive = page === currentPage;

    return (
        <button key={page} type="button" aria-label={`Page ${page}`} aria-current={isActive ? "page" : undefined}
            onClick={() => onPageChange(page)} className={`${baseButton} ${isActive
                ? "bg-accent text-white shadow-[0_3px_8px_rgba(174,21,77,0.2)]"
                : "text-accent-dark hover:bg-[#FDF2E9]"
                }`}
        >{page}</button>
    );
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    const getPages = () => {
        const pages: number[] = [];

        let start = Math.max(1, currentPage - 1);
        let end = Math.min(totalPages, currentPage + 1);

        if (currentPage === 1) end = Math.min(totalPages, 3);
        if (currentPage === totalPages) {
            start = Math.max(1, totalPages - 2);
        }

        for (let page = start; page <= end; page++) {
            pages.push(page);
        }

        return pages;
    };

    const baseButton = "flex h-10 min-w-10 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40";

    return (
        <nav aria-label="Course pagination"
            className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-[#F0E5E9] pt-6 sm:flex-row"
        >
            <p className="text-sm text-muted">
                Page <span className="font-semibold text-accent-dark">{currentPage}</span>
                {" "}of{" "}
                <span className="font-semibold text-accent-dark">{totalPages}</span>
            </p>

            <div className="flex items-center gap-2">
                <button type="button" aria-label="Previous page" disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className={`${baseButton} gap-2 border border-[#E8D5DE] px-3 text-accent-dark hover:border-accent hover:bg-[#FDF2E9]`}
                >
                    <span aria-hidden="true">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                    <span className="hidden sm:inline">Previous</span>
                </button>

                {getPages()[0] > 1 && (
                    <>
                        <PageButton page={1} currentPage={currentPage} onPageChange={onPageChange} baseButton={baseButton} />
                        {getPages()[0] > 2 && (
                            <span className="px-1 text-muted" aria-hidden="true">…</span>
                        )}
                    </>
                )}

                {getPages().map((page) => (
                    <PageButton key={page} page={page} currentPage={currentPage} onPageChange={onPageChange} baseButton={baseButton} />
                ))}

                {getPages()[getPages().length - 1] < totalPages && (
                    <>
                        {getPages()[getPages().length - 1] < totalPages - 1 && (
                            <span className="px-1 text-muted" aria-hidden="true">…</span>
                        )}
                        <PageButton page={totalPages} currentPage={currentPage} onPageChange={onPageChange} baseButton={baseButton} />
                    </>
                )}

                <button type="button" aria-label="Next page" disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className={`${baseButton} gap-2 border border-[#E8D5DE] px-3 text-accent-dark hover:border-accent hover:bg-[#FDF2E9]`}
                >
                    <span className="hidden sm:inline">Next</span>
                    <span aria-hidden="true">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </button>
            </div>
        </nav>
    );
}






export { Pagination }