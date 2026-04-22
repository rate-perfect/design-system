import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Avatar } from "@rate-perfect/beaconv2";
import type { AvatarSize, AvatarShape, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const sizes: AvatarSize[] = ["sm", "md", "lg"];
const shapes: AvatarShape[] = ["circle", "rounded"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];

export default function AvatarSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Avatar name="John Doe" />`}
      >
        <Avatar name="John Doe" />
      </ShowcaseCard>

      {/* With Image */}
      <ShowcaseCard
        title="With Image"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Avatar
  name="Jane Doe"
  src="https://i.pravatar.cc/150?img=3"
/>`}
      >
        <Avatar
          name="Jane Doe"
          src="https://i.pravatar.cc/150?img=3"
        />
      </ShowcaseCard>

      {/* Initials */}
      <ShowcaseCard
        title="Initials"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Avatar name="John Doe" color="brand" />
  <Avatar name="Alice Smith" color="neutral" />
  <Avatar name="Bob" color="success" />
  <Avatar name="Charlie Michael Brown" color="warning" />
  <Avatar name="Eve Wilson" color="error" />
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {colors.map((c, i) => (
            <Avatar
              key={c}
              name={["John Doe", "Alice Smith", "Bob", "Charlie Michael Brown", "Eve Wilson"][i]}
              color={c}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Avatar name="John Doe" size="sm" />
  <Avatar name="John Doe" size="md" />
  <Avatar name="John Doe" size="lg" />
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {sizes.map((s) => (
            <Avatar key={s} name="John Doe" size={s} />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Shapes */}
      <ShowcaseCard
        title="Shapes"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Avatar name="John Doe" shape="rounded" />
  <Avatar name="John Doe" shape="circle" />
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {shapes.map((sh) => (
            <Avatar key={sh} name="John Doe" shape={sh} />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Clickable */}
      <ShowcaseCard
        title="Clickable"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Avatar
  name="John Doe"
  onClick={() => alert("Clicked!")}
/>`}
      >
        <Avatar
          name="John Doe"
          onClick={() => alert("Clicked!")}
        />
      </ShowcaseCard>

      {/* Indicator */}
      <ShowcaseCard
        title="Indicator"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Avatar name="John Doe" indicator indicatorColor="error" />
  <Avatar name="John Doe" indicator indicatorColor="success" />
  <Avatar name="John Doe" indicator indicatorColor="warning" />
  <Avatar name="John Doe" indicator indicatorColor="brand" />
  <Avatar name="John Doe" indicator indicatorColor="neutral" />
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {colors.map((c) => (
            <Stack key={c} alignItems="center" spacing={0.5}>
              <Avatar
                name="John Doe"
                indicator
                indicatorColor={c}
              />
              <Typography variant="caption" color="text.secondary">
                {c}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Indicator Sizes */}
      <ShowcaseCard
        title="Indicator Sizes"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Stack direction="row" spacing={1.5} alignItems="center">
  <Avatar name="John Doe" size="sm" indicator />
  <Avatar name="John Doe" size="md" indicator />
  <Avatar name="John Doe" size="lg" indicator />
</Stack>`}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {sizes.map((s) => (
            <Avatar key={s} name="John Doe" size={s} indicator />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Fallback */}
      <ShowcaseCard
        title="Fallback"
        code={`import { Avatar } from "@rate-perfect/beaconv2";

<Avatar
  name="Jane Doe"
  src="https://broken-url.example/avatar.png"
  color="success"
/>`}
      >
        <Avatar
          name="Jane Doe"
          src="https://broken-url.example/avatar.png"
          color="success"
        />
      </ShowcaseCard>

    </Stack>
  );
}
