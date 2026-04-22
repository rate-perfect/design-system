import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MultiSelect, TextInput, Button } from "@rate-perfect/beaconv2";
import type { MultiSelectSize } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";
import { Globe, Funnel } from "@phosphor-icons/react";

const sizes: MultiSelectSize[] = ["sm", "md", "lg"];

const countryOptions = [
  { label: "Australia", value: "AU" },
  { label: "Brazil", value: "BR" },
  { label: "France", value: "FR" },
  { label: "Germany", value: "DE" },
  { label: "India", value: "IN" },
  { label: "Italy", value: "IT" },
  { label: "Japan", value: "JP" },
  { label: "Mexico", value: "MX" },
  { label: "Spain", value: "ES" },
  { label: "Sweden", value: "SE" },
  { label: "Switzerland", value: "CH" },
  { label: "United Kingdom", value: "GB" },
  { label: "United States", value: "US" },
];

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

export default function MultiSelectSection() {
  const [countries, setCountries] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [sizeValues, setSizeValues] = useState<Record<string, string[]>>({
    sm: [],
    md: [],
    lg: [],
  });
  const [manySelected, setManySelected] = useState<string[]>([
    "AU", "BR", "FR", "DE", "IN", "IT", "JP", "MX", "ES",
  ]);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

const [roles, setRoles] = useState<string[]>([]);

<MultiSelect
  options={roleOptions}
  value={roles}
  onChange={setRoles}
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
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";

const countryOptions = [
  { label: "Australia", value: "AU" },
  { label: "Brazil", value: "BR" },
  { label: "France", value: "FR" },
  { label: "Germany", value: "DE" },
  { label: "India", value: "IN" },
  { label: "Italy", value: "IT" },
  { label: "Japan", value: "JP" },
  { label: "Mexico", value: "MX" },
  { label: "Spain", value: "ES" },
  { label: "Sweden", value: "SE" },
  { label: "Switzerland", value: "CH" },
  { label: "United Kingdom", value: "GB" },
  { label: "United States", value: "US" },
];

const [countries, setCountries] = useState<string[]>([]);

<MultiSelect
  label="Country"
  placeholder="Select countries..."
  options={countryOptions}
  value={countries}
  onChange={setCountries}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Country"
            placeholder="Select countries..."
            options={countryOptions}
            value={countries}
            onChange={setCountries}
          />
        </Box>
      </ShowcaseCard>

      {/* Truncation demo */}
      <ShowcaseCard
        title="Truncated Display"
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";

const countryOptions = [
  { label: "Australia", value: "AU" },
  { label: "Brazil", value: "BR" },
  { label: "France", value: "FR" },
  { label: "Germany", value: "DE" },
  { label: "India", value: "IN" },
  { label: "Italy", value: "IT" },
  { label: "Japan", value: "JP" },
  { label: "Mexico", value: "MX" },
  { label: "Spain", value: "ES" },
  { label: "Sweden", value: "SE" },
  { label: "Switzerland", value: "CH" },
  { label: "United Kingdom", value: "GB" },
  { label: "United States", value: "US" },
];

// When many items are selected, the display
// truncates with ellipsis to fit the container
const [manySelected, setManySelected] = useState<string[]>([
  "AU", "BR", "FR", "DE", "IN", "IT", "JP", "MX", "ES",
]);

<MultiSelect
  label="Regions"
  options={countryOptions}
  value={manySelected}
  onChange={setManySelected}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <MultiSelect
            label="Regions"
            options={countryOptions}
            value={manySelected}
            onChange={setManySelected}
          />
        </Box>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";
import Stack from "@mui/material/Stack";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

const [sizeValues, setSizeValues] = useState({ sm: [], md: [], lg: [] });

<Stack spacing={2}>
  <MultiSelect
    size="sm"
    options={roleOptions}
    placeholder="SM size"
    value={sizeValues.sm}
    onChange={(val) => setSizeValues((prev) => ({ ...prev, sm: val }))}
  />
  <MultiSelect
    size="md"
    options={roleOptions}
    placeholder="MD size"
    value={sizeValues.md}
    onChange={(val) => setSizeValues((prev) => ({ ...prev, md: val }))}
  />
  <MultiSelect
    size="lg"
    options={roleOptions}
    placeholder="LG size"
    value={sizeValues.lg}
    onChange={(val) => setSizeValues((prev) => ({ ...prev, lg: val }))}
  />
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
        code={`import { useState } from "react";
import { MultiSelect, TextInput, Button } from "@rate-perfect/beaconv2";
import Stack from "@mui/material/Stack";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

const [roles, setRoles] = useState<string[]>([]);

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
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";
import { Globe, Funnel } from "@phosphor-icons/react";

const countryOptions = [
  { label: "Alberta", value: "AB" },
  { label: "British Columbia", value: "BC" },
  { label: "Manitoba", value: "MB" },
  // ...more countries
];

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

const [countries, setCountries] = useState<string[]>([]);
const [roles, setRoles] = useState<string[]>([]);

<MultiSelect
  startAdornment={<Globe size={20} />}
  placeholder="Select countries..."
  options={countryOptions}
  value={countries}
  onChange={setCountries}
/>

<MultiSelect
  startAdornment={<Funnel size={20} />}
  placeholder="Filter roles..."
  options={roleOptions}
  value={roles}
  onChange={setRoles}
/>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <MultiSelect
            startAdornment={<Globe size={20} />}
            placeholder="Select countries..."
            options={countryOptions}
            value={countries}
            onChange={setCountries}
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
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

const [roles, setRoles] = useState<string[]>([]);

<MultiSelect
  label="Application Purpose"
  sortSelected={false}
  options={roleOptions}
  value={roles}
  onChange={setRoles}
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
        code={`import { MultiSelect } from "@rate-perfect/beaconv2";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

<MultiSelect
  label="Required"
  placeholder="Select at least one"
  error
  errorMessage="This field is required"
  options={roleOptions}
  value={[]}
  onChange={() => {}}
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
        code={`import { MultiSelect } from "@rate-perfect/beaconv2";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

<MultiSelect
  label="Disabled"
  options={roleOptions}
  value={["admin", "editor"]}
  onChange={() => {}}
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
        code={`import { useState } from "react";
import { MultiSelect } from "@rate-perfect/beaconv2";

const roleOptions = [
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Viewer", value: "viewer" },
  { label: "Moderator", value: "moderator" },
];

const [roles, setRoles] = useState<string[]>([]);

<MultiSelect
  label="Full Width"
  fullWidth
  placeholder="Stretches to fill container"
  options={roleOptions}
  value={roles}
  onChange={setRoles}
/>`}
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
