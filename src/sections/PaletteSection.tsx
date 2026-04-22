import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@rate-perfect/beaconv2";
import type { BrandColorName, BrandColorScale } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const brandColorNames: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];

const scaleKeys: (keyof BrandColorScale)[] = [
  "main",
  "dark",
  "darker",
  "contrastText",
  "softBg",
  "softFg",
  "softHoverBg",
  "outlineBorder",
  "outlineHoverBorder",
  "ghostHoverBg",
  "fg",
];

function Swatch({ color, label }: { color: string; label: string }) {
  return (
    <Stack alignItems="center" spacing={0.5} sx={{ minWidth: 72 }}>
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 1,
          bgcolor: color,
          border: 1,
          borderColor: "divider",
        }}
      />
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11, textAlign: "center" }}>
        {label}
      </Typography>
    </Stack>
  );
}

function BrandColorCard({ name, scale }: { name: string; scale: BrandColorScale }) {
  return (
    <ShowcaseCard
      title={name.charAt(0).toUpperCase() + name.slice(1)}
      code={`import { useTheme } from "@rate-perfect/beaconv2";

const theme = useTheme();
const ${name} = theme.brand.${name};

// Available tokens (auto-switch with light/dark mode):
// ${name}.main              — primary color
// ${name}.dark              — primary action hover
// ${name}.darker            — primary action active
// ${name}.contrastText      — text on filled backgrounds
// ${name}.softBg            — soft variant background
// ${name}.softFg            — soft variant foreground
// ${name}.softHoverBg       — soft variant hover
// ${name}.outlineBorder     — outline variant border
// ${name}.outlineHoverBorder — outline hover border
// ${name}.ghostHoverBg      — ghost variant hover
// ${name}.fg                — foreground text color`}
    >
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {scaleKeys.map((key) => (
          <Swatch key={key} color={scale[key]} label={key} />
        ))}
      </Stack>
    </ShowcaseCard>
  );
}

export default function PaletteSection() {
  const theme = useTheme();
  const brandColors = theme.brand;

  const palette = theme.palette;

  return (
    <Stack spacing={4}>
      {/* Surface & Text */}
      <ShowcaseCard
        title="Surface &amp; Text"
        code={`import { useTheme } from "@rate-perfect/beaconv2";

const theme = useTheme();

// Palette tokens (auto-switch with light/dark mode):
theme.palette.background.default
theme.palette.background.paper
theme.palette.background.surface
theme.palette.background.surfaceAlt
theme.palette.text.primary
theme.palette.text.secondary
theme.palette.divider`}
      >
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Swatch color={palette.background.default} label="background" />
          <Swatch color={palette.background.paper} label="paper" />
          <Swatch color={palette.background.surfaceAlt} label="surfaceAlt" />
          <Swatch color={palette.background.surface} label="surface" />
          <Swatch color={palette.text.primary} label="text.primary" />
          <Swatch color={palette.text.secondary} label="text.secondary" />
          <Swatch color={palette.divider} label="divider" />
        </Stack>
      </ShowcaseCard>

      {/* Brand Color Scales */}
      {brandColorNames.map((name) => (
        <BrandColorCard key={name} name={name} scale={brandColors[name]} />
      ))}
    </Stack>
  );
}
