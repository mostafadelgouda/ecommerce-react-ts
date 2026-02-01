
import ProductItem from "@/app/components/common/ProductItem";
import Subtitle from "@/app/components/common/SubTitle";
import Title from "@/app/components/common/Title";
import CollectionsItem from "@/app/components/layout/CollectionsItem";
import { apiFetch } from "@/lib/api";
import Link from "next/link";
interface PageProps {
    params: Promise<{ collectionName: string }>; // this is fine
}
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
    description: string;
    image_url: string;
    created_at: string;
}

export default async function CollectionPage({ params }: PageProps) {
    const { collectionName } = await params; // ✅ await before using

    const data: Categories[] = (await apiFetch(`/api/categories`, {
        method: "GET",
    }) as CategoriesResponse).data;
    console.log(data);

    return (
        <>
            <Title text={collectionName.replace(/-/g, " ")} />

            <section
                className="w-full h-[500px] bg-gray-200"
                style={{
                    backgroundImage: `url(/assets/pexels-fotoaibe-1743227.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <section className="p-24">
                {
                    data.map((category) => (
                        <Link key={category.category_id} href={`/collections/${category.name.toLowerCase().replace(/ /g, "-")}`}>
                            <ProductItem imageUrl={"/assets/pexels-fotoaibe-1743227.jpg"} name={category.name} />

                            <div className="item">{category.name}</div>

                        </Link>
                    ))
                }
            </section>
        </>
    );
}
