import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Plus, ArrowRight, Trash } from "@phosphor-icons/react";
import { Button } from "@rate-perfect/beaconv2";
import type {
  ButtonVariant,
  ButtonSize,
  ButtonRadius,
  BrandColorName,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const variants: ButtonVariant[] = ["filled", "outline", "ghost", "soft", "link"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const sizes: ButtonSize[] = ["sm", "md", "lg"];
const radii: ButtonRadius[] = ["sm", "md", "lg", "full"];

export default function ButtonSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Button>Click me</Button>`}
      >
        <Button>Click me</Button>
      </ShowcaseCard>

      {/* Variant x Color Grid */}
      <ShowcaseCard
        title="Variant &times; Color"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  {/* filled */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <Button variant="filled" color="brand">brand</Button>
    <Button variant="filled" color="neutral">neutral</Button>
    <Button variant="filled" color="success">success</Button>
    <Button variant="filled" color="warning">warning</Button>
    <Button variant="filled" color="error">error</Button>
  </Stack>

  {/* outline */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <Button variant="outline" color="brand">brand</Button>
    <Button variant="outline" color="neutral">neutral</Button>
    <Button variant="outline" color="success">success</Button>
    <Button variant="outline" color="warning">warning</Button>
    <Button variant="outline" color="error">error</Button>
  </Stack>

  {/* ghost */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <Button variant="ghost" color="brand">brand</Button>
    <Button variant="ghost" color="neutral">neutral</Button>
    <Button variant="ghost" color="success">success</Button>
    <Button variant="ghost" color="warning">warning</Button>
    <Button variant="ghost" color="error">error</Button>
  </Stack>

  {/* soft */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <Button variant="soft" color="brand">brand</Button>
    <Button variant="soft" color="neutral">neutral</Button>
    <Button variant="soft" color="success">success</Button>
    <Button variant="soft" color="warning">warning</Button>
    <Button variant="soft" color="error">error</Button>
  </Stack>

  {/* link */}
  <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
    <Button variant="link" color="brand">brand</Button>
    <Button variant="link" color="neutral">neutral</Button>
    <Button variant="link" color="success">success</Button>
    <Button variant="link" color="warning">warning</Button>
    <Button variant="link" color="error">error</Button>
  </Stack>
</Stack>`}
      >
        <Stack spacing={2}>
          {variants.map((v) => (
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
                spacing={1.5}
                flexWrap="wrap"
                useFlexGap
              >
                {colors.map((c) => (
                  <Button key={c} variant={v} color={c}>
                    {c}
                  </Button>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <Button size="sm" color="brand">Size sm</Button>
  <Button size="md" color="brand">Size md</Button>
  <Button size="lg" color="brand">Size lg</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {sizes.map((s) => (
            <Button key={s} size={s} color="brand">
              Size {s}
            </Button>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Radius */}
      <ShowcaseCard
        title="Radius"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <Button radius="sm" color="brand">Radius sm</Button>
  <Button radius="md" color="brand">Radius md</Button>
  <Button radius="lg" color="brand">Radius lg</Button>
  <Button radius="full" color="brand">Radius full</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {radii.map((r) => (
            <Button key={r} radius={r} color="brand">
              Radius {r}
            </Button>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Icons & Loading */}
      <ShowcaseCard
        title="Icons &amp; Loading"
        code={`import { Button } from "@rate-perfect/beaconv2";
import { Plus, ArrowRight, Trash } from "@phosphor-icons/react";

<Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
  <Button color="brand" startIcon={<Plus />}>Add Item</Button>
  <Button color="brand" endIcon={<ArrowRight />}>Continue</Button>
  <Button variant="outline" color="error" startIcon={<Trash />}>Delete</Button>
  <Button color="brand" loading>Loading</Button>
  <Button variant="soft" color="neutral" loading>Saving</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button color="brand" startIcon={<Plus />}>
            Add Item
          </Button>
          <Button color="brand" endIcon={<ArrowRight />}>
            Continue
          </Button>
          <Button
            variant="outline"
            color="error"
            startIcon={<Trash />}
          >
            Delete
          </Button>
          <Button color="brand" loading>
            Loading
          </Button>
          <Button variant="soft" color="neutral" loading>
            Saving
          </Button>
        </Stack>
      </ShowcaseCard>

      {/* Link with Icons */}
      <ShowcaseCard
        title="Link with Icons"
        code={`import { Button } from "@rate-perfect/beaconv2";
import { ArrowRight, Plus } from "@phosphor-icons/react";

<Stack direction="row" spacing={3} alignItems="center">
  <Button variant="link" color="brand" endIcon={<ArrowRight />}>Learn more</Button>
  <Button variant="link" color="neutral" startIcon={<Plus />}>Add item</Button>
  <Button variant="link" color="error" endIcon={<Trash />}>Remove</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <Button variant="link" color="brand" endIcon={<ArrowRight />}>Learn more</Button>
          <Button variant="link" color="neutral" startIcon={<Plus />}>Add item</Button>
          <Button variant="link" color="error" endIcon={<Trash />}>Remove</Button>
        </Stack>
      </ShowcaseCard>

      {/* Disabled States */}
      <ShowcaseCard
        title="Disabled"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
  <Button variant="filled" color="neutral" disabled>filled</Button>
  <Button variant="outline" color="neutral" disabled>outline</Button>
  <Button variant="ghost" color="neutral" disabled>ghost</Button>
  <Button variant="soft" color="neutral" disabled>soft</Button>
  <Button variant="link" color="neutral" disabled>link</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {variants.map((v) => (
            <Button key={v} variant={v} color="neutral" disabled>
              {v}
            </Button>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Custom Color */}
      <ShowcaseCard
        title="Custom Color"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
  <Button customColor={{ bg: "#6C63FF", fg: "#fff" }}>Purple</Button>
  <Button customColor={{ bg: "#FF6584", fg: "#fff" }}>Pink</Button>
  <Button variant="outline" customColor={{ bg: "#00B894", fg: "#00B894", hoverFg: "#fff" }}>Mint Outline</Button>
  <Button variant="soft" customColor={{ bg: "rgba(108, 99, 255, 0.12)", fg: "#6C63FF" }}>Soft Purple</Button>
  <Button variant="link" customColor={{ bg: "transparent", fg: "#FF6584" }}>Pink Link</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Button customColor={{ bg: "#6C63FF", fg: "#fff" }}>Purple</Button>
          <Button customColor={{ bg: "#FF6584", fg: "#fff" }}>Pink</Button>
          <Button variant="outline" customColor={{ bg: "#00B894", fg: "#00B894", hoverFg: "#fff" }}>Mint Outline</Button>
          <Button variant="soft" customColor={{ bg: "rgba(108, 99, 255, 0.12)", fg: "#6C63FF" }}>Soft Purple</Button>
          <Button variant="link" customColor={{ bg: "transparent", fg: "#FF6584" }}>Pink Link</Button>
        </Stack>
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { Button } from "@rate-perfect/beaconv2";

<Button color="brand" fullWidth>Full Width Button</Button>`}
      >
        <Button color="brand" fullWidth>
          Full Width Button
        </Button>
      </ShowcaseCard>
    </Stack>
  );
}
