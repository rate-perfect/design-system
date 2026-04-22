import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {
  Table,
  Badge,
  RateBadge,
  EmptyState,
  Button,
  Avatar,
  FeatureIcon,
} from "@rate-perfect/beaconv2";
import type { TableColumn, TableSortDirection } from "@rate-perfect/beaconv2";
import { MagnifyingGlass, Gauge, Shield, Globe } from "@phosphor-icons/react";
import ShowcaseCard from "../components/ShowcaseCard";

interface Product {
  id: number;
  name: string;
  category: string;
  score: number;
  plan: string;
  usage: string;
  status: "approved" | "pending" | "rejected";
}

const sampleData: Product[] = [
  { id: 1, name: "Dashboard Pro", category: "Analytics", score: 4.99, plan: "Enterprise", usage: "80%", status: "approved" },
  { id: 2, name: "Chat Widget", category: "Support", score: 5.45, plan: "Team", usage: "75%", status: "pending" },
  { id: 3, name: "Auth Service", category: "Security", score: 5.12, plan: "Enterprise", usage: "80%", status: "approved" },
  { id: 4, name: "Email API", category: "Messaging", score: 5.89, plan: "Starter", usage: "65%", status: "rejected" },
  { id: 5, name: "File Storage", category: "Cloud", score: 5.25, plan: "Team", usage: "80%", status: "approved" },
  { id: 6, name: "CDN Edge", category: "Network", score: 6.15, plan: "Starter", usage: "70%", status: "pending" },
  { id: 7, name: "Search Index", category: "Data", score: 5.65, plan: "Team", usage: "75%", status: "approved" },
  { id: 8, name: "CI Pipeline", category: "DevOps", score: 4.79, plan: "Enterprise", usage: "80%", status: "approved" },
];

const statusColorMap: Record<string, "success" | "warning" | "error"> = {
  approved: "success",
  pending: "warning",
  rejected: "error",
};

