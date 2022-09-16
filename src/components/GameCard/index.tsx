import Image from 'next/image';

type GameCardProps = {
  name: string;
  adsCount: number;
  image: string;
};
const GameCard = ({ name, adsCount, image }: GameCardProps) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image src={image} alt="image-1" width={285} height={380} />
      <div className="w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black">
        <div className="font-bold text-white block">{name}</div>
        <div className="text-zinc-300 text-sm block">
          {adsCount} anúncio{adsCount > 1 && 's'}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
