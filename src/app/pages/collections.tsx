interface PageProps {
    params: {
        collectionName: string;
    };
}

export default async function CollectionPage({ params }: PageProps) {
    const { collectionName } = params;

    // Example backend request
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/collections/${collectionName}`,
        { cache: 'no-store' }
    );

    const items = await res.json();

    return (
        <div className="container mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-8 capitalize">
                {collectionName.replace(/-/g, " ")}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item: any) => (
                    <div key={item.id} className="border rounded-lg p-4">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
