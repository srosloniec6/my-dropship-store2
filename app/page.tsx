import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { catalog } from "@/lib/catalog";

export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Dropship Store</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catalog.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CartDrawer />
    </main>
  );
}
