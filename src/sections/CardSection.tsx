import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  Card,
  Typography,
  ContentRow,
  RateBadge,
  Badge,
  Button,
  Divider,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

function SampleCardContent({ heading = "Account Overview" }: { heading?: string }) {
  return (
    <>
      <Typography type="text" fontSize="md" fontWeight="semibold">{heading}</Typography>
      <Typography type="text" fontSize="sm" color="secondary">
        View your recent activity, manage settings, and track performance across all connected accounts.
      </Typography>
    </>
  );
}

export default function CardSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Card>
  <Typography type="text" fontSize="md" fontWeight="semibold">Account Overview</Typography>
  <Typography type="text" fontSize="sm" color="secondary">
    View your recent activity, manage settings, and track performance.
  </Typography>
</Card>`}
      >
        <Card>
          <SampleCardContent />
        </Card>
      </ShowcaseCard>

      {/* Variants */}
      <ShowcaseCard
        title="Variants"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Card variant="outlined">...</Card>
  <Card variant="filled">...</Card>
</Stack>`}
      >
        <Stack spacing={2}>
          <Card variant="outlined">
            <Typography type="text" fontWeight="semibold">Outlined</Typography>
            <Typography type="text" fontSize="sm" color="secondary">Border with transparent background. Best for content sections and form groups.</Typography>
          </Card>
          <Card variant="filled">
            <Typography type="text" fontWeight="semibold">Filled</Typography>
            <Typography type="text" fontSize="sm" color="secondary">Surface background, no visible border. Best for subtle content grouping.</Typography>
          </Card>
        </Stack>
      </ShowcaseCard>

      {/* Background */}
      <ShowcaseCard
        title="Background"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Card variant="filled" bg="primary">...</Card>
  <Card variant="filled" bg="secondary">...</Card>
</Stack>`}
      >
        <Stack spacing={2}>
          <Card variant="filled" bg="primary" sx={{ border: 1, borderColor: "divider" }}>
            <Typography type="text" fontWeight="semibold">Primary</Typography>
            <Typography type="text" fontSize="sm" color="secondary">Paper background — brighter, more prominent.</Typography>
          </Card>
          <Card variant="filled" bg="secondary">
            <Typography type="text" fontWeight="semibold">Secondary (default)</Typography>
            <Typography type="text" fontSize="sm" color="secondary">Surface background — subtler, blends in more.</Typography>
          </Card>
        </Stack>
      </ShowcaseCard>

      {/* Elevated */}
      <ShowcaseCard
        title="Elevated"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Card elevated>
    <Typography fontWeight="semibold">Outlined + Elevated</Typography>
    <Typography fontSize="sm" color="secondary">Border and shadow together.</Typography>
  </Card>
  <Card variant="filled" elevated>
    <Typography fontWeight="semibold">Filled + Elevated</Typography>
    <Typography fontSize="sm" color="secondary">Surface background with shadow depth.</Typography>
  </Card>
</Stack>`}
      >
        <Stack spacing={2}>
          <Card elevated>
            <Typography type="text" fontWeight="semibold">Outlined + Elevated</Typography>
            <Typography type="text" fontSize="sm" color="secondary">Border and shadow together. Great for prominent content cards.</Typography>
          </Card>
          <Card variant="filled" elevated>
            <Typography type="text" fontWeight="semibold">Filled + Elevated</Typography>
            <Typography type="text" fontSize="sm" color="secondary">Surface background with shadow depth. Great for floating panels.</Typography>
          </Card>
        </Stack>
      </ShowcaseCard>

      {/* Padding */}
      <ShowcaseCard
        title="Padding"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Card padding="none">...</Card>
  <Card padding="sm">...</Card>
  <Card padding="md">...</Card>
  <Card padding="lg">...</Card>
