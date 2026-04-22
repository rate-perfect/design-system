import Stack from "@mui/material/Stack";
import { BackButton } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function BackButtonSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { BackButton } from "@rate-perfect/beaconv2";

<BackButton onClick={() => router.back()} />`}
      >
        <BackButton onClick={() => alert("Go back clicked")} />
      </ShowcaseCard>

      {/* Custom Label */}
      <ShowcaseCard
        title="Custom Label"
        code={`import { BackButton } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <BackButton onClick={handleBack}>Back to dashboard</BackButton>
  <BackButton onClick={handleBack}>Return to results</BackButton>
  <BackButton onClick={handleBack}>Previous step</BackButton>
</Stack>`}
      >
        <Stack spacing={2}>
          <BackButton onClick={() => {}}>Back to dashboard</BackButton>
          <BackButton onClick={() => {}}>Return to results</BackButton>
          <BackButton onClick={() => {}}>Previous step</BackButton>
        </Stack>
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { BackButton } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <BackButton onClick={handleBack}>Default</BackButton>
  <BackButton color="brand" onClick={handleBack}>Brand</BackButton>
  <BackButton color="error" onClick={handleBack}>Error</BackButton>
  <BackButton color="warning" onClick={handleBack}>Warning</BackButton>
  <BackButton color="success" onClick={handleBack}>Success</BackButton>
  <BackButton customColor={{ fg: "#6C63FF", hoverFg: "#4B44CC" }} onClick={handleBack}>Custom purple</BackButton>
</Stack>`}
      >
        <Stack spacing={2}>
          <BackButton onClick={() => {}}>Default</BackButton>
          <BackButton color="brand" onClick={() => {}}>Brand</BackButton>
          <BackButton color="error" onClick={() => {}}>Error</BackButton>
          <BackButton color="warning" onClick={() => {}}>Warning</BackButton>
          <BackButton color="success" onClick={() => {}}>Success</BackButton>
          <BackButton customColor={{ fg: "#6C63FF", hoverFg: "#4B44CC" }} onClick={() => {}}>Custom purple</BackButton>
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { BackButton } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <BackButton size="sm" onClick={handleBack}>Small</BackButton>
  <BackButton size="md" onClick={handleBack}>Medium</BackButton>
  <BackButton size="lg" onClick={handleBack}>Large</BackButton>
</Stack>`}
      >
        <Stack spacing={2}>
          <BackButton size="sm" onClick={() => {}}>Small</BackButton>
          <BackButton size="md" onClick={() => {}}>Medium</BackButton>
          <BackButton size="lg" onClick={() => {}}>Large</BackButton>
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
