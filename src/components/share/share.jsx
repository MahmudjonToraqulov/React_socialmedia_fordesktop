import './share.css'

export default function share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/myself2.jpg" alt="" className='shareProfileImg' />
                    <input placeholder="What's your mind?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <span className='shareOptionText'>Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
