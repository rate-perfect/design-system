import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiTypography from "@mui/material/Typography";
import { ThemeToggle } from "@rate-perfect/beaconv2";
import ButtonSection from "./sections/ButtonSection";
import TypographySection from "./sections/TypographySection";
import BadgeSection from "./sections/BadgeSection";
import FeatureIconSection from "./sections/FeatureIconSection";
import TextInputSection from "./sections/TextInputSection";
import ModalSection from "./sections/ModalSection";
import PaletteSection from "./sections/PaletteSection";
import AvatarSection from "./sections/AvatarSection";
import TabsSection from "./sections/TabsSection";
import AlertSection from "./sections/AlertSection";
import AutocompleteInputSection from "./sections/AutocompleteInputSection";
import SkeletonSection from "./sections/SkeletonSection";
import SnackbarSection from "./sections/SnackbarSection";
import SelectSection from "./sections/SelectSection";
import MultiSelectSection from "./sections/MultiSelectSection";
import CloseButtonSection from "./sections/CloseButtonSection";
import MenuSection from "./sections/MenuSection";
import DrawerSection from "./sections/DrawerSection";
import DatePickerSection from "./sections/DatePickerSection";
import FileInputSection from "./sections/FileInputSection";
import ToggleButtonSection from "./sections/ToggleButtonSection";
import DividerSection from "./sections/DividerSection";
import RateBadgeSection from "./sections/RateBadgeSection";
import ContentRowSection from "./sections/ContentRowSection";
import EmptyStateSection from "./sections/EmptyStateSection";
import ExpandableContentSection from "./sections/ExpandableContentSection";
import CardSection from "./sections/CardSection";
import TooltipSection from "./sections/TooltipSection";
import BackButtonSection from "./sections/BackButtonSection";
import TableSection from "./sections/TableSection";
import SegmentedControlSection from "./sections/SegmentedControlSection";
import CheckboxSection from "./sections/CheckboxSection";
import ThemeToggleSection from "./sections/ThemeToggleSection";

const componentGroups = [
  {
    label: "Foundation",
    items: [
      { id: "palette", label: "Palette" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    label: "General",
    items: [
      { id: "badge", label: "Badge" },
      { id: "button", label: "Button" },
      { id: "card", label: "Card" },
      { id: "close-button", label: "Close Button" },
      { id: "divider", label: "Divider" },
      { id: "segmented-control", label: "Segmented Control" },
      { id: "theme-toggle", label: "Theme Toggle" },
      { id: "toggle-button", label: "Toggle Button" },
      { id: "tooltip", label: "Tooltip" },
    ],
  },
  {
    label: "Data Display",
    items: [
      { id: "avatar", label: "Avatar" },
      { id: "content-row", label: "Content Row" },
      { id: "expandable-content", label: "Expandable Content" },
      { id: "feature-icon", label: "Feature Icon" },
      { id: "rate-badge", label: "Rate Badge" },
      { id: "skeletons", label: "Skeletons" },
      { id: "table", label: "Table" },
    ],
  },
  {
    label: "Inputs",
    items: [
      { id: "autocomplete-input", label: "Auto Complete" },
      { id: "checkbox", label: "Checkbox" },
      { id: "date-picker", label: "Date Picker" },
      { id: "file-input", label: "File Input" },
      { id: "multi-select", label: "Multi Select" },
      { id: "select", label: "Select" },
      { id: "text-input", label: "Text Input" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { id: "alert", label: "Alert" },
      { id: "empty-state", label: "Empty State" },
      { id: "snackbar", label: "Snackbar" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { id: "back-button", label: "Back Button" },
      { id: "menu", label: "Menu" },
      { id: "tabs", label: "Tabs" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { id: "drawer", label: "Drawer" },
      { id: "modal", label: "Modal" },
    ],
  },
] as const;

type ComponentItem = (typeof componentGroups)[number]["items"][number];
type ComponentId = ComponentItem["id"];

const components = componentGroups.flatMap((g) => [...g.items]) as ComponentItem[];

const sectionMap: Record<ComponentId, React.ComponentType> = {
  palette: PaletteSection,
  button: ButtonSection,
  typography: TypographySection,
  badge: BadgeSection,
  "feature-icon": FeatureIconSection,
  "text-input": TextInputSection,
  modal: ModalSection,
  avatar: AvatarSection,
  tabs: TabsSection,
  alert: AlertSection,
  "autocomplete-input": AutocompleteInputSection,
  skeletons: SkeletonSection,
  snackbar: SnackbarSection,
  select: SelectSection,
  "multi-select": MultiSelectSection,
  "close-button": CloseButtonSection,
  menu: MenuSection,
  drawer: DrawerSection,
  "date-picker": DatePickerSection,
  "file-input": FileInputSection,
  checkbox: CheckboxSection,
  "theme-toggle": ThemeToggleSection,
  "toggle-button": ToggleButtonSection,
  "segmented-control": SegmentedControlSection,
  divider: DividerSection,
  "rate-badge": RateBadgeSection,
  "content-row": ContentRowSection,
  "empty-state": EmptyStateSection,
  table: TableSection,
  "expandable-content": ExpandableContentSection,
  card: CardSection,
  tooltip: TooltipSection,
  "back-button": BackButtonSection,
};

export const App = () => {
  const [activeId, setActiveId] = useState<ComponentId>("palette");

  const ActiveSection = sectionMap[activeId];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: "240px",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          borderRight: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box sx={{ px: 2, pt: 3, pb: 1 }}>
          <MuiTypography variant="h6" fontWeight={700}>
            Perfecti
          </MuiTypography>
          <MuiTypography variant="caption" color="text.secondary">
            Design System
          </MuiTypography>
        </Box>

        {/* Scrollable nav */}
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            py: 1,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {componentGroups.map((group) => (
            <Box key={group.label}>
              <MuiTypography
                variant="overline"
                sx={{ px: "12px", mt: 1.5, mb: 0.5, display: "block" }}
              >
                {group.label}
              </MuiTypography>
              {group.items.map(({ id, label }) => (
                <Box
                  key={id}
                  onClick={() => setActiveId(id)}
                  sx={{
                    px: "12px",
                    py: "6px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: activeId === id ? 600 : 400,
                    fontSize: "0.875rem",
                    color: activeId === id ? "var(--mui-brand-brand-main)" : "text.secondary",
                    bgcolor: activeId === id ? "var(--mui-brand-brand-softBg)" : "transparent",
                    "&:hover": {
                      bgcolor: activeId === id ? "var(--mui-brand-brand-softBg)" : "action.hover",
                    },
                    transition: "background-color 0.15s, color 0.15s",
                  }}
                >
                  {label}
                </Box>
              ))}
            </Box>
          ))}
        </Box>

        {/* Footer */}
        <Box sx={{ px: 2, py: 2, borderTop: 1, borderColor: "divider" }}>
          <ThemeToggle />
        </Box>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, py: 4, px: 4, minWidth: 0, ml: "240px" }}>
        <Stack spacing={4}>
          <Box>
            <MuiTypography variant="h3" fontWeight={700} gutterBottom>
              {components.find((c) => c.id === activeId)?.label ?? "Palette"}
            </MuiTypography>
            <MuiTypography variant="body1" color="text.secondary">
              Component showcase — toggle between light and dark mode to see all
              combinations.
            </MuiTypography>
          </Box>

          <ActiveSection />
        </Stack>
      </Box>
    </Box>
  );
};
