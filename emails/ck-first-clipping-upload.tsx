import {
  Button,
  Container,
  Hr,
  Link,
  Text,
} from '@react-email/components';
import * as React from 'react';
import ClippingKKLayout from './layout/ck.layout';

export const CKWelcomeEmail = () => (
  <ClippingKKLayout>
    <>
    <Container>
      <Text className='text-5xl font-extrabold text-center'>
        Congrets!
      </Text>
    </Container>
      <Text >
        You can view your payments and a variety of other information about
        your account right from your dashboard.
      </Text>
      <Button
        pX={10}
        pY={10}
        className='bg-blue-500 text-white rounded w-full text-center'
        href="https://clippingkk.annatarhe.com/auth/auth-v3"
      >
        View your Dashboard
      </Button>
      <Hr />
      <Text >
        If you still consed about how to use it, you might find our{' '}
        <Link href="https://www.bilibili.com/video/av44625474/">
          introduce video
        </Link>{' '}
        handy.
      </Text>
    </>
  </ClippingKKLayout>
);

export default CKWelcomeEmail;
