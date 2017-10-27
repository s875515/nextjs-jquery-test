import React from 'react';
import Head from 'next/head';
import ReactDOM from 'react-dom';

class AwardPool extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        $(this.counterRef).counter({});
    }
    render() {
        return (
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="../static/jquery.counter-analog.css"
                    />
                    <script src="../static/jquery.min.js" />
                    <script src="../static/jquery.counter.js" />
                </Head>
                <span
                    ref={ref => this.counterRef = ref}
                    className="counter counter-analog"
                    data-direction="up"
                    data-format=",9,999,999.99"
                    data-interval="100"
                />
            </div>
        )
    }
}

export default AwardPool;