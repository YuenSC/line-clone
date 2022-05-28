import { BoxProps } from "@chakra-ui/react";

export enum SpriteIndex {
  appStoreWhite = 0,
  playStoreWhite,
  pcWhite,
  windowWhite,
  externalWhite,
  appStoreBlack,
  playStoreBlack,
  pcBlack,
  windowBlack,
  externalBlack,
  appStoreGreen,
  playStoreGreen,
  pcGreen,
  windowGreen,
  externalGreen,
}

export const spriteDownloadListStyle: BoxProps[] = Object.keys(SpriteIndex)
  .filter((v) => !isNaN(Number(v)))
  .map((_, index) => {
    const widthOfSprite = 5;
    const x = index % widthOfSprite;
    const y = Math.floor(index / widthOfSprite);

    console.log(x, y);

    return {
      h: "40px",
      w: "40px",
      backgroundImage: "url(/sprite-download-list.png)",
      backgroundPosition: `-${x * 45}px -${y * 50}px`,
      backgroundRepeat: "no-repeat",
    };
  });

// export const spriteDownloadList: BoxProps[] = [
//   {
//     h: "100px",
//     w: "100px",
//     backgroundImage: "url(/sprite-download-list.png)",
//     backgroundPosition: "0px 0px",
//     backgroundRepeat: "no-repeat",
//   },
//   {
//     h: "32px",
//     w: "32px",
//     backgroundImage: "url(/sprite-download-list.png)",
//     backgroundPosition: "0 32px",
//     backgroundRepeat: "no-repeat",
//   },
//   {
//     h: "32px",
//     w: "32px",
//     backgroundImage: "url(/sprite-download-list.png)",
//     backgroundPosition: "0 32px",
//     backgroundRepeat: "no-repeat",
//   },
//   {
//     h: "32px",
//     w: "32px",
//     backgroundImage: "url(/sprite-download-list.png)",
//     backgroundPosition: "0 32px",
//     backgroundRepeat: "no-repeat",
//   },
//   {
//     h: "32px",
//     w: "32px",
//     backgroundImage: "url(/sprite-download-list.png)",
//     backgroundPosition: "0 32px",
//     backgroundRepeat: "no-repeat",
//   },
//   {
//     h: "32px",
//     w: "32px",
//     backgroundImage: "url(/sprite-download-list.png)",
//     backgroundPosition: "0 32px",
//     backgroundRepeat: "no-repeat",
//   },
// ];
