import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  deleteMethod = paraId => {
    const counters = this.state.counters.filter(n => n.id !== paraId);
    this.setState({ counters });
  };
  resetMethod = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  incrementMethod = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  decrementMethod = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counter.value > 0) counters[index].value--;
    if (this.state.value < 0) counters[index].value = 0;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(x => x.value != 0).length}
        />
        <main className="Container">
          <Counters
            counters={this.state.counters}
            onDelete={this.deleteMethod}
            onIncrement={this.incrementMethod}
            onDecrement={this.decrementMethod}
            onReset={this.resetMethod}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
