import { useState } from "react";
import Stack from "@mui/material/Stack";
import { House, Gear, User } from "@phosphor-icons/react";
import { Tabs, Tab } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function TabsSection() {
  const [value1, setValue1] = useState("one");
  const [value2, setValue2] = useState("one");

  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Tabs, Tab } from "@rate-perfect/beaconv2";

<Tabs value="one" onChange={(e, v) => console.log(v)}>
  <Tab label="Tab One" value="one" />
  <Tab label="Tab Two" value="two" />
  <Tab label="Tab Three" value="three" />
</Tabs>`}
      >
        <Tabs value={value1} onChange={(_, v) => setValue1(v)}>
          <Tab label="Tab One" value="one" />
          <Tab label="Tab Two" value="two" />
          <Tab label="Tab Three" value="three" />
        </Tabs>
      </ShowcaseCard>

      {/* With Icons */}
      <ShowcaseCard
        title="With Icons"
        code={`import { Tabs, Tab } from "@rate-perfect/beaconv2";
import { House, User, Gear } from "@phosphor-icons/react";

<Tabs value="one" onChange={(e, v) => console.log(v)}>
  <Tab icon={<House />} label="Home" value="one" />
  <Tab icon={<User />} label="Profile" value="two" />
  <Tab icon={<Gear />} label="Settings" value="three" />
</Tabs>`}
      >
        <Tabs value={value2} onChange={(_, v) => setValue2(v)}>
          <Tab icon={<House />} label="Home" value="one" />
          <Tab icon={<User />} label="Profile" value="two" />
          <Tab icon={<Gear />} label="Settings" value="three" />
        </Tabs>
      </ShowcaseCard>
    </Stack>
  );
}
