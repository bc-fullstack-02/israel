import { UserCircle, Chat, Heart } from "phosphor-react"
import { Link } from "react-router-dom"
import Heading from "../Heading"
import Text from "../Text"
import { Post } from '../../Model/index'

interface PostItemProps {
    post: Post;
    handleLike: (postId: string) => void
}

function PostItem({ post, handleLike }: PostItemProps) {
    const profile = localStorage.getItem("profile") as string
    return (<div className="border-b border-green-400" key={post._id}>
        <div className="flex flex-row items-center ml-5 my-4">
            <UserCircle size={48} weight='light' className="text-slate-50" />
            <Text className="font-extrabold ml-2">{post.profile.name}</Text>
        </div>
        <div className="ml-16 flex flex-col gap-2">
            <Link to={`/posts/${post._id}`}><Heading size="sm">{post.title}</Heading></Link>
            {post.image ? (
                <img
                    src={post.description}
                    alt="Foto"
                    className="max-w-lg rounded-lg" />
            ) : (
                <Text asChild>
                    <p>{post.description}</p>
                </Text>
            )}
        </div>
        <div className="flex items-center ml-16 my-4 space-x-2">
            <Chat size={24} className="text-slate-50" />
            <Text size="sm">{post.comments.length}</Text>

            <div
                className="hover:bg-sky-400 rounded-full p-1"
                onClick={() => handleLike(post._id)}
            >
                {post.likes.includes(profile) ? (
                    <Heart size={24} className="text-red-500" weight="fill" />
                ) : (
                    <Heart size={24} className="text-slate-50" />
                )}

            </div>
            <Text size="sm">{post.likes.length}</Text>
        </div>
    </div>)
}

export default PostItem