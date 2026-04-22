import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Snackbar, Button } from "@rate-perfect/beaconv2";
import type { SnackbarVariant, BrandColorName } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";
import { CheckCircle, WarningCircle, Warning, Info } from "@phosphor-icons/react";

const variants: SnackbarVariant[] = ["soft", "filled", "outline"];
const colors: BrandColorName[] = ["brand", "neutral", "success", "warning", "error"];

function TriggeredSnackbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Box>
      <Button size="md" variant="filled" color="brand" onClick={() => setOpen(true)}>
        Show Snackbar
      </Button>
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1400,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <div>
            <Snackbar
              variant="filled"
              color="success"
              icon={<CheckCircle />}
              message="Changes saved"
              description="Your profile has been updated."
            />
          </div>
        </Slide>
      </Box>
    </Box>
  );
}

function MultiTrigger() {
  const [toasts, setToasts] = useState<
    { id: number; color: BrandColorName; message: string; icon: React.ReactNode }[]
  >([]);

  const presets = [
    { color: "success" as const, message: "File uploaded", icon: <CheckCircle /> },
    { color: "error" as const, message: "Upload failed", icon: <WarningCircle /> },
    { color: "warning" as const, message: "Storage almost full", icon: <Warning /> },
    { color: "brand" as const, message: "New update available", icon: <Info /> },
  ];

  const addToast = (preset: (typeof presets)[number]) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, ...preset }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {presets.map((p) => (
          <Button key={p.color} size="sm" variant="outline" color={p.color} onClick={() => addToast(p)}>
            Trigger {p.color}
          </Button>
        ))}
      </Stack>
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1400,
          display: "flex",
          flexDirection: "column-reverse",
          gap: "8px",
        }}
      >
        {toasts.map((toast) => (
          <Slide key={toast.id} direction="up" in mountOnEnter unmountOnExit>
            <div>
              <Snackbar
                variant="filled"
                color={toast.color}
                icon={toast.icon}
                message={toast.message}
              />
            </div>
          </Slide>
        ))}
      </Box>
    </Box>
  );
}

export default function SnackbarSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Snackbar } from "@rate-perfect/beaconv2";

<Snackbar message="Something happened" />`}
      >
        <Snackbar message="Something happened" />
      </ShowcaseCard>

      {/* With description */}
      <ShowcaseCard
        title="With Description"
        code={`<Snackbar
  message="Changes saved"
  description="Your profile has been updated successfully."
  color="success"
/>`}
      >
        <Snackbar
          message="Changes saved"
          description="Your profile has been updated successfully."
          color="success"
        />
      </ShowcaseCard>

      {/* Variants */}
      <ShowcaseCard
        title="Variants"
        code={`<Stack spacing={2}>
  <Snackbar variant="soft" color="brand" message="Soft variant" />
  <Snackbar variant="filled" color="brand" message="Filled variant" />
  <Snackbar variant="outline" color="brand" message="Outline variant" />
</Stack>`}
      >
        <Stack spacing={2}>
          {variants.map((variant) => (
            <Snackbar
              key={variant}
              variant={variant}
              color="brand"
              message={`${variant.charAt(0).toUpperCase() + variant.slice(1)} variant`}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* Colors */}
      <ShowcaseCard
        title="Colors"
        code={`import { Snackbar } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <Snackbar color="brand" message="Brand notification" />
  <Snackbar color="neutral" message="Neutral notification" />
  <Snackbar color="success" message="Success notification" />
  <Snackbar color="warning" message="Warning notification" />
  <Snackbar color="error" message="Error notification" />
</Stack>`}
      >
        <Stack spacing={2}>
          {colors.map((color) => (
            <Snackbar
              key={color}
              color={color}
              message={`${color.charAt(0).toUpperCase() + color.slice(1)} notification`}
            />
          ))}
        </Stack>
      </ShowcaseCard>

      {/* With icons */}
      <ShowcaseCard
        title="With Icons"
        code={`<Stack spacing={2}>
  <Snackbar color="success" icon={<CheckCircle />} message="Operation successful" />
  <Snackbar color="error" icon={<WarningCircle />} message="Something went wrong" />
  <Snackbar color="warning" icon={<Warning />} message="Proceed with caution" />
  <Snackbar color="brand" icon={<Info />} message="New update available" />
</Stack>`}
      >
        <Stack spacing={2}>
          <Snackbar color="success" icon={<CheckCircle />} message="Operation successful" />
          <Snackbar color="error" icon={<WarningCircle />} message="Something went wrong" />
          <Snackbar color="warning" icon={<Warning />} message="Proceed with caution" />
          <Snackbar color="brand" icon={<Info />} message="New update available" />
        </Stack>
      </ShowcaseCard>

      {/* With action */}
      <ShowcaseCard
        title="With Action"
        code={`<Snackbar
  color="brand"
  message="New version available"
  description="Version 2.0 is ready to install."
  action={<Button size="sm" variant="ghost" color="brand">Update</Button>}
/>`}
      >
        <Snackbar
          color="brand"
          message="New version available"
          description="Version 2.0 is ready to install."
          action={<Button size="sm" variant="ghost" color="brand">Update</Button>}
        />
      </ShowcaseCard>

      {/* Triggered snackbar */}
      <ShowcaseCard
        title="Triggered (Toast)"
        code={`// Position the snackbar fixed to the viewport
// Use MUI Slide for the entrance animation
// Auto-dismiss after 3 seconds

<Button onClick={() => setOpen(true)}>Show Snackbar</Button>

<Slide direction="up" in={open}>
  <Snackbar
    variant="filled"
    color="success"
    icon={<CheckCircle />}
    message="Changes saved"
  />
</Slide>`}
      >
        <TriggeredSnackbar />
      </ShowcaseCard>

      {/* Multiple triggered snackbars */}
      <ShowcaseCard
        title="Stacked Toasts"
        code={`// Trigger multiple snackbars that stack
// Each auto-dismisses after 4 seconds

<Button onClick={() => addToast("success")}>Trigger success</Button>
<Button onClick={() => addToast("error")}>Trigger error</Button>`}
      >
        <MultiTrigger />
      </ShowcaseCard>

      {/* Filled colors matrix */}
      <ShowcaseCard
        title="Filled × All Colors"
        code={`<Stack spacing={2}>
  {["brand", "neutral", "success", "warning", "error"].map(color => (
    <Snackbar key={color} variant="filled" color={color} message={\`Filled \${color}\`} />
  ))}
</Stack>`}
      >
        <Stack spacing={2}>
          {colors.map((color) => (
            <Snackbar
              key={color}
              variant="filled"
              color={color}
              message={`Filled ${color}`}
            />
          ))}
        </Stack>
      </ShowcaseCard>
    </Stack>
  );
}
