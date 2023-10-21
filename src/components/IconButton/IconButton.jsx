import React from 'react';
import { Button, WrapItem } from '@chakra-ui/react';
const IconButton = ({ onClick, ...allyProps }) => (
  <Button
    colorScheme="teal"
    variant="outline"
    onClick={onClick}
    {...allyProps}
  ></Button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

export default IconButton;
