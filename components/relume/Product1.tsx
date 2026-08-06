import type { Product } from "@/app/generated/prisma/client";
import { Button } from "@/components/ui/button";

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export const Product1 = ({
  heading,
  products,
  loading,
  onAddToCart,
}: {
  heading: string;
  products: Product[];
  loading: boolean;
  onAddToCart: (productId: string) => void;
}) => {
  return (
    <section id="trending" className="px-[5%] py-16 md:py-24">
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4 md:mb-16">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold text-zylix-grey">Curated For You</p>
            <h2 className="text-h2 font-bold">{heading}</h2>
          </div>
          {loading && <span className="text-small text-zylix-grey">Loading...</span>}
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div
                className="relative mb-3 flex aspect-[10/12] items-center justify-center overflow-hidden rounded-image text-5xl md:mb-4"
                style={{ background: `linear-gradient(135deg, ${product.swatchFrom}, ${product.swatchTo})` }}
              >
                {product.emoji}
                {product.tag && (
                  <span className="absolute left-3 top-3 rounded-badge bg-white/90 px-2 py-1 text-tiny font-bold text-[#1F2A44]">
                    {product.tag}
                  </span>
                )}
                <Button
                  size="sm"
                  onClick={() => onAddToCart(product.id)}
                  className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  Add to cart
                </Button>
              </div>
              <div className="mb-2">
                <p className="text-tiny uppercase tracking-wide text-zylix-grey">{product.category}</p>
                <p className="text-medium font-semibold">{product.name}</p>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-large font-semibold">{formatNaira(product.price)}</p>
                {product.oldPrice && (
                  <p className="text-small text-zylix-grey line-through">{formatNaira(product.oldPrice)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {!loading && products.length === 0 && (
          <p className="text-center text-medium text-zylix-grey">No products match that search yet.</p>
        )}
      </div>
    </section>
  );
};
