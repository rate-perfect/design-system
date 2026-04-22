import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Warning, CheckCircle, WarningCircle, Info } from "@phosphor-icons/react";
import { Alert } from "@rate-perfect/beaconv2";
import type { AlertVariant, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const alertVariants: AlertVariant[] = ["soft", "filled", "outline"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];

export default function AlertSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Alert } from "@rate-perfect/beaconv2";

<Alert>This is an alert</Alert>`}
      >
        <Alert>This is an alert</Alert>
      </ShowcaseCard>

      {/* Variant x Color Grid */}
      <ShowcaseCard
        title="Variant &times; Color"
        code={`import { Alert } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  {/* soft */}
  <Alert variant="soft" color="brand">Soft brand alert</Alert>
  <Alert variant="soft" color="success">Soft success alert</Alert>
  <Alert variant="soft" color="warning">Soft warning alert</Alert>
  <Alert variant="soft" color="error">Soft error alert</Alert>

  {/* filled */}
  <Alert variant="filled" color="brand">Filled brand alert</Alert>
  <Alert variant="filled" color="success">Filled success alert</Alert>
  <Alert variant="filled" color="warning">Filled warning alert</Alert>
  <Alert variant="filled" color="error">Filled error alert</Alert>

  {/* outline */}
  <Alert variant="outline" color="brand">Outline brand alert</Alert>
  <Alert variant="outline" color="success">Outline success alert</Alert>
  <Alert variant="outline" color="warning">Outline warning alert</Alert>
  <Alert variant="outline" color="error">Outline error alert</Alert>
</Stack>`}
      >
        <Stack spacing={2}>
          {alertVariants.map((v) => (
            <Box key={v}>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ mb: 1, display: "block" }}
              >
                {v}
              </Typography>
              <Stack spacing={1}>
                {colors.map((c) => (
                  <Alert key={c} variant={v} color={c}>
                    This is a {v} {c} alert.
                  </Alert>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* With Title */}
      <ShowcaseCard
        title="With Title"
        code={`import { Alert } from "@rate-perfect/beaconv2";
import { Warning, CheckCircle } from "@phosphor-icons/react";

<Stack spacing={2}>
  <Alert title="Warning" icon={<Warning />}>
    Please review the guidelines before submitting.
  </Alert>
  <Alert title="Success" color="success" icon={<CheckCircle />}>
    Your changes have been saved successfully.
  </Alert>
</Stack>`}
      >
        <Stack spacing={2}>
          <Alert title="Warning" icon={<Warning />}>
            Please review the guidelines before submitting.
          </Alert>
          <Alert title="Success" color="success" icon={<CheckCircle />}>
            Your changes have been saved successfully.
          </Alert>
        </Stack>
      </ShowcaseCard>

      {/* With Icon */}
      <ShowcaseCard
        title="With Icon"
        code={`import { Alert } from "@rate-perfect/beaconv2";
import { Info, WarningCircle } from "@phosphor-icons/react";

<Stack spacing={2}>
  <Alert color="brand" icon={<Info />}>
    Informational message with an icon.
  </Alert>
  <Alert color="error" variant="outline" icon={<WarningCircle />}>
    Something went wrong. Please try again.
  </Alert>
</Stack>`}
      >
        <Stack spacing={2}>
          <Alert color="brand" icon={<Info />}>
            Informational message with an icon.
          </Alert>
          <Alert color="error" variant="outline" icon={<WarningCircle />}>
            Something went wrong. Please try again.
          </Alert>
        </Stack>
      </ShowcaseCard>

      {/* Closeable */}
      <ShowcaseCard
        title="Closeable"
        code={`import { Alert } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Alert onClose={() => {}}>
    This alert can be dismissed.
  </Alert>
  <Alert color="error" variant="filled" onClose={() => {}}>
    Critical error — click X to dismiss.
  </Alert>
</Stack>`}
      >
        <Stack spacing={2}>
          <Alert onClose={() => {}}>
            This alert can be dismissed.
          </Alert>
          <Alert color="error" variant="filled" onClose={() => {}}>
            Critical error — click X to dismiss.
          </Alert>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
