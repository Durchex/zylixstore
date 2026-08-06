import { FacebookLogo, InstagramLogo, XLogo } from "relume-icons";
import { Logo } from "@/components/Logo";

const columnLinks = [
  { title: "Shop", url: "#trending" },
  { title: "Categories", url: "#categories" },
  { title: "Sell With Us", url: "#top" },
];

const socialMediaLinks = [
  { url: "#", icon: <FacebookLogo className="size-5 text-[#1F2A44]" /> },
  { url: "#", icon: <InstagramLogo className="size-5 text-[#1F2A44]" /> },
  { url: "#", icon: <XLogo className="size-5 p-0.5 text-[#1F2A44]" /> },
];

export const Footer4 = () => {
  return (
    <footer className="bg-cream px-[5%] py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-items-center gap-y-8 pb-8 md:grid-cols-[0.3fr_1fr_0.3fr] md:justify-between md:pb-10">
          <a href="#top" className="md:justify-self-start">
            <Logo variant="navy" />
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {columnLinks.map((link, index) => (
              <li key={index} className="font-semibold text-[#1F2A44]">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 md:justify-self-end">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="h-px w-full bg-[#1F2A44]/15" />
        <div className="flex flex-col items-center justify-between gap-2 pt-6 text-small text-[#1F2A44]/70 md:flex-row">
          <p>© 2026 ZylixStore. All rights reserved.</p>
          <p>
            Powered by <b className="text-[#1F2A44]">Durchex D.A.M Company LTD</b>
          </p>
        </div>
      </div>
    </footer>
  );
};
