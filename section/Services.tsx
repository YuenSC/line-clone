import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import entertainment1 from "../public/entertainment1.png";
import entertainment2 from "../public/entertainment2.png";
import entertainment3 from "../public/entertainment3.png";
import communication1 from "../public/product1.png";
import communication2 from "../public/product2.webp";
import communication3 from "../public/product3.png";

enum Category {
  all = "all",
  communication = "communication",
  entertainment = "entertainment",
}

const categories = [
  {
    key: Category.all,
    label: "All Product",
  },
  {
    key: Category.communication,
    label: "Communication",
  },
  {
    key: Category.entertainment,
    label: "Entertainment",
  },
];

enum DownloadLinkType {
  playStore,
  appStore,
  desktop,
  web,
}

type DownloadLink = {
  type: DownloadLinkType;
  href: string;
};

type ProductBase = {
  id: number;
  type: "banner" | "item";
  category: Category;
  imageSrc: StaticImageData;
  colSpan?: number;
};

type ProductItem = {
  type: "item";
  name: string;
  description: string;
  links?: DownloadLink[];
} & ProductBase;

type ProductBanner = {
  type: "banner";
  link: string;
} & ProductBase;

type Product = ProductItem | ProductBanner;

const products: Product[] = [
  {
    id: 1,
    type: "banner",
    category: Category.communication,
    colSpan: 2,
    imageSrc: communication1,
    link: "https://linecorp.com/en/pr/news/en/2020/3534",
  },
  {
    id: 2,
    type: "item",
    category: Category.communication,
    name: "LINE",
    description:
      "A communication app that connects people, services, and information.",
    imageSrc: communication2,
    links: [
      {
        type: DownloadLinkType.appStore,
        href: "https://apps.apple.com/jp/app/line/id443904275",
      },
      {
        type: DownloadLinkType.playStore,
        href: "https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=ja",
      },
      {
        type: DownloadLinkType.desktop,
        href: "https://apps.apple.com/jp/app/line/id539883307?ign-mpt=uo%3D4&mt=12",
      },
    ],
  },
  {
    id: 3,
    type: "item",
    name: "LINE Antivirus",
    description:
      "Notify you when something malicious is threatening your phone.",
    category: Category.communication,
    imageSrc: communication3,
  },
  {
    id: 4,
    type: "item",
    name: "LINE Manga",
    description: "Find and read your favorite manga!",
    category: Category.entertainment,
    imageSrc: entertainment1,
  },
  {
    id: 5,
    type: "item",
    name: "LINE MUSIC",
    description: "Check out and listen to trending songs",
    category: Category.entertainment,
    imageSrc: entertainment2,
  },
  {
    id: 6,
    type: "item",
    name: "LINE LIVE",
    description: "Live streaming service where your dream come true.",
    category: Category.entertainment,
    imageSrc: entertainment3,
  },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    Category.all
  );

  return (
    <Flex
      flexDirection={"column"}
      align="center"
      bgColor={"#f7f8f9"}
      minW="container.xl"
    >
      <VStack
        id="services"
        bgColor={"#f7f8f9"}
        maxW="container.xl"
        w="100%"
        py={"150px"}
        px="20"
        spacing={20}
      >
        <Heading fontWeight={"black"} fontSize="5xl">
          Services
        </Heading>
        <HStack pos="relative" w="100%" align={"flex-start"}>
          <Box w="20%" pos="sticky" top={"200px"}>
            <CategoriesPicker
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Box>
          <Box w="80%">
            <Grid templateColumns={"repeat(3, 1fr)"} gap="10">
              {products
                .filter((product) => {
                  if (selectedCategory === Category.all) return true;
                  return product.category === selectedCategory;
                })
                .map((product) => (
                  <GridItem
                    key={product.id}
                    colSpan={product.colSpan ?? 1}
                    boxShadow="0 20px 20px 0 rgb(0 0 0 / 10%)"
                  >
                    <ProductItem product={product} />
                  </GridItem>
                ))}
            </Grid>
          </Box>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Services;

const CategoriesPicker = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: Category;
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Stack ref={ref} spacing={4}>
      {categories.map((category) => {
        const isSelected = category.key === selectedCategory;
        return (
          <Tag
            key={category.key}
            variant="outline"
            color="black"
            borderRadius={"full"}
            py="3"
            px="4"
            textAlign={"center"}
            w="fit-content"
            cursor={"pointer"}
            fontWeight="bold"
            onClick={() => setSelectedCategory(category.key)}
            {...(isSelected && {
              bgColor: "lineGreen",
              color: "white",
            })}
          >
            {category.label}
          </Tag>
        );
      })}
    </Stack>
  );
};

const ProductItem = ({ product }: { product: Product }) => {
  if (product.type === "banner")
    return (
      <Box width="100%" height="350px" pos="relative" overflow="hidden">
        <Image
          src={product.imageSrc}
          alt="Image"
          layout="responsive"
          objectFit="cover"
        />
      </Box>
    );

  return (
    <Stack bgColor={"white"} minH="350px" w="100%" p="5" spacing={2}>
      <Box
        width="35%"
        height="35%"
        pos="relative"
        borderRadius={"24px"}
        overflow="hidden"
      >
        <Image
          src={product.imageSrc}
          alt="Image"
          layout="responsive"
          objectFit="cover"
        />
      </Box>
      <Heading fontSize={"2xl"}>{product.name}</Heading>
      <Text>{product.description}</Text>
    </Stack>
  );
};
