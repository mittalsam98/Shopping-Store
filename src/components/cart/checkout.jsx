import React from 'react';
import { connect } from 'react-redux';
import {
    ADD_SHIPPING,
    SUBTRACT_SHIPPING,
    shippingCost,
    ADD_PICKUP
} from '../../constants/actionTypes';

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        subTotal: state.subTotal,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = (dispatch) => {

    //Method to add and sub checkout amount if shipping is select
    return {
        addShipping: () => {
            dispatch({type: ADD_SHIPPING})
        },
        subtractShipping: () => {
            dispatch({type: SUBTRACT_SHIPPING})
        },
        addPickup: () => {
            dispatch({type: ADD_PICKUP})
        }
    }
}

class Checkout extends React.Component {
    handleShipping = (e) => {
        if (e.target.checked) {
            this.props.addShipping();
        } else {
            this.props.subtractShipping();
        }
    }

    handlePickup = (e) => {
        if (e.target.checked) {
            this.props.addPickup();
        }
        if (this.refs.shipping.checked) {
            this.props.subtractShipping();

        }
    }

    render() {
        let cartItems = this.props.addedItems.length;
        if (cartItems) {
            return (
                <div className="checkout-container">
                    <div className="shipping-section">
                        <div className="shipping-message">
                            <h3>Mode of Delivery</h3>
                        </div>
                        <div className="shipping-options">
                            <div className="shipping-item">
                                <input
                                    type="radio"
                                    ref="pickup"
                                    name="shipping"
                                    id="store-pickup"
                                    value="store-pickup"
                                    defaultChecked
                                    onClick={this.handlePickup} />
                                <label for="store-pickup">Self pickup from store(free)</label>
                            </div>
                            <div className="shipping-item">
                                <input
                                    type="radio"
                                    ref="shipping"
                                    name="shipping"
                                    id="standard-shipping"
                                    value="standard-shipping"
                                    onClick={this.handleShipping} />
                                <label for="standard-shipping">Standard Shipping (Rs.{shippingCost})</label>
                            </div>
                        </div>
                    </div>

                    <div className="checkout">
                        <div className="cart-total">
                            <p>Subtotal: Rs.{this.props.subTotal}</p>
                            <p>Total: Rs.{this.props.cartTotal}</p>
                        </div>
                        <div className="checkout-button">
                            <a className="button" href="/">Checkout Now</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);