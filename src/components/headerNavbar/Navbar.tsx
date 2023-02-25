import { Center, Header, Text } from "@mantine/core";

export default function HeaderNavbar() {
  return (
    <Header
      height={100}
      p='md'
      ta='center'
      withBorder={false}
    >
      <Text
        color='yellow'
        style={{
          fontFamily: 'pacifico',
          fontSize: 'xx-large',
          textShadow: '1px 1px 3px rgb(36 37 47 / 25%)'
        }}
        span
      >Pramila Foods</Text>
    </Header>
  )
}