const baseColumns: TableColumn<Product>[] = [
  { id: "name", header: "Product", accessor: (row) => row.name },
  { id: "category", header: "Category", accessor: (row) => row.category },
  { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
  { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center" },
  { id: "usage", header: "Usage", accessor: (row) => row.usage, align: "center" },
  {
    id: "status",
    header: "Status",
    align: "center",
    render: (row) => (
      <Badge variant="soft" color={statusColorMap[row.status]} size="sm">
        {row.status}
      </Badge>
    ),
  },
];

const sortableColumns: TableColumn<Product>[] = baseColumns.map((col) => {
  if (col.id === "name" || col.id === "category") return { ...col, sortable: true, sortDirection: "asc" as const };
  if (col.id === "score") return { ...col, sortable: true, sortDirection: "asc" as const };
  return col;
});

function SortableExample() {
  const [sortCol, setSortCol] = useState<string | undefined>(undefined);
  const [data, setData] = useState(sampleData);

  const handleSort = (columnId: string, direction: TableSortDirection | null) => {
    if (direction === null) {
      setSortCol(undefined);
      setData(sampleData);
      return;
    }
    setSortCol(columnId);
    const sorted = [...sampleData].sort((a, b) => {
      const aVal = a[columnId as keyof Product];
      const bVal = b[columnId as keyof Product];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return direction === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
    setData(sorted);
  };

  return (
    <Table
      columns={sortableColumns}
      data={data}
      rowKey={(row) => row.id}
      sortColumn={sortCol}
      onSort={handleSort}
    />
  );
}

export default function TableSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

<Table
  columns={[
    { id: "name", header: "Product", accessor: (row) => row.name },
    { id: "category", header: "Category", accessor: (row) => row.category },
    { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
  ]}
  data={data}
  rowKey={(row) => row.id}
/>`}
      >
        <Table
          columns={baseColumns.slice(0, 3)}
          data={sampleData}
          rowKey={(row) => row.id}
        />
      </ShowcaseCard>

      {/* Variants */}
      <ShowcaseCard
        title="Variants"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

const columns = [
  { id: "name", header: "Product", accessor: (row) => row.name },
  { id: "category", header: "Category", accessor: (row) => row.category },
  { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
  { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center" },
];

<Stack spacing={3}>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>bordered (default)</Box>
    <Table columns={columns} data={data} variant="bordered" rowKey={(row) => row.id} />
  </Box>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>striped</Box>
    <Table columns={columns} data={data} variant="striped" rowKey={(row) => row.id} />
  </Box>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>plain</Box>
    <Table columns={columns} data={data} variant="plain" rowKey={(row) => row.id} />
  </Box>
</Stack>`}
      >
        <Stack spacing={3}>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>bordered (default)</Box>
            <Table columns={baseColumns.slice(0, 4)} data={sampleData.slice(0, 5)} variant="bordered" rowKey={(row) => row.id} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>striped</Box>
            <Table columns={baseColumns.slice(0, 4)} data={sampleData} variant="striped" rowKey={(row) => row.id} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>plain</Box>
            <Table columns={baseColumns.slice(0, 4)} data={sampleData.slice(0, 5)} variant="plain" rowKey={(row) => row.id} />
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Bordered Prop */}
      <ShowcaseCard
        title="Bordered Prop"
        code={`import { Table } from "@rate-perfect/beaconv2";

<Stack spacing={3}>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>striped + bordered</Box>
    <Table columns={columns} data={data} variant="striped" bordered rowKey={(row) => row.id} />
  </Box>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>striped (no border)</Box>
    <Table columns={columns} data={data} variant="striped" rowKey={(row) => row.id} />
  </Box>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>plain + bordered</Box>
    <Table columns={columns} data={data} variant="plain" bordered rowKey={(row) => row.id} />
  </Box>
</Stack>`}
      >
        <Stack spacing={3}>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>striped + bordered</Box>
            <Table columns={baseColumns.slice(0, 4)} data={sampleData} variant="striped" bordered rowKey={(row) => row.id} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>striped (no border)</Box>
            <Table columns={baseColumns.slice(0, 4)} data={sampleData} variant="striped" rowKey={(row) => row.id} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>plain + bordered</Box>
            <Table columns={baseColumns.slice(0, 4)} data={sampleData.slice(0, 5)} variant="plain" bordered rowKey={(row) => row.id} />
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Sizes */}
      <ShowcaseCard
        title="Sizes"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

const columns = [
  { id: "name", header: "Product", accessor: (row) => row.name },
  { id: "category", header: "Category", accessor: (row) => row.category },
  { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
];

<Stack spacing={3}>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>sm</Box>
    <Table columns={columns} data={data.slice(0, 2)} size="sm" rowKey={(row) => row.id} />
  </Box>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>md</Box>
    <Table columns={columns} data={data.slice(0, 2)} size="md" rowKey={(row) => row.id} />
  </Box>
  <Box>
    <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>lg</Box>
    <Table columns={columns} data={data.slice(0, 2)} size="lg" rowKey={(row) => row.id} />
  </Box>
</Stack>`}
      >
        <Stack spacing={3}>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>sm</Box>
            <Table columns={baseColumns.slice(0, 3)} data={sampleData.slice(0, 2)} size="sm" rowKey={(row) => row.id} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>md</Box>
            <Table columns={baseColumns.slice(0, 3)} data={sampleData.slice(0, 2)} size="md" rowKey={(row) => row.id} />
          </Box>
          <Box>
            <Box sx={{ fontSize: 12, color: "text.secondary", mb: 0.5 }}>lg</Box>
            <Table columns={baseColumns.slice(0, 3)} data={sampleData.slice(0, 2)} size="lg" rowKey={(row) => row.id} />
          </Box>
        </Stack>
      </ShowcaseCard>

      {/* Custom Cell Rendering */}
      <ShowcaseCard
        title="Custom Cell Rendering"
        code={`import { Table, RateBadge, Badge } from "@rate-perfect/beaconv2";

const statusColorMap = {
  approved: "success",
  pending: "warning",
  rejected: "error",
};

<Table
  columns={[
    { id: "name", header: "Product", accessor: (row) => row.name },
    { id: "category", header: "Category", accessor: (row) => row.category },
    { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
    { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center" },
    { id: "usage", header: "Usage", accessor: (row) => row.usage, align: "center" },
    { id: "status", header: "Status", align: "center", render: (row) => (
      <Badge variant="soft" color={statusColorMap[row.status]} size="sm">{row.status}</Badge>
    )},
  ]}
  data={sampleData}
  rowKey={(row) => row.id}
/>`}
      >
        <Table
          columns={baseColumns}
          data={sampleData}
          rowKey={(row) => row.id}
        />
      </ShowcaseCard>

      {/* Headers with Icons */}
      <ShowcaseCard
        title="Headers with Icons"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

<Table
  columns={[
    { id: "name", header: <Box display="flex" alignItems="center" gap={1}><Gauge size={16} />Product</Box>, accessor: (row) => row.name },
    { id: "category", header: <Box display="flex" alignItems="center" gap={1}><Globe size={16} />Category</Box>, accessor: (row) => row.category },
    { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
    { id: "usage", header: <Box display="flex" alignItems="center" gap={1}><Shield size={16} />Usage</Box>, accessor: (row) => row.usage, align: "center" },
  ]}
  data={sampleData}
  rowKey={(row) => row.id}
/>`}
      >
        <Table
          columns={[
            { id: "name", header: <Box display="flex" alignItems="center" gap={1}><Gauge size={16} />Product</Box>, accessor: (row: Product) => row.name },
            { id: "category", header: <Box display="flex" alignItems="center" gap={1}><Globe size={16} />Category</Box>, accessor: (row: Product) => row.category },
            { id: "score", header: "Score", align: "right" as const, render: (row: Product) => <RateBadge rate={row.score} size="xs" /> },
            { id: "usage", header: <Box display="flex" alignItems="center" gap={1}><Shield size={16} />Usage</Box>, accessor: (row: Product) => row.usage, align: "center" as const },
          ]}
          data={sampleData.slice(0, 5)}
          rowKey={(row) => row.id}
        />
      </ShowcaseCard>

      {/* Column Borders */}
      <ShowcaseCard
        title="Column Borders"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

<Table
  columns={[
    { id: "name", header: "Product", accessor: (row) => row.name },
    { id: "category", header: "Category", accessor: (row) => row.category },
    { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
    { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center" },
    { id: "usage", header: "Usage", accessor: (row) => row.usage, align: "center" },
  ]}
  data={sampleData}
  rowKey={(row) => row.id}
  columnBorders
/>`}
      >
        <Table
          columns={baseColumns.slice(0, 5)}
          data={sampleData.slice(0, 5)}
          rowKey={(row) => row.id}
          columnBorders
        />
      </ShowcaseCard>

      {/* Sticky Columns */}
      <ShowcaseCard
        title="Sticky Columns"
        code={`import { Table, RateBadge, Badge } from "@rate-perfect/beaconv2";

const statusColorMap = {
  approved: "success",
  pending: "warning",
  rejected: "error",
};

<Table
  columns={[
    { id: "name", header: "Product", accessor: (row) => row.name, sticky: true, width: 140 },
    { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" />, minWidth: 160 },
    { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center", minWidth: 160 },
    { id: "usage", header: "Usage", accessor: (row) => row.usage, align: "center", minWidth: 160 },
    { id: "category", header: "Category", accessor: (row) => row.category, minWidth: 200 },
    { id: "status", header: "Status", align: "center", minWidth: 160, render: (row) => (
      <Badge variant="soft" color={statusColorMap[row.status]} size="sm">{row.status}</Badge>
    )},
  ]}
  data={sampleData}
  rowKey={(row) => row.id}
  sx={{ maxWidth: 700 }}
/>`}
      >
        <Table
          columns={[
            { id: "name", header: "Product", accessor: (row: Product) => row.name, sticky: true, width: 140 },
            { id: "score", header: "Score", align: "right" as const, render: (row: Product) => <RateBadge rate={row.score} size="xs" />, minWidth: 160 },
            { id: "plan", header: "Plan", accessor: (row: Product) => row.plan, align: "center" as const, minWidth: 160 },
            { id: "usage", header: "Usage", accessor: (row: Product) => row.usage, align: "center" as const, minWidth: 160 },
            { id: "category", header: "Category", accessor: (row: Product) => row.category, minWidth: 200 },
            { id: "status", header: "Status", align: "center" as const, minWidth: 160, render: (row: Product) => (
              <Badge variant="soft" color={statusColorMap[row.status]} size="sm">{row.status}</Badge>
            )},
          ]}
          data={sampleData.slice(0, 5)}
          rowKey={(row) => row.id}
          sx={{ maxWidth: 700 }}
        />
      </ShowcaseCard>

      {/* Hoverable with Row Click */}
      <ShowcaseCard
        title="Hoverable with Row Click"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

<Table
  columns={[
    { id: "name", header: "Product", accessor: (row) => row.name },
    { id: "category", header: "Category", accessor: (row) => row.category },
    { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
    { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center" },
  ]}
  data={sampleData}
  rowKey={(row) => row.id}
  hoverable
  onRowClick={(row) => alert(\`Clicked: \${row.name}\`)}
/>`}
      >
        <Table
          columns={baseColumns.slice(0, 4)}
          data={sampleData}
          rowKey={(row) => row.id}
          hoverable
          onRowClick={(row) => alert(`Clicked: ${row.name}`)}
        />
      </ShowcaseCard>

      {/* Sortable */}
      <ShowcaseCard
        title="Sortable"
        code={`// Sortable requires useState — see source for full example.
// Click a column header to sort, click again to clear.
// sortDirection on each column controls asc vs desc.

const columns = [
  { id: "name", header: "Product", sortable: true, sortDirection: "asc", accessor: (row) => row.name },
  { id: "score", header: "Score", sortable: true, sortDirection: "asc", accessor: (row) => row.score },
];

<Table
  columns={columns}
  data={sortedData}
  sortColumn={sortCol}
  onSort={(colId, dir) => {
    if (dir === null) { setSortCol(undefined); return; }
    setSortCol(colId);
  }}
/>`}
      >
        <SortableExample />
      </ShowcaseCard>

      {/* Sticky Header */}
      <ShowcaseCard
        title="Sticky Header"
        code={`import { Table, RateBadge } from "@rate-perfect/beaconv2";

<Box sx={{ maxHeight: 200, overflow: "auto", border: 1, borderColor: "divider", borderRadius: "8px" }}>
  <Table
    columns={[
      { id: "name", header: "Product", accessor: (row) => row.name },
      { id: "category", header: "Category", accessor: (row) => row.category },
      { id: "score", header: "Score", align: "right", render: (row) => <RateBadge rate={row.score} size="xs" /> },
      { id: "plan", header: "Plan", accessor: (row) => row.plan, align: "center" },
    ]}
    data={[...sampleData, ...sampleData]}
    rowKey={(_row, i) => i}
    stickyHeader
    variant="plain"
  />
</Box>`}
      >
        <Box sx={{ maxHeight: 200, overflow: "auto", border: 1, borderColor: "divider", borderRadius: "8px" }}>
          <Table
            columns={baseColumns.slice(0, 4)}
            data={[...sampleData, ...sampleData]}
            rowKey={(_row, i) => i}
            stickyHeader
            variant="plain"
          />
        </Box>
      </ShowcaseCard>

      {/* Empty State */}
      <ShowcaseCard
        title="Empty State"
        code={`<Table
  columns={[
    { id: "name", header: "Product", accessor: (row) => row.name },
    { id: "category", header: "Category", accessor: (row) => row.category },
    { id: "score", header: "Score", accessor: (row) => row.score, align: "right" },
  ]}
  data={[]}
  emptyState={
    <EmptyState
      icon={<FeatureIcon icon={<MagnifyingGlass />} size="lg" variant="muted" radius="full" />}
      title="No results found"
      description="Try adjusting your filters."
      action={<Button variant="ghost" color="error" size="sm">Clear Filters</Button>}
    />
  }
/>`}
      >
        <Table
          columns={baseColumns.slice(0, 4)}
          data={[]}
          emptyState={
            <EmptyState
              icon={<FeatureIcon icon={<MagnifyingGlass />} size="lg" variant="muted" radius="full" />}
              title="No results found"
              description="Try adjusting your filters."
              action={<Button variant="ghost" color="error" size="sm">Clear Filters</Button>}
            />
          }
        />
      </ShowcaseCard>
    </Stack>
  );
}
