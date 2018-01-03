import React, {Component} from "react"
import "./App.css"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import RaisedButton from "material-ui/RaisedButton"
import Counter from "./Counter"

class App extends Component {
    constructor() {
        super()
        this.state = {count: 0, secret: "", counterName: ""}
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="header">
                        <RaisedButton
                            label="Login"
                            className="loginButton"
                            onClick={async () => {
                                const secret = prompt("password")
                                const counterName = prompt("counterName")

                                this.setState({
                                    secret,
                                    counterName,
                                })

                                const res = await fetch(
                                    `https://count1up.herokuapp.com/total/${counterName}?secret=${secret}`
                                )
                                const resText = await res.text()
                                const count = parseFloat(resText)
                                this.setState({
                                    count,
                                })
                            }}
                        />

                        <span className="headerTitle">Streak tracker</span>
                    </div>
                    <div className="main">
                        <Counter
                            count={this.state.count}
                            title="Example"
                            counterName={this.state.counterName}
                            secret={this.state.secret}
                            oneUp={() => {
                                this.setState(({count}) => ({count: count + 1}))
                            }}
                        />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
