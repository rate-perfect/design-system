import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SegmentedControl } from "@rate-perfect/beaconv2";
import type {
  SegmentedControlVariant,
  SegmentedControlSize,
  SegmentedControlRadius,
  BrandColorName,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const basicOptions = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

const termOptions = [
  { value: "1y", label: "1 Year" },
  { value: "2y", label: "2 Year" },
  { value: "3y", label: "3 Year" },
  { value: "5y", label: "5 Year" },
];

const variants: SegmentedControlVariant[] = ["outline", "filled", "soft"];
const sizes: SegmentedControlSize[] = ["sm", "md", "lg"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];

export default function SegmentedControlSection() {
  const [basic, setBasic] = useState("all");
  const [variantValues, setVariantValues] = useState<Record<string, string>>({
    outline: "all",
    filled: "all",
    soft: "all",
  });
  const [sizeValues, setSizeValues] = useState<Record<string, string>>({
    sm: "all",
    md: "all",
    lg: "all",
  });
  const [colorValues, setColorValues] = useState<Record<string, string>>({
    brand: "all",
    neutral: "all",
    success: "all",
    warning: "all",
    error: "all",
  });
  const [multi, setMulti] = useState<string[]>(["1y", "3y"]);
  const [term, setTerm] = useState("3y");

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<SegmentedControl
  options={[
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ]}
  value="all"
  onChange={setValue}
/>`}
      >
        <SegmentedControl options={basicOptions} value={basic} onChange={setBasic} />
      </ShowcaseCard>

      {/* Variants */}
      <ShowcaseCard
        title="Variants"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <SegmentedControl variant="outline" ... />
  <SegmentedControl variant="filled" ... />
  <SegmentedControl variant="soft" ... />
</Stack>`}
      >
        <Stack spacing={2}>
          {variants.map((v) => (
            <Box key={v}>
              <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>{v}</Box>
              <SegmentedControl
                variant={v}
                options={basicOptions}
                value={variantValues[v]}
                onChange={(val) => setVariantValues((prev) => ({ ...prev, [v]: val }))}
              />
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <SegmentedControl size="sm" ... />
  <SegmentedControl size="md" ... />
  <SegmentedControl size="lg" ... />
</Stack>`}
      >
        <Stack spacing={2}>
          {sizes.map((s) => (
            <Box key={s}>
              <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>{s}</Box>
              <SegmentedControl
                size={s}
                options={basicOptions}
                value={sizeValues[s]}
                onChange={(val) => setSizeValues((prev) => ({ ...prev, [s]: val }))}
              />
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <SegmentedControl color="brand" variant="filled" ... />
  <SegmentedControl color="success" variant="filled" ... />
</Stack>`}
      >
        <Stack spacing={2}>
          {colors.map((c) => (
            <Box key={c}>
              <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>{c}</Box>
              <SegmentedControl
                variant="filled"
                color={c}
                options={basicOptions}
                value={colorValues[c]}
                onChange={(val) => setColorValues((prev) => ({ ...prev, [c]: val }))}
              />
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Radius */}
      <ShowcaseCard
        title="Radius"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <SegmentedControl radius="sm" ... />
  <SegmentedControl radius="full" ... />
</Stack>`}
      >
        <Stack spacing={2}>
          {(["sm", "md", "lg", "full"] as SegmentedControlRadius[]).map((r) => (
            <Box key={r}>
              <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>radius="{r}"</Box>
              <SegmentedControl
                radius={r}
                options={basicOptions}
                value={basic}
                onChange={setBasic}
              />
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Bordered */}
      <ShowcaseCard
        title="Bordered"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <SegmentedControl options={options} value={value} onChange={setValue} />
  <SegmentedControl bordered={false} options={options} value={value} onChange={setValue} />
</Stack>`}
      >
        <Stack spacing={2}>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>bordered (default)</Box>
            <SegmentedControl options={basicOptions} value={basic} onChange={setBasic} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>bordered=false</Box>
            <SegmentedControl bordered={false} options={basicOptions} value={basic} onChange={setBasic} />
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<SegmentedControl fullWidth options={options} value={value} onChange={setValue} />`}
      >
        <SegmentedControl
          fullWidth
          options={termOptions}
          value={term}
          onChange={setTerm}
        />
      </ShowcaseCard>

      {/* Multi-Select */}
      <ShowcaseCard
        title="Multi-Select"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<SegmentedControl
  multiple
  options={[
    { value: "1y", label: "1 Year" },
    { value: "2y", label: "2 Year" },
    { value: "3y", label: "3 Year" },
    { value: "5y", label: "5 Year" },
  ]}
  value={["1y", "3y"]}
  onChange={setValues}
/>`}
      >
        <Stack spacing={2}>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>outline</Box>
            <SegmentedControl multiple variant="outline" options={termOptions} value={multi} onChange={setMulti} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>filled</Box>
            <SegmentedControl multiple variant="filled" options={termOptions} value={multi} onChange={setMulti} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>soft</Box>
            <SegmentedControl multiple variant="soft" options={termOptions} value={multi} onChange={setMulti} />
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Disabled Options */}
      <ShowcaseCard
        title="Disabled Options"
        code={`import { SegmentedControl } from "@rate-perfect/beaconv2";

<SegmentedControl
  options={[
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive", disabled: true },
  ]}
  value="all"
  onChange={setValue}
/>`}
      >
        <SegmentedControl
          options={[
            { value: "all", label: "All" },
            { value: "active", label: "Active" },
            { value: "inactive", label: "Inactive", disabled: true },
          ]}
          value={basic}
          onChange={setBasic}
        />
      </ShowcaseCard>
    </Stack>
  );
}
