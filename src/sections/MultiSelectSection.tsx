import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MultiSelect, TextInput, Button } from "@rate-perfect/beaconv2";
import type { MultiSelectSize } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";
import { Globe, Funnel } from "@phosphor-icons/react";

const sizes: MultiSelectSize[] = ["sm", "md", "lg"];

const provinceOptions = [
  { label: "Alberta", value: "AB" },
  { label: "British Columbia", value: "BC" },
  { label: "Manitoba", value: "MB" },
  { label: "New Brunswick", value: "NB" },
  { label: "Newfoundland and Labrador", value: "NL" },
  { label: "Northwest Territories", value: "NT" },
  { label: "Nova Scotia", value: "NS" },
  { label: "Nunavut", value: "NU" },
  { label: "Ontario", value: "ON" },
  { label: "Prince Edward Island", value: "PE" },
  { label: "Quebec", value: "QC" },
  { label: "Saskatchewan", value: "SK" },
  { label: "Yukon", value: "YT" },
];

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

export default function MultiSelectSection() {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [sizeValues, setSizeValues] = useState<Record<string, string[]>>({
    sm: [],
    md: [],
    lg: [],
  });
  const [manySelected, setManySelected] = useState<string[]>([
    "AB", "BC", "MB", "NB", "NL", "NT", "NS", "NU", "ON",
  ]);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { MultiSelect } from "@rate-perfect/beaconv2";

<MultiSelect
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ]}
  value={selected}
  onChange={setSelected}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            options={roleOptions}
            value={roles}
            onChange={setRoles}
          />
        </Box>
      </ShowcaseCard>

      {/* With placeholder and label */}
      <ShowcaseCard
        title="With Label & Placeholder"
        code={`<MultiSelect
  label="Province"
  placeholder="Select provinces..."
  options={provinces}
  value={selected}
  onChange={setSelected}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Province"
            placeholder="Select provinces..."
            options={provinceOptions}
            value={provinces}
            onChange={setProvinces}
          />
        </Box>
      </ShowcaseCard>

      {/* Truncation demo */}
      <ShowcaseCard
        title="Truncated Display"
        code={`// When many items are selected, the display
// truncates with ellipsis to fit the container

<MultiSelect
  label="Regions"
  options={allProvinces}
  value={nineSelected}
  onChange={setSelected}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Regions"
            options={provinceOptions}
            value={manySelected}
            onChange={setManySelected}
          />
        </Box>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`<Stack spacing={2}>
  <MultiSelect size="sm" options={options} placeholder="Small" />
  <MultiSelect size="md" options={options} placeholder="Medium (default)" />
  <MultiSelect size="lg" options={options} placeholder="Large" />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          {sizes.map((size) => (
            <MultiSelect
              key={size}
              size={size}
              options={roleOptions}
              placeholder={`${size.toUpperCase()} size`}
              value={sizeValues[size]}
              onChange={(val) =>
                setSizeValues((prev) => ({ ...prev, [size]: val }))
              }
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Aligned with TextInput and Button */}
      <ShowcaseCard
        title="Aligned with TextInput & Button"
        code={`<Stack direction="row" spacing={2} alignItems="flex-end">
  <MultiSelect size="md" options={options} label="Roles" />
  <TextInput size="md" placeholder="Search..." label="Search" />
  <Button size="md" variant="filled" color="brand">Apply</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <MultiSelect
            size="md"
            options={roleOptions}
            label="Roles"
            value={roles}
            onChange={setRoles}
          />
          <TextInput size="md" placeholder="Search..." label="Search" />
          <Button size="md" variant="filled" color="brand">Apply</Button>
        </Stack>
      </ShowcaseCard>

      {/* With icon */}
      <ShowcaseCard
        title="With Icon"
        code={`import { MultiSelect } from "@rate-perfect/beaconv2";
import { Globe, Funnel } from "@phosphor-icons/react";

<MultiSelect
  startAdornment={<Globe size={20} />}
  placeholder="Select provinces..."
  options={provinces}
/>

<MultiSelect
  startAdornment={<Funnel size={20} />}
  placeholder="Filter roles..."
  options={roles}
/>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <MultiSelect
            startAdornment={<Globe size={20} />}
            placeholder="Select provinces..."
            options={provinceOptions}
            value={provinces}
            onChange={setProvinces}
          />
          <MultiSelect
            startAdornment={<Funnel size={20} />}
            placeholder="Filter roles..."
            options={roleOptions}
            value={roles}
            onChange={setRoles}
          />
        </Stack>
      </ShowcaseCard>

      {/* Sort selected off */}
      <ShowcaseCard
        title="Sort Selected Off"
        code={`<MultiSelect
  label="Application Purpose"
  sortSelected={false}
  options={options}
  value={selected}
  onChange={setSelected}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Application Purpose"
            sortSelected={false}
            options={roleOptions}
            value={roles}
            onChange={setRoles}
          />
        </Box>
      </ShowcaseCard>

      {/* Error state */}
      <ShowcaseCard
        title="Error State"
        code={`<MultiSelect
  label="Required"
  placeholder="Select at least one"
  error
  errorMessage="This field is required"
  options={options}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Required"
            placeholder="Select at least one"
            error
            errorMessage="This field is required"
            options={roleOptions}
            value={[]}
            onChange={() => {}}
          />
        </Box>
      </ShowcaseCard>

      {/* Disabled */}
      <ShowcaseCard
        title="Disabled"
        code={`<MultiSelect
  label="Disabled"
  options={options}
  value={["admin", "editor"]}
  disabled
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Disabled"
            options={roleOptions}
            value={["admin", "editor"]}
            onChange={() => {}}
            disabled
          />
        </Box>
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { MultiSelect } from "@rate-perfect/beaconv2";

<MultiSelect label="Full Width" fullWidth placeholder="Stretches to fill container" options={options} value={selected} onChange={setSelected} />`}
      >
        <MultiSelect
          label="Full Width"
          fullWidth
          placeholder="Stretches to fill container"
          options={roleOptions}
          value={roles}
          onChange={setRoles}
        />
      </ShowcaseCard>
    </Stack>
  );
}
