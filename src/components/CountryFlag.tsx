import { getCountryFlag, getCountryName } from "@/utils/countryFlags";

interface CountryFlagProps {
  code?: string;
  size?: number;
  className?: string;
}

export const CountryFlag = ({ code, size = 20, className = "" }: CountryFlagProps) => {
  const normalized = code?.toUpperCase().trim();
  const name = getCountryName(normalized);

  // flagcdn serves real flag images for ISO 3166-1 alpha-2 codes
  if (normalized && /^[A-Z]{2}$/.test(normalized)) {
    return (
      <img
        src={`https://flagcdn.com/w${size * 2}/${normalized.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w${size * 4}/${normalized.toLowerCase()}.png 2x`}
        width={size * 4 / 3}
        height={size}
        alt={name}
        title={name}
        className={`inline-block rounded-[2px] object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <span title={name} role="img" aria-label={name} className={className}>
      {getCountryFlag(normalized)}
    </span>
  );
};
