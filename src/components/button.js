"use client";
import { Button } from "@mui/material";
import React from "react";

function CButton({ title = "Ok", onClick }) {
  return (
    <Button size="small" onClick={onClick}>
      {title}
    </Button>
  );
}

export default CButton;
