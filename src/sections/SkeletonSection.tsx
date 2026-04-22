import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Skeleton, TextSkeleton, ButtonSkeleton } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function SkeletonSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Skeleton } from "@rate-perfect/beaconv2";

<Stack spacing={1} sx={{ maxWidth: 360 }}>
  <Skeleton variant="rectangular" width="100%" height={120} />
  <Skeleton variant="text" width="80%" />
  <Skeleton variant="text" width="60%" />
  <Skeleton variant="circular" width={40} height={40} />
</Stack>`}
      >
        <Stack spacing={1} sx={{ maxWidth: 360 }}>
          <Skeleton variant="rectangular" width="100%" height={120} />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="circular" width={40} height={40} />
        </Stack>
      </ShowcaseCard>

      {/* TextSkeleton */}
      <ShowcaseCard
        title="TextSkeleton"
        code={`import { TextSkeleton } from "@rate-perfect/beaconv2";

<Stack spacing={1} sx={{ maxWidth: 360 }}>
  <TextSkeleton width="100%" height={32} />
  <TextSkeleton width="80%" />
  <TextSkeleton width="60%" />
  <TextSkeleton width="40%" />
</Stack>`}
      >
        <Stack spacing={1} sx={{ maxWidth: 360 }}>
          <TextSkeleton width="100%" height={32} />
          <TextSkeleton width="80%" />
          <TextSkeleton width="60%" />
          <TextSkeleton width="40%" />
        </Stack>
      </ShowcaseCard>

      {/* ButtonSkeleton */}
      <ShowcaseCard
        title="ButtonSkeleton"
        code={`import { ButtonSkeleton } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <ButtonSkeleton />
  <ButtonSkeleton width={80} height={30} />
  <ButtonSkeleton width={160} height={40} />
</Stack>`}
      >
        <Stack direction="row" spacing={2}>
          <ButtonSkeleton />
          <ButtonSkeleton width={80} height={30} />
          <ButtonSkeleton width={160} height={40} />
        </Stack>
      </ShowcaseCard>

      {/* Animation */}
      <ShowcaseCard
        title="Animation"
        code={`import { Skeleton, TextSkeleton, ButtonSkeleton } from "@rate-perfect/beaconv2";

<Stack spacing={2} sx={{ maxWidth: 360 }}>
  <TextSkeleton animation="wave" width="100%" height={28} />
  <TextSkeleton animation="wave" width="70%" />
  <ButtonSkeleton animation="wave" />
  <Skeleton animation="wave" variant="rectangular" width="100%" height={80} />
</Stack>`}
      >
        <Stack spacing={2} sx={{ maxWidth: 360 }}>
          <TextSkeleton animation="wave" width="100%" height={28} />
          <TextSkeleton animation="wave" width="70%" />
          <ButtonSkeleton animation="wave" />
          <Skeleton animation="wave" variant="rectangular" width="100%" height={80} />
        </Stack>
      </ShowcaseCard>

      {/* Card-like Composition */}
      <ShowcaseCard
        title="Card Composition"
        code={`import { Skeleton, TextSkeleton, ButtonSkeleton } from "@rate-perfect/beaconv2";

<Box sx={{ maxWidth: 360, p: 2, borderRadius: "12px", border: "1px solid var(--mui-palette-divider)" }}>
  <Skeleton variant="rectangular" width="100%" height={140} sx={{ borderRadius: "8px", mb: 2 }} />
  <TextSkeleton width="70%" height={28} />
  <TextSkeleton width="100%" />
  <TextSkeleton width="90%" />
  <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
    <ButtonSkeleton />
    <ButtonSkeleton width={80} />
  </Box>
</Box>`}
      >
        <Box sx={{ maxWidth: 360, p: 2, borderRadius: "12px", border: "1px solid var(--mui-palette-divider)" }}>
          <Skeleton variant="rectangular" width="100%" height={140} sx={{ borderRadius: "8px", mb: 2 }} />
          <TextSkeleton width="70%" height={28} />
          <TextSkeleton width="100%" />
          <TextSkeleton width="90%" />
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <ButtonSkeleton />
            <ButtonSkeleton width={80} />
          </Box>
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}
