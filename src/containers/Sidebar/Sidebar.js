import { Link } from 'react-router-dom'

import SidebarBtn from '../../components/SidebarBtn/SidebarBtn'
import {
  SubsIcon,
  IdeaIcon,
  AgentIcon,
  TicketIcon,
  PeopleIcon,
  ArticleIcon,
  SettingIcon,
  OverviewIcon, } from '../../assets/Icons/Icons'

  import './Sidebar.scss'
  import MainLogo from '../../assets/images/logo.svg'

  const sidebarBtnArr = [
    {
      title: 'Overview',
      icon: <OverviewIcon/>,
    },
    {
      title: 'Tickets',
      icon: <TicketIcon/>,
    },
    {
      title: 'Ideas',
      icon: <IdeaIcon/>,
    },
    {
      title: 'Contacts',
      icon: <PeopleIcon/>,
    },
    {
      title: 'Agents',
      icon: <AgentIcon/>,
    },
    {
      title: 'Articles',
      icon: <ArticleIcon/>,
    },
    {
      title: 'Settings',
      icon: <SettingIcon/>,
    },
    {
      title: 'Subscription',
      icon: <SubsIcon/>,
    },
  ]

const Sidebar = ({ activePage, setActivePage }) => {  
  return (
    <div className="sidebar">
      <div className="logo-holder">
        <img className="sidebar-logo" src={MainLogo} alt="Logo" />
        <h1 className="sidebar-lead">Dashboard Kit</h1>
      </div>

      <Link to="/overview">
        <SidebarBtn
          title='Overview'
          icon={<OverviewIcon/>}
          active={activePage === 'overview'}
          onClick={() => setActivePage('overview')}
        />
      </Link>
      <Link to="/tickets">
        <SidebarBtn
          title='Tickets'
          icon={<TicketIcon/>}
          active={activePage === 'tickets'}
          onClick={() => setActivePage('tickets')}
        />
      </Link>
      <Link to="/ideas">
        <SidebarBtn
          title='Ideas'
          icon={<IdeaIcon/>}
          active={activePage === 'ideas'}
          onClick={() => setActivePage('ideas')}
        />
      </Link>
      <Link to="/contacts">
        <SidebarBtn
          title='Contacts'
          icon={<PeopleIcon/>}
          active={activePage === 'contacts'}
          onClick={() => setActivePage('contacts')}
        />
      </Link>
      <Link to="/agents">
        <SidebarBtn
          title='Agents'
          icon={<AgentIcon/>}
          active={activePage === 'agents'}
          onClick={() => setActivePage('agents')}
        />
      </Link>
      <Link to="/articles">
        <SidebarBtn
          title='Articles'
          icon={<ArticleIcon/>}
          active={activePage === 'articles'}
          onClick={() => setActivePage('articles')}
        />
      </Link>
      <Link to="/settings">
        <SidebarBtn
          title='Settings'
          icon={<SettingIcon/>}
          active={activePage === 'settings'}
          onClick={() => setActivePage('settings')}
        />
      </Link>
      <Link to="/subscription">
        <SidebarBtn
          title='Subscription'
          icon={<SubsIcon/>}
          active={activePage === 'subscription'}
          onClick={() => setActivePage('subscription')}
        />
      </Link>
    </div>
  )
}

export default Sidebar