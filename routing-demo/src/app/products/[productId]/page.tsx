export default async  function productdetails({ params, }: {
    params: Promise<{ productId: string; }>
}) {
    const productId = (await params).productId
    return (
        <>
            <h1 className="text-2xl font-bold">Product details</h1>
            <p>Product details { productId}</p>
        </>
    );
}