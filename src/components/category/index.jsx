import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cateActions from "../../actions/category";
import PropTypes from "prop-types";
import {
    InputGroupText,
    InputGroup,
    Input,Row,Col,
    InputGroupAddon,ModalFooter,
    Modal,Table ,Button,ModalHeader,ModalBody
} from "reactstrap";
class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name:'',
            slug:''
        };
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });
    submit = (e) => {
        const { categoryActions } = this.props;
        const { addCate } = categoryActions;
        addCate(this.state);
    }
    toggle = () =>{
        this.setState({ show: !this.state.show });
    }
    change = (e) => {
        const value = e.target.value;
        const slug = e.target.value.toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
        this.setState({name:value,slug:slug});
    };
    handleChange = (e) => {
        const value = e.target.value;
        const { categoryActions } = this.props;
        const { filterCate } = categoryActions;
        filterCate(value);
    };
    render() {
        const { list } = this.props;
        const { show } = this.state;
        return (
            <div>
                <form>
                    <Row>
                    <Col>
                    <Button color="primary" onClick={this.toggle}>
                        Thêm mới
                    </Button>
                    </Col>
                    <Col>
                    <Modal isOpen={show} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Thêm danh mục</ModalHeader>
                        <ModalBody>
                        <Input
                            placeholder="Tên danh mục"
                            onChange={this.change}
                        />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.submit}>
                                Lưu lại
                            </Button>{" "}
                            <Button color="secondary" onClick={this.handleClose}>
                                Hủy bỏ
                            </Button>
                        </ModalFooter>
                    </Modal>
                    <InputGroup style={{ marginTop: "15px" }}>
                        <Input
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <i className="ti-search"></i>
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    </Col>
                    </Row>
                </form>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Danh mục</th>
                            <th>Slug</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.slug}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}
Categories.propTypes = {
    cateActions: PropTypes.shape({
        fetchListCate: PropTypes.func,
        filterCate: PropTypes.func,
        addCate : PropTypes.func
    }),
};
const mapStateToProps = (state) => {
    return {
        list: state.cateReducer.listCategory,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        categoryActions: bindActionCreators(cateActions, dispatch),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
