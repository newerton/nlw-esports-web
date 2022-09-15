import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import Checkbox from '@components/Form/Checkbox';
import ControllerInput from '@components/Form/ControllerInput';
import Label from '@components/Form/Label';

const schema = z
  .object({
    game: z.string().min(1, { message: 'Qual o game é obrigatório' }),
    name: z
      .string()
      .min(1, { message: 'Seu nome (ou nickname) é obrigatório' }),
    yearsPlaying: z
      .string()
      .min(1, { message: 'Joga há quantos anos é obrigatório' }),
    discord: z.string().min(1, { message: 'Qual o seu discord é obrigatório' }),
    hourStart: z.string().min(1, { message: 'Campo obrigatório' }),
    hourEnd: z.string().min(1, { message: 'Campo obrigatório' }),
  })
  .required();

const CreateAdBanner = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      game: '',
      name: '',
      yearsPlaying: '',
      discord: '',
      hourStart: '',
      hourEnd: '',
    },
  });

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };

  const handleResetForm = () => reset();

  return (
    <Dialog.Root>
      <div className="pt-1 rounded-lg bg-nlw-gradient mt-8 self-stretch">
        <div className="bg-[#2a2634] px-8 py-6 rounded-lg flex justify-between items-center">
          <div>
            <div className="text-white font-black text-2xl">
              Não encontrou seu duo?
            </div>
            <div className="text-zinc-400">
              Publique um anúncio para encontrar novos players!
            </div>
          </div>
          <div>
            <Dialog.Trigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-2">
              <MagnifyingGlassPlus size={24} className="mr-2" /> Publicar
              anúncio
            </Dialog.Trigger>
          </div>
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black">
          <Dialog.Title className="text-3xl font-black mb-8">
            Publique um anúncio
          </Dialog.Title>
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex flex-col gap-4"
          >
            <ControllerInput
              control={control}
              id="game"
              label="Qual o game?"
              placeholder="Selecione o game que deseja jogar"
              error={errors.game?.message?.toString()}
            />
            <ControllerInput
              control={control}
              id="name"
              label="Seu nome (ou nickname)"
              placeholder="Como te chamam dentro do game?"
              error={errors.name?.message?.toString()}
            />

            <div className="grid grid-cols-2 gap-4">
              <ControllerInput
                control={control}
                id="yearsPlaying"
                label="Joga há quantos anos?"
                placeholder="Tudo bem ser ZERO"
                error={errors.yearsPlaying?.message?.toString()}
              />
              <ControllerInput
                control={control}
                id="discord"
                label="Qual o seu discord?"
                placeholder="Qual o seu discord?"
                error={errors.discord?.message?.toString()}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label id="weekDays" title="Quando costumar jogar?" />
                <div className="grid grid-cols-4 gap-2">
                  <button title="Domingo" className="bg-zinc-900 p-2">
                    D
                  </button>
                  <button title="Segunda" className="bg-zinc-900 p-2">
                    S
                  </button>
                  <button title="Terça" className="bg-zinc-900 p-2">
                    T
                  </button>
                  <button title="Quarta" className="bg-zinc-900 p-2">
                    Q
                  </button>
                  <button title="Quinta" className="bg-zinc-900 p-2">
                    Q
                  </button>
                  <button title="Sexta" className="bg-zinc-900 p-2">
                    S
                  </button>
                  <button title="Sábado" className="bg-zinc-900 p-2">
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label id="hourStart" title="Qual horário do dia?" />
                <div className="grid grid-cols-2 gap-2">
                  <ControllerInput
                    control={control}
                    id="hourStart"
                    placeholder="De"
                    type="time"
                    error={errors.hourStart?.message?.toString()}
                  />
                  <ControllerInput
                    control={control}
                    id="hourEnd"
                    placeholder="Até"
                    type="time"
                    error={errors.hourEnd?.message?.toString()}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 mb-4">
              <Controller
                name="useVoiceChannel"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <Label
                id="useVoiceChannel"
                title=" Costumo me conectar ao chat de voz"
              />
            </div>

            <footer className="flex justify-end gap-4">
              <Dialog.Close
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                onClick={handleResetForm}
              >
                Cancelar
              </Dialog.Close>
              <button
                type="submit"
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
              >
                {' '}
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateAdBanner;
