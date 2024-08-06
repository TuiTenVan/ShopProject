import { Link } from 'react-router-dom';
import ProductRelated from './ProductRelated';
import UpsellProduct from './UpsellProduct';
import TabsComponent from './TabComponent';
import { IoHeart, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTiktok, IoLogoTwitter, IoOptionsOutline, IoStar} from 'react-icons/io5';
import { Select } from 'antd'
import ProductImages from './ProductImage';
import "./ProductDetail.css"

const { Option } = Select;

function ProductDetail() {
    return (
        <>
            <div className="breadcrumbs_areLink product_bread">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_content">
                                <ul>
                                    <li><Link to={"/"}>home</Link></li>
                                    <li>/</li>
                                    <li>product details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_details">
                <div className="container">
                    <div className="row">
                       <ProductImages/>
                        <div className="col-lg-7 col-md-7">
                            <div className="product_d_right">
                                <form action="#">
                                    <h1>Amazon Cloud Cam</h1>
                                    <div className=" product_ratting">
                                        <ul>
                                            <li><Link href="#"> <IoStar /> </Link></li>
                                            <li><Link href="#"> <IoStar /> </Link></li>
                                            <li><Link href="#"> <IoStar /> </Link></li>
                                            <li><Link href="#"> <IoStar /> </Link></li>
                                            <li><Link href="#"> <IoStar /> </Link></li>
                                            <li className="review"><Link href="#"> 1 review </Link></li>
                                            <li className="review"><Link href="#"> Write Link review </Link></li>
                                        </ul>
                                    </div>
                                    <div className="product_price">
                                        <span className="current_price">$70.00</span>
                                    </div>
                                    <div className="product_desc">
                                        <p>More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new iPod classic lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping through album art. Select an album to turn it over and see the track list. Enhanced interface. Experience Link whole new way to browse and view your music and video. Sleeker design. Beautiful, durable, and sleeker than ever, iPod classic now features an anodized aluminum and polish.. </p>
                                    </div>
                                    <div className="product_variant color">
                                        <h3>color</h3>  
                                        <Select defaultValue="choose in option" style={{ width: 180 }}>
                                            <Option value="choose in option">Choose in option</Option>
                                            <Option value="choose in option2">Choose in option2</Option>
                                            <Option value="choose in option3">Choose in option3</Option>
                                            <Option value="choose in option4">Choose in option4</Option>
                                        </Select>
                                    </div>
                                    <div className="product_variant size">
                                        <h3>size</h3>
                                        <Select defaultValue="size" style={{ width: 80 }}>
                                            <Option value="size">Size</Option>
                                            <Option value="x">X</Option>
                                            <Option value="xl">XL</Option>
                                            <Option value="md">MD</Option>
                                            <Option value="xxl">XXL</Option>
                                            <Option value="s">S</Option>
                                        </Select>
                                    </div>
                                    <div className="product_variant quantity">
                                        <label>quantity</label>
                                        <input min="1" max="100" value="1" type="number" />
                                        <button className="button" type="submit">add to cart</button>
                                    </div>
                                    <div className=" product_d_action">
                                        <ul>
                                            <li><Link href="#" title="Add to wishlist"><IoHeart /> Add to Wish List</Link></li>
                                            <li><Link href="#" title="Add to Compare"><IoOptionsOutline /> Compare this Product</Link></li>
                                        </ul>
                                    </div>
                                </form>
                                <div className="priduct_social">
                                    <h3>Share on: </h3>
                                    <ul>
                                        <li><Link href="#"><IoLogoFacebook /></Link></li>
                                        <li><Link href="#"><IoLogoInstagram /></Link></li>
                                        <li><Link href="#"><IoLogoLinkedin /></Link></li>
                                        <li><Link href="#"><IoLogoTiktok /></Link></li>
                                        <li><Link href="#"><IoLogoTwitter /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_d_info">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <TabsComponent />
                        </div>
                    </div>
                </div>
            </div>
            <section className="product_section related_product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Related Products</h2>
                                <p>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_area">
                        <div className="row">
                            <ProductRelated />
                        </div>
                    </div>
                </div>
            </section>
            <section className="product_section upsell_product">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title">
                                <h2>Upsell Products</h2>
                                <p>Contemporary, minimal and modern designs embody the Lavish Alice handwriting</p>
                            </div>
                        </div>
                    </div>
                    <div className="product_area">
                        <div className="row">
                            <UpsellProduct />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductDetail;