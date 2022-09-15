import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import logo from '@assets/logo.svg';
import CreateAdBanner from '@components/CreateAdBanner';
import GameCard from '@components/GameCard';
import api from 'services/api';

type GameProps = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

const Home: NextPage = () => {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    async function loadGames() {
      const { data } = await api.get<GameProps[]>('games');
      setGames(data);
    }

    loadGames();
  }, []);

  return (
    <>
      <NextSeo title="NLW eSports" description="NLW eSports" />
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <Image src={logo} alt="logo" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu{' '}
          <span className="bg-nlw-gradient text-transparent bg-clip-text">
            duo
          </span>{' '}
          está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map((game) => (
            <GameCard
              key={game.id}
              name={game.title}
              image={game.bannerUrl}
              adsCount={game._count.ads}
            />
          ))}
        </div>

        <CreateAdBanner />
      </div>
    </>
  );
};

export default Home;
