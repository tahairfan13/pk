export const countries = [
  { code: "+92",  flag: "🇵🇰", name: "Pakistan" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+973", flag: "🇧🇭", name: "Bahrain" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+44",  flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1",   flag: "🇺🇸", name: "United States" },
  { code: "+1",   flag: "🇨🇦", name: "Canada" },
  { code: "+61",  flag: "🇦🇺", name: "Australia" },
  { code: "+49",  flag: "🇩🇪", name: "Germany" },
  { code: "+90",  flag: "🇹🇷", name: "Turkey" },
  { code: "+86",  flag: "🇨🇳", name: "China" },
];

interface Props {
  value: string;
  onChange: (val: string) => void;
  dark?: boolean;
}

export default function CountryCodeSelect({ value, onChange, dark = false }: Props) {
  const base = dark
    ? "bg-white/5 border-white/10 text-white focus:border-[#ED1A3B]/50"
    : "bg-white border-[#E5E5E5] text-[#1B1B1B] focus:border-[#ED1A3B]";

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`shrink-0 border rounded-lg pl-3 pr-2 py-3 text-sm focus:outline-none transition-colors ${base}`}
      style={dark ? { colorScheme: "dark" } : undefined}
    >
      {countries.map((c) => (
        <option key={`${c.name}-${c.code}`} value={c.code}>
          {c.flag} {c.code}
        </option>
      ))}
    </select>
  );
}
