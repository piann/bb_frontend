import React from "react";
import styled from "styled-components";
import {SpinLoader} from './Loaders';
import UserProfileImage from "./UserProfileImage";
import editPicImage from "../images/editPic.png";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  margin-bottom:10px;
  height:70px;
`;

const Image = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  & img {
    width: 60px;
    height: 60px;
  }
`;


const Input = styled.input`
  color: white;
  opacity: 0;
  height: 1px;
  &:focus {
    outline: none;
  }
`;

const EditButton = styled.label`
    cursor: pointer;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    box-shadow: 1px 1px 1px 1px rgba(64, 65, 100, 0.7);
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top:-15px;
    margin-left:40px;
  & img {
    width: 25px;
    height: 25px;
  }
`;

interface IProps {
    idx?:string;
    uploading: boolean;
    fileUrl: string|null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  

  const PhotoInput: React.SFC<IProps> = ({ idx, uploading, fileUrl, onChange }) => (
    <Container>
      {uploading? <SpinLoader/>:
      <>
      <Image>
      {/* profile image */}
      {!uploading && <UserProfileImage src={fileUrl}/>}
      </Image>
      <Input id={"photo"} type="file" accept=".png,.jpg,.jpeg" onChange={onChange} alt={idx}/>
      <EditButton htmlFor="photo">
        <img src={editPicImage}/>
      </EditButton>
      </>
      }
    </Container>
  );
  


export default PhotoInput;