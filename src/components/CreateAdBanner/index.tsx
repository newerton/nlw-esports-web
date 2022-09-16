import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

import CreateAdModal from '@components/CreateAdModal';

const CreateAdBanner = () => {
  return (
    <Dialog.Root>
      <div className="pt-1 rounded-lg bg-nlw-gradient mt-8 self-stretch">
        <div className="bg-[#2a2634] px-8 py-6 rounded-lg text-center md:text-left md:flex md:justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-white font-black text-2xl">
              Não encontrou seu duo?
            </div>
            <div className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </div>
          </div>
          <div className="flex justify-center">
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-2">
              <MagnifyingGlassPlus size={24} className="mr-2" /> Publicar
              anúncio
            </Dialog.Trigger>
            <CreateAdModal />
          </div>
        </div>
      </div>
    </Dialog.Root>
  );
};

export default CreateAdBanner;
