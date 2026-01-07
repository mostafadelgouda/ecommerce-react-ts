"use client"; // required for client-side navigation

import { useRouter } from "next/navigation";
import Link from "next/link";


export default function HomePage() {
    const router = useRouter();

    const goToAbout = () => {
        router.push("/about"); // navigate to /about page
    };

    return (
        <>
            <section
                className="
                    h-screen
                    w-full
                    bg-[url('/assets/logo.avif')]
                    bg-color-red-500
                    bg-cover
                    bg-center
                    bg-no-repeat
                    flex
                    items-center
                    justify-center
                "
            >
                <h1 className="text-white text-4xl font-bold">
                    Welcome to Our Store
                </h1>
            </section>
            <h1>Home Pageeeeeeeeeeeees</h1>
            <Link href="/profile">Profile</Link>
            <button onClick={goToAbout}>Go to About</button>
        </>
    );
}
