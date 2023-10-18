import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'

import React from 'react'

import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  message: string
  senderEmail: string
}

export default function ContactFormEmail ({
  message,
  senderEmail
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje desde tu sitio de portfolio</Preview>
      <Tailwind>
        <Body className="">
          <Container>
            <Section className="">
              <Heading>Recibiras</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>El correo electrónico del remitente es:{senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
