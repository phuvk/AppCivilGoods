import React, { Component } from 'react';
import { SideMenu } from './view/router';
import Home from './view/home';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <SideMenu/>
    );
  }
}