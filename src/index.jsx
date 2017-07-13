import "./styles/main.scss";

import AsyncTabItem1 from './AsyncTabItem1.jsx';
import AsyncTabItem2 from './AsyncTabItem2.jsx';

function TabContent(props) {
  if (props.pr_tabContent === "item1") {
    return <AsyncTabItem1 />;
  }

  if (props.pr_tabContent === "item2") {
    return <AsyncTabItem2 />;
  }  
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          tabName: 'item1',
          isActive: true
        },
        {
          tabName: 'item2',
          isActive: false
        },
      ],
      tabContent: 'item1',
      activeTab: 0,
    };

    // binders
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
  }
  
  // methods  
  setActiveTab(index) {
    let activeIndex = index;
    this.state.items[activeIndex].isActive = true;      

    // remove activeTab
    if (this.state.activeTab !== activeIndex) {
      this.state.items[this.state.activeTab].isActive = false;

      // set current activeTab
      this.state.activeTab = activeIndex;
    }
  }

  changeTabItem(item, index) {
    this.setActiveTab(index);
    
    this.setState(prevState => ({
      tabContent: item
    }));
  }

  render() {
    return (
      <div>

      <nav className="tabs1-01">
      {this.state.items.map((i, index) =>
        <div className={ this.state.items[index].isActive ? 'active': '' } 
        key={i.tabName} 
        onClick={() => { this.changeTabItem(i.tabName, index) }}>
        {i.tabName}
        </div>
        )}
      </nav>
      <div className="tabs1-01_content">
        <TabContent pr_tabContent={this.state.tabContent} />
      </div>

      </div> 
      );
    }  
}

ReactDOM.render(
  <Tabs />,
  document.getElementById('root')
);