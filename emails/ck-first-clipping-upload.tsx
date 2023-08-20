import { Container } from '@react-email/container'
import { Hr } from '@react-email/hr'
import { Text } from '@react-email/text'
import { Button } from '@react-email/button'
import { Link } from '@react-email/link'
import * as React from 'react';
import ClippingKKLayout from './layout/ck.layout';
import { Section } from '@react-email/section'

export const CKWelcomeEmail = () => (
  <ClippingKKLayout>
    <>
      <Container>
        <Text className='text-5xl font-extrabold text-center'>
          Congrets!
        </Text>
      </Container>
      <Text>
        Thanks for syncing your clippings. You're now ready to
        connect with your knowleges!
      </Text>
      <Button
        pX={10}
        pY={10}
        className='bg-blue-500 text-white rounded w-full text-center'
        href="https://clippingkk.annatarhe.com/auth/auth-v3"
      >
        View my Dashboard
      </Button>
      <Hr />
      <Text >
        If you still consed about how to use it, you might find our{' '}
        <Link href="https://www.bilibili.com/video/av44625474/">
          introduce video
        </Link>{' '}
        handy.
      </Text>

      <Section>
        <Text>
          if you prefer to use iOS application. welcome <Link href='https://apps.apple.com/us/app/clippingkk/id1537830952'>download ClippingKK from iOS App Store</Link>.
        </Text>
      </Section>

    </>
  </ClippingKKLayout>
);

export default CKWelcomeEmail;
