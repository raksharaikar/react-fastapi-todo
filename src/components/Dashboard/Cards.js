import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./card.css";
import Chart from "react-google-charts";

function Cards(props) {
  let latest_todos = props.todos;

  let todosToShow = props.todos.filter((todo) => todo.completed === true);
  let completedLength = todosToShow.length;

  let notCompleted = props.todos.length - completedLength;
  const data = [
    ["Stats", "All Stats"],
    ["not completd", notCompleted],
    ["completed", completedLength],
  ];
  return (
    <div>
      <Row className="cards-row ">
        <Col xs={12} md={4} sm={12}>
          <Card className="mt-2 card ">
            <Card.Body>
              <Card.Title className="crad-title">Tasks Completed</Card.Title>
              <Card.Text style={{ lineHeight: "1" }}>
                <span style={{ fontSize: "64px", color: "#5285EC" }}>
                  {completedLength}
                </span>
                <span
                  style={{
                    color: " #8F9EA2",
                  }}
                >
                  / {props.todos.length}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} sm={12}>
          <Card className="mt-2 card">
            <Card.Body>
              <Card.Title className="card-title">
                Latest Created Tasks
              </Card.Title>
              <ul style={{ paddingLeft: "20px", color: "#8F9EA2" }}>
                {latest_todos
                  .slice(-3)
                  .sort((a, b) => b.id - a.id)
                  .map((d) => {
                    return <li key={d.id}>{d.item}</li>;
                  })}
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} sm={12}>
          <Card className="mt-2 d-flex justify-content-center">
            <Card.Body>
              <div className="mt-2 d-flex justify-content-center">
                <Chart
                  width={200}
                  height={100}
                  chartType={"PieChart"}
                  loader={<div>Loading Data...</div>}
                  data={data}
                  rootProps={{ "data-testid": "1" }}
                  options={{
                    legend: { position: "none" },
                    chartArea: { width: "100%", height: "100%" },
                    colors: ["#E8ECEC", "#5285EC"],
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
