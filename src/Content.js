import React, { Component } from 'react';
import { Tabs, Radio } from 'antd';

import Agent from './Agent';

import './Content.css';

const TabPane = Tabs.TabPane;

class Content extends Component {

  componentWillMount() {
    const summary = this.getSummary(agents);
    this.setState({
      agents,
      summary,
    })
  }

  callback(key) {
    console.log(key);
  }

  getSummary = (agents) => {
    if (!agents || !agents.length) return;
    const summary = {};
    for (let i = 0, len = agents.length; i < len; i++) {
      const style = agents[i].style;
      if (summary[style]) {
        summary[style] += 1;
      } else if (style) {
        summary[style] = 1;
      }
    }
    return summary;
  }

  render() {
    const { agents, summary } = this.state;

    return (
      <div className="y-content">
        <h1 className="Cruise">Cruise</h1>
        <Tabs onChange={this.callback} type="card" defaultActiveKey="3" className="font14" style={{width: '100%'}}>
          <TabPane tab="DASHBORD" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="MY CRUISE" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="AGENTS" key="3">
            <div className="agents border3px">
              <div className="agents-title">
                <span className="white-title">Agents</span>
                <Radio.Group onChange={this.handleModeChange} defaultValue="Physical">
                  <Radio.Button value="All" style={{ marginLeft: 8 }}>All</Radio.Button>
                  <Radio.Button value="Physical">Physical</Radio.Button>
                  <Radio.Button value="Virtual">Virtual</Radio.Button>
                </Radio.Group>
              </div>
              <div className="agents-content-list">
                {agents.length && agents.map((v, k) => <Agent agent={v} key={k} />)}
              </div>
              <div className="agents-content-right">
                <div className="summary">
                  <h3 className="summary-title">Summary</h3>
                  {summary && Object.keys(summary).map((key, k) => <div className="summary-list-item" key={k}>
                    <div>{key}</div>
                    <div>{summary[key]}</div>
                  </div>)}
                </div>
                <div className="summary">
                  <h3 className="summary-title">History</h3>
                  {history.map((item, k) => <div className="summary-list-item" key={k}>
                    <div>sdgdfgdfgdf02/Acceptance_test</div>
                  </div>)}
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="HELP" key="4">Content of Tab Pane 4</TabPane>
        </Tabs>
      </div>
    );
  }
}
const agents = [
  {
    title: 'sdgdfgdfgdf01.thoughtworks.com',
    url: '#',
    style: 'idle',
    ip: '192.168.1.2',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox', 'core-duo'],
    deny: true,
  }, {
    title: 'sdgdfgdfgdf02.thoughtworks.com',
    url: '#',
    style: 'idle',
    ip: '192.168.1.2',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox', 'core-duo'],
  }, {
    title: 'sdgdfgdfgdf03.thoughtworks.com',
    url: '#',
    style: 'building',
    ip: '192.168.1.2',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox', 'core-duo'],
  }, {
    title: 'sdgdfgdfgdf04.thoughtworks.com',
    url: '#',
    style: 'building',
    ip: '192.168.1.2',
    path: '/var/lib/cruise-agent',
    resources: ['ubuntu', 'firefox', 'core-duo'],
    deny: true,
  }
];
const history = [];
for (let i = 0; i < 10; i++) {
  history.push('sdgdfgdfgdf02/Acceptance_test');
}

export default Content;
