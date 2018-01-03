import React, {Component} from "react"
import {Card} from "material-ui"

function isNumeric(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n))
}

class Counter extends Component {
    render() {
        return (
            <Card className="counter">
                <div className="title">{this.props.title}</div>
                <div
                    className="countCircle"
                    onClick={async () => {
                        this.props.oneUp()
                        try {
                            const res = await fetch(
                                `https://count1up.herokuapp.com/up/${
                                    this.props.counterName
                                }?secret=${this.props.secret}`
                            )

                            const resText = await res.text()
                            if (!isNumeric(resText))
                                alert("somethings has gone wrong")
                        } catch (e) {
                            alert("something has gone wrong")
                        }
                    }}
                >
                    {this.props.count}
                </div>
            </Card>
        )
    }
}

export default Counter
