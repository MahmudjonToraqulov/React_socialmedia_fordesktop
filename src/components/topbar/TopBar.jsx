import './topbar.css';

export default function Home() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">MakhmoodSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <input placeholder='search for friend and the others' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <span className="topbarIconBadge">
                            1
                        </span>
                    </div>
                    <div className="topbarIconItem">
                        <span className="topbarIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconItem">
                        <span className="topbarIconBadge">
                            3
                        </span>
                    </div>
                </div>
                <img src="/assets/person/myself.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
