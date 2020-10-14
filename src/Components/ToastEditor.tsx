import React from "react";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const toolbarItems = [
    'heading',
    'bold',
    'italic',
    'underscore',
    'strike',
    'divider',
    'hr',
    'quote',
    'divider',
    'ul',
    'ol',
    'task',
    'divider',
    'indent',
    'outdent',
    'codeblock',
    'table',
    'divider',

 ];

interface EProps{
    onChangeContent?:any
    maxBytes?:number
}

interface EState{
    prevMdContent:string
}


class ToastEditor extends React.Component<EProps, EState>{
    private refObj: React.RefObject<Editor>;
    constructor(props:any) {
        super(props);
        this.refObj = React.createRef();
        this.state ={
            prevMdContent:""
        }
    }
    
 render(){
    return(
     <Editor
        initialValue=""
        previewStyle="tab"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        usageStatistics={false}
        toolbarItems={toolbarItems}
        hideModeSwitch={true}
        ref={this.refObj}
        events={
            {
                change:({source ,data})=>{
                        var mdContent = this.refObj!.current!.getInstance().getMarkdown();
                        if(this.props.maxBytes!=undefined && (mdContent.length > this.props.maxBytes)){
                            this.refObj!.current!.getInstance().setMarkdown(this.state.prevMdContent);
                        } else {
                            this.props.onChangeContent(mdContent);
                            this.setState({...this.state, prevMdContent:mdContent})
                        }
                    }
                }
            }
            
        />)
    }   
}

export default ToastEditor;