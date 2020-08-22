import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import gTheme from "../Styles/theme";
import Button from '@material-ui/core/Button';



const Wrapper = styled.div`
    display : flex;
    align-content: center;
    justify-content: center;
    padding-top:50px;
`;


function PaperComponent(props:any) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );

}


export default ({
    title="",
    contentText,
    okText="확인",
    cancelText="취소",
    okClickedFunc,
    checkDialogOpen,
    setCheckDialogOpen,
    refetch

}:any) => {

    const handleClose = () => {
        setCheckDialogOpen(false);
    };

    const handleOK = async() => {
        await okClickedFunc();
        if(refetch){
            await refetch();
        }
        handleClose();
    }
    return(
    <>
        <Dialog
        open={checkDialogOpen}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        PaperProps={{
            style: {
            backgroundColor: gTheme.lightGrayColor,
            paddingBottom:"15px",
            minWidth:"350px",
            minHeight:"270px",
            },
        }}
        >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">{title}</DialogTitle>
        <DialogContent>
            <Wrapper>
                {contentText}
            </Wrapper>
        </DialogContent>
        <DialogActions style={{ paddingRight:'20px'}}>
            <Button onClick={handleOK} >
            {okText}
            </Button>
            <Button onClick={handleClose} >
            {cancelText}
            </Button>
        </DialogActions>

        </Dialog>
    </>
    )

}