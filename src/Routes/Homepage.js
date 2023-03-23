import React from "react";
import Row from "../components/Row";
import requests from '../requests'

const Homepage = () => {

    return (
        <div>
            <Row rowID='1' title='Action' type={requests.action}></Row>
            <Row rowID='2' title='Drama' type={requests.drama}></Row>
            <Row rowID='3' title='Adventure' type={requests.adventure}></Row>
        </div>
    )
}

export default Homepage