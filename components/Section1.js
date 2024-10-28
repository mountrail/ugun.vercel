import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";

const Section1 = ({ img, title, description, url }) => {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl md:px-4 md:py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1  lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-100">
                            <Image
                                alt={title}
                                src={img}
                                className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-gray-100">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="p-2 md:p-8 sm:p-16 lg:p-24">
                            <h2 className="text-lg sm:text-2xl font-bold md:text-3xl">
                                {title}
                            </h2>

                            <p className="mt-4 mb-6 text-gray-600">
                                {description}
                            </p>
                            <ButtonPrimary message={"More..."} url={url} newTab={true} />

                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default Section1;