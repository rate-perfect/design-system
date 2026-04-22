import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { Divider, Typography } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function DividerSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Divider } from "@rate-perfect/beaconv2";

<Divider />`}
      >
        <Box>
          <Typography>Content above</Typography>
          <Divider />
          <Typography>Content below</Typography>
        </Box>
      </ShowcaseCard>

      {/* With Spacing */}
      <ShowcaseCard
        title="Spacing"
        code={`import { Divider } from "@rate-perfect/beaconv2";

<Stack>
  <Typography>spacing="0.5rem"</Typography>
  <Divider spacing="0.5rem" />
  <Typography>spacing="1rem"</Typography>
  <Divider spacing="1rem" />
  <Typography>spacing="1.5rem"</Typography>
  <Divider spacing="1.5rem" />
  <Typography>Content below</Typography>
</Stack>`}
      >
        <Box>
          <Typography>spacing="0.5rem"</Typography>
          <Divider spacing="0.5rem" />
          <Typography>spacing="1rem"</Typography>
          <Divider spacing="1rem" />
          <Typography>spacing="1.5rem"</Typography>
          <Divider spacing="1.5rem" />
          <Typography>Content below</Typography>
        </Box>
      </ShowcaseCard>

      {/* Weights */}
      <ShowcaseCard
        title="Weights"
        code={`import { Divider } from "@rate-perfect/beaconv2";

<Stack spacing={3}>
  <Box>
    <Typography fontSize="sm" color="secondary">thin (default)</Typography>
    <Divider weight="thin" spacing="0.5rem" />
  </Box>
  <Box>
    <Typography fontSize="sm" color="secondary">medium</Typography>
    <Divider weight="medium" spacing="0.5rem" />
  </Box>
  <Box>
    <Typography fontSize="sm" color="secondary">thick</Typography>
    <Divider weight="thick" spacing="0.5rem" />
  </Box>
</Stack>`}
      >
        <Stack spacing={3}>
          <Box>
            <MuiTypography variant="caption" color="text.secondary">thin (default)</MuiTypography>
            <Divider weight="thin" spacing="0.5rem" />
          </Box>
          <Box>
            <MuiTypography variant="caption" color="text.secondary">medium</MuiTypography>
            <Divider weight="medium" spacing="0.5rem" />
          </Box>
          <Box>
            <MuiTypography variant="caption" color="text.secondary">thick</MuiTypography>
            <Divider weight="thick" spacing="0.5rem" />
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Custom Color */}
      <ShowcaseCard
        title="Custom Color"
        code={`import { Divider } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Divider color="var(--mui-palette-primary-main)" spacing="0.5rem" />
  <Divider color="var(--mui-palette-error-main)" spacing="0.5rem" />
  <Divider color="var(--mui-brand-success-main)" spacing="0.5rem" />
</Stack>`}
      >
        <Stack spacing={2}>
          <Divider color="var(--mui-palette-primary-main)" spacing="0.5rem" />
          <Divider color="var(--mui-palette-error-main)" spacing="0.5rem" />
          <Divider color="var(--mui-brand-success-main)" spacing="0.5rem" />
        </Stack>
      </ShowcaseCard>

      {/* Vertical */}
      <ShowcaseCard
        title="Vertical"
        code={`import { Divider } from "@rate-perfect/beaconv2";

<Box display="flex" alignItems="center" gap={2} height={48}>
  <Typography>Left</Typography>
  <Divider orientation="vertical" />
  <Typography>Center</Typography>
  <Divider orientation="vertical" />
  <Typography>Right</Typography>
</Box>`}
      >
        <Box display="flex" alignItems="center" gap={2} sx={{ height: 48 }}>
          <Typography>Left</Typography>
          <Divider orientation="vertical" />
          <Typography>Center</Typography>
          <Divider orientation="vertical" />
          <Typography>Right</Typography>
        </Box>
      </ShowcaseCard>

      {/* Vertical with Spacing & Weights */}
      <ShowcaseCard
        title="Vertical Weights"
        code={`import { Divider } from "@rate-perfect/beaconv2";

<Box display="flex" alignItems="center" height={48}>
  <Typography>thin</Typography>
  <Divider orientation="vertical" weight="thin" spacing="1rem" />
  <Typography>medium</Typography>
  <Divider orientation="vertical" weight="medium" spacing="1rem" />
  <Typography>thick</Typography>
  <Divider orientation="vertical" weight="thick" spacing="1rem" />
  <Typography>End</Typography>
</Box>`}
      >
        <Box display="flex" alignItems="center" sx={{ height: 48 }}>
          <Typography>thin</Typography>
          <Divider orientation="vertical" weight="thin" spacing="1rem" />
          <Typography>medium</Typography>
          <Divider orientation="vertical" weight="medium" spacing="1rem" />
          <Typography>thick</Typography>
          <Divider orientation="vertical" weight="thick" spacing="1rem" />
          <Typography>End</Typography>
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}
