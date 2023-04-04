import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import "./LabAccordion.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import DownloadLab from "../DownloadLab/DownloadLab";
import FlagInput from "../FlagInput/FlagInput";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button type="button" className=" ButtonTxt" onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

export default function LabAccordion() {
  return (
    <Accordion defaultActiveKey={["0", "5"]} className="accordionContainer" alwaysOpen>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="0">
            1. Introduction
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="bodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled itt has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="1">
            2. What's SQL injection?
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="bodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="2">
            3. How can SQL Injection harm ?{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="bodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled itt has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="3">
            4. Types of SQL Injection{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="bodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled itt has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="4">
            5. SQL Injection prevention{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body className="bodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled itt has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="AccordionCard">
        <Card.Header className="try ButtonTxt">
          <CustomToggle eventKey="5">
            6. Practice Time{" "}
            <span className="arrow align-self-end">
              <MdKeyboardArrowDown />
            </span>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5" className="practice">
          <Card.Body>
            <DownloadLab />
            <FlagInput />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
