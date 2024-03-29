import { Post } from "../Model/index"
import api from "./api"
import { getAuthHeader } from "./auto"


async function likePost(post: Post, profile: string): Promise<Post> {
    await api.post(`/posts/${post._id}/like`, null, getAuthHeader())
    return like(post, profile)
}

async function unlikePost(post: Post, profile: string): Promise<Post> {
    await api.post(`/posts/${post._id}/like`, null, getAuthHeader())
    return unlike(post, profile)
}


function like(post: Post, profile: string) {
    post.likes.push(profile)
    return post
}

function unlike(post: Post, profile: string) {
    const index = post.likes.indexOf(profile)
    post.likes.splice(index, 1)
    return post
}

export { likePost, unlikePost }