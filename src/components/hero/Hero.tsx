import { Carousel } from "@mantine/carousel";
import { Button, Container, Paper, SimpleGrid, Text } from "@mantine/core";
import Image from "next/image";

import pro_back from '/asset/imgs/pro_back.jpg';
import pro_front from '/asset/imgs/pro_front.jpg';
import pro_front_banner from '/asset/imgs/pro_front_banner.png';
import pro_img1 from '/asset/imgs/pro_img1.jpeg';
import pro_img2 from '/asset/imgs/pro_img2.jpg';
import pro_ingredient from '/asset/imgs/pro_ingredient.jpg';

export default function Hero() {
  const imgs = [pro_front_banner, pro_back, pro_front, pro_img1, pro_img2, pro_ingredient];

  return (
    <Container>
      <Paper p="md" shadow='lg' withBorder>
        <SimpleGrid
          cols={2}
          spacing='lg'
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' }
          ]}>

          <Carousel
            sx={{ maxWidth: '100%' }}
            mx="auto"
            height={480}
            loop
            slideGap='xl'
          >
            {
              imgs.map((img, key) => (
                <Carousel.Slide key={key} ta='center'>
                  <Image
                    src={img}
                    height="480"
                    alt="img1"
                    style={{ objectFit: 'cover' }}
                  />
                </Carousel.Slide>
              ))
            }
          </Carousel>

          <div>
            <Text mb='md'>
              Name
              <Text fw={500} fz='lg'>Puran Poli Mix</Text>
            </Text>

            <Text mb='md'>
              Price
              <Text>
                <Text fz="xs" color='red' td='line-through' span>700/-</Text>
                <Text fw={500} fz="lg" color='green' span> 599/-</Text>
              </Text>
            </Text>

            <Text mb='md'>
              Ingredients
              <Text
                fw={500}
                style={{ maxWidth: '300px' }}
              >Wheat flour, Chana dal, Organic Jaggery, Salt, Nutmeg, Tumeric Powder</Text>
            </Text>

            <Button
              mt='lg'
              variant="gradient"
              component="a"
              href='/order'
            >Order Now!</Button>
          </div>

        </SimpleGrid>
      </Paper>
    </Container>
  )
}
