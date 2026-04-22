import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { ToggleButton } from "@rate-perfect/beaconv2";
import type { ToggleButtonSize, ToggleButtonRadius, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";
import { CheckCircle } from "@phosphor-icons/react";

const sizes: ToggleButtonSize[] = ["sm", "md", "lg"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const radii: ToggleButtonRadius[] = ["sm", "md", "lg", "full"];

export default function ToggleButtonSection() {
  const [selected1, setSelected1] = useState(false);
  const [selectedTerms, setSelectedTerms] = useState<string[]>(["3-year"]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["fixed"]);
  const [selectedColors, setSelectedColors] = useState<Record<string, boolean>>({
    brand: true, neutral: false, success: true, warning: false, error: false,
  });

  const toggleTerm = (term: string) => {
    setSelectedTerms((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term],
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<ToggleButton selected={selected} onClick={() => setSelected(!selected)}>
  Toggle me
</ToggleButton>`}
      >
        <ToggleButton selected={selected1} onClick={() => setSelected1(!selected1)}>
          Toggle me
        </ToggleButton>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1} alignItems="center">
  <ToggleButton size="sm" selected>Small</ToggleButton>
  <ToggleButton size="md" selected>Medium</ToggleButton>
  <ToggleButton size="lg" selected>Large</ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {sizes.map((s) => (
            <ToggleButton key={s} size={s} selected>
              {s === "sm" ? "Small" : s === "md" ? "Medium" : "Large"}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Radius */}
      <ShowcaseCard
        title="Radius"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1} alignItems="center">
  <ToggleButton radius="sm" selected>Small</ToggleButton>
  <ToggleButton radius="md" selected>Medium</ToggleButton>
  <ToggleButton radius="lg" selected>Large</ToggleButton>
  <ToggleButton radius="full" selected>Full</ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {radii.map((r) => (
            <ToggleButton key={r} radius={r} selected>
              {r === "sm" ? "Small" : r === "md" ? "Medium" : r === "lg" ? "Large" : "Full"}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1}>
  <ToggleButton color="brand" selected>Brand</ToggleButton>
  <ToggleButton color="success" selected>Success</ToggleButton>
  <ToggleButton color="warning" selected>Warning</ToggleButton>
  <ToggleButton color="error" selected>Error</ToggleButton>
  <ToggleButton color="neutral" selected>Neutral</ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {colors.map((c) => (
            <ToggleButton
              key={c}
              color={c}
              selected={selectedColors[c]}
              onClick={() =>
                setSelectedColors((prev) => ({ ...prev, [c]: !prev[c] }))
              }
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Ghost Variant */}
      <ShowcaseCard
        title="Ghost Variant"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1}>
  <ToggleButton variant="ghost" selected>Selected</ToggleButton>
  <ToggleButton variant="ghost">Unselected</ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1}>
          {["1-year", "2-year", "3-year", "4-year", "5-year"].map((term) => (
            <ToggleButton
              key={term}
              variant="ghost"
              selected={selectedTerms.includes(term)}
              onClick={() => toggleTerm(term)}
            >
              {term}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Filter Example — Terms */}
      <ShowcaseCard
        title="Filter Example — Terms"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1} flexWrap="wrap">
  {["1-year", "2-year", "3-year", "4-year", "5-year"].map((term) => (
    <ToggleButton
      key={term}
      selected={selected.includes(term)}
      onClick={() => toggle(term)}
    >
      {term}
    </ToggleButton>
  ))}
</Stack>`}
      >
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["1-year", "2-year", "3-year", "4-year", "5-year"].map((term) => (
            <ToggleButton
              key={term}
              selected={selectedTerms.includes(term)}
              onClick={() => toggleTerm(term)}
            >
              {term}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Filter Example — Full Width */}
      <ShowcaseCard
        title="Filter Example — Full Width"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1} sx={{ maxWidth: 360 }}>
  <ToggleButton fullWidth selected={selected.includes("fixed")} onClick={() => toggle("fixed")}>
    Fixed
  </ToggleButton>
  <ToggleButton fullWidth selected={selected.includes("variable")} onClick={() => toggle("variable")}>
    Variable
  </ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1} sx={{ maxWidth: 360 }}>
          {["fixed", "variable"].map((type) => (
            <ToggleButton
              key={type}
              fullWidth
              selected={selectedTypes.includes(type)}
              onClick={() => toggleType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* With Icon */}
      <ShowcaseCard
        title="With Icon"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";
import { CheckCircle } from "@phosphor-icons/react";

<ToggleButton selected startIcon={<CheckCircle size="1em" />}>
  Verified
</ToggleButton>`}
      >
        <Stack direction="row" spacing={1}>
          <ToggleButton selected color="success" startIcon={<CheckCircle size="1em" />}>
            Verified
          </ToggleButton>
          <ToggleButton color="success" startIcon={<CheckCircle size="1em" />}>
            Unverified
          </ToggleButton>
        </Stack>
      </ShowcaseCard>

      {/* Disabled */}
      <ShowcaseCard
        title="Disabled"
        code={`import { ToggleButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1}>
  <ToggleButton disabled selected>Selected Disabled</ToggleButton>
  <ToggleButton disabled>Unselected Disabled</ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1}>
          <ToggleButton disabled selected>Selected Disabled</ToggleButton>
          <ToggleButton disabled>Unselected Disabled</ToggleButton>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
