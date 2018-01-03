import React, {Component} from "react"
import "./App.css"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Counter from "./Counter"
class App extends Component {
    constructor() {
        super()
        this.state = {count: 0}
    }

    async componentDidMount() {
        const res = await fetch(
            "https://count1up.herokuapp.com/total/exampleCounter?secret=36f721d4ff4b9cedd9ec866eb2c19dd5"
        )
        const resText = await res.text()
        const count = parseFloat(resText)
        console.log(resText)
        this.setState({
            count,
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="header">Streak tracker</div>
                    <div className="main">
                        <Counter
                            count={this.state.count}
                            title="Example"
                            counterName="exampleCounter"
                            secret="36f721d4ff4b9cedd9ec866eb2c19dd5"
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
