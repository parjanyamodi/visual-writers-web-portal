import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import db from "./Firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const ManageEvent = () => {
  //let i = 0;

  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    querySnapshot.forEach((doc) => {
      //if (i % 2 === 0) {
      setEvents([...events, doc.data()]);
      //i = i + 1;
      //}
    });
  };
  fetchEvents();
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
              <span>Manage events in database</span>
            </Intro>
          </div>
        </div>
        {console.log(events)}
        <div className="col-12">
          <div className="mt-5">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Event Name</th>
                  <th scope="col">Event Location</th>
                  <th scope="col">Event Date</th>
                </tr>
              </thead>
              <tbody>
                {events &&
                  events.map((data) => {
                    return (
                      <tr>
                        <th scope="row">1</th>
                        <td>{data.event_name}</td>
                        <td>{data.event_venue}</td>
                        <td>{data.event_date}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
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
export default ManageEvent;
