import { useState } from "react";
import Stack from "@mui/material/Stack";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@rate-perfect/beaconv2";
import type { DatePickerSize } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const sizes: DatePickerSize[] = ["sm", "md", "lg"];

export default function DatePickerSection() {
  const [value1, setValue1] = useState<Dayjs | null>(null);
  const [value2, setValue2] = useState<Dayjs | null>(null);
  const [value3, setValue3] = useState<Dayjs | null>(dayjs());
  const [value4, setValue4] = useState<Dayjs | null>(null);
  const [value5, setValue5] = useState<Dayjs | null>(null);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { DatePicker } from "@rate-perfect/beaconv2";

<DatePicker label="Date" value={value} onChange={setValue} sx={{ maxWidth: 360 }} />`}
      >
        <DatePicker label="Date" value={value1} onChange={setValue1} sx={{ maxWidth: 360 }} />
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { DatePicker } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <DatePicker size="sm" label="Size sm" value={value} onChange={setValue} fullWidth />
  <DatePicker size="md" label="Size md" value={value} onChange={setValue} fullWidth />
  <DatePicker size="lg" label="Size lg" value={value} onChange={setValue} fullWidth />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          {sizes.map((s) => (
            <DatePicker
              key={s}
              size={s}
              label={`Size ${s}`}
              value={value2}
              onChange={setValue2}
              fullWidth
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* States */}
      <ShowcaseCard
        title="States"
        code={`import { DatePicker } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <DatePicker label="Help Text" helpText="Select a date for your report" value={value} onChange={setValue} fullWidth />
  <DatePicker label="Error" errorMessage="Please select a valid date" value={value} onChange={setValue} fullWidth />
  <DatePicker label="Disabled" disabled value={dayjs()} onChange={() => {}} fullWidth />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          <DatePicker
            label="Help Text"
            helpText="Select a date for your report"
            value={value3}
            onChange={setValue3}
            fullWidth
          />
          <DatePicker
            label="Error"
            errorMessage="Please select a valid date"
            value={value4}
            onChange={setValue4}
            fullWidth
          />
          <DatePicker
            label="Disabled"
            disabled
            value={dayjs()}
            onChange={() => {}}
            fullWidth
          />
        </Stack>
      </ShowcaseCard>

      {/* Full Width */}
      <ShowcaseCard
        title="Full Width"
        code={`import { DatePicker } from "@rate-perfect/beaconv2";

<DatePicker label="Full Width" fullWidth value={value} onChange={setValue} />`}
      >
        <DatePicker
          label="Full Width"
          fullWidth
          value={value5}
          onChange={setValue5}
        />
      </ShowcaseCard>
    </Stack>
  );
}
