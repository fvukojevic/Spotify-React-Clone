import React from 'react'
import './Sidebar.css'
import SidebarOption from './partials/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../../data/DataLayer";

function Sidebar({spotify}) {
    const [{playlists}] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img className='sidebar_logo' src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                 alt=''/>
            <SidebarOption title='Home' Icon={HomeIcon}/>
            <SidebarOption title='Search' Icon={SearchIcon}/>
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>

            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr/>

            {playlists?.items?.map((playlist) => {
                return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
            })}
        </div>
    )
}

export default Sidebar