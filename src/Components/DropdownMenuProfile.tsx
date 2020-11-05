import React, { Component } from 'react';
import UserProfileImage from './UserProfileImage';
import styled from "styled-components";
import {LOCAL_LOG_OUT} from "../utils";
import { Link } from 'react-router-dom';
import { Mutation } from '@apollo/client/react/components';

const TargetBox = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:40px;
  height:40px;
  cursor: pointer;
`

const DropdownWrapper = styled.div`
    position: absolute;
    top:${props => props.theme.headerBarHeight};
    right:1px;
    width:180px;
    height:100px;
    color:${props=>props.theme.textColor};
    box-shadow:0 10px 20px 5px rgba(50, 50, 93, 0.1),0 6px 6px 1px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.borderRadius};
    @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
      top: calc(${props => props.theme.headerBarHeight} - 10px);
      width:135px;
      font-size:12px;
      
  }
`;

const Menu = styled.div`
  display:flex;
  text-align:left;
  align-items:center;
  padding-left:13px;
  background-color:${props=>props.theme.lightGrayColor};
  height:50px;
  &:hover{
    background-color: #c0c0ca;
    cursor: pointer;
  }
  &:active{
    color:${props=>props.theme.textColor}
  }

`;

const SLink = styled(Link)`
  text-decoration:none;
  ${props=>props.theme.textColor}
  &:active{
    color:${props=>props.theme.textColor}
  }
  &:visited{
    color:${props=>props.theme.textColor}
  }
  a {
    text-decoration: none;
  }
  
`;

const SignOutContent = styled.div`
  width:100%;
  height:100%;
  display:flex;
  text-align:left;
  align-items:center;
`


class DropdownMenuProfile extends Component<any,any> {
  constructor(props:any) {
    super(props);
    
    this.state = {
      showMenu: false,
    };
    this.dropdownMenu = null;
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  dropdownMenu:HTMLDivElement | null;

  showMenu(event:any):any {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event:any) {
    

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }


  render() {
    return (
      <>
      <TargetBox onClick={this.showMenu}>
            <UserProfileImage   
                src={this.props.srcUrl}
                width={"35px"}
                height={"35px"}
                />
            
            {this.state.showMenu?
             (
               <DropdownWrapper
               className="menu"
               ref={(element) => {
                 this.dropdownMenu = element;
                }}
                >
                <SLink to="/profile">
                  <Menu>Dashboard</Menu>
                </SLink>
                <Menu>
                    <Mutation mutation={LOCAL_LOG_OUT}>
                      {
                        (logOutMutation:any,{loading}:any) => {
                          
                          return <SignOutContent onClick={()=>{
                              window.location.href = "/";
                              logOutMutation();
                            }}>
                              {"Log out"}
                          </SignOutContent>
                        }
                      }
                    </Mutation>
                </Menu>
              </DropdownWrapper>
            )
            :null
          }
      </TargetBox>
    </>
    );
  }
}


export default DropdownMenuProfile;