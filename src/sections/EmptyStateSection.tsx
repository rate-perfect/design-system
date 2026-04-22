import Stack from "@mui/material/Stack";
import { MagnifyingGlass, Funnel, Plus } from "@phosphor-icons/react";
import { EmptyState, FeatureIcon, Button } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function EmptyStateSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { EmptyState } from "@rate-perfect/beaconv2";

<EmptyState title="No results found" />`}
      >
        <EmptyState title="No results found" />
      </ShowcaseCard>

      {/* With Description */}
      <ShowcaseCard
        title="With Description"
        code={`import { EmptyState } from "@rate-perfect/beaconv2";

<EmptyState
  title="No results found"
  description="Try adjusting your filters or search criteria to find what you're looking for."
/>`}
      >
        <EmptyState
          title="No results found"
          description="Try adjusting your filters or search criteria to find what you're looking for."
        />
      </ShowcaseCard>

      {/* With Icon */}
      <ShowcaseCard
        title="With Icon"
        code={`import { EmptyState, FeatureIcon } from "@rate-perfect/beaconv2";
import { MagnifyingGlass } from "@phosphor-icons/react";

<EmptyState
  icon={<FeatureIcon icon={<MagnifyingGlass />} size="lg" variant="muted" radius="full" />}
  title="No results found"
  description="Try adjusting your filters or search criteria."
/>`}
      >
        <EmptyState
          icon={<FeatureIcon icon={<MagnifyingGlass />} size="lg" variant="muted" radius="full" />}
          title="No results found"
          description="Try adjusting your filters or search criteria."
        />
      </ShowcaseCard>

      {/* With Action */}
      <ShowcaseCard
        title="With Action"
        code={`import { EmptyState, FeatureIcon, Button } from "@rate-perfect/beaconv2";
import { Funnel } from "@phosphor-icons/react";

<EmptyState
  icon={<FeatureIcon icon={<Funnel />} size="lg" variant="muted" radius="full" />}
  title="No results found"
  description="Your current filters returned no matches."
  action={<Button variant="ghost" color="error">Clear Filters</Button>}
/>`}
      >
        <EmptyState
          icon={<FeatureIcon icon={<Funnel />} size="lg" variant="muted" radius="full" />}
          title="No results found"
          description="Your current filters returned no matches."
          action={<Button variant="ghost" color="error">Clear Filters</Button>}
        />
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { EmptyState, Button } from "@rate-perfect/beaconv2";

<Stack spacing={2}>
  <EmptyState size="sm" title="No items" description="Nothing here yet." action={<Button size="sm">Add Item</Button>} />
  <EmptyState size="md" title="No items" description="Nothing here yet." action={<Button size="md">Add Item</Button>} />
  <EmptyState size="lg" title="No items" description="Nothing here yet." action={<Button size="lg">Add Item</Button>} />
</Stack>`}
      >
        <Stack spacing={2}>
          <EmptyState size="sm" title="No items" description="Nothing here yet." action={<Button size="sm">Add Item</Button>} />
          <EmptyState size="md" title="No items" description="Nothing here yet." action={<Button size="md">Add Item</Button>} />
          <EmptyState size="lg" title="No items" description="Nothing here yet." action={<Button size="lg">Add Item</Button>} />
        </Stack>
      </ShowcaseCard>

      {/* Full Example */}
      <ShowcaseCard
        title="Full Example"
        code={`import { EmptyState, FeatureIcon, Button } from "@rate-perfect/beaconv2";
import { Plus } from "@phosphor-icons/react";

<EmptyState
  icon={<FeatureIcon icon={<Plus />} size="xl" variant="muted" color="brand" radius="full" />}
  title="No comparisons yet"
  description="Create your first comparison to start evaluating products side by side."
  action={<Button>Create Comparison</Button>}
  size="lg"
/>`}
      >
        <EmptyState
          icon={<FeatureIcon icon={<Plus />} size="xl" variant="muted" color="brand" radius="full" />}
          title="No comparisons yet"
          description="Create your first comparison to start evaluating products side by side."
          action={<Button>Create Comparison</Button>}
          size="lg"
        />
      </ShowcaseCard>
    </Stack>
  );
}
