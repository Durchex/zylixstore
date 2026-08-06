export function BagLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path d="M6 8h12l1 12.5a1.5 1.5 0 0 1-1.5 1.5H6.5A1.5 1.5 0 0 1 5 20.5L6 8Z" stroke="url(#bag)" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" stroke="url(#bag)" strokeWidth="1.6" strokeLinecap="round" />
      <defs>
        <linearGradient id="bag" x1="4" y1="4" x2="20" y2="22">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="55%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SearchIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>;
}
export function HeartIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 20.5s-7.5-4.6-9.8-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.8 5.5c-2.3 4.4-9.8 9-9.8 9Z" strokeLinejoin="round" /></svg>;
}
export function UserIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.4" /><path d="M4.8 20c1.2-3.5 4-5.4 7.2-5.4s6 1.9 7.2 5.4" strokeLinecap="round" /></svg>;
}
export function CartIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h2l1.6 10.2a2 2 0 0 0 2 1.8h7.4a2 2 0 0 0 2-1.6L20.5 9H6.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="21" r="1.3" /><circle cx="17.5" cy="21" r="1.3" /></svg>;
}
export function ShoppingBagFeatureIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 8h12l1 12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20L6 8Z" strokeLinejoin="round" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" strokeLinecap="round" /></svg>;
}
export function StorefrontIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 10.5 5 5h14l1 5.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4.5 10.5v8A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5v-8" strokeLinecap="round" /><path d="M9.5 20v-4.5a2.5 2.5 0 0 1 5 0V20" strokeLinecap="round" /></svg>;
}
export function PencilIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m14.5 5 4.5 4.5L8.5 20 4 20.5 4.5 16 14.5 5Z" strokeLinejoin="round" /></svg>;
}
export function ShieldIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3.5 5 6v5.5c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V6l-7-2.5Z" strokeLinejoin="round" /><path d="m9.3 12.2 1.9 1.9 3.6-3.9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function GlobeIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" /></svg>;
}
export function CloseIcon() {
  return <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 5 14 14M19 5 5 19" strokeLinecap="round" /></svg>;
}
export function QrDecor() {
  const cells = [1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0];
  return (
    <div className="grid grid-cols-4 gap-0.5 rounded-md bg-white p-1.5">
      {cells.map((c, i) => (
        <span key={i} className={`h-1.5 w-1.5 ${c ? "bg-black" : "bg-transparent"}`} />
      ))}
    </div>
  );
}
export function FacebookIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.6-1.5h1.5V4.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v3h2.7V21h2.8Z" /></svg>;
}
export function InstagramIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>;
}
export function TwitterIcon() {
  return <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4 4h4.2l4 5.4L16.8 4H20l-6.3 7.7L20.4 20h-4.2l-4.4-5.9L6.6 20H3.4l6.7-8.2L4 4Z" /></svg>;
}
