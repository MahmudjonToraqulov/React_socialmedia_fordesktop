import './feed.css'
import Post from '../post/Post'
import Share from '../share/share'
import { Posts } from '../../someData'

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {Posts.map((a) =>
                    <Post key={a.id} posts={a} />
                )}
            </div>
        </div>
    )
}
