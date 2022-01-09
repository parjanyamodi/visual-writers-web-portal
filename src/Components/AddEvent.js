import React from "react";
import styled from "styled-components";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import db from "./Firebase";
import { doc, setDoc } from "firebase/firestore/lite";

const AddEvent = () => {
  const [eventName, seteventName] = React.useState("");
  const [eventDate, seteventDate] = React.useState("");
  const [eventVenue, seteventVenue] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
  const [photographers, setPhotographers] = React.useState("");
  const [editors, setEditors] = React.useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    addData(
      eventName,
      eventDate,
      eventVenue,
      url,
      remarks,
      photographers,
      editors
    );
    seteventName("");
    seteventDate("");
    seteventVenue("");
    setUrl("");
    setRemarks("");
    setPhotographers("");
    setEditors("");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mt-2">
            <Intro>
              <span></span>
            </Intro>
          </div>
          <div className="mt-3">
            <Tagline>
              <span>Visual Writers</span>
            </Tagline>
          </div>
          <div className="mt-2">
            <Intro>
              <span>Add an event in database</span>
            </Intro>
          </div>
        </div>
        <div className="col-12">
          <form className="mt-3" onSubmit={handleAdd}>
            <FormGroup>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    value={eventName}
                    onChange={(e) => seteventName(e.target.value)}
                    placeholder="Event Name"
                    required
                  ></input>
                  <input
                    type="text"
                    value={eventVenue}
                    onChange={(e) => seteventVenue(e.target.value)}
                    placeholder="Event Venue"
                    required
                  ></input>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => seteventDate(e.target.value)}
                    placeholder="Event Date"
                    required
                  ></input>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Google Drive Link"
                    required
                  ></input>
                  <textarea
                    value={photographers}
                    onChange={(e) => setPhotographers(e.target.value)}
                    placeholder="Photographers"
                    required
                  ></textarea>
                </div>
                <div className="col-sm-6">
                  <textarea
                    value={editors}
                    onChange={(e) => setEditors(e.target.value)}
                    placeholder="Editors"
                    required
                  ></textarea>
                  <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Remarks"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <Button
                  className="mt-4"
                  type="submit"
                  id="submit"
                  placeholder="Submit"
                >
                  <span>
                    Add Event &nbsp;
                    <span>
                      <IoCloudDownloadSharp />
                    </span>
                  </span>
                </Button>
              </div>
            </FormGroup>
          </form>

          <div className="mt-5"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mt-5">
          <Footer>
            <hr />
            <span>
              Made with ❤️ using{" "}
              <a
                href="https://reactjs.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <strong className="react-icon">
                  <FaReact />
                </strong>
              </a>
              .
              <br /> &#169; {new Date().getFullYear()}{" "}
              <a href="https://google.com">
                <strong>Name</strong>
              </a>
              .
            </span>
          </Footer>
        </div>
      </div>
    </div>
  );
};

async function addData(
  eventName,
  eventDate,
  eventVenue,
  url,
  remarks,
  photographers,
  editors
) {
  await setDoc(doc(db, "events", eventName), {
    event_name: eventName,
    event_date: eventDate,
    event_venue: eventVenue,
    drive_url: url,
    event_remarks: remarks,
    event_photographers: photographers,
    event_editors: editors,
  });
}
const FormGroup = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #e6e0f8;
      color: #121212;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
const Intro = styled.div`
  @media (min-width: 992px) {
    margin-top: 7vh;
    span {
      color: #121212;
      font-size: 24px;
      font-weight: 700;
      span {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  }
  @media (max-width: 992px) {
    margin-top: 5vh;
    span {
      color: #121212;
      font-size: 18px;
      font-weight: 700;
      span {
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  }
`;
const Tagline = styled.div`
  @media (min-width: 992px) {
    span {
      color: #121212;
      font-size: 56px;
      font-weight: 800;
    }
  }
  @media (max-width: 992px) {
    span {
      color: #121212;
      font-size: 42px;
      font-weight: 800;
    }
  }
`;

const Button = styled.button`
  width: 250px;
  height: 50px;
  border: solid;
  border-color: #121212;
  background-color: #121212;
  color: #ffffff;
  text-decoration: none;
  span {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
  }
  &:hover {
    background-color: #ffffff;
    span {
      color: #121212;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const Footer = styled.div`
  @media (min-width: 1024px) {
    margin-top: 7vh;
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 14px;
      font-weight: 500;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 14px;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 14px;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        text-decoration: none;
      }
    }
  }
`;
export default AddEvent;
