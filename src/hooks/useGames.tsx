import { useEffect, useState } from 'react';

import api from 'services/api';

export type GameProps = {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
};

export const useGames = () => {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    async function loadGames() {
      const { data } = await api.get<GameProps[]>('games');
      setGames(data);
    }

    loadGames();
  }, []);

  return games;
};
