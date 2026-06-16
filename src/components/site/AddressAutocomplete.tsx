import { useState, useEffect, useRef } from "react";
import { Loader2, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NominatimResult {
  display_name: string;
  address: {
    road?: string;
    house_number?: string;
    postcode?: string;
    city?: string;
    town?: string;
    village?: string;
    hamlet?: string;
    county?: string;
  };
}

interface AddressAutocompleteProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  placeholder?: string;
}

function formatAddress(a: NominatimResult["address"]): string {
  const street = a.road
    ? a.house_number
      ? `${a.road} ${a.house_number}`
      : a.road
    : null;
  const place = a.city ?? a.town ?? a.village ?? a.hamlet ?? a.county ?? null;
  return [street, a.postcode && place ? `${a.postcode} ${place}` : place]
    .filter(Boolean)
    .join(", ");
}

export function AddressAutocomplete({
  id,
  value,
  onChange,
  error,
  placeholder = "Es. Via Roma 12, 38122 Trento",
}: AddressAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (query.length < 4) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          q: query,
          format: "json",
          addressdetails: "1",
          countrycodes: "it",
          limit: "5",
          "accept-language": "it",
        });
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?${params}`,
          { headers: { "Accept-Language": "it" } }
        );
        const data: NominatimResult[] = await res.json();
        setSuggestions(data);
        setOpen(data.length > 0);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 450);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [query]);

  function select(result: NominatimResult) {
    const formatted = formatAddress(result.address) || result.display_name;
    setQuery(formatted);
    onChange(formatted);
    setOpen(false);
    setSuggestions([]);
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <Input
          id={id}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange(e.target.value);
          }}
          onFocus={() => suggestions.length > 0 && setOpen(true)}
          autoComplete="off"
          aria-autocomplete="list"
          aria-expanded={open}
          placeholder={placeholder}
          className={`mt-1.5 pr-8 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
        />
        {loading ? (
          <Loader2 className="absolute right-2.5 top-[calc(50%+3px)] -translate-y-1/2 h-4 w-4 text-muted-foreground animate-spin pointer-events-none" />
        ) : (
          <MapPin className="absolute right-2.5 top-[calc(50%+3px)] -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        )}
      </div>

      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 w-full rounded-xl border border-border bg-white shadow-card overflow-hidden"
        >
          {suggestions.map((s, i) => {
            const a = s.address;
            const street = a.road
              ? a.house_number
                ? `${a.road} ${a.house_number}`
                : a.road
              : null;
            const city = a.city ?? a.town ?? a.village ?? a.hamlet;
            const sub = [a.postcode, city].filter(Boolean).join(" ");
            return (
              <li
                key={i}
                role="option"
                aria-selected={false}
                onMouseDown={() => select(s)}
                className="flex items-start gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-green-soft text-sm transition-colors border-b border-border/50 last:border-0"
              >
                <MapPin className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                <span>
                  <span className="font-medium text-secondary">
                    {street ?? city ?? s.display_name}
                  </span>
                  {(street || sub) && (
                    <span className="block text-xs text-muted-foreground">
                      {sub}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
          <li className="px-3 py-1.5 text-[10px] text-muted-foreground text-right">
            © OpenStreetMap
          </li>
        </ul>
      )}
    </div>
  );
}