</Stack>`}
      >
        <Stack spacing={2}>
          <Card padding="none"><Box sx={{ p: "4px" }}><Typography type="text" fontSize="sm" color="secondary">padding="none"</Typography></Box></Card>
          <Card padding="sm"><SampleCardContent heading="padding=&quot;sm&quot;" /></Card>
          <Card padding="md"><SampleCardContent heading="padding=&quot;md&quot;" /></Card>
          <Card padding="lg"><SampleCardContent heading="padding=&quot;lg&quot;" /></Card>
        </Stack>
      </ShowcaseCard>

      {/* Radius */}
      <ShowcaseCard
        title="Radius"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <Card elevated radius="sm">...</Card>
  <Card elevated radius="md">...</Card>
  <Card elevated radius="lg">...</Card>
  <Card elevated radius="xl">...</Card>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Box sx={{ flex: "1 1 200px" }}><Card elevated radius="sm"><SampleCardContent heading="radius=&quot;sm&quot;" /></Card></Box>
          <Box sx={{ flex: "1 1 200px" }}><Card elevated radius="md"><SampleCardContent heading="radius=&quot;md&quot;" /></Card></Box>
          <Box sx={{ flex: "1 1 200px" }}><Card elevated radius="lg"><SampleCardContent heading="radius=&quot;lg&quot;" /></Card></Box>
          <Box sx={{ flex: "1 1 200px" }}><Card elevated radius="xl"><SampleCardContent heading="radius=&quot;xl&quot;" /></Card></Box>
        </Stack>
      </ShowcaseCard>

      {/* Hoverable & Selected */}
      <ShowcaseCard
        title="Hoverable &amp; Selected"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <Card hoverable>...</Card>
  <Card selected>...</Card>
  <Card hoverable selected>...</Card>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Box sx={{ flex: "1 1 200px" }}>
            <Card hoverable>
              <Typography type="text" fontWeight="semibold">Hoverable</Typography>
              <Typography type="text" fontSize="sm" color="secondary">Cursor and background change on hover.</Typography>
            </Card>
          </Box>
          <Box sx={{ flex: "1 1 200px" }}>
            <Card selected>
              <Typography type="text" fontWeight="semibold">Selected</Typography>
              <Typography type="text" fontSize="sm" color="secondary">2px brand border indicates selection.</Typography>
            </Card>
          </Box>
          <Box sx={{ flex: "1 1 200px" }}>
            <Card hoverable selected>
              <Typography type="text" fontWeight="semibold">Hoverable + Selected</Typography>
              <Typography type="text" fontSize="sm" color="secondary">Combined interaction and selection state.</Typography>
            </Card>
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Filled Elevated Hoverable */}
      <ShowcaseCard
        title="Filled + Elevated + Hoverable"
        code={`import { Card, Typography } from "@rate-perfect/beaconv2";

<Card variant="filled" bg="primary" elevated hoverable>
  <Typography type="text" fontWeight="semibold">Filled Primary Card</Typography>
  <Typography type="text" fontSize="sm" color="secondary">
    Elevated with hover effect. Paper background, subtle shadow, soft hover state.
  </Typography>
</Card>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Box sx={{ flex: "1 1 280px" }}>
            <Card variant="filled" bg="primary" elevated hoverable>
              <Typography type="text" fontWeight="semibold">Primary Background</Typography>
              <Typography type="text" fontSize="sm" color="secondary">
                Paper background with elevation and hover. Hover to see the subtle effect.
              </Typography>
            </Card>
          </Box>
          <Box sx={{ flex: "1 1 280px" }}>
            <Card variant="filled" bg="secondary" elevated hoverable>
              <Typography type="text" fontWeight="semibold">Secondary Background</Typography>
              <Typography type="text" fontSize="sm" color="secondary">
                Surface background with elevation and hover. Compare the hover between both.
              </Typography>
            </Card>
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Composed Example */}
      <ShowcaseCard
        title="Composed Example"
        code={`import { Card, Typography, ContentRow, RateBadge, Badge, Divider, Button } from "@rate-perfect/beaconv2";

<Card variant="filled" radius="lg" elevated hoverable>
  <ContentRow
    size="lg"
    label="Pro Plan"
    value={<RateBadge rate={9.99} size="sm" />}
  />
  <Divider spacing="0.75rem" />
  <Stack spacing={1}>
    <ContentRow size="sm" label="Provider" value="Acme Inc." />
    <ContentRow size="sm" label="Billing" value="Monthly" />
    <ContentRow size="sm" label="Users" value="Up to 10" />
    <ContentRow size="sm" label="Status" value={<Badge variant="soft" color="success" size="sm">Active</Badge>} />
  </Stack>
  <Box mt={2}>
    <Button size="sm" fullWidth>View Details</Button>
  </Box>
</Card>`}
      >
        <Box sx={{ maxWidth: 480 }}>
          <Card variant="filled" radius="lg" elevated hoverable>
            <ContentRow
              size="lg"
              label="Pro Plan"
              value={<RateBadge rate={9.99} size="sm" />}
            />
            <Divider spacing="0.75rem" />
            <Stack spacing={1}>
              <ContentRow size="sm" label="Provider" value="Acme Inc." />
              <ContentRow size="sm" label="Billing" value="Monthly" />
              <ContentRow size="sm" label="Users" value="Up to 10" />
              <ContentRow size="sm" label="Status" value={<Badge variant="soft" color="success" size="sm">Active</Badge>} />
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Button size="sm" fullWidth>View Details</Button>
            </Box>
          </Card>
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}
