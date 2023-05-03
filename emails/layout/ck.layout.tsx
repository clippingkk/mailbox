import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components';
import React from 'react'

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

type ClippingKKLayoutProps = {
  children: React.ReactNode
}

function ClippingKKLayout(props: ClippingKKLayoutProps) {
  return (
    <Tailwind>
      <Html>
        <Head>
        </Head>
        <Preview>You're now ready to connect with your knowleges!</Preview>
        <Body className='bg-gray-100' style={styles.main}>
          <Container>
            <Section>
              <Section className='flex'>
                <Column width='50%'>
                  <Img
                    src={`${baseUrl}/static/logo.png`}
                    width="50"
                    height="50"
                    alt="ClippingKK"
                    className='rounded-sm'
                  />
                </Column>
                <Column>
                  <Heading as='h2' className='ml-10'>
                    ClippingKK
                  </Heading>
                </Column>
              </Section>
              <Hr />
              {props.children}
              <Hr />
              <Text>— The ClippingKK team</Text>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}

export default ClippingKKLayout

const styles = {
  main: {
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif'
  }
}
