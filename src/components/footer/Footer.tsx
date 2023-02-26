import { ActionIcon, Anchor, Container, Flex, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";

export default function Footer() {
  return (
    <Container mb={20} mt={50}>
      <Paper p='md' withBorder shadow='md'>
        <SimpleGrid
          cols={2}
          spacing='md'
          breakpoints={[
            { maxWidth: 600, cols: 1, spacing: 'md' },
          ]}
        >

          <Flex
            direction='column'
            gap='3'
          >
            <Text fw={500} mb={10}>Contact Us</Text>
            <Anchor href="mailto:someone@gmail.com" target="_blank">Email: someone@gmail.com</Anchor>
            <Anchor href="ph:12345678" target="_blank">Phone: 12345678</Anchor>
          </Flex>

          <div>
            <Text fw={500} mb={10}>Links</Text>

            <Flex
              gap={10}
            >
              <ActionIcon variant="light" color='blue' component="a" href="https://www.facebook.com" target='_blank'>
                <IconBrandFacebook size={20} />
              </ActionIcon>

              <ActionIcon variant="gradient" gradient={{ from: 'red', to: 'blue', deg:180 }} component="a" href="https://www.facebook.com" target='_blank'>
                <IconBrandInstagram size={20} />
              </ActionIcon>

              <ActionIcon variant="filled" color='blue' component="a" href="https://www.facebook.com" target='_blank'>
                <IconBrandTwitter size={20} />
              </ActionIcon>

              <ActionIcon variant="filled" color='red' component="a" href="https://www.facebook.com" target='_blank'>
                <IconBrandYoutube size={20} />
              </ActionIcon>

            </Flex>
          </div>
        </SimpleGrid>
      </Paper>
    </Container>
  )
}
