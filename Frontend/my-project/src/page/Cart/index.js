import { Link } from "react-router-dom"
import { IoTrash } from "react-icons/io5";

function Cart() {
    return (
        <>
            <div className="breadcrumbs_area other_bread">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><Link to={"/"}>home</Link></li>
                                    <li>/</li>
                                    <li>cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shopping_cart_area">
                <div className="container">
                    <form action="#">
                        <div className="row">
                            <div className="col-12">
                                <div className="table_desc">
                                    <div className="cart_page table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Delete</th>
                                                    <th className="product_thumb">Image</th>
                                                    <th className="product_name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product_quantity">Quantity</th>
                                                    <th className="product_total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product_remove"><a href="#"><IoTrash /></a></td>
                                                    <td className="product_thumb"><a href="#"><img src="/img/s-product/product.jpg" alt="" /></a></td>
                                                    <td className="product_name"><a href="#">Handbag fringilla</a></td>
                                                    <td className="product-price">£65.00</td>
                                                    <td className="product_quantity"><input min="1" max="100" value="1" type="number" /></td>
                                                    <td className="product_total">£130.00</td>
                                                </tr>
                                                <tr>
                                                    <td className="product_remove"><a href="#"><IoTrash /></a></td>
                                                    <td className="product_thumb"><a href="#"><img src="/img/s-product/product2.jpg" alt="" /></a></td>
                                                    <td className="product_name"><a href="#">Handbags justo</a></td>
                                                    <td className="product-price">£90.00</td>
                                                    <td className="product_quantity"><input min="1" max="100" value="1" type="number" /></td>
                                                    <td className="product_total">£180.00</td>


                                                </tr>
                                                <tr>
                                                    <td className="product_remove"><a href="#"><IoTrash /></a></td>
                                                    <td className="product_thumb"><a href="#"><img src="/img/s-product/product3.jpg" alt="" /></a></td>
                                                    <td className="product_name"><a href="#">Handbag elit</a></td>
                                                    <td className="product-price">£80.00</td>
                                                    <td className="product_quantity"><input min="1" max="100" value="1" type="number" /></td>
                                                    <td className="product_total">£160.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="cart_submit">
                                        <button type="submit">update cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="coupon_area">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="coupon_code left">
                                        <h3>Coupon</h3>
                                        <div className="coupon_inner">
                                            <p>Enter your coupon code if you have one.</p>
                                            <input placeholder="Coupon code" type="text" />
                                            <button type="submit">Apply coupon</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="coupon_code right">
                                        <h3>Cart Totals</h3>
                                        <div className="coupon_inner">
                                            <div className="cart_subtotal">
                                                <p>Subtotal</p>
                                                <p className="cart_amount">£215.00</p>
                                            </div>
                                            <div className="cart_subtotal ">
                                                <p>Shipping</p>
                                                <p className="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                            </div>
                                            <a href="#">Calculate shipping</a>

                                            <div className="cart_subtotal">
                                                <p>Total</p>
                                                <p className="cart_amount">£215.00</p>
                                            </div>
                                            <div className="checkout_btn">
                                                <a href="#">Proceed to Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}

export default Cart;