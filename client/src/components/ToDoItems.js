import React, { Component } from 'react';

class toDoItems extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({
      "allTasks": this.props.taskState,
      "0": false,
      "1": false,
      "2": false,
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.taskState !== prevState.allTasks) {
      return { allTasks: nextProps.taskState }
    }
    else return null
  }

  markComplete = (e) => {
    this.setState({ [e]: !this.state[e] })
  }

  render() {
    return (
      <>
        {this.state.allTasks.map((taskObj, i) => {
          return (
            <article key={i + "3up"}>
              <section className={this.state[i] ? "page done" : "page"} onClick={() => this.markComplete(i)}>
                <p>{taskObj.task}</p>
                <button onClick={() => this.props.deleteTask(i)} className={this.state[i] ? "showButton" : "hideButton"}>Delete</button>
              </section>
              <br />
            </article>
          )
        })
        }
      </>
    )
  }
}

export default toDoItems;

                // {/* <button className={this.state[i] ? "showButton" : "hideButton"}>Edit</button> */}
