import { IoSearchCircle, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BlogCarousel from './BlogCarousel';

function Blogs(){
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
                            <li>blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>

    <div className="blog_area blog_page blog_reverse">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12">
           
                    <aside className="blog_sidebar">
                  
                        <div className="sidebar_widget search_form">
                            <form action="#">
                                <input placeholder="Search..." type="text"/>
                                <button type="submit"><IoSearchOutline/></button>
                            </form>
                        </div>
                  
                        <div className="sidebar_widget widget_categories">
                            <h3 className="widget_title">Categories</h3>
                            <ul>
                                <li><a href="#">Creative</a>  (2)</li>

                                <li><a href="#">Fashion</a> (3)</li>
                                <li><a href="#">Image</a> (1)</li>
                                <li><a href="#">Photography</a> (4)</li>
                                <li><a href="#">Travel</a> (6)</li>
                                <li><a href="#">Videos</a> (2)</li>
                                <li><a href="#">WordPress</a> (4)</li>
                            </ul>
                        </div>
            
                        <div className="sidebar_widget recent_post">
                            <h3 className="widget_title">Recent Posts</h3>
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/post1.png" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Blog image post format</a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div>
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/post2.png" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Post in Gallery format</a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div> 
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/post3.png" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Single post in Audio format </a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div>
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/post4.png" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Post in Video format vitae</a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div>     
                        </div>
                        <div className="sidebar_widget recent_post">
                            <h3 className="widget_title">Comments</h3>
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/comment.png.jpg" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Blog image post format</a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div>
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/comment.png.jpg" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Post in Gallery format</a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div> 
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/comment.png.jpg" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Single post in Audio format </a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div>
                            <div className="sidebar_post">
                                <div className="post_img">
                                    <a href="blog-details.html"><img src="/img/blog/comment.png.jpg" alt=""/></a>
                                </div>
                                <div className="post_text">
                                    <h3><a href="blog-details.html">Post in Video format vitae</a></h3>
                                    <span>March 3, 2018</span>
                                </div>
                                
                            </div>     
                        </div>           
                        
                        <div className="sidebar_widget tags_widget">
                            <h3 className="widget_title">Tag Cloud</h3>
                            <ul>
                                <li><a href="#">Ecommerce</a></li>
                                <li><a href="#">Creative</a></li>
                                <li><a href="#">Store</a></li>
                                <li><a href="#">Ideas</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Corporate</a></li>
                                <li><a href="#">Smart</a></li>
                            </ul>
                        </div>
                        
                    </aside>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="blog_grid_area">
                        <div className="blog_grid">
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="/img/blog/blog4.png" alt=""/></a>
                            </div>
                            <div className="blog_content">
                                <div className="post_date">
                                    <span className="day">10</span>
                                    <span className="month">/ Dec</span>
                                </div>
                                <h3 className="post_title"><a href="blog-details.html">Format ectus fermentum</a></h3>
                                <p className="post_desc">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor</p>
                                <a className="read_more" href="blog-details.html">read more</a>
                                <div className="post_meta">
                                   <span>Posted by </span>
                                    <span><a href="#">admin</a></span>
                                    <span><a href="#">/ WordPress</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="blog_grid gallery">
                            <BlogCarousel/>
                            <div className="blog_content">
                                <div className="post_date">
                                    <span className="day">12</span>
                                    <span className="month">/ Dec</span>
                                </div>
                                <h3 className="post_title"><a href="blog-details.html">Post in Gallery format ectus fermentum</a></h3>
                                <p className="post_desc">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor</p>
                                <a className="read_more" href="blog-details.html">read more</a>
                                <div className="post_meta">
                                   <span>Posted by </span>
                                    <span><a href="#">admin</a></span>
                                    <span><a href="#">/ WordPress</a></span>
                                </div>
                            </div>
                           
                        </div>
                        
                        <div className="blog_grid audio">
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="/img/blog/blog2.png" alt=""/></a>
                            </div>
                            <div className="blog_content">
                                <div className="post_date">
                                    <span className="day">01</span>
                                    <span className="month">/ Dec</span>
                                </div>
                                <h3 className="post_title"><a href="blog-details.html">Single post in Audio format suspendisse</a></h3>
                                <div className="blog_aduio_icone">
                                    <audio controls>
                                      <source src="http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3?1" type="audio/mp3"/>
                                    </audio>
                                </div>
                                <a className="read_more" href="blog-details.html">read more</a>
                                <div className="post_meta">
                                   <span>Posted by </span>
                                    <span><a href="#">admin</a></span>
                                    <span><a href="#">/ WordPress</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="blog_grid video">
                            <div className="blog_thumb embed-responsive embed-responsive-16by9">
                                    
                                <iframe  height="700" src="https://www.youtube.com/embed/2Zt8va_6HRk"  allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                            <div className="blog_content">
                                <div className="post_date">
                                    <span className="day">10</span>
                                    <span className="month">/ Dec</span>
                                </div>
                                <h3 className="post_title"><a href="blog-details.html">Post in Video format vitae lacus eget</a></h3>
                                <p className="post_desc">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor</p>
                                <a className="read_more" href="blog-details.html">read more</a>
                                <div className="post_meta">
                                   <span>Posted by </span>
                                    <span><a href="#">admin</a></span>
                                    <span><a href="#">/ WordPress</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="blog_grid">
                            <div className="blog_thumb">
                                <a href="blog-details.html"><img src="/img/blog/blog3.png" alt=""/></a>
                            </div>
                            <div className="blog_content">
                                <div className="post_date">
                                    <span className="day">10</span>
                                    <span className="month">/ Dec</span>
                                </div>
                                <h3 className="post_title"><a href="blog-details.html">Format ectus fermentum</a></h3>
                                <p className="post_desc">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu augue condimentum rhoncus. Praesent ornare tortor</p>
                                <a className="read_more" href="blog-details.html">read more</a>
                                <div className="post_meta">
                                   <span>Posted by </span>
                                    <span><a href="#">admin</a></span>
                                    <span><a href="#">/ WordPress</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="blog_pagination">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="pagination">
                        <ul>
                            <li className="current">1</li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li className="next"><a href="#">next</a></li>
                            <li><a href="#">>></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Blogs;