import Stack from "@mui/material/Stack";
import { ThemeToggle } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function ThemeToggleSection() {
  return (
    <Stack spacing={4}>
      <ShowcaseCard
        title="Default"
        code={`import { ThemeToggle } from "@rate-perfect/beaconv2";

<ThemeToggle />`}
      >
        <ThemeToggle />
      </ShowcaseCard>

      <ShowcaseCard
        title="Sizes"
        code={`import { ThemeToggle } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={3} alignItems="center">
  <ThemeToggle size="sm" />
  <ThemeToggle size="md" />
  <ThemeToggle size="lg" />
</Stack>`}
      >
        <Stack direction="row" spacing={3} alignItems="center">
          <ThemeToggle size="sm" />
          <ThemeToggle size="md" />
          <ThemeToggle size="lg" />
        </Stack>
      </ShowcaseCard>

      <ShowcaseCard
        title="Colors"
        code={`import { ThemeToggle } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={3}>
  <ThemeToggle color="brand" />
  <ThemeToggle color="success" />
  <ThemeToggle color="warning" />
  <ThemeToggle color="error" />
</Stack>`}
      >
        <Stack direction="row" spacing={3}>
          <ThemeToggle color="brand" />
          <ThemeToggle color="success" />
          <ThemeToggle color="warning" />
          <ThemeToggle color="error" />
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
