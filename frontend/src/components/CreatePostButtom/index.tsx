import * as Dialog from '@radix-ui/react-dialog'

function CreatePostButtom() {
    return (
        <Dialog.Trigger className='py-3 px-4 mt-6 bg-green-400 transition-colors hover:bg-orange-300 container rounded-full font-semibold text-white'>
            Novo Post
        </Dialog.Trigger>
    )
}

export default CreatePostButtom