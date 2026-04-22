import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Gauge, Shield, Star, Globe } from "@phosphor-icons/react";
import {
  ContentRow,
  FeatureIcon,
  RateBadge,
  Badge,
  Divider,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function ContentRowSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { ContentRow } from "@rate-perfect/beaconv2";

<ContentRow label="Monthly Payment" value="$2,450.00" />`}
      >
        <ContentRow label="Monthly Payment" value="$2,450.00" />
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { ContentRow } from "@rate-perfect/beaconv2";

<Stack spacing={1.5}>
  <ContentRow size="xs" label="Interest Rate" value="5.25%" />
  <ContentRow size="sm" label="Interest Rate" value="5.25%" />
  <ContentRow size="md" label="Interest Rate" value="5.25%" />
  <ContentRow size="lg" label="Interest Rate" value="5.25%" />
</Stack>`}
      >
        <Stack spacing={1.5}>
          <ContentRow size="xs" label="Interest Rate" value="5.25%" />
          <ContentRow size="sm" label="Interest Rate" value="5.25%" />
          <ContentRow size="md" label="Interest Rate" value="5.25%" />
          <ContentRow size="lg" label="Interest Rate" value="5.25%" />
        </Stack>
      </ShowcaseCard>

      {/* With Components */}
      <ShowcaseCard
        title="With Components"
        code={`import { ContentRow, RateBadge, Badge } from "@rate-perfect/beaconv2";

<Stack spacing={1.5}>
  <ContentRow label="Best Rate" value={<RateBadge rate={4.99} size="sm" />} />
  <ContentRow label="Status" value={<Badge variant="soft" color="success">Approved</Badge>} />
</Stack>`}
      >
        <Stack spacing={1.5}>
          <ContentRow label="Best Rate" value={<RateBadge rate={4.99} size="sm" />} />
          <ContentRow label="Status" value={<Badge variant="soft" color="success">Approved</Badge>} />
        </Stack>
      </ShowcaseCard>

      {/* Stacked with Dividers */}
      <ShowcaseCard
        title="Stacked with Dividers"
        code={`import { ContentRow, Divider } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <ContentRow label="Purchase Price" value="$450,000" />
  <Divider />
  <ContentRow label="Down Payment" value="$90,000" />
  <Divider />
  <ContentRow label="Loan Amount" value="$360,000" />
  <Divider />
  <ContentRow label="Monthly Payment" value="$2,145.00" />
</Stack>`}
      >
        <Stack spacing={1}>
          <ContentRow label="Purchase Price" value="$450,000" />
          <Divider />
          <ContentRow label="Down Payment" value="$90,000" />
          <Divider />
          <ContentRow label="Loan Amount" value="$360,000" />
          <Divider />
          <ContentRow label="Monthly Payment" value="$2,145.00" />
        </Stack>
      </ShowcaseCard>

      {/* Card Example */}
      <ShowcaseCard
        title="In a Card"
        code={`import { ContentRow, RateBadge, Divider } from "@rate-perfect/beaconv2";

<Box sx={{ border: 1, borderColor: "divider", borderRadius: "12px", p: 2.5 }}>
  <ContentRow size="lg" label="5-Year Fixed" value={<RateBadge rate={4.99} size="sm" />} />
  <Divider spacing="0.75rem" />
  <Stack spacing={1}>
    <ContentRow size="sm" label="Term" value="60 months" />
    <ContentRow size="sm" label="Amortization" value="25 years" />
    <ContentRow size="sm" label="LTV" value="80%" />
    <ContentRow size="sm" label="Monthly Payment" value="$2,145.00" />
  </Stack>
</Box>`}
      >
        <Box sx={{ border: 1, borderColor: "divider", borderRadius: "12px", p: 2.5 }}>
          <ContentRow size="lg" label="5-Year Fixed" value={<RateBadge rate={4.99} size="sm" />} />
          <Divider spacing="0.75rem" />
          <Stack spacing={1}>
            <ContentRow size="sm" label="Term" value="60 months" />
            <ContentRow size="sm" label="Amortization" value="25 years" />
            <ContentRow size="sm" label="LTV" value="80%" />
            <ContentRow size="sm" label="Monthly Payment" value="$2,145.00" />
          </Stack>
        </Box>
      </ShowcaseCard>

      {/* With Raw Icon */}
      <ShowcaseCard
        title="With Icon"
        code={`import { ContentRow } from "@rate-perfect/beaconv2";
import { Gauge } from "@phosphor-icons/react";

<ContentRow icon={<Gauge size={18} color="var(--mui-palette-text-secondary)" />} label="Term Type" value="5-Year Fixed" />`}
      >
        <ContentRow icon={<Gauge size={18} color="var(--mui-palette-text-secondary)" />} label="Term Type" value="5-Year Fixed" />
      </ShowcaseCard>

      {/* With FeatureIcon */}
      <ShowcaseCard
        title="With FeatureIcon"
        code={`import { ContentRow, FeatureIcon } from "@rate-perfect/beaconv2";
import { Gauge, Shield } from "@phosphor-icons/react";

<Stack spacing={1.5}>
  <ContentRow icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Term Type" value="5-Year Fixed" />
  <ContentRow icon={<FeatureIcon icon={<Shield />} size="sm" radius="full" variant="muted" />} label="LTV" value="80%" />
</Stack>`}
      >
        <Stack spacing={1.5}>
          <ContentRow icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Term Type" value="5-Year Fixed" />
          <ContentRow icon={<FeatureIcon icon={<Shield />} size="sm" radius="full" variant="muted" />} label="LTV" value="80%" />
        </Stack>
      </ShowcaseCard>

      {/* Contained */}
      <ShowcaseCard
        title="Contained"
        code={`import { ContentRow, FeatureIcon } from "@rate-perfect/beaconv2";
import { Gauge, Shield } from "@phosphor-icons/react";

{/* With FeatureIcon */}
<ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Term Type" value="5-Year Fixed" />

{/* With raw icon */}
<ContentRow variant="contained" icon={<Gauge size={16} />} label="LTV" value="80%" />

{/* Text only — different sizes */}
<ContentRow variant="contained" size="sm" label="Credit Score" value="720+" />
<ContentRow variant="contained" size="xs" label="Region" value="Ontario" />`}
      >
        <Stack spacing={1}>
          <ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Term Type" value="5-Year Fixed" />
          <ContentRow variant="contained" icon={<Gauge size={16} color="var(--mui-palette-text-secondary)" />} label="LTV" value="80%" />
          <ContentRow variant="contained" size="sm" label="Credit Score" value="720+" />
          <ContentRow variant="contained" size="xs" label="Region" value="Ontario" />
        </Stack>
      </ShowcaseCard>

      {/* Contained with Components */}
      <ShowcaseCard
        title="Contained with Components"
        code={`import { ContentRow, FeatureIcon, RateBadge, Badge } from "@rate-perfect/beaconv2";
import { Gauge, Star } from "@phosphor-icons/react";

<Stack spacing={1}>
  <ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Best Rate" value={<RateBadge rate={4.99} size="xs" />} />
  <ContentRow variant="contained" icon={<FeatureIcon icon={<Star />} size="sm" radius="full" variant="muted" color="success" />} label="Status" value={<Badge variant="soft" color="success" size="sm">Approved</Badge>} />
</Stack>`}
      >
        <Stack spacing={1}>
          <ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Best Rate" value={<RateBadge rate={4.99} size="xs" />} />
          <ContentRow variant="contained" icon={<FeatureIcon icon={<Star />} size="sm" radius="full" variant="muted" color="success" />} label="Status" value={<Badge variant="soft" color="success" size="sm">Approved</Badge>} />
        </Stack>
      </ShowcaseCard>

      {/* Custom Colors */}
      <ShowcaseCard
        title="Custom Colors"
        code={`import { ContentRow } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <ContentRow label="Approved" value="Yes" valueColor="var(--mui-brand-success-main)" />
  <ContentRow label="Risk Level" value="High" valueColor="var(--mui-brand-error-main)" />
</Stack>`}
      >
        <Stack spacing={1}>
          <ContentRow label="Approved" value="Yes" valueColor="var(--mui-brand-success-main)" />
          <ContentRow label="Risk Level" value="High" valueColor="var(--mui-brand-error-main)" />
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
