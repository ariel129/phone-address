import React, { useState, useEffect } from "react";
import { Col, Form, FormGroup, Input, Row } from "reactstrap";
import { EnhancedModal } from "components/EnhancedModal";
import { numberOnly } from "services/helper";

export const AddContact = ({ openModal, onClose, onAddContact, viewUser }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = () => {
    onAddContact(form);
    setForm({});
  };

  const handleClose = () => {
    onClose();
    setForm({});
  };

  useEffect(() => {
    if (Object.values(viewUser).length > 0) {
      setForm(viewUser);
    }
  }, [viewUser]);

  return (
    <EnhancedModal
      title={viewUser.email ? "View Contact" : "New Contact"}
      open={openModal}
      onClose={handleClose}
      onSubmit={handleSubmit}
      btn1="Close"
      btn2={viewUser.email ? "Update" : "Save"}
    >
      <Col>
        <Row>
          <Form>
            <FormGroup>
              <Input
                id="first_name"
                placeholder="First name"
                onChange={handleChange}
                value={form.first_name ? form.first_name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="last_name"
                placeholder="Last name"
                onChange={handleChange}
                value={form.last_name ? form.last_name : ""}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="phone"
                placeholder="Phone #"
                onChange={handleChange}
                onKeyPress={(event) => {
                  numberOnly(event);
                }}
                value={form.phone ? form.phone : ""}
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email ? form.email : ""}
              />
            </FormGroup>
          </Form>
        </Row>
      </Col>
    </EnhancedModal>
  );
};
