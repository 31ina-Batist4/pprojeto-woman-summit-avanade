import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Obrigada!</p>
          <i className="fas fa-assento thank-you-assento"></i>
          <p className="thanks-subtext">
            Confirmação enviada para seu e-mail, confira.
          </p>
        </Col>
      </Row>
    </div>
  );
};
