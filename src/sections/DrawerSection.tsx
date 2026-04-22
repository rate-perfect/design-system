import { useState } from "react";
import Stack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { Button, Drawer, TextInput } from "@rate-perfect/beaconv2";
import type { DrawerSize } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const sizes: DrawerSize[] = ["sm", "md", "lg"];

export default function DrawerSection() {
  const [openDefault, setOpenDefault] = useState(false);
  const [openSize, setOpenSize] = useState<DrawerSize | null>(null);
  const [openFooter, setOpenFooter] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [openCombo, setOpenCombo] = useState(false);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { useState } from "react";
import { Drawer, Button } from "@rate-perfect/beaconv2";
import Typography from "@mui/material/Typography";

const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer open={open} onClose={() => setOpen(false)} title="Default Drawer">
  <Typography>This is a drawer with only the required props.</Typography>
</Drawer>`}
      >
        <Button variant="outline" onClick={() => setOpenDefault(true)}>
          Open Drawer
        </Button>
        <Drawer
          open={openDefault}
          onClose={() => setOpenDefault(false)}
          title="Default Drawer"
        >
          <MuiTypography>
            This is a drawer with only the required props.
          </MuiTypography>
        </Drawer>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { useState } from "react";
import { Drawer, Button } from "@rate-perfect/beaconv2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | null>(null);

<Stack direction="row" spacing={2}>
  <Button variant="outline" onClick={() => setOpenSize("sm")}>Open sm</Button>
  <Button variant="outline" onClick={() => setOpenSize("md")}>Open md</Button>
  <Button variant="outline" onClick={() => setOpenSize("lg")}>Open lg</Button>
</Stack>

<Drawer open={openSize === "sm"} onClose={() => setOpenSize(null)} title="Drawer — sm" size="sm">
  <Typography>This is a <strong>sm</strong> drawer. It demonstrates the 400px width.</Typography>
</Drawer>
<Drawer open={openSize === "md"} onClose={() => setOpenSize(null)} title="Drawer — md" size="md">
  <Typography>This is a <strong>md</strong> drawer. It demonstrates the 520px width.</Typography>
</Drawer>
<Drawer open={openSize === "lg"} onClose={() => setOpenSize(null)} title="Drawer — lg" size="lg">
  <Typography>This is a <strong>lg</strong> drawer. It demonstrates the 640px width.</Typography>
</Drawer>`}
      >
        <Stack direction="row" spacing={2}>
          {sizes.map((s) => (
            <Button key={s} variant="outline" onClick={() => setOpenSize(s)}>
              Open {s}
            </Button>
          ))}
        </Stack>
        {sizes.map((s) => (
          <Drawer
            key={s}
            open={openSize === s}
            onClose={() => setOpenSize(null)}
            title={`Drawer — ${s}`}
            size={s}
          >
            <MuiTypography>
              This is a <strong>{s}</strong> drawer. It demonstrates the{" "}
              {s === "sm" ? "400px" : s === "md" ? "520px" : "640px"} width.
            </MuiTypography>
          </Drawer>
        ))}
      </ShowcaseCard>

      {/* Left Anchor */}
      <ShowcaseCard
        title="Left Anchor"
        code={`import { useState } from "react";
import { Drawer, Button } from "@rate-perfect/beaconv2";
import Typography from "@mui/material/Typography";

const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Open Left Drawer</Button>

<Drawer open={open} onClose={() => setOpen(false)} title="Left Drawer" anchor="left">
  <Typography>This drawer slides in from the left.</Typography>
</Drawer>`}
      >
        <Button variant="outline" onClick={() => setOpenLeft(true)}>
          Open Left Drawer
        </Button>
        <Drawer
          open={openLeft}
          onClose={() => setOpenLeft(false)}
          title="Left Drawer"
          anchor="left"
        >
          <MuiTypography>
            This drawer slides in from the left.
          </MuiTypography>
        </Drawer>
      </ShowcaseCard>

      {/* With Footer */}
      <ShowcaseCard
        title="With Footer"
        code={`import { useState } from "react";
import { Drawer, Button } from "@rate-perfect/beaconv2";
import Typography from "@mui/material/Typography";

const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Open with footer</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  footer={
    <>
      <Button variant="outline" color="neutral" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button color="brand" onClick={() => setOpen(false)}>
        Confirm
      </Button>
    </>
  }
>
  <Typography>Are you sure you want to proceed? This action cannot be undone.</Typography>
</Drawer>`}
      >
        <Button variant="outline" onClick={() => setOpenFooter(true)}>
          Open with footer
        </Button>
        <Drawer
          open={openFooter}
          onClose={() => setOpenFooter(false)}
          title="Confirm Action"
          footer={
            <>
              <Button variant="outline" color="neutral" onClick={() => setOpenFooter(false)}>
                Cancel
              </Button>
              <Button color="brand" onClick={() => setOpenFooter(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <MuiTypography>
            Are you sure you want to proceed? This action cannot be undone.
          </MuiTypography>
        </Drawer>
      </ShowcaseCard>

      {/* Drawer + Form */}
      <ShowcaseCard
        title="Drawer + Form"
        code={`import { Drawer, Button, TextInput } from "@rate-perfect/beaconv2";

<Button variant="outline" onClick={() => setOpen(true)}>Create new item</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Create Item"
  footer={
    <>
      <Button variant="outline" color="neutral" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button color="brand" onClick={() => setOpen(false)}>
        Create
      </Button>
    </>
  }
>
  <Stack spacing={2}>
    <TextInput label="Name" fullWidth placeholder="Item name" />
    <TextInput label="Description" fullWidth multiline rows={3} placeholder="Optional description..." />
  </Stack>
</Drawer>`}
      >
        <Button variant="outline" onClick={() => setOpenCombo(true)}>
          Create new item
        </Button>
        <Drawer
          open={openCombo}
          onClose={() => setOpenCombo(false)}
          title="Create Item"
          footer={
            <>
              <Button variant="outline" color="neutral" onClick={() => setOpenCombo(false)}>
                Cancel
              </Button>
              <Button color="brand" onClick={() => setOpenCombo(false)}>
                Create
              </Button>
            </>
          }
        >
          <Stack spacing={2}>
            <TextInput label="Name" fullWidth placeholder="Item name" />
            <TextInput
              label="Description"
              fullWidth
              multiline
              rows={3}
              placeholder="Optional description..."
            />
          </Stack>
        </Drawer>
      </ShowcaseCard>
    </Stack>
  );
}
