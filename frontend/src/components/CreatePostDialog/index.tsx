import * as Dialog from '@radix-ui/react-dialog'
import { TextInput } from '../TextInput'

function CreatePostDialog() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-green-200/60 inset-0 fixed' />

            <Dialog.Content className='fixed bg-[#green] py-8 px-10 text-green-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
                <Dialog.Title className='text-3xl font-black'>Novo Post</Dialog.Title>
                <form>
                    <div>
                        <label htmlFor="description" className='font-semibold'>
                            O que você está pensando?
                        </label>
                        <TextInput.Input
                            id='description'
                            placeholder='Diga o que está pensando...'
                        />
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}

export default CreatePostDialog