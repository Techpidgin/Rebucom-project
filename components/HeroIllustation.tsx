import Image from 'next/image'

export default function HeroIllustration() {
  return (
    <Image
    src="/heroimg.png"
    width={788}
    height={726}
    alt="Picture of the author"
  />
  );
}
