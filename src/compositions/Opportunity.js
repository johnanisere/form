import React from "react";

import { connect } from "react-redux";
import Loading from "../components/Loader";
import Container from "../blocks/Container";
import Opportunity from "../components/Opportunity";
import { initialState } from "./constants/initialState";
import skillAndBackground from "./BackgroundAndSkill.action";
import getOpportunity, { updateOpportunity } from "./Opportunity.actions";
import {
  getIds,
  onStripByKey,
  constructUpdate,
  getRelevantData
} from "../helpers/utils";

class App extends React.Component {
  state = {
    ...initialState
  };

  componentDidMount() {
    this.props.getOpportunity();
    this.props.skillAndBackground();
  }

  componentDidUpdate(prevProps) {
    const prevOppotunity = prevProps.opportunity.fetched;
    const newOppotunity = this.props.opportunity.fetched;
    const condition = prevOppotunity !== newOppotunity && newOppotunity;

    if (condition) {
      this.populateState();
    }
  }

  populateState = () => {
    const { opportunity } = this.props;

    const data = getRelevantData(opportunity.resp);
    this.setState({ ...data });
  };

  onHandleSelect = (name, selectedOptions) => {
    const selected = onStripByKey(Array.from(selectedOptions || []), "value");
    const condition = name === "backgrounds" && selected.length > 3;
    if (!condition) {
      this.setState({
        [name]: selected
      });
    }
  };

  onHandleChange = ({ target: { name, value, type, selectedOptions } }) => {
    type === "select-multiple"
      ? this.onHandleSelect(name, selectedOptions)
      : this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    let data = { ...this.state };
    const { skills, backgrounds } = this.props.backgroundAndSkill;
    const skill_extra = { option: "preferred", level: 0 };
    const background_extra = { option: "preferred" };

    data.skills = getIds(this.state.skills, skills, skill_extra);
    data.backgrounds = getIds(
      this.state.backgrounds,
      backgrounds,
      background_extra
    );

    this.props.updateOpportunity(constructUpdate(data));
  };

  render() {
    const { backgroundAndSkill, opportunity } = this.props;

    return opportunity.fetching_opportunity ? (
      <Loading />
    ) : (
      <Container>
        <Opportunity
          data={this.state}
          onSubmit={this.onSubmit}
          allSkills={backgroundAndSkill.skills}
          onHandleChange={this.onHandleChange}
          allBackgrounds={backgroundAndSkill.backgrounds}
          fetching={opportunity.fetching_update_opportunity}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  getOpportunity,
  updateOpportunity,
  skillAndBackground
};

const mapStateToProps = ({ opportunity, backgroundAndSkill }) => ({
  opportunity,
  backgroundAndSkill
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
