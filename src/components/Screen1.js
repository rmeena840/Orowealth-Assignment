import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Screen2 from './Screen2';
import ReactDOM from 'react-dom';

const myStyle = {
  borderWidth: "0px",
  borderBottomWidth : "5px",
  borderBottomColor : "blue"
};

const AppNavBar = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const changeState = () => {
    // Remove element
    var element = document.getElementById("personalTab");
    element.parentNode.removeChild(element);

    ReactDOM.render(<Screen2 />, document.getElementById('help'));
  }
    return (
      <div className="container">
        <h5 className="text-center">Financial Planning Heavy</h5>
        <hr className="style11"></hr>
        <p className="text-center">Filling the form may take 15-20 mins. Stay calm and fill the form.</p>
        <div className="container">
        <Nav tabs style={{borderBottomWidth: "0px"}}>
        <table class="table">
        
    <thead>
    
      <tr>
      
        <th><NavItem >
          <NavLink style= {activeTab === '1' ? myStyle : null}
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            <h6>1 Personal</h6>
          </NavLink>
        </NavItem></th>
        <th><NavItem >
          <NavLink style= {activeTab === '2' ? myStyle : null}
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            <h6>2 Income</h6>
          </NavLink>
        </NavItem></th>
        <th><NavItem >
          <NavLink style= {activeTab === '3' ? myStyle : null}
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            <h6>3 Expense</h6>
          </NavLink>
        </NavItem></th>
        <th><NavItem >
          <NavLink style= {activeTab === '4' ? myStyle : null}
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            <h6>4 Assets</h6>
          </NavLink>
        </NavItem></th>
        <th><NavItem >
          <NavLink style= {activeTab === '5' ? myStyle : null}
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('1'); }}
          >
            <h6>5 Liability</h6>
          </NavLink>
        </NavItem></th>
        <th><NavItem >
          <NavLink style= {activeTab === '6' ? myStyle : null}
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
            <h6>6 Risk</h6>
          </NavLink>
        </NavItem></th>
      </tr>
      
    </thead>
    
  </table>
  </Nav>
      <div className="container" id="help">
        <div id="personalTab">
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="4">
              <Card body>
                <Row>
                  <Col sm="4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="rounded" style={{width: "100px", height: "100px"}}/>
                  </Col>
                  <Col sm="8">
                    <CardTitle>Samuel Spencer</CardTitle>
                    <CardText>sasp@gmail.com</CardText>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col sm="4" >
              <Card body onClick={changeState}>
                <span className="text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0XX1EcED71vl8bLsYdMq2yOH2XTrBoPoeI5nLGt1my7Vtuisq" className="rounded" style={{width: "50px", height: "60px"}}/>
              </span>
                <p className="text-center">Add Family member</p>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="12">
              <h4>Tab 2 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <h4>Tab 3 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12">
              <h4>Tab 4 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12">
              <h4>Tab 5 Contents</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <Col sm="12">
              <h4>Tab 6 Contents</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      <br />
      <p>Add a family member or click next to go to next step.</p>
      <Row>
        <Col sm="10">
          
        </Col>
        <Col sm="2">
          <button type="button" class="btn btn-primary">Next</button>
        </Col>
      </Row>
    </div>
        </div>
        </div>
        </div>
    );
  }

export default AppNavBar;