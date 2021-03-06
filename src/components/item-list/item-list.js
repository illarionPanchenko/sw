import React, { Component } from 'react';
import './item-list.css';
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {

        this.props.getItem()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const label=this.props.renderItem(item);
            return (
                <li className="list-group-item"
                    key={item.id}
                    onClick={() => this.props.onClickOnPerson(item.id)}>
                    {label}
                </li>
            );
        });
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />;
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}