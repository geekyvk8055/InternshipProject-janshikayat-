import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ShowLetter = () => {
  return (
    <>
      <Container>
       <Row>
        <Col md={12}>
        <Row>
            <Col md={6}>
                hellow world
            </Col>
            <Col md={6}>
            <div class="container" ng-app="formvalid">
  <div class="panel" data-ng-controller="validationCtrl">
    <div class="panel-heading border">
      <h1>Here is my AnimeList with genres and with my personal rating
      </h1>
    </div>
    <div class="panel-body">
      <table class="table table-bordered bordered table-striped table-condensed datatable" ui-jq="dataTable" ui-options="dataTableOpt">
        <thead>
          <tr class="bg-primary">
            <th>#</th>
            <th>Anime</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr ng-repeat="n in data">
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
            </Col>
        </Row>

        </Col>
       </Row>
      </Container>
    </>
  )
}

export default ShowLetter;