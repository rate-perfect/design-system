import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ArrowRight, Trash, Shield, Star } from "@phosphor-icons/react";
import { Badge } from "@rate-perfect/beaconv2";
import type {
  BadgeVariant,
  BadgeSize,
  BadgeRadius,
  BrandColorName,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const badgeVariants: BadgeVariant[] = ["filled", "outline", "soft"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const badgeSizes: BadgeSize[] = ["sm", "md", "lg"];
const badgeRadii: BadgeRadius[] = ["sm", "md", "lg", "full"];

export default function BadgeSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Badge } from "@rate-perfect/beaconv2";

<Badge>Label</Badge>`}
      >
        <Badge>Label</Badge>
      </ShowcaseCard>

      {/* Variant x Color Grid */}
      <ShowcaseCard
        title="Variant &times; Color"
        code={`import { Badge } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  {/* filled */}
  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
    <Badge variant="filled" color="brand">brand</Badge>
    <Badge variant="filled" color="neutral">neutral</Badge>
    <Badge variant="filled" color="success">success</Badge>
    <Badge variant="filled" color="warning">warning</Badge>
    <Badge variant="filled" color="error">error</Badge>
  </Stack>

  {/* outline */}
  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
    <Badge variant="outline" color="brand">brand</Badge>
    <Badge variant="outline" color="neutral">neutral</Badge>
    <Badge variant="outline" color="success">success</Badge>
    <Badge variant="outline" color="warning">warning</Badge>
    <Badge variant="outline" color="error">error</Badge>
  </Stack>

  {/* soft */}
  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
    <Badge variant="soft" color="brand">brand</Badge>
    <Badge variant="soft" color="neutral">neutral</Badge>
    <Badge variant="soft" color="success">success</Badge>
    <Badge variant="soft" color="warning">warning</Badge>
    <Badge variant="soft" color="error">error</Badge>
  </Stack>
</Stack>`}
      >
        <Stack spacing={2}>
          {badgeVariants.map((v) => (
            <Box key={v}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 1, display: "block" }}
              >
                {v}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
              >
                {colors.map((c) => (
                  <Badge key={c} variant={v} color={c}>
                    {c}
                  </Badge>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { Badge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Badge size="sm" color="brand">Size sm</Badge>
  <Badge size="md" color="brand">Size md</Badge>
  <Badge size="lg" color="brand">Size lg</Badge>
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {badgeSizes.map((s) => (
            <Badge key={s} size={s} color="brand">
              Size {s}
            </Badge>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Radii */}
      <ShowcaseCard
        title="Radius"
        code={`import { Badge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Badge radius="sm" color="brand">Radius sm</Badge>
  <Badge radius="md" color="brand">Radius md</Badge>
  <Badge radius="lg" color="brand">Radius lg</Badge>
  <Badge radius="full" color="brand">Radius full</Badge>
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {badgeRadii.map((r) => (
            <Badge key={r} radius={r} color="brand">
              Radius {r}
            </Badge>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Icons */}
      <ShowcaseCard
        title="Icons"
        code={`import { Badge } from "@rate-perfect/beaconv2";
import { Star, ArrowRight, Trash, Shield } from "@phosphor-icons/react";

<Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
  <Badge color="brand" startIcon={<Star />}>Featured</Badge>
  <Badge variant="outline" color="brand" endIcon={<ArrowRight />}>Next</Badge>
  <Badge variant="soft" color="error" startIcon={<Trash />}>Removed</Badge>
  <Badge color="brand" startIcon={<Shield />} endIcon={<ArrowRight />}>Secure</Badge>
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
          <Badge color="brand" startIcon={<Star />}>
            Featured
          </Badge>
          <Badge variant="outline" color="brand" endIcon={<ArrowRight />}>
            Next
          </Badge>
          <Badge variant="soft" color="error" startIcon={<Trash />}>
            Removed
          </Badge>
          <Badge color="brand" startIcon={<Shield />} endIcon={<ArrowRight />}>
            Secure
          </Badge>
        </Stack>
      </ShowcaseCard>

      {/* Custom Colors */}
      <ShowcaseCard
        title="Custom Colors"
        code={`import { Badge } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1} flexWrap="wrap">
  <Badge customColor={{ bg: "#7c3aed", fg: "#ffffff" }}>Purple</Badge>
  <Badge customColor={{ bg: "#0891b2", fg: "#ffffff" }}>Cyan</Badge>
  <Badge customColor={{ bg: "#db2777", fg: "#ffffff" }}>Pink</Badge>
  <Badge customColor={{ bg: "#ea580c", fg: "#ffffff" }}>Orange</Badge>
  <Badge customColor={{ bg: "#1e293b", fg: "#f8fafc" }}>Slate</Badge>
</Stack>`}
      >
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Badge customColor={{ bg: "#7c3aed", fg: "#ffffff" }}>Purple</Badge>
          <Badge customColor={{ bg: "#0891b2", fg: "#ffffff" }}>Cyan</Badge>
          <Badge customColor={{ bg: "#db2777", fg: "#ffffff" }}>Pink</Badge>
          <Badge customColor={{ bg: "#ea580c", fg: "#ffffff" }}>Orange</Badge>
          <Badge customColor={{ bg: "#1e293b", fg: "#f8fafc" }}>Slate</Badge>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
