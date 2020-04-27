/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import ISPDetails from './ispDetails';
import store from "../stores/ispStore";
import { getISPList } from '../actions/ispActions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ispList: [],
            ispListFilter: [],
            selectedISP: {},
            error: ""
        }
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        store.addChangeListener(this.onChange.bind(this));
        if (this.state.ispListFilter.length === 0) {
            getISPList();
        }
    }
    componentWillUnmount() {
        store.removeChangeListener(this.onChange.bind(this));
    }
    onChange = () => {
        var list = store.getISPList();
        setTimeout(() => {
            this.setState({
                ispList: list,
                ispListFilter: list,
                selectedISP: list[0]
            });
            this.props.setIspDetails(list);
            this.sortData("rating");
        }, 1000)

    }
    inputHandler(value) {
        let { ispList } = this.state;
        console.log(value);
        this.setState({
            ispListFilter: ispList.filter((data) => {
                return data.name.toString().toLowerCase().indexOf(value) !== -1 ||
                    data.lowest_price.toString().indexOf(value) !== -1
                    || data.rating.toString().indexOf(value) !== -1
            })
        });
    }
    sortData(val) {
        let { ispList, ispListFilter } = this.state;
        if (val === 'rating') {
            ispList.sort((a, b) => (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0));
            ispListFilter.sort((a, b) => (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0));
        }
        else {
            ispList.sort((b, a) => (b.lowest_price > a.lowest_price) ? 1 : ((a.lowest_price > b.lowest_price) ? -1 : 0));
            ispListFilter.sort((b, a) => (b.lowest_price > a.lowest_price) ? 1 : ((a.lowest_price > b.lowest_price) ? -1 : 0));
        }
        this.setState({
            ispList, ispListFilter
        });
    }
    ispClickHandler(data) {
        this.setState({
            selectedISP: data
        });
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.ispListFilter.length > 0 ?
                        <div className="dashboard">
                            <div className="isp-list-sort">
                                <div className="isp-list">
                                    {
                                        this.state.ispListFilter.map(data =>
                                            <div className="list" key={data.name}>
                                                <div onClick={() => { this.ispClickHandler(data) }} className="isp-name-price">
                                                    <div>{data.name}</div>
                                                    <div>{data.lowest_price}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="isp-sort"> SortBy
                                       <select onChange={(event) => this.sortData(event.target.value)}>
                                        <option value="rating">rating</option>
                                        <option value="price">price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="isp-details">
                                <ISPDetails data={this.state.selectedISP} />
                            </div>
                        </div>
                        : <div>{this.state.error !== "" || "LOADING..."} </div>
                }
            </React.Fragment >
        );
    }
}

export default Dashboard;