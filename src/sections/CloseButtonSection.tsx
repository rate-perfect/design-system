import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { CloseButton } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function CloseButtonSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { CloseButton } from "@rate-perfect/beaconv2";

<CloseButton />`}
      >
        <CloseButton />
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { CloseButton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2} alignItems="center">
  <CloseButton size="sm" />
  <CloseButton size="md" />
  <CloseButton size="lg" />
</Stack>`}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <CloseButton size="sm" />
          <CloseButton size="md" />
          <CloseButton size="lg" />
        </Stack>
      </ShowcaseCard>

      {/* Disabled */}
      <ShowcaseCard
        title="Disabled"
        code={`import { CloseButton } from "@rate-perfect/beaconv2";

<CloseButton disabled />`}
      >
        <CloseButton disabled />
      </ShowcaseCard>

      {/* Usage context */}
      <ShowcaseCard
        title="In a Card Header"
        code={`import { CloseButton } from "@rate-perfect/beaconv2";

<Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: 2,
    border: "1px solid",
    borderColor: "divider",
    borderRadius: "12px",
    width: 320,
  }}
>
  <Box sx={{ fontSize: 16, fontWeight: 600 }}>Notification</Box>
  <CloseButton size="sm" />
</Box>`}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "12px",
            width: 320,
          }}
        >
          <Box sx={{ fontSize: 16, fontWeight: 600 }}>Notification</Box>
          <CloseButton size="sm" />
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}
