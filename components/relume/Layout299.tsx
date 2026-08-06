import { ShoppingBag, Storefront, DesignServices, ShieldLock } from "relume-icons";

const sections = [
  { icon: ShoppingBag, heading: "For Shoppers", description: "Explore a wide range of fashion products at the best prices." },
  { icon: Storefront, heading: "For Sellers", description: "List your products and reach thousands of active buyers." },
  { icon: DesignServices, heading: "For Designers", description: "Showcase your designs, get discovered and grow your brand." },
  { icon: ShieldLock, heading: "Trusted & Secure", description: "Safe payments, secure transactions, and reliable support." },
];

export const Layout299 = () => {
  return (
    <section className="border-b border-scheme-border px-[5%] py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 items-start gap-y-12 md:grid-cols-4 md:gap-x-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-cream md:mb-6">
                  <Icon className="size-6 text-[#1F2A44]" />
                </div>
                <h3 className="mb-2 text-h6 font-bold">{section.heading}</h3>
                <p className="text-small text-zylix-grey">{section.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
