import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CButton from "./button";

const ProductCard = ({
  image,
  title = "",
  description = "",
  onShare,
  onLearnMore,
}) => {
  return (
    <Container>
      {/* <Grid container>
        <Grid item> */}
      <Card sx={{ maxWidth: 345, height: "100%", cursor: "pointer" }}>
        <CardMedia sx={{ height: 140 }} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <CButton title="Share " onClick={onShare} />
          {/* <CButton title="Share " onClick={() => onShare()} />
              <CButton title=" Learn More " onClick={() => onLearnMore()} /> */}
        </CardActions>
      </Card>
      {/* </Grid>
      </Grid> */}
    </Container>
  );
};

export default ProductCard;
