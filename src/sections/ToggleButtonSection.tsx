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
  const [selectedTags, setSelectedTerms] = useState<string[]>(["Angular"]);
  const [selectedViews, setSelectedViews] = useState<string[]>(["grid"]);
  const [selectedColors, setSelectedColors] = useState<Record<string, boolean>>({
    brand: true, neutral: false, success: true, warning: false, error: false,
  });

  const toggleTag = (term: string) => {
    setSelectedTerms((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term],
    );
  };

  const toggleView = (type: string) => {
    setSelectedViews((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { useState } from "react";
import { ToggleButton } from "@rate-perfect/beaconv2";

const [selected, setSelected] = useState(false);

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
        code={`import { useState } from "react";
import Stack from "@mui/material/Stack";
import { ToggleButton } from "@rate-perfect/beaconv2";

const colors = ["brand", "neutral", "success", "warning", "error"];
const [selectedColors, setSelectedColors] = useState({
  brand: true, neutral: false, success: true, warning: false, error: false,
});

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
        code={`import { useState } from "react";
import Stack from "@mui/material/Stack";
import { ToggleButton } from "@rate-perfect/beaconv2";

const terms = ["React", "Vue", "Angular", "Svelte", "Solid"];
const [selectedTags, setSelectedTerms] = useState(["Angular"]);

const toggleTag = (term) => {
  setSelectedTerms((prev) =>
    prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term],
  );
};

<Stack direction="row" spacing={1}>
  {terms.map((term) => (
    <ToggleButton
      key={term}
      variant="ghost"
      selected={selectedTags.includes(term)}
      onClick={() => toggleTag(term)}
    >
      {term}
    </ToggleButton>
  ))}
</Stack>`}
      >
        <Stack direction="row" spacing={1}>
          {["React", "Vue", "Angular", "Svelte", "Solid"].map((term) => (
            <ToggleButton
              key={term}
              variant="ghost"
              selected={selectedTags.includes(term)}
              onClick={() => toggleTag(term)}
            >
              {term}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Filter Example — Tags */}
      <ShowcaseCard
        title="Filter Example — Tags"
        code={`import { useState } from "react";
import Stack from "@mui/material/Stack";
import { ToggleButton } from "@rate-perfect/beaconv2";

const terms = ["React", "Vue", "Angular", "Svelte", "Solid"];
const [selectedTags, setSelectedTerms] = useState(["Angular"]);

const toggleTag = (term) => {
  setSelectedTerms((prev) =>
    prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term],
  );
};

<Stack direction="row" spacing={1} flexWrap="wrap">
  {terms.map((term) => (
    <ToggleButton
      key={term}
      selected={selectedTags.includes(term)}
      onClick={() => toggleTag(term)}
    >
      {term}
    </ToggleButton>
  ))}
</Stack>`}
      >
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {["React", "Vue", "Angular", "Svelte", "Solid"].map((term) => (
            <ToggleButton
              key={term}
              selected={selectedTags.includes(term)}
              onClick={() => toggleTag(term)}
            >
              {term}
            </ToggleButton>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Filter Example — Full Width */}
      <ShowcaseCard
        title="Filter Example — Full Width"
        code={`import { useState } from "react";
import Stack from "@mui/material/Stack";
import { ToggleButton } from "@rate-perfect/beaconv2";

const [selectedViews, setSelectedViews] = useState(["grid"]);

const toggleView = (type) => {
  setSelectedViews((prev) =>
    prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
  );
};

<Stack direction="row" spacing={1}>
  <ToggleButton
    fullWidth
    selected={selectedViews.includes("grid")}
    onClick={() => toggleView("grid")}
  >
    Grid
  </ToggleButton>
  <ToggleButton
    fullWidth
    selected={selectedViews.includes("list")}
    onClick={() => toggleView("list")}
  >
    List
  </ToggleButton>
</Stack>`}
      >
        <Stack direction="row" spacing={1}>
          {["grid", "list"].map((type) => (
            <ToggleButton
              key={type}
              fullWidth
              selected={selectedViews.includes(type)}
              onClick={() => toggleView(type)}
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

<Stack direction="row" spacing={1}>
  <ToggleButton selected color="success" startIcon={<CheckCircle size="1em" />}>
    Verified
  </ToggleButton>
  <ToggleButton color="success" startIcon={<CheckCircle size="1em" />}>
    Unverified
  </ToggleButton>
</Stack>`}
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
