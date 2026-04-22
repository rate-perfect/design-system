import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Rocket, Shield, Gauge, Star } from "@phosphor-icons/react";
import { FeatureIcon } from "@rate-perfect/beaconv2";
import type {
  FeatureIconVariant,
  FeatureIconSize,
  FeatureIconRadius,
  GradientName,
  BrandColorName,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const featureIconSizes: FeatureIconSize[] = ["xs", "sm", "md", "lg", "xl"];
const featureIconRadii: FeatureIconRadius[] = ["sm", "md", "lg", "full"];

export default function FeatureIconSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { FeatureIcon } from "@rate-perfect/beaconv2";
import { Star } from "@phosphor-icons/react";

<FeatureIcon icon={<Star />} />`}
      >
        <FeatureIcon icon={<Star />} />
      </ShowcaseCard>

      {/* Variant x Color */}
      <ShowcaseCard
        title="Solid &amp; Muted &times; Color"
        code={`import { FeatureIcon } from "@rate-perfect/beaconv2";
import { Star } from "@phosphor-icons/react";

<Stack spacing={2}>
  {/* solid */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <FeatureIcon variant="solid" color="brand" icon={<Star />} />
    <FeatureIcon variant="solid" color="neutral" icon={<Star />} />
    <FeatureIcon variant="solid" color="success" icon={<Star />} />
    <FeatureIcon variant="solid" color="warning" icon={<Star />} />
    <FeatureIcon variant="solid" color="error" icon={<Star />} />
  </Stack>

  {/* muted */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <FeatureIcon variant="muted" color="brand" icon={<Star />} />
    <FeatureIcon variant="muted" color="neutral" icon={<Star />} />
    <FeatureIcon variant="muted" color="success" icon={<Star />} />
    <FeatureIcon variant="muted" color="warning" icon={<Star />} />
    <FeatureIcon variant="muted" color="error" icon={<Star />} />
  </Stack>
</Stack>`}
      >
        <Stack spacing={2}>
          {(["solid", "muted"] as FeatureIconVariant[]).map((v) => (
            <Box key={v}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 1, display: "block" }}
              >
                {v}
              </Typography>
              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                {colors.map((c) => (
                  <FeatureIcon key={c} variant={v} color={c} icon={<Star />} />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { FeatureIcon } from "@rate-perfect/beaconv2";
import { Rocket } from "@phosphor-icons/react";

<Stack direction="row" spacing={2} alignItems="center">
  <FeatureIcon size="xs" color="brand" icon={<Rocket />} />
  <FeatureIcon size="sm" color="brand" icon={<Rocket />} />
  <FeatureIcon size="md" color="brand" icon={<Rocket />} />
  <FeatureIcon size="lg" color="brand" icon={<Rocket />} />
  <FeatureIcon size="xl" color="brand" icon={<Rocket />} />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {featureIconSizes.map((s) => (
            <FeatureIcon key={s} size={s} color="brand" icon={<Rocket />} />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Radii */}
      <ShowcaseCard
        title="Radius"
        code={`import { FeatureIcon } from "@rate-perfect/beaconv2";
import { Shield } from "@phosphor-icons/react";

<Stack direction="row" spacing={2} alignItems="center">
  <FeatureIcon radius="sm" size="lg" color="brand" icon={<Shield />} />
  <FeatureIcon radius="md" size="lg" color="brand" icon={<Shield />} />
  <FeatureIcon radius="lg" size="lg" color="brand" icon={<Shield />} />
  <FeatureIcon radius="full" size="lg" color="brand" icon={<Shield />} />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {featureIconRadii.map((r) => (
            <FeatureIcon key={r} radius={r} size="lg" color="brand" icon={<Shield />} />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Gradients */}
      <ShowcaseCard
        title="Gradients"
        code={`import { FeatureIcon } from "@rate-perfect/beaconv2";
import { Gauge } from "@phosphor-icons/react";

<Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
  <FeatureIcon variant="gradient" gradient="rose" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="midnight" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="peach" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="forest" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="purple" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="violet" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="green" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="orange" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="pink" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="blue" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="red" size="lg" icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="yellow" size="lg" icon={<Gauge />} />
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          {(["rose", "midnight", "peach", "forest", "purple", "violet", "green", "orange", "pink", "blue", "red", "yellow"] as GradientName[]).map((g) => (
            <Stack key={g} alignItems="center" spacing={0.5}>
              <FeatureIcon variant="gradient" gradient={g} size="lg" icon={<Gauge />} />
              <Typography variant="caption" color="text.secondary">
                {g}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Shadow */}
      <ShowcaseCard
        title="Shadow"
        code={`import { FeatureIcon } from "@rate-perfect/beaconv2";
import { Rocket } from "@phosphor-icons/react";
import { Shield } from "@phosphor-icons/react";
import { Star } from "@phosphor-icons/react";
import { Gauge } from "@phosphor-icons/react";

<Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
  <FeatureIcon color="brand" shadow icon={<Rocket />} />
  <FeatureIcon color="brand" shadow icon={<Shield />} />
  <FeatureIcon color="neutral" shadow icon={<Star />} />
  <FeatureIcon variant="muted" color="brand" shadow icon={<Gauge />} />
  <FeatureIcon variant="gradient" gradient="purple" shadow icon={<Rocket />} />
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <FeatureIcon color="brand" shadow icon={<Rocket />} />
          <FeatureIcon color="brand" shadow icon={<Shield />} />
          <FeatureIcon color="neutral" shadow icon={<Star />} />
          <FeatureIcon variant="muted" color="brand" shadow icon={<Gauge />} />
          <FeatureIcon variant="gradient" gradient="purple" shadow icon={<Rocket />} />
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
