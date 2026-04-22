import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Gauge, Shield, Star, Globe } from "@phosphor-icons/react";
import {
  ContentRow,
  FeatureIcon,
  RateBadge,
  Badge,
  Divider,
  useTheme,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function ContentRowSection() {
  const theme = useTheme();
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { ContentRow } from "@rate-perfect/beaconv2";

<ContentRow label="Plan" value="Pro — $29/mo" />`}
      >
        <ContentRow label="Plan" value="Pro — $29/mo" />
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { ContentRow } from "@rate-perfect/beaconv2";

<Stack spacing={1.5}>
  <ContentRow size="xs" label="Uptime" value="99.9%" />
  <ContentRow size="sm" label="Uptime" value="99.9%" />
  <ContentRow size="md" label="Uptime" value="99.9%" />
  <ContentRow size="lg" label="Uptime" value="99.9%" />
</Stack>`}
      >
        <Stack spacing={1.5}>
          <ContentRow size="xs" label="Uptime" value="99.9%" />
          <ContentRow size="sm" label="Uptime" value="99.9%" />
          <ContentRow size="md" label="Uptime" value="99.9%" />
          <ContentRow size="lg" label="Uptime" value="99.9%" />
        </Stack>
      </ShowcaseCard>

      {/* With Components */}
      <ShowcaseCard
        title="With Components"
        code={`import { ContentRow, RateBadge, Badge } from "@rate-perfect/beaconv2";

<Stack spacing={1.5}>
  <ContentRow label="Score" value={<RateBadge rate={4.99} size="sm" />} />
  <ContentRow label="Status" value={<Badge variant="soft" color="success">Approved</Badge>} />
</Stack>`}
      >
        <Stack spacing={1.5}>
          <ContentRow label="Score" value={<RateBadge rate={4.99} size="sm" />} />
          <ContentRow label="Status" value={<Badge variant="soft" color="success">Approved</Badge>} />
        </Stack>
      </ShowcaseCard>

      {/* Stacked with Dividers */}
      <ShowcaseCard
        title="Stacked with Dividers"
        code={`import { ContentRow, Divider } from "@rate-perfect/beaconv2";

<Stack spacing={1}>
  <ContentRow label="Subtotal" value="$450.00" />
  <Divider />
  <ContentRow label="Discount" value="-$45.00" />
  <Divider />
  <ContentRow label="Shipping" value="$12.00" />
  <Divider />
  <ContentRow label="Total" value="$417.00" />
</Stack>`}
      >
        <Stack spacing={1}>
          <ContentRow label="Subtotal" value="$450.00" />
          <Divider />
          <ContentRow label="Discount" value="-$45.00" />
          <Divider />
          <ContentRow label="Shipping" value="$12.00" />
          <Divider />
          <ContentRow label="Total" value="$417.00" />
        </Stack>
      </ShowcaseCard>

      {/* Card Example */}
      <ShowcaseCard
        title="In a Card"
        code={`import { ContentRow, RateBadge, Divider } from "@rate-perfect/beaconv2";

<Box sx={{ border: 1, borderColor: "divider", borderRadius: "12px", p: 2.5 }}>
  <ContentRow size="lg" label="Pro Plan" value={<RateBadge rate={9.99} size="sm" />} />
  <Divider spacing="0.75rem" />
  <Stack spacing={1}>
    <ContentRow size="sm" label="Billing" value="Monthly" />
    <ContentRow size="sm" label="Storage" value="100 GB" />
    <ContentRow size="sm" label="Users" value="Up to 10" />
    <ContentRow size="sm" label="Price" value="$29.00/mo" />
  </Stack>
</Box>`}
      >
        <Box sx={{ border: 1, borderColor: "divider", borderRadius: "12px", p: 2.5 }}>
          <ContentRow size="lg" label="Pro Plan" value={<RateBadge rate={9.99} size="sm" />} />
          <Divider spacing="0.75rem" />
          <Stack spacing={1}>
            <ContentRow size="sm" label="Billing" value="Monthly" />
            <ContentRow size="sm" label="Storage" value="100 GB" />
            <ContentRow size="sm" label="Users" value="Up to 10" />
            <ContentRow size="sm" label="Price" value="$29.00/mo" />
          </Stack>
        </Box>
      </ShowcaseCard>

      {/* With Raw Icon */}
      <ShowcaseCard
        title="With Icon"
        code={`import { ContentRow, useTheme } from "@rate-perfect/beaconv2";
import { Gauge } from "@phosphor-icons/react";

const theme = useTheme();

<ContentRow icon={<Gauge size={18} color={theme.palette.text.secondary} />} label="Category" value="Enterprise" />`}
      >
        <ContentRow icon={<Gauge size={18} color={theme.palette.text.secondary} />} label="Category" value="Enterprise" />
      </ShowcaseCard>

      {/* With FeatureIcon */}
      <ShowcaseCard
        title="With FeatureIcon"
        code={`import { ContentRow, FeatureIcon } from "@rate-perfect/beaconv2";
import { Gauge, Shield } from "@phosphor-icons/react";

<Stack spacing={1.5}>
  <ContentRow icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Category" value="Enterprise" />
  <ContentRow icon={<FeatureIcon icon={<Shield />} size="sm" radius="full" variant="muted" />} label="Completion" value="80%" />
</Stack>`}
      >
        <Stack spacing={1.5}>
          <ContentRow icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Category" value="Enterprise" />
          <ContentRow icon={<FeatureIcon icon={<Shield />} size="sm" radius="full" variant="muted" />} label="Completion" value="80%" />
        </Stack>
      </ShowcaseCard>

      {/* Contained */}
      <ShowcaseCard
        title="Contained"
        code={`import { ContentRow, FeatureIcon } from "@rate-perfect/beaconv2";
import { Gauge, Shield } from "@phosphor-icons/react";

{/* With FeatureIcon */}
<ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Plan Type" value="Enterprise" />

{/* With raw icon */}
<ContentRow variant="contained" icon={<Gauge size={16} color={theme.palette.text.secondary} />} label="Usage" value="80%" />

{/* Text only — different sizes */}
<ContentRow variant="contained" size="sm" label="Priority" value="High" />
<ContentRow variant="contained" size="xs" label="Region" value="North America" />`}
      >
        <Stack spacing={1}>
          <ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Plan Type" value="Enterprise" />
          <ContentRow variant="contained" icon={<Gauge size={16} color={theme.palette.text.secondary} />} label="Usage" value="80%" />
          <ContentRow variant="contained" size="sm" label="Priority" value="High" />
          <ContentRow variant="contained" size="xs" label="Region" value="North America" />
        </Stack>
      </ShowcaseCard>

      {/* Contained with Components */}
      <ShowcaseCard
        title="Contained with Components"
        code={`import { ContentRow, FeatureIcon, RateBadge, Badge } from "@rate-perfect/beaconv2";
import { Gauge, Star } from "@phosphor-icons/react";

<Stack spacing={1}>
  <ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Score" value={<RateBadge rate={4.99} size="xs" />} />
  <ContentRow variant="contained" icon={<FeatureIcon icon={<Star />} size="sm" radius="full" variant="muted" color="success" />} label="Status" value={<Badge variant="soft" color="success" size="sm">Approved</Badge>} />
</Stack>`}
      >
        <Stack spacing={1}>
          <ContentRow variant="contained" icon={<FeatureIcon icon={<Gauge />} size="sm" radius="full" variant="muted" />} label="Score" value={<RateBadge rate={4.99} size="xs" />} />
          <ContentRow variant="contained" icon={<FeatureIcon icon={<Star />} size="sm" radius="full" variant="muted" color="success" />} label="Status" value={<Badge variant="soft" color="success" size="sm">Approved</Badge>} />
        </Stack>
      </ShowcaseCard>

      {/* Custom Colors */}
      <ShowcaseCard
        title="Custom Colors"
        code={`import { ContentRow, useTheme } from "@rate-perfect/beaconv2";

const theme = useTheme();

<Stack spacing={1}>
  <ContentRow label="Approved" value="Yes" valueColor={theme.brand.success.main} />
  <ContentRow label="Risk Level" value="High" valueColor={theme.brand.error.main} />
</Stack>`}
      >
        <Stack spacing={1}>
          <ContentRow label="Approved" value="Yes" valueColor={theme.brand.success.main} />
          <ContentRow label="Risk Level" value="High" valueColor={theme.brand.error.main} />
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
