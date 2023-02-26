import Footer from "@/components/footer/Footer"
import { Button, Container, Flex, NumberInput, Paper, SimpleGrid, Textarea, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { IconAt, IconCurrencyRupee, IconHome2, IconPhone, IconSignature, IconWeight } from "@tabler/icons-react"
import { useEffect } from "react"

export default function Order() {

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      address: '',
      phoneNo: '',
      quantity: 0,
      price: 0
    },
    validate: {
      name: (v) => (v.length > 4 ? null : 'Enter your name!'),
      email: (v) => (/^\S+@\S+$/.test(v) ? null : 'Invalid email!'),
      address: (v) => (v.length > 7 ? null : 'Invalid address!'),
      phoneNo: (v) => (v.length >= 10 ? null : 'Invalid phone no!'),
      quantity: (v) => (v < 1 ? null : 'Increase quantity!')
    }
  })

  useEffect(() => {
    const quantity = form.getInputProps('quantity').value;

    form.setValues({
      'price': isNaN(quantity) ? 0 : quantity * 599
    })
  }, [ form.getInputProps('quantity').value ])

  return (
    <div>
      <Container>
        <Paper withBorder p='lg' shadow='md'>

          <form>

            <SimpleGrid
              cols={2}
              spacing='md'
              mb={10}
              breakpoints={[
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' }
              ]}
            >
              <TextInput
                withAsterisk
                label='Name'
                placeholder="Someone Someanother"
                icon={<IconSignature size={18} />}
                {...form.getInputProps('name')}
              />

              <TextInput
                withAsterisk
                label='Email'
                placeholder="Someone@gmail.com"
                icon={<IconAt size={18} />}
                {...form.getInputProps('email')}
              />
            </SimpleGrid>

            <Textarea
              withAsterisk
              label='Address'
              mb={10}
              placeholder="..., Delhi, India 100"
              icon={<IconHome2 size={18} />}
              {...form.getInputProps('address')}
            />

            <SimpleGrid
              cols={3}
              spacing='md'
              mb={10}
              breakpoints={[
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' }
              ]}
            >

              <NumberInput
                withAsterisk
                label='PhoneNo'
                placeholder="+912345678912"
                hideControls
                icon={<IconPhone size={18} />}
                {...form.getInputProps('phoneNo')}
              />

              <NumberInput
                withAsterisk
                label='Quantity'
                placeholder="0"
                min={0}
                icon={<IconWeight size={18} />}
                {...form.getInputProps('quantity')}
              />

              <NumberInput
                readOnly
                label='Price'
                placeholder="0"
                min={0}
                icon={<IconCurrencyRupee size={18} />}
                {...form.getInputProps('price')}
              />
            </SimpleGrid>


            <Flex
              justify='end'
            >
              <Button size='md' type="submit">Order</Button>
            </Flex>
          </form>
        </Paper>
      </Container>
      <Footer />
    </div>
  )
}
