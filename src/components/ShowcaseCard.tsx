import { useState, type ReactNode } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MuiTypography from "@mui/material/Typography";
import { Copy, Check, Code, CodeBlock } from "@phosphor-icons/react";
import { useColorScheme } from "@mui/material/styles";
import { Highlight, themes } from "prism-react-renderer";

interface ShowcaseCardProps {
  title: string;
  code: string;
  children: ReactNode;
}

export default function ShowcaseCard({
  title,
  code,
  children,
}: ShowcaseCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const { mode } = useColorScheme();
  const codeTheme = mode === "dark" ? themes.vsDark : themes.vsLight;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          pt: 1.5,
          pb: 0.5,
        }}
      >
        <MuiTypography variant="h6">{title}</MuiTypography>
        <IconButton
          size="small"
          onClick={() => setShowCode((v) => !v)}
          title={showCode ? "Hide code" : "Show code"}
          sx={{ color: showCode ? "primary.main" : "text.secondary" }}
        >
          {showCode ? <CodeBlock size={20} /> : <Code size={20} />}
        </IconButton>
      </Box>

      <CardContent>{children}</CardContent>

      <Collapse in={showCode} unmountOnExit>
        <Box
          sx={{
            position: "relative",
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <IconButton
            size="small"
            onClick={handleCopy}
            title="Copy code"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              color: copied ? "success.main" : "text.secondary",
            }}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </IconButton>
          <Highlight theme={codeTheme} code={code.trim()} language="tsx">
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <Box
                component="pre"
                sx={{
                  ...style,
                  margin: 0,
                  padding: "16px",
                  paddingRight: "48px",
                  overflow: "auto",
                  fontFamily: "monospace",
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </Box>
            )}
          </Highlight>
        </Box>
      </Collapse>
    </Card>
  );
}
