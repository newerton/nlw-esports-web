import * as Dialog from '@radix-ui/react-dialog';

import CreateAdForm from '@components/CreateAdForm';

const CreateAdModal = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black">
        <Dialog.Title className="text-3xl font-black mb-8">
          Publique um anúncio
        </Dialog.Title>
        <CreateAdForm />
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  );
};

export default CreateAdModal;
