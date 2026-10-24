import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Section from "../../Section";
import { courses } from "../../../data";
import { AnotherCourseCard, CourseCard } from "../../Cards";
import { Pagination } from "../../Pagination";


export default function CourseList() {
    const [search, setSearch] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedLevel, setSelectedLevel] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;
    const filteredCourses = courses.filter((course) => {
        const term = search.trim().toLowerCase();

        const matchesSearch = (
            term === ""
            || !term
            || course.name.toLowerCase().includes(term)
            || course.outcome.some(item => item.toLowerCase().includes(term)
            )
        )

        const matchesLevel = (selectedLevel === "all"
            || course.experience.toLowerCase() === selectedLevel.toLowerCase()
        )

        return matchesSearch && matchesLevel;
    });

    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const startIndex = (currentPage - 1) * coursesPerPage;
    const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

    function handleSearch(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        setSearch(searchValue.trim());
        setCurrentPage(1)
    }
    function clearFilter() {
        setSearchValue("");
        setSearch("");
        setSelectedLevel("all");
        setCurrentPage(1);
    }

    return (
        <Section title="Explore Our Courses">
            <div className="flex w-full max-w-7xl flex-col gap-3 sm:flex-row mt-10">
                <form className="search flex w-full max-w-3xl gap-3" onSubmit={handleSearch}>
                    <div className="relative min-w-0 flex-1">
                        <input type="text" placeholder="Search courses by name or skill..." value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} aria-label="Search courses"
                            className="w-full rounded-xl border border-[#E8D5DE] bg-white py-3.5 pl-5 pr-4 text-sm text-accent-dark outline-none transition-all duration-200 placeholder:text-[#9A8990] focus:border-accent focus:ring-2 focus:ring-accent/15"
                        />
                    </div>

                    <button type="submit"
                        className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <span>Search</span>
                    </button>
                </form>
                <div className="ml-auto w-full sm:w-auto flex items-center justify-center gap-3">
                    <div className="relative sm:w-52 flex-1 mt-5 sm:mt-0">
                        <label htmlFor="course-level" className="sr-only">Filter by course level</label>

                        <select id="course-level" value={selectedLevel}
                            onChange={(e) => {
                                setSelectedLevel(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full appearance-none rounded-xl border border-[#E8D5DE] bg-white px-4 py-3.5 pr-10 text-sm font-medium text-accent-dark outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15"
                        >
                            <option value="all">All levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>

                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-accent">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                    <button className="accent-button" onClick={clearFilter}>Clear filter</button>
                </div>
            </div>

            <div className="courses mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 items-stretch">
                {paginatedCourses.length <= 0
                    ? (
                        <div>Course Not Found.. Please check spelling and try again.</div>
                    )
                    : paginatedCourses.map((course, i) =>
                        <AnotherCourseCard key={`${course.name}-cherryville${(i * Math.random() * 2389).toString()}`} description={course.outcome[0]} name={course.name} slug={course.slug} image={course.image} />
                    )
                }
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </Section>
    )
}