import './profile.css'
import TopBar from '../../components/topbar/TopBar.jsx'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'


export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/person/myself2.jpg" alt="" className="profileCoverImg" />
                            <img src="assets/person/myself.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h2 className="profileInfoName">MakhmoodJan Torakulov</h2>
                            <span className="profileInfoDesc">Hi My friends!!!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
