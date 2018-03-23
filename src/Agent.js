import React, { Component } from 'react';
import { Avatar, Icon, Popover, Input, Button, message } from 'antd';

export default class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      agent: props.agent,
    }
  }

  hide = () => {
    this.setState({
      visible: false,
      input: null,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
  removeResource = (index) => {
    const { agent } = this.state;
    agent.resources = agent.resources.filter((v, k) => {
      return k !== index;
    });
    this.setState({ agent });
  }
  addAgent = () => {
    const { input, agent } = this.state;
    if (input) {
      const inputs = input.split(',');
      inputs.forEach((pInput, k) => {
        if (agent.resources.indexOf(pInput) > -1) {
          message.info('the same resources');
          return
        };
        agent.resources.push(pInput);
      });
      this.setState({
        agent,
        visible: false,
        input: null,
      });
      // this.props.addAgent(input);
    }
  }
  onChangeInput = (e) => {
    this.setState({ input: e.target.value });
  }
  render() {
    const { visible, input, agent } = this.state;
    const content = (
      <div>
        <div>(Separate multiple resources name with commas)</div>
        <Input style={{ margin: '1em 0' }} onChange={this.onChangeInput} value={input} />
        <div>
          <Button style={{ marginRight: 10 }} onClick={this.addAgent}>Add Resources</Button>
          <Button onClick={this.hide}>Close</Button>
        </div>
      </div>
    );
    return (
      <div className={`agent-list-item ${agent.deny ? 'agent-list-item-deny' : ''}`}>
        <div className="agent-list-item-avatar">
          <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <div className="agent-list-item-content">
          <h4 className="agent-list-item-content-title hiddenWord">
            <a href={agent.url} style={{ marginRight: 20 }}>{agent.title}</a>
            {agent.style && <span className="separated">|</span>}
            <span>{agent.style}</span>
            {agent.ip && <span className="separated">|</span>}
            <span>{agent.ip}</span>
            {agent.path && <span className="separated">|</span>}
            <span>{agent.path}</span>
          </h4>
          <div className="agent-list-item-content-discription">
            <Popover content={content} placement="bottomLeft" trigger="click" visible={visible} onVisibleChange={this.handleVisibleChange}>
              <span style={{ cursor: 'pointer' }}>
                <Icon type="plus" /><span style={{ textDecoration: 'underline' }}>Specify Resources </span>
              </span>
            </Popover>
            {agent.resources && agent.resources.length ? <span>
              <span className="separated">|</span><span>Resources: </span>
              {agent.resources.map((r, j) => <span key={j} className="nowrap">
                {r}
                <i className="far fa-times-circle icon-separated" onClick={this.removeResource.bind(this, j)}/>
              </span>)}
            </span> : ''}
          </div>
        </div>
        {agent.deny && <div className="deny">
          <i className="fas fa-ban deny-icon"/><span style={{ textDecoration: 'underline' }}>Deny</span>
        </div>}
      </div>
    );
  }
}
