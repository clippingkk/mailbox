import { Container } from '@react-email/container'
import { Hr } from '@react-email/hr'
import { Text } from '@react-email/text'
import { Button } from '@react-email/button'
import { Column } from '@react-email/column'
import { Html } from '@react-email/html'
import { Head } from '@react-email/head'
import { Heading } from '@react-email/heading'
import { Preview } from '@react-email/preview'
import { Section } from '@react-email/section'
import { Body } from '@react-email/body'
import { Img } from '@react-email/img'
import { Tailwind } from '@react-email/tailwind'
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
        <Preview>You're now ready to connect with your knowleges!</Preview>
        <Body className='bg-gray-100' style={styles.main}>
          <Container>
            <Section>
              <Section className='flex'>
                <Column width='50%'>
                  <Img
                    src={`https://cdn.annatarhe.com/ck-logo.png-copyrightDB`}
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
              <Text className=' mt-4 text-right text-gray-400'>— The ClippingKK team</Text>
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
