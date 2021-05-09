import React, { Component } from "react";
import "./db.scss";
import PaperImage from "../../media/paper.png";
import logoutIcon from "../../media/logout.png";
import ListItems from "./ListItems";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./RenderDocument";
import axios from "axios";
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addContent: "",
            addType: "p",
            items: [
                { id: "1", content: "My Event", type: "h1" },
                { id: "2", content: "About", type: "h2" },
                {
                    id: "3",
                    content:
                        "My Event is the best event in the world, you should definitely attend!",
                    type: "p",
                },
            ],
            showP: false,
        };
    }
    render() {
        return (
            <div className="db-con">
                <div className="db-nav">
                    <div className="db-nav__head">
                        <div></div>
                        <div>Farhan Mohammed</div>
                    </div>
                    <div className="db-nav__list"></div>
                    <div className="db-nav__image">
                        <img src={PaperImage} alt="" />
                    </div>
                    <div className="db-nav__logout">
                        Logout <img src={logoutIcon} alt="" />
                    </div>
                </div>
                <div className="db-body">
                    <h1>Send out your event Info!</h1>
                    <p>
                        Use the following drag and drop menu to modify your
                        Calendar and then send it out using the send button!
                    </p>
                    {this.state.showP ? (
                        <ListItems
                            items={this.state.items}
                            setItems={(i) => this.setState({ items: i })}
                        />
                    ) : (
                        <PDFViewer className="pdf-view">
                            <MyDocument items={this.state.items}></MyDocument>
                        </PDFViewer>
                    )}

                    <button
                        className="ui button bted"
                        onClick={() =>
                            this.setState({ showP: !this.state.showP })
                        }
                    >
                        {this.state.showP ? "Hide Preview" : "Show Preview"}
                    </button>
                    <div className="db-form">
                        {this.state.items.map(() => "")}
                        <form class="ui form" autocomplete="off">
                            <h4 class="ui dividing header">Add Item</h4>
                            <div class="field">
                                <label>Content</label>
                                <div class="field">
                                    <input
                                        value={this.state.addContent}
                                        onChange={(e) =>
                                            this.setState({
                                                addContent: e.target.value,
                                            })
                                        }
                                        type="text"
                                        name="shipping[first-name]"
                                        placeholder="Content"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <select
                                    class="ui fluid search dropdown"
                                    name="card[expire-month]"
                                    value={this.state.addType}
                                    onChange={(e) =>
                                        this.setState({
                                            addType: e.target.value,
                                        })
                                    }
                                >
                                    <option value="h1">H1</option>
                                    <option value="h2">H2</option>
                                    <option value="p">Paragraph</option>
                                </select>
                            </div>

                            <div className="field">
                                <button
                                    className="ui button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.setState({
                                            items: [
                                                ...this.state.items,
                                                {
                                                    id: `${
                                                        this.state.items
                                                            .length + 1
                                                    }`,
                                                    content: this.state
                                                        .addContent,
                                                    type: this.state.addType,
                                                },
                                            ],
                                        });
                                    }}
                                >
                                    Add Item
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="db-submit">
                        <button
                            className="ui primary button"
                            onClick={(e) => {
                                e.preventDefault();
                                axios
                                    .get("localhost:5000/event-users-datastax")
                                    .then((users) => {
                                        for (let {
                                            address,
                                            city,
                                            name,
                                            state,
                                            zip,
                                            country,
                                        } of users) {
                                            axios.post(
                                                "https://api.lob.com/v1/letters",
                                                {
                                                    description:
                                                        "Hack Event Info!",
                                                    to: {
                                                        name,
                                                        address_line1: address,
                                                        address_city: city,
                                                        address_state: state,
                                                        address_zip: zip,
                                                    },
                                                    from: "eventable",
                                                    file: MyDocument,
                                                    color: true,
                                                }
                                            );
                                        }
                                    });
                                alert("Message Mailed to all attendees!");
                            }}
                        >
                            Send to Attendees stored on DataStax
                        </button>
                        <button
                            className="ui button"
                            onClick={(e) => {
                                axios
                                    .get("localhost:5000/event-users-datastax")
                                    .then((users) => {
                                        for (let {
                                            address,
                                            city,
                                            name,
                                            state,
                                            zip,
                                            country,
                                        } of users) {
                                            axios.post(
                                                "https://api.lob.com/v1/letters",
                                                {
                                                    description:
                                                        "Hack Event Info!",
                                                    to: {
                                                        name,
                                                        address_line1: address,
                                                        address_city: city,
                                                        address_state: state,
                                                        address_zip: zip,
                                                    },
                                                    from: "eventable",
                                                    file: MyDocument,
                                                    color: true,
                                                }
                                            );
                                        }
                                    });
                                alert("Message Mailed to all attendees!");
                            }}
                        >
                            Send to Attendees stored on CockroachDB
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
