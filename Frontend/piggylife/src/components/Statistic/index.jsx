import React from "react";
import styled from "styled-components";
import LevelGraph from "../LevelGraph";
import PlaceGraph from "../PlaceGraph";
import CategoryGraph from "../CategoryGraph";
import { inject, observer } from "mobx-react";

@inject("statisticStore", "userStore", "storeStore")
@observer
class Statistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area: {},
      category: [],
      ranking: 0,
      rname: "",
      best: {
        area: "",
        city: "",
        cnt: "",
      },

      startnum: 0,
      mylength: 0,
      remainnum: 0,
      goalnum: 0,
      done: 0,
      todo: 0,
    };
  }
  UNSAFE_componentWillMount() {
    window.scrollTo(0, 0);
    this.props.statisticStore.getAreaStatistic(
      window.sessionStorage.getItem("uid")
    );
    this.props.statisticStore.getCategoryStatistic(
      window.sessionStorage.getItem("uid")
    );
    this.props.userStore.whoami(window.sessionStorage.getItem("email"));
    this.props.storeStore.get_post(window.sessionStorage.getItem("uid"));
  }
  render() {
    this.area = this.props.statisticStore.areaList;
    this.category = this.props.statisticStore.categoryList;
    this.ranking = this.props.userStore.ranking;
    this.rname = this.props.userStore.rname;
    this.mylength = this.props.storeStore.postslength;
    this.best = this.props.statisticStore.bestarea;
    if (this.ranking === 0) {
      this.goalnum = 10;
      this.startnum = 0;
    } else if (this.ranking === 1) {
      this.goalnum = 20;
      this.startnum = 10;
    } else if (this.ranking === 2) {
      this.goalnum = 30;
      this.startnum = 20;
    } else if (this.ranking === 3) {
      this.goalnum = 50;
      this.startnum = 30;
    } else if (this.ranking === 4) {
      this.goalnum = 70;
      this.startnum = 50;
    } else if (this.ranking === 5) {
      this.goalnum = 90;
      this.startnum = 70;
    } else if (this.ranking === 6) {
      this.goalnum = 120;
      this.startnum = 90;
    } else if (this.ranking === 7) {
      this.goalnum = 150;
      this.startnum = 120;
    } else if (this.ranking === 8) {
      this.goalnum = 180;
      this.startnum = 150;
    } else if (this.ranking === 9) {
      this.goalnum = 230;
      this.startnum = 180;
    }
    this.remainnum = this.goalnum - this.mylength;
    this.done =
      (100 / (this.goalnum - this.startnum)) * (this.mylength - this.startnum) +
      "%";
    this.todo = (100 / (this.goalnum - this.startnum)) * this.remainnum + "%";
    return (
      <Frame>
        <LFrame>
          <LevelGraph
            done={this.done}
            todo={this.todo}
            ranking={this.ranking}
          ></LevelGraph>
        </LFrame>
        <Level>
          <Div style={{ paddingTop: "0.75rem" }}>당신의 돼지력은</Div>
          <Piggy>
            Lv.{this.ranking} {this.rname}
          </Piggy>
          <Div>입니다</Div>
        </Level>
        <Placer>
          <Div style={{ paddingTop: "0.7rem" }}>당신은</Div>
          <Piggy>
            {" "}
            "{this.best.city} {this.best.area}" 를
          </Piggy>
          <Div>자주 방문하는 {this.rname}입니다</Div>
        </Placer>
        <Place>
          <PlaceGraph></PlaceGraph>
        </Place>
        <Category>
          <CategoryGraph></CategoryGraph>
        </Category>
      </Frame>
    );
  }
}

const LFrame = styled.div`
  height: 4rem;
  width: 100%;
`;
const Frame = styled.div`
  margin: 1rem;
  overflow: hidden;
`;
const Level = styled.div`
  background-color: #f28379;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  color: white;
  height: 100px;
`;
const Placer = styled.div`
  height: 100px;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #5897a6;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  color: white;
`;
const Place = styled.div`
  height: 220px;
  background-color: #f2e9e4;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  position: relative;
  z-index: -3;
`;
const Category = styled.div`
  height: 220px;
  background-color: #f2e9e4;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;
const Div = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Piggy = styled.div`
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Statistic;
