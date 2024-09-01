import Link from "next/link";

const Card1 = ({ title, description, url }) => {
    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-secondary bg-clip-border text-primary shadow-md border-solid border-4">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-secondary bg-primary shadow-lg shadow-blue-gray-500/40 ">

            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-primary antialiased">
                    {title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <Link
                    href={url}
                >
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-secondary shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Card1;