import Stack from "@mui/material/Stack";
import { FileInput } from "@rate-perfect/beaconv2";
import ShowcaseCard from "../components/ShowcaseCard";

export default function FileInputSection() {
  return (
    <Stack spacing={4}>
      {/* Default */}
      <ShowcaseCard
        title="Default"
        code={`import { FileInput } from "@rate-perfect/beaconv2";

<FileInput onFilesSelected={(files) => console.log(files)} />`}
      >
        <FileInput onFilesSelected={(files) => console.log(files)} />
      </ShowcaseCard>

      {/* With Label & Help Text */}
      <ShowcaseCard
        title="With Label & Help Text"
        code={`import { FileInput } from "@rate-perfect/beaconv2";

<FileInput
  label="Upload Document"
  helpText="Accepted formats: PDF, PNG, JPG (max 10MB)"
  accept=".pdf,.png,.jpg,.jpeg"
  onFilesSelected={(files) => console.log(files)}
/>`}
      >
        <FileInput
          label="Upload Document"
          helpText="Accepted formats: PDF, PNG, JPG (max 10MB)"
          accept=".pdf,.png,.jpg,.jpeg"
          onFilesSelected={(files) => console.log(files)}
        />
      </ShowcaseCard>

      {/* Multiple Files */}
      <ShowcaseCard
        title="Multiple Files"
        code={`import { FileInput } from "@rate-perfect/beaconv2";

<FileInput
  label="Upload Files"
  helpText="You can select multiple files"
  multiple
  onFilesSelected={(files) => console.log(files)}
/>`}
      >
        <FileInput
          label="Upload Files"
          helpText="You can select multiple files"
          multiple
          onFilesSelected={(files) => console.log(files)}
        />
      </ShowcaseCard>

      {/* Error State */}
      <ShowcaseCard
        title="Error State"
        code={`import { FileInput } from "@rate-perfect/beaconv2";

<FileInput
  label="Upload"
  errorMessage="File size exceeds the 10MB limit"
  onFilesSelected={(files) => console.log(files)}
/>`}
      >
        <FileInput
          label="Upload"
          errorMessage="File size exceeds the 10MB limit"
          onFilesSelected={(files) => console.log(files)}
        />
      </ShowcaseCard>

      {/* Disabled */}
      <ShowcaseCard
        title="Disabled"
        code={`import { FileInput } from "@rate-perfect/beaconv2";

<FileInput
  label="Upload"
  disabled
  onFilesSelected={(files) => console.log(files)}
/>`}
      >
        <FileInput
          label="Upload"
          disabled
          onFilesSelected={(files) => console.log(files)}
        />
      </ShowcaseCard>
    </Stack>
  );
}
