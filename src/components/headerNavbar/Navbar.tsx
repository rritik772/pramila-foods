import { Header, Paper, Text } from "@mantine/core";
import Image from "next/image";

import logo from "/asset/imgs/logo.svg";

export default function HeaderNavbar() {
  return (
    <Header
      height={100}
      p='md'
      withBorder={false}
      ta='center'
    >
      <Paper
        ta='center'
      >

        <Image
          src={logo}
          alt="logo"
          height="60"
        />

        <Text
          ml="md"
          className="logo-gradient"
          style={{
            fontFamily: 'poppins',
            fontSize: 'xx-large',
          }}
          span
        > Pramila Foods</Text>

      </Paper>
    </Header>
  )
}
