import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { GameController } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { z } from 'zod';

import Checkbox from '@components/Form/Checkbox';
import ControllerInput from '@components/Form/ControllerInput';
import ControllerSelect from '@components/Form/ControllerSelect';
import Label from '@components/Form/Label';
import { useGames } from '@hooks/useGames';
import api from 'services/api';

export type FormData = {
  game: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  weekDays: Array<string>;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel?: string;
};

const schema = z
  .object({
    game: z.string().min(1, { message: 'Qual o game é obrigatório' }).nullish(),
    name: z
      .string()
      .min(1, { message: 'Seu nome (ou nickname) é obrigatório' }),
    yearsPlaying: z
      .string()
      .min(1, { message: 'Joga há quantos anos é obrigatório' }),
    discord: z.string().min(1, { message: 'Qual o seu discord é obrigatório' }),
    weekDays: z
      .array(z.enum(['0', '1', '2', '3', '4', '5', '6']))
      .nonempty('Selecione um dia da semana'),
    hourStart: z.string().min(1, { message: 'Campo obrigatório' }),
    hourEnd: z.string().min(1, { message: 'Campo obrigatório' }),
    useVoiceChannel: z.any(),
  })
  .required();

const CreateAdForm = () => {
  const games = useGames();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      game: '',
      name: '',
      yearsPlaying: '',
      discord: '',
      weekDays: [],
      hourStart: '',
      hourEnd: '',
      useVoiceChannel: 'false',
    },
  });

  const handleSubmitForm = async (data: any) => {
    await api
      .post(`/games/${data.game}/ads`, {
        ...data,
        yearsPlaying: Number(data.yearsPlaying),
        weekDays: data.weekDays.map(Number),
        useVoiceChannel: data.useVoiceChannel === 'false' ? false : true,
      })
      .then(() => {
        toast.success('Cadastrado com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        handleResetForm();
      })
      .catch(() => {
        toast.error('Erro ao cadastrar!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleResetForm = () => reset();

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-4"
    >
      <ControllerSelect
        control={control}
        id="game"
        label="Qual o game?"
        placeholder="Selecione o game que deseja jogar"
        error={errors.game?.message?.toString()}
        options={games}
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
          <div>
            <Controller
              name="weekDays"
              control={control}
              render={({ field }) => {
                return (
                  <ToggleGroup.Root
                    type="multiple"
                    className="grid grid-cols-4 gap-2 mb-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <ToggleGroup.Item
                      value="0"
                      title="Domingo"
                      className={`p-2 ${
                        field.value.includes('0')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      D
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="1"
                      title="Segunda"
                      className={`p-2 ${
                        field.value.includes('1')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="2"
                      title="Terça"
                      className={`p-2 ${
                        field.value.includes('2')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      T
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="3"
                      title="Quarta"
                      className={`p-2 ${
                        field.value.includes('3')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="4"
                      title="Quinta"
                      className={`p-2 ${
                        field.value.includes('4')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      Q
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="5"
                      title="Sexta"
                      className={`p-2 ${
                        field.value.includes('5')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                    <ToggleGroup.Item
                      value="6"
                      title="Sábado"
                      className={`p-2 ${
                        field.value.includes('6')
                          ? 'bg-violet-500'
                          : 'bg-zinc-900'
                      }`}
                    >
                      S
                    </ToggleGroup.Item>
                  </ToggleGroup.Root>
                );
              }}
            />
            {errors.weekDays?.message && (
              <div className="text-red-500 text-sm">
                {errors.weekDays?.message?.toString()}
              </div>
            )}
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
          title="Costumo me conectar ao chat de voz"
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
  );
};

export default CreateAdForm;
