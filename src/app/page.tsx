"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Subtitle from "./components/common/SubTitle";
import Title from "./components/common/Title";
import CollectionsItem from "./components/layout/CollectionsItem";
import { apiFetch } from "@/lib/api";

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


interface CategoriesResponse {
  message: string;
  page: number;
  total_items: number;
  limit: number;
  data: Categories[];
}
interface Categories {
  category_id: number;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  created_at: string;
}

export default function HomePage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log("Fetching categories...");
        const res = await apiFetch("/api/categories", {
          method: "GET",
        }) as CategoriesResponse;

        setCategories(res.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

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
          {
            loading ? (
              <p>Loading...</p>
            ) : (
              categories.map((category) => (
                <Link key={category.category_id} href={`/collections/${category.slug}`}>
                  <CollectionsItem imageUrl={category.image_url} name={category.name} />
                  {/* clickOperation={() => router.push(`/collections/${category.category_id}`)}  */}
                </Link>
              ))
            )
          }
          {/* <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Dinning Room Sets" clickOperation={() => router.push("/collections/dinning-room-sets")} />
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Living Room Essentials" clickOperation={() => router.push("/collections/living-room-essentials")} />
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Office & Workspace" clickOperation={() => router.push("/collections/office-workspace")} />
          <CollectionsItem imageUrl="/assets/pexels-fotoaibe-1743227.jpg" name="Outdoor Patio Furniture" clickOperation={() => router.push("/collections/outdoor-patio-furniture")} /> */}
        </div>

      </section>



    </>
  );
}