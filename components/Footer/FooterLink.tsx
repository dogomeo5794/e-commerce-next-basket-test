import { LinkButton } from "@/styles/Button.style";
import { TypographyStyled } from "@/styles/Typography.style";
import { Colors } from "@/theme/colors";
import { Box } from "@mui/material";
import React from "react";

type LinkProps = {
  label: string
  link?: string
}

type Props = {
  title?: string,
  links: Array<LinkProps>
}

const FooterLink: React.FC<Props> = ({ title, links }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2.5}>
      <TypographyStyled
        variant="h5"
        color={Colors.default_color}
        fontSize="16px"
      >
        {title}
      </TypographyStyled>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        {links.map((data: LinkProps, key: number) => (
          <LinkButton href="#" key={key}>
            <TypographyStyled variant="body1" color={Colors.secondary_text_color}>
              {data.label}
            </TypographyStyled>
          </LinkButton>
        ))}
      </Box>
    </Box>
  );
}

export default FooterLink;
