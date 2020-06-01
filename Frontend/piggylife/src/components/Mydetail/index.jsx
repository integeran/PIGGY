import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

@inject("storeStore")
@observer
class Mydetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            store_name:"",
            address: "",
            img: "",
            category: "",
            address: "",
            tel: "",
            menu: "등록된 메뉴가 없습니다.",
            memo: "",
            visited: false,
            isLike: 0,
        }
    }

    async componentWillMount() {
        console.log(this.props)
        await this.props.storeStore.mydetail(1);
        //14322
        const post = this.props.storeStore.mydetailPost;
        console.log(post)
        this.setState({
            store_name: post.name,
            address: post.address,
            img: "",
            category: post.category,
            tel: post.tel,
            menu: post.menues,
            memo: "",
            visited: false,
            isLike: 0,
        })
        if(post.menues.length===0){
            this.setState({
                menu: "등록된 메뉴가 없습니다.",
            })
        }
      }
    
    render(){
        return(
            <Frame>
                <Pic>사진</Pic>
                <Info>
                    <Text>{this.state.store_name}</Text>
                    <Text>{this.state.address}</Text>
                    <Text>{this.state.tel}</Text>
                </Info>
                <Menu>
                    <Text>메뉴</Text>
                    {this.state.menu==="등록된 메뉴가 없습니다." ? <Context>{this.state.menu}</Context> 
                :
                <div>
                  {this.state.menu.map((item, index) => <Context key={index}> {item.menuName} - {item.price}</Context>)}
                </div>
                }
                </Menu>
                <Map>지도</Map>
                <Tag>태그</Tag>
                <Memo>
                    <Text>메모</Text>
                </Memo>
            </Frame>
        )
    }
}

const Frame = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: "pic" "info" "menu" "map" "tag" "memo";
`
const Pic = styled.div`
    grid-area: "pic";
    margin-top: .5rem;
    height: 10rem;
`

const Info = styled.div`
    grid-area: "info";
    margin-top: .5rem;
    // height: 5rem;
`

const Menu = styled.div`
    grid-area: "menu";
    margin-top: .5rem;
    // height: 5rem;
`

const Map = styled.div`
    grid-area: "map";
    margin-top: .5rem;
    height: 10rem;
`

const Tag = styled.div`
    grid-area: "tag";
    margin-top: .5rem;
    height: 5rem;
`

const Memo = styled.div`
    grid-area: "memo";
    margin-top: .5rem;
    height: 7rem;
`

const Text = styled.div`
    height: 2rem;
    font-size: larger;
`

const Context = styled.div`
    height: 2rem;
`

export default Mydetail;