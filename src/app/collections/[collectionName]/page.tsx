
import ProductItem from "@/app/components/common/ProductItem";
import Subtitle from "@/app/components/common/SubTitle";
import Title from "@/app/components/common/Title";
import CollectionsItem from "@/app/components/layout/CollectionsItem";
import { Category } from "@/app/types/category";
import { CategoriesResponse } from "@/app/types/categoryResponse";
import { Product } from "@/app/types/product";
import { ProductsResponse } from "@/app/types/productsResponse";
import { apiFetch } from "@/lib/api";
import Link from "next/link";
import { PageProps } from "@/app/types/pageProps";


export default async function CollectionPage({ params }: PageProps) {
    const { collectionName } = await params;
    console.log("_____________________");
    console.log("Collection Name:", collectionName);
    const categories: Category[] = (await apiFetch(`/api/categories`, {
        method: "GET",
    }) as CategoriesResponse).data;
    const category = categories.find((cat) => cat.slug === collectionName);
    if (!category) {
        return <div>Category not found</div>;
    }
    //console.log("Category:", category);
    const products: Product[] = (await apiFetch(`/api/products?category=${category?.category_id}`, {
        method: "GET",
    }) as ProductsResponse).data;
    //console.log(products);

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
                        products.map((product) => (
                            // <Link key={product.category_id} href={`/collections/${product.name.toLowerCase().replace(/ /g, "-")}`}>
                            <ProductItem key={product.product_id} product={product} />



                            // </Link>
                        ))
                    }
                </section>
            </div>

        </>
    );
}
