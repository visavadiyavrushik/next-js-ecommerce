import { getProducts } from "@/api/home.services";
import ProductCard from "@/components/productCard";
import Mainlayout from "@/layouts/mainlayout";
import { Container, Grid } from "@mui/material";
import React from "react";

const AllProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      {" "}
      <Mainlayout>
        <Container>
          <Grid container sx={{ mt: 2 }}>
            {products?.map((product) => (
              <Grid item xs={12} md={3} key={product.id}>
                <ProductCard
                  image={product?.image}
                  title={product.title}
                  description={product?.description}
                  //   onShare={() => console.log("shareClick", product.id)}
                  // onLearnMore={console.log("learn more")}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Mainlayout>
    </div>
  );
};

export default AllProductsPage;
