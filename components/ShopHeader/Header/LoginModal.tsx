import { Colors } from "@/theme/colors";
import { Backdrop, Box, Button, Container, Divider, Fade, FormControl, Grid, IconButton, InputAdornment, InputLabel, List, ListItem, Modal, OutlinedInput, TextField } from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import Link from "next/link";
import { TypographyStyled } from "@/styles/Typography.style";
import { Add, Delete, Remove, Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { CartListData, addToCart, removeFromCart, fullRemoveFromCart } from "@/store/modules/productSlice";
import { API } from "@/lib/api";
import { setLogin, setToken, setUser } from "@/store/modules/authSlice";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "500px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  outline: "none",
  // height: "100%",
  overflow: "auto",
  // p: 4,
};

interface Ref {
  show: () => void
}

interface ModalProps {
  children?: React.ReactNode
}

const LoginModal = forwardRef<Ref, ModalProps>(({ children }: ModalProps, ref) => {
  useImperativeHandle(ref, () => ({
    show() {
      setOpen(true)
    }
  }))
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleLogin = async() => {
    try {
      const {data, status} = await API.post("/auth/login", {
        username: username,
        password: password
      });

      if ([200,201].includes(status)) {
        localStorage.setItem("token", data.token);
        dispatch(setToken(data.token))
        dispatch(setUser(data))
        dispatch(setLogin())
        setOpen(false)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      // open={true}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
      {/* <Fade in={true}> */}
        <Box sx={style}>
          <TypographyStyled variant="h1"
            sx={{
              textAlign: "center",
              padding: "30px 25px",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Login Your Account
          </TypographyStyled>
          <Divider />
          <Box sx={{
            marginTop: "20px",
            padding: "20px"
          }}>
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  required
                  label="Username"
                  fullWidth 
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  fullWidth 
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{
                borderRadius: "0",
                padding: "15px 20px",
                width: "100%",
                background: Colors.default_color,
                marginTop: "30px"
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
})

export default LoginModal;
