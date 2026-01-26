"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Subtitle from "./components/common/SubTitle";
import Title from "./components/common/Title";
import CollectionsItem from "./components/layout/CollectionsItem";
const slides = [
  {
    image: "/assets/pexels-fotoaibe-1743227.jpg",
    title: "Welcome to Our Store",
    subtitle: "Find the best products at the best prices",
  },
  {
    image: "/assets/pexels-pixabay-276583.jpg",
    title: "New Arrivals",
    subtitle: "Discover what's new this season",
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
  return (
    <>
      <section className="w-full h-[500px] bg-gray-200 flex items-center justify-center"
        style={{ backgroundImage: `url(${slides[current].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-center " >
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="mt-2 text-lg">Find the best products at the best prices</p>
        </div>
      </section>
      <section className="w-full text-center p-24 flex flex-col items-center justify-center gap-6">
        <Subtitle text="Furniture picks every room style" />
        <Title text="Featured Collections" />
        <div className="flex flex-row gap-8">
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Dinning Room Sets" clickOperation={() => router.push("/collections/dinning-room-sets")} />
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Living Room Essentials" clickOperation={() => router.push("/collections/living-room-essentials")} />
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Office & Workspace" clickOperation={() => router.push("/collections/office-workspace")} />
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Outdoor Patio Furniture" clickOperation={() => router.push("/collections/outdoor-patio-furniture")} />
        </div>

      </section>



    </>
  );
}