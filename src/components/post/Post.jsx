import './post.css'
import { Users } from '../../someData'
import { useState } from 'react'

export default function Post({ posts }) {
    const [like, setLike] = useState(posts.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }


    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id === posts.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === posts.userId)[0].username}
                        </span>
                        <span className="postDate">{posts.date}</span>
                    </div>
                    <div className="postTopRight">/*</div>
                </div>
                <div className="postCenter">
                    <span className="postText">{posts.descr}</span>
                    <img src="/assets/person/myself.jpg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" onClick={likeHandler} alt="" className="likeIcon"/>
                        <img src="/assets/heart.png" onClick={likeHandler} alt="" className="heartIcon" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{posts?.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
