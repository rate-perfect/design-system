import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";
import { Copy, PencilSimple, Trash, Archive, User, Gear, SignOut } from "@phosphor-icons/react";

export default function MenuSection() {
  const [anchor1, setAnchor1] = useState<null | HTMLElement>(null);
  const [anchor2, setAnchor2] = useState<null | HTMLElement>(null);
  const [anchor3, setAnchor3] = useState<null | HTMLElement>(null);
  const [anchor4, setAnchor4] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState("option-1");

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { useState } from "react";
import { Menu, MenuItem, Button } from "@rate-perfect/beaconv2";

const [anchor, setAnchor] = useState<null | HTMLElement>(null);

<Button variant="outline" onClick={(e) => setAnchor(e.currentTarget)}>
  Open Menu
</Button>

<Menu open={Boolean(anchor)} anchorEl={anchor} onClose={() => setAnchor(null)}>
  <MenuItem onClick={() => setAnchor(null)}>Option 1</MenuItem>
  <MenuItem onClick={() => setAnchor(null)}>Option 2</MenuItem>
  <MenuItem onClick={() => setAnchor(null)}>Option 3</MenuItem>
</Menu>`}
      >
        <Button variant="outline" onClick={(e) => setAnchor1(e.currentTarget)}>
          Open Menu
        </Button>
        <Menu open={Boolean(anchor1)} anchorEl={anchor1} onClose={() => setAnchor1(null)}>
          <MenuItem onClick={() => setAnchor1(null)}>Option 1</MenuItem>
          <MenuItem onClick={() => setAnchor1(null)}>Option 2</MenuItem>
          <MenuItem onClick={() => setAnchor1(null)}>Option 3</MenuItem>
        </Menu>
      </ShowcaseCard>

      {/* With Icons */}
      <ShowcaseCard
        title="With Icons"
        code={`import { useState } from "react";
import { Menu, MenuItem, Button } from "@rate-perfect/beaconv2";
import { PencilSimple, Copy, Archive, Trash } from "@phosphor-icons/react";

const [anchor, setAnchor] = useState<null | HTMLElement>(null);

<Button variant="outline" onClick={(e) => setAnchor(e.currentTarget)}>
  Actions
</Button>

<Menu open={Boolean(anchor)} anchorEl={anchor} onClose={() => setAnchor(null)}>
  <MenuItem icon={<PencilSimple size={18} />} onClick={() => setAnchor(null)}>
    Edit
  </MenuItem>
  <MenuItem icon={<Copy size={18} />} onClick={() => setAnchor(null)}>
    Duplicate
  </MenuItem>
  <MenuItem icon={<Archive size={18} />} onClick={() => setAnchor(null)}>
    Archive
  </MenuItem>
  <MenuItem icon={<Trash size={18} />} onClick={() => setAnchor(null)}>
    Delete
  </MenuItem>
</Menu>`}
      >
        <Button variant="outline" onClick={(e) => setAnchor2(e.currentTarget)}>
          Actions
        </Button>
        <Menu open={Boolean(anchor2)} anchorEl={anchor2} onClose={() => setAnchor2(null)}>
          <MenuItem icon={<PencilSimple size={18} />} onClick={() => setAnchor2(null)}>
            Edit
          </MenuItem>
          <MenuItem icon={<Copy size={18} />} onClick={() => setAnchor2(null)}>
            Duplicate
          </MenuItem>
          <MenuItem icon={<Archive size={18} />} onClick={() => setAnchor2(null)}>
            Archive
          </MenuItem>
          <MenuItem icon={<Trash size={18} />} onClick={() => setAnchor2(null)}>
            Delete
          </MenuItem>
        </Menu>
      </ShowcaseCard>

      {/* With Selected */}
      <ShowcaseCard
        title="With Selected State"
        code={`import { useState } from "react";
import { Menu, MenuItem, Button } from "@rate-perfect/beaconv2";

const [anchor, setAnchor] = useState<null | HTMLElement>(null);
const [selected, setSelected] = useState("option-1");

<Button variant="outline" onClick={(e) => setAnchor(e.currentTarget)}>
  Sort by
</Button>

<Menu open={Boolean(anchor)} anchorEl={anchor} onClose={() => setAnchor(null)}>
  <MenuItem selected={selected === "option-1"} onClick={() => { setSelected("option-1"); setAnchor(null); }}>
    Name
  </MenuItem>
  <MenuItem selected={selected === "option-2"} onClick={() => { setSelected("option-2"); setAnchor(null); }}>
    Date
  </MenuItem>
  <MenuItem selected={selected === "option-3"} onClick={() => { setSelected("option-3"); setAnchor(null); }}>
    Rating
  </MenuItem>
</Menu>`}
      >
        <Box>
          <Button variant="outline" onClick={(e) => setAnchor3(e.currentTarget)}>
            Sort by
          </Button>
          <Menu open={Boolean(anchor3)} anchorEl={anchor3} onClose={() => setAnchor3(null)}>
            <MenuItem
              selected={selected === "option-1"}
              onClick={() => { setSelected("option-1"); setAnchor3(null); }}
            >
              Name
            </MenuItem>
            <MenuItem
              selected={selected === "option-2"}
              onClick={() => { setSelected("option-2"); setAnchor3(null); }}
            >
              Date
            </MenuItem>
            <MenuItem
              selected={selected === "option-3"}
              onClick={() => { setSelected("option-3"); setAnchor3(null); }}
            >
              Rating
            </MenuItem>
          </Menu>
        </Box>
      </ShowcaseCard>
      {/* Avatar Trigger */}
      <ShowcaseCard
        title="Avatar as Trigger"
        code={`import { useState } from "react";
import { Menu, MenuItem, Avatar } from "@rate-perfect/beaconv2";
import { User, Gear, SignOut } from "@phosphor-icons/react";

const [anchor, setAnchor] = useState<null | HTMLElement>(null);

<Avatar
  name="Justin Alexander"
  size="md"
  onClick={(e) => setAnchor(e.currentTarget)}
  sx={{ cursor: "pointer" }}
/>

<Menu open={Boolean(anchor)} anchorEl={anchor} onClose={() => setAnchor(null)}>
  <MenuItem icon={<User size={18} />} onClick={() => setAnchor(null)}>
    Profile
  </MenuItem>
  <MenuItem icon={<Gear size={18} />} onClick={() => setAnchor(null)}>
    Settings
  </MenuItem>
  <MenuItem icon={<SignOut size={18} />} onClick={() => setAnchor(null)}>
    Sign out
  </MenuItem>
</Menu>`}
      >
        <Box>
          <Avatar
            name="Justin Alexander"
            size="md"
            onClick={(e) => setAnchor4(e.currentTarget as HTMLElement)}
            sx={{ cursor: "pointer" }}
          />
          <Menu open={Boolean(anchor4)} anchorEl={anchor4} onClose={() => setAnchor4(null)}>
            <MenuItem icon={<User size={18} />} onClick={() => setAnchor4(null)}>
              Profile
            </MenuItem>
            <MenuItem icon={<Gear size={18} />} onClick={() => setAnchor4(null)}>
              Settings
            </MenuItem>
            <MenuItem icon={<SignOut size={18} />} onClick={() => setAnchor4(null)}>
              Sign out
            </MenuItem>
          </Menu>
        </Box>
      </ShowcaseCard>
    </Stack>
  );
}
