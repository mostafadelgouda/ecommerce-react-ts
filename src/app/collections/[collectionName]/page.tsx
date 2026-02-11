
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

interface ProductsResponse {
    message: string;
    page: number;
    total_items: number;
    limit: number;
    data: Products[];
}
interface Products {
    product_id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    brand: string;
    image_url: string;
    created_at: string;
}


export default async function CollectionPage({ params }: PageProps) {
    const { collectionName } = await params;
    console.log("_____________________");
    console.log("Collection Name:", collectionName);
    const categories: Categories[] = (await apiFetch(`/api/categories`, {
        method: "GET",
    }) as CategoriesResponse).data;
    // const products: Products[] = (await apiFetch(`/api/products?category=${collectionName}`, {
    //     method: "GET",
    // }) as ProductsResponse).data;
    //console.log(data);

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
            <div className="flex w-full gap-8">
                <section className="w-1/4">
                    <Title text="Filters" />
                </section>
                <section className="w-3/4 p-24">
                    {
                        categories.map((category) => (
                            <Link key={category.category_id} href={`/collections/${category.name.toLowerCase().replace(/ /g, "-")}`}>
                                <ProductItem imageUrl={"/assets/pexels-fotoaibe-1743227.jpg"} name={category.name} />

                                <div className="item">{category.name}</div>
                                <div className="item">rate</div>
                                <div className="item">price</div>

                            </Link>
                        ))
                    }
                </section>
            </div>

        </>
    );
}
