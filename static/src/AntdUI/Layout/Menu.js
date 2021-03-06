import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Layout, Icon, Menu } from 'antd';

const { Sider } = Layout;

export default class SSMenu extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0}}>
        <div className="logo">
          <img src="/gear-favicon.png" alt="Switch Statistics" />
          <p>Switch Statistics</p>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">Home</span>
            <NavLink to="/"></NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="bar-chart" />
            <span className="nav-text">Analytics</span>
            <NavLink to="/page1"></NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="video-camera" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="cloud-o" />
            <span className="nav-text">nav 5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="appstore-o" />
            <span className="nav-text">nav 6</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="team" />
            <span className="nav-text">nav 7</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="shop" />
            <span className="nav-text">nav 8</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
