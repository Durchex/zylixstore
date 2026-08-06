import { Globe } from "relume-icons";

const cells = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0];

function QrDecor() {
  return (
    <div className="grid grid-cols-4 gap-0.5 rounded-form border border-scheme-border bg-white p-1.5">
      {cells.map((c, i) => (
        <span key={i} className={`size-1.5 ${c ? "bg-[#1F2A44]" : "bg-transparent"}`} />
      ))}
    </div>
  );
}

export const Cta1 = () => {
  return (
    <section className="px-[5%] py-16 md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 rounded-card bg-[#1F2A44] p-8 text-white md:flex-row">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Globe className="size-8 shrink-0" />
            <p className="text-medium font-semibold">
              Ready to experience fashion the smart way? Visit <span className="font-bold">ZylixStore.online</span> today!
            </p>
          </div>
          <QrDecor />
        </div>
      </div>
    </section>
  );
};
