"use client"; // required for client-side navigation

import { useRouter } from "next/navigation";
import Link from "next/link";


export default function HomePage() {
    const router = useRouter();

    const goToAbout = () => {
        router.push("/about"); // navigate to /about page
    };

    return (
        <div>
            <h1>Home Pageeeeeeeeeeeee</h1>
            <Link href="/profile">Profile</Link>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    );
}
