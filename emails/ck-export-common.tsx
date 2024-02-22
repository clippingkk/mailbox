import { Button, Container, Hr, Link, Section, Text } from '@react-email/components';
import * as React from 'react';
import ClippingKKLayout from './layout/ck.layout';

export const CKWelcomeEmail = () => (
  <ClippingKKLayout>
    <>
      <Container>
        <Text className='text-6xl font-extrabold text-center'>
          👍
        </Text>
        <Text className='text-5xl font-extrabold text-center'>
          Congrets!
        </Text>
      </Container>
      <Text className='text-center'>
        Your clippings have been successfully exported.
      </Text>
      <Text className='text-center'>
        go to your destination and check it.
      </Text>
      <Hr />
      <Text>
        if you have any questions, please feel free to contact us.
        <Link href='mailto:annatarhe+ck@gmail.com'>annatarhe+ck@gmail.com</Link>
      </Text>

    </>
  </ClippingKKLayout>
);

export default CKWelcomeEmail;
