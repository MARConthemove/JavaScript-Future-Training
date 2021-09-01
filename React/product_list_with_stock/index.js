import React from "react"
import ReactDOM from "react-dom"

// work-arround hot-reloading
if (module.hot) {
    module.hot.accept()
}

const App = () => (
    <div>
        <h2>Product List</h2>
        <ul>
            <li>
                <Product name="Hot Binary Heat Changing Mug" stock="20"/>
            </li>
            <li>
                <Product name="3D Printing Pen" stock="2"/>
            </li>
            <li>
                <Product name="Klingon Letter Opener" stock="15"/>
            </li>
        </ul>
    </div>
)

const Product = (props) => (
    <div>
        <h3 className={props.stock < 4 && "stock_critical"}>{props.name}</h3>
        {props.stock < 4 && (
            <sub className="stock_critical">
                (only a few copies still available)
            </sub>
        )}
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
