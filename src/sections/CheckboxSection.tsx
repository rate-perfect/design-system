import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Checkbox } from "@rate-perfect/beaconv2";
import type { CheckboxSize, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const sizes: CheckboxSize[] = ["sm", "md", "lg"];

export default function CheckboxSection() {
  const [checked, setChecked] = useState(true);
  const [items, setItems] = useState([true, false, true]);

  const allChecked = items.every(Boolean);
  const someChecked = items.some(Boolean) && !allChecked;

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Checkbox } from "@rate-perfect/beaconv2";

<Checkbox label="Accept terms and conditions" />`}
      >
        <Checkbox
          checked={checked}
          onChange={(_, v) => setChecked(v)}
          label="Accept terms and conditions"
        />
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { Checkbox } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <Checkbox color="brand" label="Brand" checked />
  <Checkbox color="neutral" label="Neutral" checked />
  <Checkbox color="success" label="Success" checked />
  <Checkbox color="warning" label="Warning" checked />
  <Checkbox color="error" label="Error" checked />
</Stack>`}
      >
        <Stack spacing={1}>
          {colors.map((c) => (
            <Checkbox
              key={c}
              color={c}
              defaultChecked
              label={c.charAt(0).toUpperCase() + c.slice(1)}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { Checkbox } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <Checkbox size="sm" label="Small" checked />
  <Checkbox size="md" label="Medium" checked />
  <Checkbox size="lg" label="Large" checked />
</Stack>`}
      >
        <Stack spacing={1}>
          {sizes.map((s) => (
            <Checkbox key={s} size={s} defaultChecked label={s === "sm" ? "Small" : s === "md" ? "Medium" : "Large"} />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Without Label */}
      <ShowcaseCard
        title="Without Label"
        code={`import { Checkbox } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <Checkbox checked />
  <Checkbox />
  <Checkbox color="success" checked />
</Stack>`}
      >
        <Stack direction="row" spacing={2}>
          <Checkbox defaultChecked />
          <Checkbox />
          <Checkbox color="success" defaultChecked />
        </Stack>
      </ShowcaseCard>

      {/* Indeterminate */}
      <ShowcaseCard
        title="Indeterminate"
        code={`import { Checkbox } from "@rate-perfect/beaconv2";

<Checkbox indeterminate label="Select all" />
<Checkbox checked label="Item 1" />
<Checkbox label="Item 2" />
<Checkbox checked label="Item 3" />`}
      >
        <Stack spacing={0.5}>
          <Checkbox
            checked={allChecked}
            indeterminate={someChecked}
            onChange={(_, v) => setItems([v, v, v])}
            label="Select all"
          />
          <Box sx={{ ml: 3 }}>
            <Stack spacing={0.5}>
              {["Item 1", "Item 2", "Item 3"].map((item, i) => (
                <Checkbox
                  key={item}
                  checked={items[i]}
                  onChange={(_, v) => {
                    const next = [...items];
                    next[i] = v;
                    setItems(next);
                  }}
                  label={item}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Disabled */}
      <ShowcaseCard
        title="Disabled"
        code={`import { Checkbox } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <Checkbox disabled checked label="Checked disabled" />
  <Checkbox disabled label="Unchecked disabled" />
</Stack>`}
      >
        <Stack spacing={1}>
          <Checkbox disabled defaultChecked label="Checked disabled" />
          <Checkbox disabled label="Unchecked disabled" />
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
