import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Info, Question } from "@phosphor-icons/react";
import IconButton from "@mui/material/IconButton";
import {
  Tooltip,
  Button,
  Badge,
  Typography,
  Avatar,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function TooltipSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Tooltip, Button } from "@rate-perfect/beaconv2";

<Tooltip title="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`}
      >
        <Tooltip title="This is a tooltip">
          <Button>Hover me</Button>
        </Tooltip>
      </ShowcaseCard>

      {/* Wrapping different elements */}
      <ShowcaseCard
        title="Wrapping Different Elements"
        code={`import { Tooltip, Button, Badge, Avatar, Typography } from "@rate-perfect/beaconv2";
import IconButton from "@mui/material/IconButton";
import { Info } from "@phosphor-icons/react";

<Stack direction="row" spacing={3} alignItems="center">
  <Tooltip title="Submit your application">
    <Button>Submit</Button>
  </Tooltip>
  <Tooltip title="More information">
    <IconButton><Info /></IconButton>
  </Tooltip>
  <Tooltip title="Status: Approved">
    <Badge variant="soft" color="success">Approved</Badge>
  </Tooltip>
  <Tooltip title="Justin Alexander">
    <Avatar name="Justin Alexander" size="md" />
  </Tooltip>
  <Tooltip title="Click to copy">
    <Typography type="text" fontSize="sm" color="brand" sx={{ cursor: "pointer" }}>REF-4829</Typography>
  </Tooltip>
</Stack>`}
      >
        <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap" useFlexGap>
          <Tooltip title="Submit your application">
            <Button>Submit</Button>
          </Tooltip>
          <Tooltip title="More information">
            <IconButton><Info /></IconButton>
          </Tooltip>
          <Tooltip title="Status: Approved">
            <Badge variant="soft" color="success">Approved</Badge>
          </Tooltip>
          <Tooltip title="Justin Alexander">
            <Avatar name="Justin Alexander" size="md" />
          </Tooltip>
          <Tooltip title="Click to copy">
            <Typography type="text" fontSize="sm" color="brand" sx={{ cursor: "pointer" }}>REF-4829</Typography>
          </Tooltip>
        </Stack>
      </ShowcaseCard>

      {/* Placement */}
      <ShowcaseCard
        title="Placement"
        code={`import { Tooltip, Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <Tooltip title="Top placement" placement="top"><Button variant="outline">Top</Button></Tooltip>
  <Tooltip title="Bottom placement" placement="bottom"><Button variant="outline">Bottom</Button></Tooltip>
  <Tooltip title="Left placement" placement="left"><Button variant="outline">Left</Button></Tooltip>
  <Tooltip title="Right placement" placement="right"><Button variant="outline">Right</Button></Tooltip>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ py: 4, justifyContent: "center" }}>
          <Tooltip title="Top placement" placement="top"><Button variant="outline">Top</Button></Tooltip>
          <Tooltip title="Bottom placement" placement="bottom"><Button variant="outline">Bottom</Button></Tooltip>
          <Tooltip title="Left placement" placement="left"><Button variant="outline">Left</Button></Tooltip>
          <Tooltip title="Right placement" placement="right"><Button variant="outline">Right</Button></Tooltip>
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { Tooltip, Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <Tooltip title="Small tooltip with tighter padding" size="sm"><Button variant="soft">Small</Button></Tooltip>
  <Tooltip title="Medium tooltip, the default size" size="md"><Button variant="soft">Medium</Button></Tooltip>
  <Tooltip title="Large tooltip with more room to breathe" size="lg"><Button variant="soft">Large</Button></Tooltip>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Tooltip title="Small tooltip with tighter padding" size="sm"><Button variant="soft">Small</Button></Tooltip>
          <Tooltip title="Medium tooltip, the default size" size="md"><Button variant="soft">Medium</Button></Tooltip>
          <Tooltip title="Large tooltip with more room to breathe" size="lg"><Button variant="soft">Large</Button></Tooltip>
        </Stack>
      </ShowcaseCard>

      {/* No Arrow */}
      <ShowcaseCard
        title="No Arrow"
        code={`import { Tooltip, Button } from "@rate-perfect/beaconv2";

<Tooltip title="No arrow on this tooltip" arrow={false}>
  <Button variant="ghost">No Arrow</Button>
</Tooltip>`}
      >
        <Tooltip title="No arrow on this tooltip" arrow={false}>
          <Button variant="ghost">No Arrow</Button>
        </Tooltip>
      </ShowcaseCard>

      {/* Rich Content */}
      <ShowcaseCard
        title="Rich Content"
        code={`import { Tooltip, Button, Typography } from "@rate-perfect/beaconv2";
import { Question } from "@phosphor-icons/react";

<Tooltip
  title={
    <Box>
      <Typography type="text" fontSize="sm" fontWeight="semibold" color="inherit">
        Search Tips
      </Typography>
      <Box component="ul" sx={{ m: 0, mt: 0.5, pl: "1.25rem", fontSize: 12 }}>
        <li>Use quotes for exact phrases</li>
        <li>Add a minus sign to exclude terms</li>
        <li>Try different keyword combinations</li>
      </Box>
    </Box>
  }
  maxWidth={260}
  size="lg"
>
  <IconButton><Question /></IconButton>
</Tooltip>`}
      >
        <Tooltip
          title={
            <Box>
              <Typography type="text" fontSize="sm" fontWeight="semibold" color="inherit">
                Search Tips
              </Typography>
              <Box component="ul" sx={{ m: 0, mt: 0.5, pl: "1.25rem", fontSize: 12 }}>
                <li>Use quotes for exact phrases</li>
                <li>Add a minus sign to exclude terms</li>
                <li>Try different keyword combinations</li>
              </Box>
            </Box>
          }
          maxWidth={260}
          size="lg"
        >
          <IconButton><Question /></IconButton>
        </Tooltip>
      </ShowcaseCard>

      {/* Enter Delay */}
      <ShowcaseCard
        title="Enter Delay"
        code={`import { Tooltip, Button } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={2}>
  <Tooltip title="Instant — no delay" enterDelay={0}><Button variant="outline">0ms delay</Button></Tooltip>
  <Tooltip title="Short delay — prevents tooltip flash" enterDelay={300}><Button variant="outline">300ms delay</Button></Tooltip>
  <Tooltip title="Long delay — for secondary info" enterDelay={800}><Button variant="outline">800ms delay</Button></Tooltip>
</Stack>`}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          <Tooltip title="Instant — no delay" enterDelay={0}><Button variant="outline">0ms delay</Button></Tooltip>
          <Tooltip title="Short delay — prevents tooltip flash" enterDelay={300}><Button variant="outline">300ms delay</Button></Tooltip>
          <Tooltip title="Long delay — for secondary info" enterDelay={800}><Button variant="outline">800ms delay</Button></Tooltip>
        </Stack>
      </ShowcaseCard>

    </Stack>
  );
}
