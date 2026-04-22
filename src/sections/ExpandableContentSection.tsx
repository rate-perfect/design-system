import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non prosequat.";

const shortText = "This content is short enough that it won't overflow.";

const bulletList = `
  All team members have access to the shared workspace by default.
  Storage is allocated per project, with a maximum of 10 GB each.
  Admin users can manage permissions and billing from the dashboard.
  Two-factor authentication is required for all organization accounts.
  API rate limits apply: 1,000 requests per minute for Pro plans.
  Data exports are available in CSV, JSON, and PDF formats.
`;

export default function ExpandableContentSection() {
  const [controlled, setControlled] = useState(false);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";

<ExpandableContent>
  <Typography>Long content that will be truncated with a gradient fade...</Typography>
</ExpandableContent>`}
      >
        <ExpandableContent>
          <Typography>{longText}</Typography>
        </ExpandableContent>
      </ShowcaseCard>

      {/* Custom Max Height */}
      <ShowcaseCard
        title="Custom Max Height"
        code={`import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";

<Stack spacing={3}>
  <ExpandableContent maxHeight={40}>
    <p>maxHeight={40} — very compact</p>
  </ExpandableContent>
  <ExpandableContent maxHeight={100}>
    <p>maxHeight={100} — more room</p>
  </ExpandableContent>
</Stack>`}
      >
        <Stack spacing={3}>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>maxHeight=40</Box>
            <ExpandableContent maxHeight={40}>
              <Typography>{longText}</Typography>
            </ExpandableContent>
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>maxHeight=100</Box>
            <ExpandableContent maxHeight={100}>
              <Typography>{longText}</Typography>
            </ExpandableContent>
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* No Overflow */}
      <ShowcaseCard
        title="No Overflow (no toggle shown)"
        code={`import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";

<ExpandableContent>
  <Typography>Short content — no toggle appears.</Typography>
</ExpandableContent>`}
      >
        <ExpandableContent>
          <Typography>{shortText}</Typography>
        </ExpandableContent>
      </ShowcaseCard>

      {/* With Rich Content */}
      <ShowcaseCard
        title="With Rich Content"
        code={`import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";

<ExpandableContent maxHeight={80}>
  <ul>
    <li>Guideline item one</li>
    <li>Guideline item two</li>
    <li>Guideline item three</li>
    ...
  </ul>
</ExpandableContent>`}
      >
        <ExpandableContent maxHeight={80}>
          <Box component="ul" sx={{ m: 0, pl: "1.25rem", fontSize: 14 }}>
            {bulletList.trim().split("\n").map((line, i) => (
              <li key={i}>{line.trim()}</li>
            ))}
          </Box>
        </ExpandableContent>
      </ShowcaseCard>

      {/* Custom Labels */}
      <ShowcaseCard
        title="Custom Labels"
        code={`import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";

<ExpandableContent showMoreLabel="Read more" showLessLabel="Read less">
  <Typography>Long content...</Typography>
</ExpandableContent>`}
      >
        <ExpandableContent showMoreLabel="Read more" showLessLabel="Read less">
          <Typography>{longText}</Typography>
        </ExpandableContent>
      </ShowcaseCard>

      {/* Controlled */}
      <ShowcaseCard
        title="Controlled"
        code={`import { ExpandableContent, Typography } from "@rate-perfect/beaconv2";

const [expanded, setExpanded] = useState(false);

<ExpandableContent expanded={expanded} onToggle={() => setExpanded(!expanded)}>
  <Typography>Parent controls the expanded state.</Typography>
</ExpandableContent>`}
      >
        <ExpandableContent expanded={controlled} onToggle={() => setControlled(!controlled)}>
          <Typography>{longText}</Typography>
        </ExpandableContent>
      </ShowcaseCard>
    </Stack>
  );
}
