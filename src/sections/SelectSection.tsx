import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Select, TextInput, Button } from "@rate-perfect/beaconv2";
import type { SelectSize } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";
import { MagnifyingGlass, Globe } from "@phosphor-icons/react";

const sizes: SelectSize[] = ["sm", "md", "lg"];

const sampleOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

export default function SelectSection() {
  const [value, setValue] = useState("");
  const [sizeValue, setSizeValue] = useState<Record<string, string>>({
    sm: "",
    md: "",
    lg: "",
  });

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Select } from "@rate-perfect/beaconv2";

<Select
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ]}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <Select
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
        </Box>
      </ShowcaseCard>

      {/* With placeholder */}
      <ShowcaseCard
        title="With Placeholder"
        code={`import { useState } from "react";
import { Select } from "@rate-perfect/beaconv2";

const [value, setValue] = useState("");

<Select
  placeholder="Choose an option..."
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <Select
            placeholder="Choose an option..."
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
        </Box>
      </ShowcaseCard>

      {/* With label */}
      <ShowcaseCard
        title="With Label"
        code={`import { useState } from "react";
import { Select } from "@rate-perfect/beaconv2";

const [value, setValue] = useState("");

<Select
  label="Country"
  placeholder="Select a country"
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <Select
            label="Country"
            placeholder="Select a country"
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
        </Box>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { useState } from "react";
import { Select } from "@rate-perfect/beaconv2";

const [value, setValue] = useState("");

<Stack spacing={2}>
  <Select size="sm" options={options} placeholder="Small" value={value} onChange={(e) => setValue(e.target.value)} />
  <Select size="md" options={options} placeholder="Medium (default)" value={value} onChange={(e) => setValue(e.target.value)} />
  <Select size="lg" options={options} placeholder="Large" value={value} onChange={(e) => setValue(e.target.value)} />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          {sizes.map((size) => (
            <Select
              key={size}
              size={size}
              options={sampleOptions}
              placeholder={`${size.toUpperCase()} size`}
              value={sizeValue[size]}
              onChange={(e) =>
                setSizeValue((prev) => ({ ...prev, [size]: e.target.value as string }))
              }
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Aligned with TextInput and Button */}
      <ShowcaseCard
        title="Aligned with TextInput & Button"
        code={`import { useState } from "react";
import { Select, TextInput, Button } from "@rate-perfect/beaconv2";

const [value, setValue] = useState("");

<Stack direction="row" spacing={2} alignItems="flex-end">
  <Select size="md" options={options} label="Category" value={value} onChange={(e) => setValue(e.target.value)} />
  <TextInput size="md" placeholder="Search..." label="Search" />
  <Button size="md" variant="filled" color="brand">Submit</Button>
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="flex-end">
          <Select
            size="md"
            options={sampleOptions}
            label="Category"
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
          <TextInput size="md" placeholder="Search..." label="Search" />
          <Button size="md" variant="filled" color="brand">Submit</Button>
        </Stack>
      </ShowcaseCard>

      {/* With start adornment */}
      <ShowcaseCard
        title="With Icon"
        code={`import { useState } from "react";
import { Select } from "@rate-perfect/beaconv2";
import { Globe, MagnifyingGlass } from "@phosphor-icons/react";

const [value, setValue] = useState("");

<Select
  startAdornment={<Globe size={20} />}
  placeholder="Select a country"
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

<Select
  startAdornment={<MagnifyingGlass size={20} />}
  placeholder="Search options..."
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <Select
            startAdornment={<Globe size={20} />}
            placeholder="Select a country"
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
          <Select
            startAdornment={<MagnifyingGlass size={20} />}
            placeholder="Search options..."
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
        </Stack>
      </ShowcaseCard>

      {/* Error state */}
      <ShowcaseCard
        title="Error State"
        code={`import { Select } from "@rate-perfect/beaconv2";

<Select
  label="Required field"
  placeholder="Select something"
  error
  errorMessage="This field is required"
  options={options}
  value=""
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <Select
            label="Required field"
            placeholder="Select something"
            error
            errorMessage="This field is required"
            options={sampleOptions}
            value=""
          />
        </Box>
      </ShowcaseCard>

      {/* With help text */}
      <ShowcaseCard
        title="With Help Text"
        code={`import { useState } from "react";
import { Select } from "@rate-perfect/beaconv2";

const [value, setValue] = useState("");

<Select
  label="Role"
  helpText="Choose the user's primary role"
  options={options}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <Select
            label="Role"
            helpText="Choose the user's primary role"
            options={sampleOptions}
            value={value}
            onChange={(e) => setValue(e.target.value as string)}
          />
        </Box>
      </ShowcaseCard>

      {/* Disabled */}
      <ShowcaseCard
        title="Disabled"
        code={`<Select
  label="Disabled"
  options={options}
  value="1"
  disabled
/>`}
      >
        <Box sx={{ maxWidth: 300 }}>
          <Select
            label="Disabled"
            options={sampleOptions}
            value="1"
            disabled
          />
        </Box>
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { Select } from "@rate-perfect/beaconv2";

<Select label="Full Width" fullWidth placeholder="Stretches to fill container" options={options} value={value} onChange={(e) => setValue(e.target.value)} />`}
      >
        <Select
          label="Full Width"
          fullWidth
          placeholder="Stretches to fill container"
          options={sampleOptions}
          value={value}
          onChange={(e) => setValue(e.target.value as string)}
        />
      </ShowcaseCard>
    </Stack>
  );
}
