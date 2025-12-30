"use client"; // required for client-side navigation

import { useRouter } from "next/navigation";

import Navbar from "./components/layout/navbar";
export default function HomePage() {
  const router = useRouter();

  const goToAbout = () => {
    router.push("/about"); // navigate to /about page
  };

  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}
