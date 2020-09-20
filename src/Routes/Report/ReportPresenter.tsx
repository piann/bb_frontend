import React from "react";
import styled from "styled-components";
import BBPBanner from "../../Components/BBPBanner";
import BBPSubMenu from "../../Components/BBPSubMenu";
import {InformationBox, InformationTitle, InformationContent} from "../../Components/InformationElement";
import Dropdown from "../../Components/Dropdown";
import TextArea from "../../Components/TextArea";
import Input from "../../Components/Input";
import {BarLoader} from "../../Components/Loaders";
import { dateStringToDotFormat } from "../../utils";
import { Radio, RadioGroup } from 'rsuite';
import Button from "../../Components/Button";
import CheckDialog from "../../Components/CheckDialog";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { toastOpt } from "../../common";

const BBPBody = styled.div`
    position: relative;
    width:100%;
    top: 200px;
    display:grid;
    grid-auto-flow: row;
    grid-column-gap:20px;
    grid-template-columns: 4fr 1fr;
`;

const BBPLeft = styled.div`
`;

const BBPRight = styled.div`
`;

const SubPolicyBox = styled.div`
    box-shadow:0 3px 7px 3px rgba(7, 7, 33, 0.1),0 1px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: white;
    padding:20px;
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
    z-index:3;
`;

const SubPolicyTitle = styled.div`
    font-weight:600;
    margin-bottom:50px;
`;

const SubPolicyContent = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:1.8em;
    white-space: pre-line;
`;

const InformationContent2 = styled.div`
    display:grid;
    flex-direction:column;
    grid-template-columns:50px 1fr;
`;

const LeftSpace = styled.div`
    min-height:1px;
    border-right:2px groove ${props => props.theme.snowyGrayColor};
`;

const RightSpace = styled.div`
    min-width:1px;
    padding-left:40px;
    padding-right:25px;
    display:flex;
    flex-direction:column;
`;

interface CircleProps{
    xIndex:number;
    yIndex:number;
}
const CircleContent = styled.div<CircleProps>`
  position: absolute;
  margin-left:${props => props.xIndex}px;
  margin-top:${props => props.yIndex}px;
  height: 40px;
  width: 40px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:white;
  font-size:17px;
  background-color: ${props => props.theme.blueColor};
  border-radius:50%;
  z-index:2;
`
const InfoText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height: 2em;
    white-space: pre-line;
    margin-bottom:8px;
`;

const CountText = styled.div`
    margin-right: 5px; 
    color: ${props => props.theme.normalGrayColor};
`;

const InfoTextRow = styled.div`
    display:flex;
    justify-content:space-between;
`;


const BoldInfoText = styled(InfoText)`
    font-weight:600;
`;

const TextInputSetWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

const InputLeftText = styled.div`
    width:70px;
    font-weight:600;
`



const MiniTitleText = styled.div`
    word-break: keep-all;
    word-spacing: 0.1em;
    line-height:2em;
    white-space: pre-line;
    font-weight:600;
    font-size:16px;
    margin-bottom:30px;

`

const RadioSpace = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

const RadioRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-bottom:30px;
`;

const RadioBox = styled.div`
    width:50%;
    flex-direction:column;
`
const RadioTitle = styled.div`
    margin-bottom:10px;
    font-weight:600;
`;

const RadioSelect = styled.div`

`

const ExRadioGroup = styled(RadioGroup)`
    display:flex;
    flex-direction:row;
`

const SubmitButtonWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    padding-top:20px;
    margin-bottom:20px;
    border-top: 1px solid rgba(50,33,50,0.3);
`

const FileInputArea = styled.div`
margin-top:10px;
margin-bottom:10px;

input[type="file"] {
	position: absolute;
	width: 0;
	height: 0;
	padding: 0;
	overflow: hidden;
	border: 0;
}

label {
	display: inline-block;
	padding: 5px 10px;
    margin-right:5px;
	color: ${props=>props.theme.blackGrayColor};
	vertical-align: middle;
	background-color: #fdfdfd;
	cursor: pointer;
	border: 1px solid #ebebeb;
	border-radius: 5px;
}

/* named upload */
.upload-name {
	display: inline-block;
  height: 25px;
  padding: 0 10px;
	vertical-align: middle;
	background-color: #f5f5f5;
  border: 1px solid #ebebeb;
  border-radius: 5px;

}

`;



