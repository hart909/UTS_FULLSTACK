import { Paper, Stack  } from "@mui/material";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", md: "row " }}
          sx={{ height: "max-content" }}
        >
          <Logo />
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            @2024 DEVELOPED FOR UTS BY{" "}
            <span style={{ fontWeight: 1000 }}>FGA</span> Team
          </div>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
