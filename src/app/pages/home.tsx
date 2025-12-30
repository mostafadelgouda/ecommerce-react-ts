"use client"; // required for client-side navigation

import { useRouter } from "next/navigation";

export default function HomePage() {
    const router = useRouter();

    const goToAbout = () => {
        router.push("/about"); // navigate to /about page
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToAbout}>Go to About</button>
        </div>
    );
}
