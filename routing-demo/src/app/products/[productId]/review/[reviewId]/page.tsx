export default async function productreview({ params, }:
    {
    params: Promise<{ productId: string; reviewId: string; }>
    })
{
    const { productId, reviewId } = await params
    return <h1>Review {reviewId} for products { productId}</h1>
}