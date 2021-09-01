import React from "react"
import ReactDOM from "react-dom"

const App = () => (
    <div>
        <h2>Product List</h2>
        <ul>
            <li>
                <Product name="Hot Binary Heat Changing Mug" />
            </li>
            <li>
                <Product name="3D Printing Pen" />
            </li>
            <li>
                <Product name="Klingon Letter Opener" />
            </li>
        </ul>
    </div>
)

const Product = (props) => (
    <div>
        <h3>{props.name}</h3>
        <p>
            Nulla qui voluptate esse id aliquip duis et tempor quis officia
            veniam. Et cupidatat ut sit eiusmod eiusmod duis tempor et
            incididunt Lorem exercitation dolore. Quis magna veniam Lorem ad
            esse incididunt Lorem. Ad ex velit dolore veniam ex minim aliquip
            qui tempor duis magna. Id laborum eu in do. Est labore do quis
            ullamco eiusmod Lorem ullamco magna. Laborum enim ipsum et est magna
            aute enim sint.
        </p>
    </div>
)

ReactDOM.render(<App />, document.querySelector("#app"))
