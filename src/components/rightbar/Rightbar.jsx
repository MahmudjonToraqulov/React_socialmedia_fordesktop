import './rightbar.css'
import { Users } from '../../someData'
import Online from '../online/Online'
import { Profiler } from 'react'

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Shohruh</b> and <b>5 other friends</b> have a birthday today</span>
                </div>
                <img src="assets/like.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => <Online key={u.id} user={u} />)}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Ferghana</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Barselona</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                    <h4 className='rightbarTitle'>User friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="assets/post/myself4.jpg" alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">Umarjon Ahmadullayev</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/post/myself4.jpg" alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">Umarjon Ahmadullayev</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/post/myself4.jpg" alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">Umarjon Ahmadullayev</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/post/myself4.jpg" alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">Umarjon Ahmadullayev</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/post/myself4.jpg" alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">Umarjon Ahmadullayev</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/post/myself4.jpg" alt="" className='rightbarFollowingImg' />
                            <span className="rightbarFollowingName">Umarjon Ahmadullayev</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
