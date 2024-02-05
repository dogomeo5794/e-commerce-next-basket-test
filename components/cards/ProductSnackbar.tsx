"use client"

import { TypographyStyled } from "@/styles/Typography.style";
import { Colors } from "@/theme/colors";
import { Close } from "@mui/icons-material";
import { Box, IconButton, Snackbar } from "@mui/material";
import Image from "next/image";
import React, { forwardRef, useImperativeHandle } from "react";

interface SnackbarProps {
  headerTitle: string,
  thumbnail: string
  price: string
  title: string
  onClose?: () => void,
  children?: React.ReactNode | null;
}

interface Ref {
  show: () => void
}

const ProductSnackbar = forwardRef<Ref, SnackbarProps>(({headerTitle, thumbnail, price, title, onClose}: SnackbarProps, ref) => {
  const [showSnackbar, setShowSnackbar] = React.useState<boolean>(false)

  React.useEffect(() => {
    console.log('showSnackbar', showSnackbar)
  }, [showSnackbar])

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true)
    }
  }));

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false)
    onClose ? onClose() : null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={showSnackbar}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "20px",
          borderRadius: "5px",
          background: Colors.white,
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          width: "470px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TypographyStyled
            variant="body1"
            fontSize="18px"
            lineHeight="21.33px"
            color={Colors.default_color}
          >
            {headerTitle}
          </TypographyStyled>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Image
            src={thumbnail}
            alt=""
            loading="lazy"
            style={{
              height: "64px",
              width: "64px",
              objectFit: "cover",
            }}
            width={64}
            height={64}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <TypographyStyled
              variant="body1"
              fontSize="14px"
              lineHeight="16.59px"
              fontWeight={500}
            >
              {title}
            </TypographyStyled>
            <TypographyStyled variant="body1" fontSize="16px" fontWeight={600}>
              {price}
            </TypographyStyled>
          </Box>
        </Box>
      </Box>
    </Snackbar>
  );
});

export default ProductSnackbar;
