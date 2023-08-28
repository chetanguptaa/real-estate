import React from 'react'

const PostsPage = () => {
    return (
        <div className='p-8'>
          hello world
        </div>
    )
}
export default PostsPage


/**
 * import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));

const images = [
  'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

export function CarouselCard() {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          Forde, Norway
        </Text>

        <Group spacing={5}>
          <IconStar size="1rem" />
          <Text fz="xs" fw={500}>
            4.78
          </Text>
        </Group>
      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
        Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in
        ultimate comfort. Enjoy the view of the epic mountain range of Blegja and the Førdefjord.
      </Text>

      <Group position="apart" mt="md">
        <div>
          <Text fz="xl" span fw={500} className={classes.price}>
            397$
          </Text>
          <Text span fz="sm" c="dimmed">
            {' '}
            / night
          </Text>
        </div>

        <Button radius="md">Book now</Button>
      </Group>
    </Card>
  );
}
 */



/**
 * <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink" />
  </div> 
  <div className="carousel-item">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink" />
  </div>
</div>
 */