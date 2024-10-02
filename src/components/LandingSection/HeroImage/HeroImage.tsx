import { getImgProps } from "next/dist/shared/lib/get-img-props";
import Image, { getImageProps } from "next/image";

interface HeroImageProps {
  className?: string;
}

export const HeroImage = ({ className }: HeroImageProps) => {
  const common = { alt: "Art Direction Example", priority: true };
  const {
    props: { srcSet: desktop, height: desktopHeight, width: desktopWidth },
  } = getImageProps({
    ...common,
    width: 897,
    height: 795,
    quality: 100,
    src: "/hero-desktop.webp",
  });
  const {
    props: {
      srcSet: mobile,
      height: mobileHeight,
      width: mobileWidth,
      ...rest
    },
  } = getImageProps({
    ...common,
    width: 580,
    height: 518,
    quality: 100,
    src: "/hero-responsive.png",
  });

  return (
    <picture className={className}>
      <source
        srcSet={desktop}
        width={desktopWidth}
        height={desktopHeight}
        media="(min-width: 1280px)"
      />
      <source
        srcSet={"/hero-responsive.png"}
        height={518}
        width={580}
        media="(max-width: 1279px)"
      />
      <img {...rest} />
    </picture>
  );
};
