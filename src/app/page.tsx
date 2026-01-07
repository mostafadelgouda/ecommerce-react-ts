"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/assets/pexels-fotoaibe-1743227.jpg",
    title: "Welcome to Our Store",
    subtitle: "Find the best products at the best prices",
  },
  {
    image: "/assets/pexels-pixabay-276583.jpg",
    title: "New Arrivals",
    subtitle: "Discover what’s new this season",
  },
  {
    image: "/assets/pexels-jvdm-1454806.jpg",
    title: "Fast Delivery",
    subtitle: "Get your order delivered in no time",
  },
];

export default function HomePage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = (current + 1) % slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 1000); // fade duration
    }, 4000); // slide duration

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[500px] w-full overflow-hidden">

        {/* Current Slide */}
        <div
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-1000
            ${isAnimating ? "opacity-0" : "opacity-100"}
          `}
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white bg-black/50 p-6 rounded">
              <h1 className="text-4xl font-bold">{slides[current].title}</h1>
              <p className="mt-2 text-lg">{slides[current].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Next Slide */}
        <div
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-1000
            ${isAnimating ? "opacity-100" : "opacity-0"}
          `}
          style={{ backgroundImage: `url(${slides[next].image})` }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white bg-black/50 p-6 rounded">
              <h1 className="text-4xl font-bold">{slides[next].title}</h1>
              <p className="mt-2 text-lg">{slides[next].subtitle}</p>
            </div>
          </div>
        </div>

      </section>

      <Link href="/profile">Profile</Link>
      <button onClick={() => router.push("/about")}>Go to About</button>
    </>
  );
}
