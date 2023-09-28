import React from "react";
import { Text,Image,Box,Stack,Heading,Tag,TagLabel } from "@chakra-ui/react";
 const Product = ({brand,img,price,details,id,category}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image"  src={img}  />
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        <TagLabel data-cy= "product-brand">{brand}</TagLabel>
      </Tag>
      <Heading data-cy="product-details">{details}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
