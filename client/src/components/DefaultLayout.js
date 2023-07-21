
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusSquareOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link, json, useLocation } from 'react-router-dom';
import Filter from './Filter';
import { searchJobs } from 'redux/actions/jobActions';
import { useDispatch } from 'react-redux';
import Search from 'antd/es/transfer/search';

const { Header, Sider, Content } = Layout;

const DefaultLayout = (props) => {
  function logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
        style={{ minHeight: '100vh', height: '100%', position: 'sticky', top: 0 }}>
        <div className='logo'>
          {collapsed ? <h1>CJ</h1> : <h1 className='adjust'>ChinmayJobs</h1>}
        </div>
        

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/'>Home</Link>,
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: <Link to='/profile'>Profile</Link>,
            },

            {
              key: '3',
              icon: <PlusOutlined />,
              label: <Link to='/postjobs'>PostJobs</Link>,
            },

            {
              key: '5',
              icon: <CheckOutlined />,
              label: <Link to='/postedjobs'>PostedJobs</Link>,
            },

            {
              key: '3',
              icon: <PlusSquareOutlined />,
              label: <Link to='/appliedjobs'>AppliedJobs</Link>,
            },
            {
              key: '4',
              icon: <LogoutOutlined />,
              label: <Link onClick={logout}>Logout</Link>,
            },

          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            marginBottom: 0,
          }}
        >
          <div className="header-content">
            {/* <div> */}
            <div>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </div>
            {/* <div className="flex ">
              <Filter />
            </div> */}
            <div>
              <h4><span>{user.username}</span></h4>
            </div>
          </div>



        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '0px 0px',
            padding: 24,
            minHeight: 260,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

// import React, { useState } from 'react';
// import { Layout, Menu, Input } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PlusSquareOutlined,
//   UserOutlined,
//   PlusOutlined,
//   CheckOutlined,
//   LogoutOutlined,
// } from '@ant-design/icons';
// import { Link, useLocation } from 'react-router-dom';

// const { Header, Sider, Content } = Layout;
// const { Search } = Input;

// const DefaultLayout = (props) => {
//   function logout() {
//     localStorage.removeItem('user');
//     window.location.reload();
//   }

//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();
//   const user = JSON.parse(localStorage.getItem('user'));

//   return (
//     <Layout>
//       <Sider
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         style={{ minHeight: '100vh', height: '100%', position: 'sticky', top: 0 }}
//       >
//         <div className='logo'>
//           {collapsed ? <h1>CJ</h1> : <h1 className='adjust'>ChinmayJobs</h1>}
//         </div>

//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={[location.pathname]}
//           items={[
//             {
//               key: '1',
//               icon: <UserOutlined />,
//               label: <Link to='/'>Home</Link>,
//             },
//             {
//               key: '2',
//               icon: <UserOutlined />,
//               label: <Link to='/profile'>Profile</Link>,
//             },
//             {
//               key: '3',
//               icon: <PlusOutlined />,
//               label: <Link to='/postjobs'>PostJobs</Link>,
//             },
//             {
//               key: '5',
//               icon: <CheckOutlined />,
//               label: <Link to='/postedjobs'>PostedJobs</Link>,
//             },
//             {
//               key: '3',
//               icon: <PlusSquareOutlined />,
//               label: <Link to='/appliedjobs'>AppliedJobs</Link>,
//             },
//             {
//               key: '4',
//               icon: <LogoutOutlined />,
//               label: <Link onClick={logout}>Logout</Link>,
//             },
//           ]}
//         />
//       </Sider>
//       <Layout className="site-layout">
//       <Header
//           className="site-layout-background"
//           style={{
//             padding: 0,
//             marginBottom: 0,
//           }}
//         >
          // <div className='flex justify-content-between'>
          //   {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          //       className: 'trigger',
          //       onClick: () => setCollapsed(!collapsed),
          //     })}
          //     {/* Search Box */}
          //     <Search placeholder="Search..." />
          //     <h3>{user.username}</h3>
          // </div>
//         </Header>
//         <Content
//           className="site-layout-background"
//           style={{
//             margin: '0px 0px',
//             padding: 24,
//             minHeight: 260,
//           }}
//         >
//           {props.children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default DefaultLayout;

// import { Layout, Menu } from 'antd';
// import React from 'react';

// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PlusSquareOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   HomeOutlined,
//   UserOutlined,
//   PlusOutlined,
//   CheckOutlined,
//   LogoutOutlined,
// } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// import Filter from './Filter';

// const { Header, Sider, Content } = Layout;

// class DefaultLayout extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapsed: false,
//     };
//   }

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   logout = () => {
//     localStorage.removeItem('user');
//     window.location.reload();
//   };

//   render() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     return (
//       <Layout>
//         <Sider
//           trigger={null}
//           collapsible
//           collapsed={this.state.collapsed}
//           style={{ position: 'sticky', overflow: 'auto', height: '100%', top: 0 }}
//         >
//           <div className="logo">
//             {this.state.collapsed ? <h1>SJ</h1> : <h1>SheyJobs</h1>}
//           </div>
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
//             <Menu.Item key="/" icon={<HomeOutlined />}>
//               <Link to="/">Home</Link>
//             </Menu.Item>
//             <Menu.Item key="/profile" icon={<UserOutlined />}>
//               <Link to="/profile">Profile</Link>
//             </Menu.Item>
//             <Menu.Item key="/appliedjobs" icon={<PlusSquareOutlined />}>
//               <Link to="/appliedjobs">Applied Jobs</Link>
//             </Menu.Item>

//             <Menu.Item key="/postjob" icon={<PlusOutlined />}>
//               <Link to="/postjob">Post Job</Link>
//             </Menu.Item>

//             <Menu.Item key="/posted" icon={<CheckOutlined />}>
//               <Link to="/posted">Posted</Link>
//             </Menu.Item>

//             <Menu.Item key="/logout" icon={<LogoutOutlined />}>
//               <Link onClick={this.logout}>Logout</Link>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           <Header
//             className="site-layout-background"
//             style={{ padding: 0, position: 'sticky', overflow: 'auto', top: 0, zIndex: 9999 }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <div>
//                 {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                   className: 'trigger',
//                   onClick: this.toggle,
//                 })}
//               </div>

//               <div>
//                 <Filter />
//               </div>

//               <div>
//                 <h5 className="mr-2"><b>{user.username}</b></h5>
//               </div>
//             </div>
//           </Header>
//           <Content
//             className="site-layout-background"
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               minHeight: 280,
//             }}
//           >
//             {this.props.children}
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// export default DefaultLayout;



