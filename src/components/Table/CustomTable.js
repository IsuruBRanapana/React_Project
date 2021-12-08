import React from "react";
import Table from 'react-bootstrap/Table';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import './CustomTable.css';

function CustomTable() {
    return (
        <div className="custom-table">
            <Table hover striped bordered>
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>
                        Isuru
                    </td>
                    <td>
                        Ranapana
                    </td>
                    <td>
                        raaisurub.ranapana@gmail.com
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        2
                    </th>
                    <td>
                        Isuru
                    </td>
                    <td>
                        Ranapana
                    </td>
                    <td>
                        raaisurub.ranapana@gmail.com
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        3
                    </th>
                    <td>
                        Isuru
                    </td>
                    <td>
                        Ranapana
                    </td>
                    <td>
                        raaisurub.ranapana@gmail.com
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        4
                    </th>
                    <td>
                        Isuru
                    </td>
                    <td>
                        Ranapana
                    </td>
                    <td>
                        raaisurub.ranapana@gmail.com
                    </td>
                </tr>
                </tbody>
            </Table>
            <Pagination aria-label="Pagination Test">
                <PaginationItem>
                    <PaginationLink previous href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#"/>
                </PaginationItem>
            </Pagination>
        </div>

    );
}

export default CustomTable;