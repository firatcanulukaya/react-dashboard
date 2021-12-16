import { React } from 'react'

const Sidebar = (props) => {

    const { menu, user, sidebarCollapse } = props;

    return (

        <div className="sidebar sidebar-collapse">

            <div className="sidebar-top">

                <button onClick={sidebarCollapse} className="mobileSidebarCollapseBtn">
                    <i className="fas fa-times"></i>
                </button>

                <div className="sidebar-flex">

                    <div className="sidebar-photo">
                        <img src="https://i.ibb.co/swkR93p/bramdejager-600x600.png" alt="profile" />
                    </div>
                    <div className="sidebar-info">
                        <p>{user && user.name}</p>
                        <p>{user && user.id.title}: {user && user.id.value}</p>
                    </div>
                </div>

                <div className="sidebar-button">
                    <a href="/">View Profile</a>
                </div>

            </div>


            <div className="sidebar-item">
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                {(() => {
                                    switch (item.name) {
                                        case 'Dashboard':
                                            return <i className="fas fa-home"></i>;
                                        case 'Countries':
                                            return <i className="fas fa-globe"></i>;
                                        case 'States':
                                            return <i className="fab fa-xing-square"></i>;
                                        case 'Schools':
                                            return <i className="fas fa-graduation-cap"></i>;
                                        case 'Faculties':
                                            return <i className="fab fa-delicious"></i>;
                                        case 'Students':
                                            return <i className="fab fa-openid"></i>;
                                        default:
                                            return null;
                                    }
                                })()}
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div >
    )
}

export default Sidebar