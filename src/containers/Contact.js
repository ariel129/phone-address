import React, { useState } from "react";
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Button,
  Input,
  Label,
} from "reactstrap";

import { AddContact } from "containers/AddContact";
import { EnhancedToastify } from "components/EnhancedToastify";
import { numberOnly } from "services/helper";
export const Contact = () => {
  const [lists, setLists] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [viewUser, setViewUser] = useState({});

  const onAddContact = (data) => {
    if (Object.values(viewUser).length > 0) {
      const rs = lists.map((item) => {
        if (item.email === data.email) {
          return { ...data };
        }

        return item;
      });
      setLists(rs);
    } else {
      const is_exists = lists.find((item) => item.email === data.email) || {};
      if (Object.values(is_exists).length > 0) {
        EnhancedToastify("warning", "Email is already exists!");
        return;
      }
      setLists((prev) => [...prev, { ...data }]);
      setViewUser({});
    }

    EnhancedToastify(
      "success",
      `You've successfully ${viewUser.email ? "updated" : "added"}!`
    );
    setOpenModal((prev) => !prev);
  };

  const onRemoveContact = (email) => {
    const remove = lists.filter((item) => item.email !== email);
    setLists(remove);
    EnhancedToastify("success", "You've successfully removed!");
  };

  const onViewContact = (data) => {
    setOpenModal((prev) => !prev);
    setViewUser(data);
  };

  const onCloseModal = () => {
    setOpenModal((prev) => !prev);
    setViewUser({});
  };

  const onSearch = (e) => {
    const { value } = e.target;
    setSearchKey(value);
  };

  return (
    <>
      <Row>
        <Col
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Input
            placeholder="Search number..."
            style={{ width: "20%", height: "80%", marginRight: 10 }}
            onChange={onSearch}
            onKeyPress={(event) => {
              numberOnly(event);
            }}
          />
          <Button
            color="danger"
            style={{ marginBottom: 10, float: "right" }}
            onClick={() => setOpenModal((prev) => !prev)}
          >
            New Contact
          </Button>
        </Col>
      </Row>
      <ListGroup>
        {lists.filter((list) => list.phone.includes(searchKey)).length ===
          0 && (
          <Label style={{ display: "grid", justifyContent: "center" }}>
            Contact is empty!
          </Label>
        )}
        {lists
          .filter((list) => list.phone.includes(searchKey))
          .map((item, index) => {
            return (
              <ListGroupItem key={index}>
                <Row>
                  <Col>
                    <span>{item.phone}</span>
                    <Button
                      color="danger"
                      style={{
                        float: "right",
                        width: "10%",
                        marginLeft: 5,
                      }}
                      onClick={() => onRemoveContact(item.email)}
                    >
                      Remove
                    </Button>
                    <Button
                      color="primary"
                      style={{
                        float: "right",
                        marginLeft: 5,
                        width: "10%",
                      }}
                      id="view"
                      onClick={() => onViewContact(item)}
                    >
                      View
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            );
          })}
      </ListGroup>
      <AddContact
        openModal={openModal}
        onClose={onCloseModal}
        onAddContact={onAddContact}
        viewUser={viewUser}
      />
    </>
  );
};
