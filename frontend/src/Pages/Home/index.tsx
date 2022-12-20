import * as Dialog from '@radix-ui/react-dialog';
import amazim from '../../assets/amazim.png';
import CreatePostButtom from '../../components/CreatePostButtom/index';
import CreatePostDialog from '../../components/CreatePostDialog/index';
import Menu from '../../components/Menu/index';

function Home() {
    return (
        <div className="w-screen h-screen flex">
            <div className="basis-1/6 border-r border-green-400 ml-4 pt-4">
                <div className='flex items-center ml-4'>
                    <img src={ amazim } width="130" height="50" alt="Logo" />
                </div>
                <Menu />
                <Dialog.Root>
                    <CreatePostButtom />
                    <CreatePostDialog />
                </Dialog.Root>
            </div>
            <div className="basis-5/6"></div>
        </div>)
}

export default Home