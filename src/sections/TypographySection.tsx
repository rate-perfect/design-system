import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Typography as Typ } from "@rate-perfect/beaconv2";
import type {
  TypographyType,
  TypographySize,
  TypographyColor,
  TypographyWeight,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const types: TypographyType[] = ["display", "text", "overline"];
const sizes: TypographySize[] = ["2xl", "xl", "lg", "md", "sm", "xs"];
const colors: TypographyColor[] = ["primary", "secondary", "muted", "brand", "error"];
const weights: TypographyWeight[] = ["regular", "medium", "semibold", "bold"];

const displayCode = `import { Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Typography type="display" fontSize="2xl">display 2xl — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="display" fontSize="xl">display xl — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="display" fontSize="lg">display lg — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="display" fontSize="md">display md — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="display" fontSize="sm">display sm — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="display" fontSize="xs">display xs — The quick brown fox jumps over the lazy dog</Typography>
</Stack>`;

const textCode = `import { Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Typography type="text" fontSize="2xl">text 2xl — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="text" fontSize="xl">text xl — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="text" fontSize="lg">text lg — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="text" fontSize="md">text md — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="text" fontSize="sm">text sm — The quick brown fox jumps over the lazy dog</Typography>
  <Typography type="text" fontSize="xs">text xs — The quick brown fox jumps over the lazy dog</Typography>
</Stack>`;

const overlineCode = `import { Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Typography type="overline" fontSize="2xl">overline 2xl — The quick brown fox</Typography>
  <Typography type="overline" fontSize="xl">overline xl — The quick brown fox</Typography>
  <Typography type="overline" fontSize="lg">overline lg — The quick brown fox</Typography>
  <Typography type="overline" fontSize="md">overline md — The quick brown fox</Typography>
  <Typography type="overline" fontSize="sm">overline sm — The quick brown fox</Typography>
  <Typography type="overline" fontSize="xs">overline xs — The quick brown fox</Typography>
</Stack>`;

const typeCodeMap: Record<string, string> = { display: displayCode, text: textCode, overline: overlineCode };

export default function TypographySection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Typography } from "@rate-perfect/beaconv2";

<Typography>The quick brown fox jumps over the lazy dog</Typography>`}
      >
        <Typ>The quick brown fox jumps over the lazy dog</Typ>
      </ShowcaseCard>

      {/* Type x Size */}
      {types.map((t) => (
        <ShowcaseCard
          key={t}
          title={t.charAt(0).toUpperCase() + t.slice(1)}
          code={typeCodeMap[t]}
        >
          <Stack spacing={2}>
            {sizes.map((s) => (
              <Typ key={s} type={t} fontSize={s}>
                {t} {s} — The quick brown fox jumps over the lazy dog
              </Typ>
            ))}
          </Stack>
        </ShowcaseCard>
      ))}

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { Typography } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <Typography color="primary">primary — The quick brown fox jumps over the lazy dog</Typography>
  <Typography color="secondary">secondary — The quick brown fox jumps over the lazy dog</Typography>
  <Typography color="muted">muted — The quick brown fox jumps over the lazy dog</Typography>
  <Typography color="brand">brand — The quick brown fox jumps over the lazy dog</Typography>
  <Typography color="error">error — The quick brown fox jumps over the lazy dog</Typography>
  <Typography color="inherit">inherit — The quick brown fox jumps over the lazy dog</Typography>
</Stack>`}
      >
        <Stack spacing={1}>
          {colors.map((c) => (
            <Typ key={c} color={c}>
              {c} — The quick brown fox jumps over the lazy dog
            </Typ>
          ))}
          <Typ color="inherit">
            inherit — The quick brown fox jumps over the lazy dog
          </Typ>
        </Stack>
      </ShowcaseCard>

      {/* Weights */}
      <ShowcaseCard
        title="Weights"
        code={`import { Typography } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <Typography fontWeight="regular">regular — The quick brown fox</Typography>
  <Typography fontWeight="medium">medium — The quick brown fox</Typography>
  <Typography fontWeight="semibold">semibold — The quick brown fox</Typography>
  <Typography fontWeight="bold">bold — The quick brown fox</Typography>
</Stack>`}
      >
        <Stack spacing={1}>
          {weights.map((w) => (
            <Typ key={w} fontWeight={w}>
              {w} — The quick brown fox
            </Typ>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Truncate & Clamp */}
      <ShowcaseCard
        title="Truncate &amp; Clamp"
        code={`import { Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Typography truncate>
    This is a very long line of text that should be truncated with an ellipsis
    when it overflows the container width. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua.
  </Typography>

  <Typography clamp={2}>
    This is a multi-line text block that should be clamped to exactly two lines.
    After two lines, the remaining content will be hidden with an ellipsis.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco.
  </Typography>
</Stack>`}
      >
        <Stack spacing={2}>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: "block" }}>
              truncate (single line)
            </Typography>
            <Typ truncate>
              This is a very long line of text that should be truncated with an ellipsis when it overflows the container width. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typ>
          </Box>
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5, display: "block" }}>
              clamp=2 (two lines max)
            </Typography>
            <Typ clamp={2}>
              This is a multi-line text block that should be clamped to exactly two lines. After two lines, the remaining content will be hidden with an ellipsis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </Typ>
          </Box>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
