import React from 'react';
import { Card, CardBody, Heading, Stack } from '@chakra-ui/react';

const EmptyPhonebook = () => {
  return (
    <Card maxW="sm" mt="10" backgroundColor="transparent">
      <CardBody>
        <Stack mt="6" spacing="3" textAlign="center">
          <Heading size="lg" color="red" textShadow="2px 2px black">
            Your phonebook is enpty
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default EmptyPhonebook;
