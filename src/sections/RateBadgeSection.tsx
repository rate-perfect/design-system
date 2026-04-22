import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { RateBadge, Typography } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function RateBadgeSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { RateBadge } from "@rate-perfect/beaconv2";

<RateBadge rate={5.25} />`}
      >
        <RateBadge rate={5.25} />
      </ShowcaseCard>

      {/* Variants */}
      <ShowcaseCard
        title="Variants"
        code={`import { RateBadge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <RateBadge rate={4.99} variant="success" />
  <RateBadge rate={7.85} variant="error" />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <RateBadge rate={4.99} variant="success" />
          <RateBadge rate={7.85} variant="error" />
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { RateBadge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <RateBadge rate={5.25} size="xs" />
  <RateBadge rate={5.25} size="sm" />
  <RateBadge rate={5.25} size="md" />
  <RateBadge rate={5.25} size="lg" />
  <RateBadge rate={5.25} size="xl" />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <RateBadge rate={5.25} size="xs" />
          <RateBadge rate={5.25} size="sm" />
          <RateBadge rate={5.25} size="md" />
          <RateBadge rate={5.25} size="lg" />
          <RateBadge rate={5.25} size="xl" />
        </Stack>
      </ShowcaseCard>

      {/* Decimals */}
      <ShowcaseCard
        title="Decimal Precision"
        code={`import { RateBadge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <RateBadge rate={5.256} decimals={0} />
  <RateBadge rate={5.256} decimals={1} />
  <RateBadge rate={5.256} decimals={2} />
  <RateBadge rate={5.256} decimals={3} />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <RateBadge rate={5.256} decimals={0} />
          <RateBadge rate={5.256} decimals={1} />
          <RateBadge rate={5.256} decimals={2} />
          <RateBadge rate={5.256} decimals={3} />
        </Stack>
      </ShowcaseCard>

      {/* Custom Suffix */}
      <ShowcaseCard
        title="Custom Suffix"
        code={`import { RateBadge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <RateBadge rate={5.25} suffix="%" />
  <RateBadge rate={5.25} suffix=" bps" />
  <RateBadge rate={5.25} suffix="" />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <RateBadge rate={5.25} suffix="%" />
          <RateBadge rate={5.25} suffix=" bps" />
          <RateBadge rate={5.25} suffix="" />
        </Stack>
      </ShowcaseCard>

      {/* Inline Usage */}
      <ShowcaseCard
        title="Inline with Text"
        code={`import { RateBadge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Typography color="secondary">Best rate available</Typography>
  <RateBadge rate={4.99} size="sm" />
</Stack>`}
      >
        <Box display="flex" alignItems="center" gap={1.5}>
          <Box sx={{ color: "text.secondary", fontSize: "14px" }}>Best rate available</Box>
          <RateBadge rate={4.99} size="sm" />
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}
