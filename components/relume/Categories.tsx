import type { Category } from "@/app/generated/prisma/client";

export const Categories = ({
  categories,
  onSelect,
}: {
  categories: Category[];
  onSelect: (name: string) => void;
}) => {
  return (
    <section id="categories" className="border-b border-scheme-border px-[5%] py-16 md:py-24">
      <div className="container">
        <div className="mb-10 md:mb-12">
          <p className="mb-2 font-semibold text-zylix-grey">Popular Categories</p>
          <h2 className="text-h3 font-bold">Shop by category</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelect(category.name)}
              className="flex flex-col items-center gap-2 rounded-card border border-scheme-border bg-scheme-foreground py-6 text-center transition hover:border-[#1F2A44]"
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="text-small font-semibold">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