export default ({
    loading,
    submitLoading,
    nameId,
    reportTipList,
    disclosurePolicy,
    vulnerabilityList,
    openDate,
    closeDate,
    inScopeTargetList,

    titleInput,
    locationInput,
    descriptionInput,
    dumpInput,
    additionalTextInput,
    osInput,
    browserInput,
    browserVersionInput,
    setTargetId,
    setVId,
    setAttackComplexity,
    setRequiredPriv,
    setUserInteraction,
    setConfidentiality,
    setIntegrity,
    setAvailablity,

    fileData,
    setFileData,
    fileText,
    setFileText,
    clickFunc,
    buttonDisabled,
    setButtonDisabled,
    dialogOpen,
    setDialogOpen
}:any) => 
<>
<BBPBanner hideButton={true} nameId={nameId}/>
<BBPSubMenu nameId={nameId}/>
<ToastContainer/>
<BBPBody>
    {loading?<></>:
    <>
    <BBPLeft>
        <InformationBox>
            <InformationTitle>Tips</InformationTitle>
            <InformationContent>
                {reportTipList.map((value:any, index:any) => {
                         return <InfoText key={index+1000}>{"⚬  "}{value}</InfoText>
                })}
            </InformationContent>
        </InformationBox>
        <InformationBox>
            <InformationTitle>Report</InformationTitle>
            <InformationContent2>
                <LeftSpace>
                    <CircleContent xIndex={30} yIndex={29}>1</CircleContent>
                    <CircleContent xIndex={30} yIndex={290}>2</CircleContent>
                    <CircleContent xIndex={30} yIndex={520}>3</CircleContent>
                    <CircleContent xIndex={30} yIndex={958}>4</CircleContent>
                </LeftSpace>
                <RightSpace>
                    <MiniTitleText>{"\nAsset"}</MiniTitleText>
                    <InfoText>{"취약점이 발견된 대상을 선택하세요\n\n"}</InfoText>
                    <Dropdown options={inScopeTargetList} defaultValue={inScopeTargetList[0].options[0]} onChange={
                             (selected:any) => {
                                setTargetId(selected.value);
                              }
                    }/>


                    <MiniTitleText>{"\n\n"}{"\nVulnerability"}</MiniTitleText>
                    <InfoText>{"발견된 취약점에 가장 부합하는 취약점 유형을 선택하세요\n\n"}</InfoText>
                    <Dropdown options={vulnerabilityList} defaultValue={vulnerabilityList[0].options[0]} onChange={
                            (selected:any) => {
                                setVId(selected.value);
                            }
                    }/>


                    <MiniTitleText>{"\n\n"}{"Impact"}</MiniTitleText>
                    <InfoText>{"발견된 취약점을 스스로 평가해주세요 (생략가능)\n\n"}</InfoText>
                    <RadioSpace>
                        <RadioRow>
                            <RadioBox>
                                <RadioTitle>{"공격의 복잡도"}</RadioTitle>
                                <RadioSelect>
                                    <ExRadioGroup name="attackComplexity" onChange={(v:any)=>{setAttackComplexity(v)}}>
                                        <Radio value={1}>{"Low "}</Radio>
                                        <Radio value={2}>{"Medium "}</Radio>
                                        <Radio value={3}>{"High "}</Radio>
                                    </ExRadioGroup>
                                </RadioSelect>
                            </RadioBox>
                            <RadioBox>
                                <RadioTitle>{"필요권한"}</RadioTitle>
                                <RadioSelect>
                                    <ExRadioGroup name="requiredPriv" onChange={(v:any)=>{setRequiredPriv(v)}}>
                                        <Radio value={1}>{"Low "}</Radio>
                                        <Radio value={2}>{"Medium "}</Radio>
                                        <Radio value={3}>{"High "}</Radio>
                                    </ExRadioGroup>
                                </RadioSelect>
                            </RadioBox>
                        </RadioRow>
                        <RadioRow>
                            <RadioBox>
                                <RadioTitle>{"필요한 사용자 개입 수준"}</RadioTitle>
                                <RadioSelect>
                                    <ExRadioGroup name="userInteraction" onChange={(v:any)=>{setUserInteraction(v)}}>
                                        <Radio value={1}>{"Low "}</Radio>
                                        <Radio value={2}>{"Medium "}</Radio>
                                        <Radio value={3}>{"High "}</Radio>
                                    </ExRadioGroup>
                                </RadioSelect>

                            </RadioBox>
                            <RadioBox>
                                <RadioTitle>{"기밀성 영향"}</RadioTitle>
                                <RadioSelect>
                                    <ExRadioGroup name="confidentiality" onChange={(v:any)=>{setConfidentiality(v)}}>
                                        <Radio value={1}>{"Low "}</Radio>
                                        <Radio value={2}>{"Medium "}</Radio>
                                        <Radio value={3}>{"High "}</Radio>
                                    </ExRadioGroup>
                                </RadioSelect>
                            </RadioBox>
                        </RadioRow>
                        <RadioRow>
                            <RadioBox>
                                <RadioTitle>{"무결성 영향"}</RadioTitle>
                                <RadioSelect>
                                    <ExRadioGroup name="integrity" onChange={(v:any)=>{setIntegrity(v)}}>
                                        <Radio value={1}>{"Low "}</Radio>
                                        <Radio value={2}>{"Medium "}</Radio>
                                        <Radio value={3}>{"High "}</Radio>
                                    </ExRadioGroup>
                                </RadioSelect>
                            </RadioBox>
                            <RadioBox>
                                <RadioTitle>{"가용성 영향"}</RadioTitle>
                                <RadioSelect>
                                    <ExRadioGroup name="availablity" onChange={(v:any)=>{setAvailablity(v)}}>
                                        <Radio value={1}>{"Low "}</Radio>
                                        <Radio value={2}>{"Medium "}</Radio>
                                        <Radio value={3}>{"High "}</Radio>
                                    </ExRadioGroup>
                                </RadioSelect>
                            </RadioBox>
                        </RadioRow>
                    </RadioSpace>

                    <MiniTitleText>{"\n\n\n"}{"Details"}</MiniTitleText>
                    <InfoText>{"어떻게 해당 취약점을 재현할 수 있는지와 어떻게 취약점을 발견하게 되었는지 최대한 자세하게 기술해주세요.\n\n"}</InfoText>
                    <BoldInfoText>{"Title"}</BoldInfoText>
                    <InfoText>{"발견 취약점에 대해 간단한 요약, 제목 (50자 이내)"}</InfoText>
                    <Input maxLength={50} {...titleInput}/>
                    
                    <BoldInfoText>{"\n\n"}{"URL or Location Of Vulnerability"}</BoldInfoText>
                    <InfoText>{"취약점 발생 URL을 적어주세요 (생략 가능)"}</InfoText>
                    <Input maxLength={500} {...locationInput}/>

                    <BoldInfoText>{"\n\n"}{"Enviroment"}</BoldInfoText>
                    <InfoText>{"취약점을 시현했던 OS와 Browser, Browser version (생략 가능)"}</InfoText>
                        <TextInputSetWrapper>
                            <InputLeftText>{"OS"}</InputLeftText>
                            <Input maxLength={30} inputWidth={"50%"} {...osInput}/>
                        </TextInputSetWrapper>
                        <TextInputSetWrapper>
                            <InputLeftText>{"Browser"}</InputLeftText>
                            <Input maxLength={30} inputWidth={"50%"} {...browserInput}/>
                        </TextInputSetWrapper>
                        <TextInputSetWrapper>
                            <InputLeftText>{"Version"}</InputLeftText>
                            <Input maxLength={30} inputWidth={"50%"} {...browserVersionInput}/>
                        </TextInputSetWrapper>
                        <BoldInfoText>{"\n\n\n"}{"Description"}</BoldInfoText>
                            <InfoText>
                                {"1. 어떻게 취약점을 발견하게 되었는지 그 경위를 기술해주세요."}
                            </InfoText>
                            <InfoText>
                                <InfoTextRow>
                                    {"2. 취약점을 재현할 수 있는 방법을 단계별로 기술해주세요."}
                                    <CountText>
                                    {`(${descriptionInput.value.length} / 10000)`}
                                    </CountText>
                                </InfoTextRow>
                            </InfoText>
                            <TextArea rows={20} maxLength={10000} {...descriptionInput}/>


                            <BoldInfoText>{"\n\n\n"}{"HTTP request dump"}</BoldInfoText>
                            <InfoText>
                                <InfoTextRow>
                                {"공격 관련 request 정보 (생략 가능)"}
                                    <CountText>
                                    {`(${dumpInput.value.length} / 10000)`}
                                    </CountText>
                                </InfoTextRow>
                            </InfoText>
                            <TextArea rows={20} maxLength={10000} {...dumpInput}/>

                            <BoldInfoText>{"\n\n\n"}{"비고"}</BoldInfoText>
                            <InfoText>
                                <InfoTextRow>
                                {"이 외 해커로서 하고 싶은 코멘트를 자유롭게 해주세요"}
                                    <CountText>
                                        {`(${additionalTextInput.value.length} / 500)`}
                                    </CountText>
                                </InfoTextRow>
                            </InfoText>
                            <TextArea rows={5} maxLength={500} {...additionalTextInput}/>

                            <BoldInfoText>{"\n\n\n"}{"파일 첨부"}</BoldInfoText>
                            <InfoText>{"필요한 경우 poc 등을 압축해서 올려주세요 (zip 파일만 가능, 50MB)"}</InfoText>
                            <FileInputArea>
                            <label htmlFor="file">{"Upload"}</label> 
                            <input 
                             type="file"
                             id="file"
                             accept=".zip"
                             onChange={e=>{
                                setButtonDisabled(true);
                                const fileObjList = e.target.files;
                                
                                if(fileObjList===null ||fileObjList.length===0){
                                    toast("There is error.", toastOpt as any);
                                    setButtonDisabled(false);
                                    return;
                                }
                                if(fileObjList[0].size >= 50*1024*1024){// 50mb limit
                                    toast("File Size Limit : 50mb", toastOpt as any);
                                    setButtonDisabled(false);
                                    return;
                                } 

                                const fileName = fileObjList[0].name;

                                setFileText(fileName);
                                setFileData(fileObjList[0]);
                                
                                setButtonDisabled(false);

                             }}/> 
                            <input className="upload-name" id="upload-name" value={fileText} readOnly={true}/>
                            </FileInputArea>
                            <SubmitButtonWrapper>
                            {submitLoading?
                            <BarLoader/>:
                            <Button text="Submit Report" width={"150px"} onClick={()=>{setDialogOpen(true)}} disabled={buttonDisabled}/>
                            }
                                <CheckDialog
                                title={"Submit Report"}
                                contentText={"최종 제출하시겠습니까?"}
                                okClickedFunc={clickFunc}
                                checkDialogOpen={dialogOpen}
                                setCheckDialogOpen={setDialogOpen}
                                refetch={false}
                                />
                            </SubmitButtonWrapper>
             </RightSpace>
            </InformationContent2>
        </InformationBox>
    </BBPLeft>
    <BBPRight>
    <SubPolicyBox>
            <SubPolicyTitle>{"취약점 공개 정책"}</SubPolicyTitle>
            <SubPolicyContent>{disclosurePolicy}</SubPolicyContent>
        </SubPolicyBox>
        <SubPolicyBox>
            <SubPolicyTitle>{"운영 정보"}</SubPolicyTitle>
            <SubPolicyContent>{"시작 :"}</SubPolicyContent>
            <SubPolicyContent>{openDate?dateStringToDotFormat(openDate):"-"}</SubPolicyContent>
            <SubPolicyContent>{"\n"}</SubPolicyContent>
            <SubPolicyContent>{"종료 :"}</SubPolicyContent>
            <SubPolicyContent>{closeDate?dateStringToDotFormat(closeDate):"⠀-⠀"}</SubPolicyContent>
        </SubPolicyBox>
    </BBPRight>
    </>
    }
</BBPBody>

</>