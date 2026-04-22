import { useState } from "react";
import Stack from "@mui/material/Stack";
import { MagnifyingGlass, Eye, Envelope } from "@phosphor-icons/react";
import { TextInput } from "@rate-perfect/beaconv2";
import type { TextInputSize, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];
const sizes: TextInputSize[] = ["sm", "md", "lg"];

export default function TextInputSection() {
  const [clearableValue, setClearableValue] = useState("Hello world");

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<TextInput label="Label" placeholder="Enter text..." />`}
      >
        <TextInput label="Label" placeholder="Enter text..." sx={{ maxWidth: 360 }} />
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <TextInput color="brand" label="Brand" placeholder="brand text input" />
  <TextInput color="neutral" label="Neutral" placeholder="neutral text input" />
  <TextInput color="success" label="Success" placeholder="success text input" />
  <TextInput color="warning" label="Warning" placeholder="warning text input" />
  <TextInput color="error" label="Error" placeholder="error text input" />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          {colors.map((c) => (
            <TextInput
              key={c}
              color={c}
              label={c.charAt(0).toUpperCase() + c.slice(1)}
              placeholder={`${c} text input`}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <TextInput size="sm" label="Size sm" placeholder="Small" />
  <TextInput size="md" label="Size md" placeholder="Medium" />
  <TextInput size="lg" label="Size lg" placeholder="Large" />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          {sizes.map((s) => (
            <TextInput key={s} size={s} label={`Size ${s}`} placeholder={s} />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Adornments */}
      <ShowcaseCard
        title="Adornments"
        code={`import { TextInput } from "@rate-perfect/beaconv2";
import { MagnifyingGlass, Envelope, Eye } from "@phosphor-icons/react";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <TextInput placeholder="Search..." startAdornment={<MagnifyingGlass size={20} />} />
  <TextInput label="Email" startAdornment={<Envelope size={20} />} placeholder="you@example.com" />
  <TextInput label="Password" type="password" endAdornment={<Eye size={20} />} />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          <TextInput
            placeholder="Search..."
            startAdornment={<MagnifyingGlass size={20} />}
          />
          <TextInput
            label="Email"
            startAdornment={<Envelope size={20} />}
            placeholder="you@example.com"
          />
          <TextInput
            label="Password"
            type="password"
            endAdornment={<Eye size={20} />}
          />
        </Stack>
      </ShowcaseCard>

      {/* States */}
      <ShowcaseCard
        title="States"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <TextInput label="Help Text" helpText="This is help text" placeholder="With help" />
  <TextInput label="Error" errorMessage="Something went wrong" placeholder="With error" />
  <TextInput label="Disabled" disabled defaultValue="Disabled field" />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          <TextInput label="Help Text" helpText="This is help text" placeholder="With help" />
          <TextInput
            label="Error"
            errorMessage="Something went wrong"
            placeholder="With error"
          />
          <TextInput label="Disabled" disabled defaultValue="Disabled field" />
        </Stack>
      </ShowcaseCard>

      {/* Clearable */}
      <ShowcaseCard
        title="Clearable"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<TextInput
  label="Clearable"
  clearable
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue("")}
  placeholder="Type something..."
/>`}
      >
        <TextInput
          label="Clearable"
          clearable
          value={clearableValue}
          onChange={(e) => setClearableValue(e.target.value)}
          onClear={() => setClearableValue("")}
          placeholder="Type something..."
          sx={{ maxWidth: 360 }}
        />
      </ShowcaseCard>

      {/* Multiline */}
      <ShowcaseCard
        title="Multiline"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <TextInput label="Auto-grow" multiline minRows={2} maxRows={6} placeholder="Type multiple lines..." />
  <TextInput label="Fixed rows" multiline rows={4} placeholder="Fixed 4 rows" />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          <TextInput
            label="Auto-grow"
            multiline
            minRows={2}
            maxRows={6}
            placeholder="Type multiple lines..."
          />
          <TextInput
            label="Fixed rows"
            multiline
            rows={4}
            placeholder="Fixed 4 rows"
          />
        </Stack>
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { TextInput } from "@rate-perfect/beaconv2";

<TextInput label="Full Width" fullWidth placeholder="Stretches to fill container" />`}
      >
        <TextInput
          label="Full Width"
          fullWidth
          placeholder="Stretches to fill container"
        />
      </ShowcaseCard>
    </Stack>
  );
}
