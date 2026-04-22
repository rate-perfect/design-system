import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AutocompleteInput } from "@rate-perfect/beaconv2";
import type { AutocompleteInputSize, AutocompleteOption, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const sampleOptions: AutocompleteOption[] = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Cherry" },
  { id: "4", name: "Date" },
  { id: "5", name: "Elderberry" },
];

const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const sizes: AutocompleteInputSize[] = ["sm", "md", "lg"];

export default function AutocompleteInputSection() {
  const [defaultVal, setDefaultVal] = useState<AutocompleteOption | null>(null);
  const [preselected, setPreselected] = useState<AutocompleteOption | null>(sampleOptions[2]);
  const [colorVals, setColorVals] = useState<Record<string, AutocompleteOption | null>>(
    Object.fromEntries(colors.map((c) => [c, null])),
  );
  const [sizeVals, setSizeVals] = useState<Record<string, AutocompleteOption | null>>(
    Object.fromEntries(sizes.map((s) => [s, null])),
  );
  const [stateVals, setStateVals] = useState<Record<string, AutocompleteOption | null>>({
    help: null,
    error: null,
    disabled: null,
  });
  const [fullWidthVal, setFullWidthVal] = useState<AutocompleteOption | null>(null);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { AutocompleteInput } from "@rate-perfect/beaconv2";

const options = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "Cherry" },
];

<AutocompleteInput
  label="Fruit"
  placeholder="Select a fruit..."
  options={options}
  value={value}
  onChange={(e, v) => setValue(v)}
/>`}
      >
        <AutocompleteInput
          label="Fruit"
          placeholder="Select a fruit..."
          options={sampleOptions}
          value={defaultVal}
          onChange={(_, v) => setDefaultVal(v)}
          sx={{ maxWidth: 360 }}
        />
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { AutocompleteInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <AutocompleteInput color="brand" label="Brand" placeholder="Focus to see ring..." options={options} value={value} onChange={handleChange} />
  <AutocompleteInput color="neutral" label="Neutral" placeholder="Focus to see ring..." options={options} value={value} onChange={handleChange} />
  <AutocompleteInput color="success" label="Success" placeholder="Focus to see ring..." options={options} value={value} onChange={handleChange} />
  <AutocompleteInput color="warning" label="Warning" placeholder="Focus to see ring..." options={options} value={value} onChange={handleChange} />
  <AutocompleteInput color="error" label="Error" placeholder="Focus to see ring..." options={options} value={value} onChange={handleChange} />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          {colors.map((c) => (
            <AutocompleteInput
              key={c}
              color={c}
              label={c.charAt(0).toUpperCase() + c.slice(1)}
              placeholder="Focus to see ring..."
              options={sampleOptions}
              value={colorVals[c]}
              onChange={(_, v) => setColorVals((prev) => ({ ...prev, [c]: v }))}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { AutocompleteInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <AutocompleteInput size="sm" label="Size sm" placeholder="Small" options={options} value={value} onChange={handleChange} />
  <AutocompleteInput size="md" label="Size md" placeholder="Medium" options={options} value={value} onChange={handleChange} />
  <AutocompleteInput size="lg" label="Size lg" placeholder="Large" options={options} value={value} onChange={handleChange} />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          {sizes.map((s) => (
            <AutocompleteInput
              key={s}
              size={s}
              label={`Size ${s}`}
              placeholder={s}
              options={sampleOptions}
              value={sizeVals[s]}
              onChange={(_, v) => setSizeVals((prev) => ({ ...prev, [s]: v }))}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* States */}
      <ShowcaseCard
        title="States"
        code={`import { AutocompleteInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <AutocompleteInput label="Help Text" helpText="Pick your favorite fruit" placeholder="With help" options={options} value={value} onChange={handleChange} />
  <AutocompleteInput label="Error" errorMessage="This field is required" placeholder="With error" options={options} value={value} onChange={handleChange} />
  <AutocompleteInput label="Disabled" disabled placeholder="Disabled" options={options} value={null} onChange={() => {}} />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          <AutocompleteInput
            label="Help Text"
            helpText="Pick your favorite fruit"
            placeholder="With help"
            options={sampleOptions}
            value={stateVals.help}
            onChange={(_, v) => setStateVals((prev) => ({ ...prev, help: v }))}
          />
          <AutocompleteInput
            label="Error"
            errorMessage="This field is required"
            placeholder="With error"
            options={sampleOptions}
            value={stateVals.error}
            onChange={(_, v) => setStateVals((prev) => ({ ...prev, error: v }))}
          />
          <AutocompleteInput
            label="Disabled"
            disabled
            placeholder="Disabled"
            options={sampleOptions}
            value={null}
            onChange={() => {}}
          />
        </Stack>
      </ShowcaseCard>

      {/* With Value */}
      <ShowcaseCard
        title="With Value"
        code={`import { AutocompleteInput } from "@rate-perfect/beaconv2";

<AutocompleteInput
  label="Pre-selected"
  options={options}
  value={{ id: "3", name: "Cherry" }}
  onChange={handleChange}
/>`}
      >
        <AutocompleteInput
          label="Pre-selected"
          options={sampleOptions}
          value={preselected}
          onChange={(_, v) => setPreselected(v)}
          sx={{ maxWidth: 360 }}
        />
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { AutocompleteInput } from "@rate-perfect/beaconv2";

<AutocompleteInput label="Full Width" fullWidth placeholder="Stretches to fill container" options={options} value={value} onChange={handleChange} />`}
      >
        <AutocompleteInput
          label="Full Width"
          fullWidth
          placeholder="Stretches to fill container"
          options={sampleOptions}
          value={fullWidthVal}
          onChange={(_, v) => setFullWidthVal(v)}
        />
      </ShowcaseCard>
    </Stack>
  );
}
