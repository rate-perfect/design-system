import { useState } from "react";
import Stack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { Button, Modal, TextInput } from "@rate-perfect/beaconv2";
import type { ModalSize } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

const sizes: ModalSize[] = ["sm", "md", "lg"];

export default function ModalSection() {
  const [openSize, setOpenSize] = useState<ModalSize | null>(null);
  const [openFooter, setOpenFooter] = useState(false);
  const [openCombo, setOpenCombo] = useState(false);

  const [openDefault, setOpenDefault] = useState(false);

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { useState } from "react";
import { Modal, Button } from "@rate-perfect/beaconv2";
import Typography from "@mui/material/Typography";

const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open} onClose={() => setOpen(false)} title="Default Modal">
  <Typography>This is a modal with only the required props.</Typography>
</Modal>`}
      >
        <Button variant="outline" onClick={() => setOpenDefault(true)}>
          Open Modal
        </Button>
        <Modal
          open={openDefault}
          onClose={() => setOpenDefault(false)}
          title="Default Modal"
        >
          <MuiTypography>
            This is a modal with only the required props.
          </MuiTypography>
        </Modal>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { useState } from "react";
import { Modal, Button } from "@rate-perfect/beaconv2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const [openSize, setOpenSize] = useState<"sm" | "md" | "lg" | null>(null);

<Stack direction="row" spacing={2}>
  <Button variant="outline" onClick={() => setOpenSize("sm")}>Open sm</Button>
  <Button variant="outline" onClick={() => setOpenSize("md")}>Open md</Button>
  <Button variant="outline" onClick={() => setOpenSize("lg")}>Open lg</Button>
</Stack>

<Modal open={openSize === "sm"} onClose={() => setOpenSize(null)} title="Modal — sm" size="sm">
  <Typography>This is a <strong>sm</strong> modal. It demonstrates the 440px max width.</Typography>
</Modal>
<Modal open={openSize === "md"} onClose={() => setOpenSize(null)} title="Modal — md" size="md">
  <Typography>This is a <strong>md</strong> modal. It demonstrates the 560px max width.</Typography>
</Modal>
<Modal open={openSize === "lg"} onClose={() => setOpenSize(null)} title="Modal — lg" size="lg">
  <Typography>This is a <strong>lg</strong> modal. It demonstrates the 720px max width.</Typography>
</Modal>`}
      >
        <Stack direction="row" spacing={2}>
          {sizes.map((s) => (
            <Button key={s} variant="outline" onClick={() => setOpenSize(s)}>
              Open {s}
            </Button>
          ))}
        </Stack>
        {sizes.map((s) => (
          <Modal
            key={s}
            open={openSize === s}
            onClose={() => setOpenSize(null)}
            title={`Modal — ${s}`}
            size={s}
          >
            <MuiTypography>
              This is a <strong>{s}</strong> modal. It demonstrates the{" "}
              {s === "sm" ? "440px" : s === "md" ? "560px" : "720px"} max
              width.
            </MuiTypography>
          </Modal>
        ))}
      </ShowcaseCard>

      {/* With Footer */}
      <ShowcaseCard
        title="With Footer"
        code={`import { useState } from "react";
import { Modal, Button } from "@rate-perfect/beaconv2";
import Typography from "@mui/material/Typography";

const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Open with footer</Button>

<Modal
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
</Modal>`}
      >
        <Button variant="outline" onClick={() => setOpenFooter(true)}>
          Open with footer
        </Button>
        <Modal
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
        </Modal>
      </ShowcaseCard>

      {/* Modal + TextInput Combo */}
      <ShowcaseCard
        title="Modal + TextInput"
        code={`import { useState } from "react";
import { Modal, Button, TextInput } from "@rate-perfect/beaconv2";
import Stack from "@mui/material/Stack";

const [open, setOpen] = useState(false);

<Button variant="outline" onClick={() => setOpen(true)}>Create new list</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Create List"
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
    <TextInput label="List Name" fullWidth placeholder="My Project" />
    <TextInput label="Description" fullWidth multiline rows={3} placeholder="Optional description..." />
  </Stack>
</Modal>`}
      >
        <Button variant="outline" onClick={() => setOpenCombo(true)}>
          Create new list
        </Button>
        <Modal
          open={openCombo}
          onClose={() => setOpenCombo(false)}
          title="Create List"
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
            <TextInput label="List Name" fullWidth placeholder="My Project" />
            <TextInput
              label="Description"
              fullWidth
              multiline
              rows={3}
              placeholder="Optional description..."
            />
          </Stack>
        </Modal>
      </ShowcaseCard>
    </Stack>
  );
}
