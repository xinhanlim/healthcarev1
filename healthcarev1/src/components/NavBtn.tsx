export default function ButtonArrow() {
    return (
        <div className="group flex gap-x-2 w-fit hover:opacity-40 ">
            <button type="button" className="uppercase link-underline">Get A Demo</button>
            <svg
                className="transition-transform duration-300 group-hover:-rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24">
                <path fill="var(--btn-arrowcolor)" d="M17 15.586 6.707 5.293 5.293 6.707 15.586 17H7v2h12V7h-2v8.586z" />
            </svg>
        </div>
    )

}