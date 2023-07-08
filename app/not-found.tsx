import Link from "next/link";

const NotFound = () => {
    return (<main className="w-full h-[calc(100vh-10rem)] flex justify-center items-center flex-col">
        <h2 className="text-[4rem] text-greenSecondary font-semibold">404 <span className="text-white font-thin">NOT FOUND</span></h2>
        <h4 className="text-xl font-thin">The page that you are currently looking for does not exist!</h4>
        <section className="flex gap-x-2 mt-8">
            <Link className="text-greenPrimary border-b border-dotted border-greenPrimary" href={"/"}>Back to home</Link>
        </section>
    </main>);
}

export default NotFound;