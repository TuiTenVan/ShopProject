import { IoLogoFacebook, IoLogoGoogle, IoLogoLinkedin, IoLogoPinterest, IoLogoTwitter, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function BlogDetail(){
    return(
        <>
        <div className="breadcrumbs_area other_bread">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                        <ul>
                            <li><Link to={"/"}>home</Link></li>
                            <li>/</li>
                            <li>blog details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>

    <div className="blog_area blog_details">
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
                    <div className="blog_details_wrapper">
                       <div className="blog__thumb">
                           <a href="#"><img src="/img/blog/blog6.png" alt=""/></a>
                       </div>
                       <div className="blog_info_wrapper">
                            <div className="blog_info_inner">
                                <div className="post__date">
                                   <span className="day">10</span>
                                   <span className="month">Mar</span>
                               </div>
                               <div className="post__info">
                                   <div className="post_header">
                                       <h3>Blog image post format</h3>
                                   </div>
                                    <div className="post_meta">
                                       <span>Posted by </span>
                                        <span><a href="#">admin</a></span>
                                        <span><a href="#">/ WordPress</a></span>
                                    </div>
                                    <div className="post_content">
                                        <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                        <blockquote>
                                            <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In venenatis elit ac ultrices convallis. Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet ligula ut eleifend. Proin dictum tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                        </blockquote>
                                        <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed efficitur ex ultrices. Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh. Phasellus nec lacus id arcu facilisis elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec iaculis lacus sem non lorem. Duis suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac fringilla mi vehicula nec. Nunc vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus consectetur, placerat suscipit justo dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                        <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae lorem non mollis. Praesent pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan placerat justo ultricies vel. Vivamus finibus mi a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit. Curabitur sagittis quam quis consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget neque. Nunc ante quam, luctus et neque a, interdum iaculis metus. Aliquam vel ante mattis, placerat orci id, vehicula quam. Suspendisse quis eros cursus, viverra urna sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis nunc. Curabitur vitae orci id nulla maximus maximus. Nunc pulvinar sollicitudin molestie.</p>
                                    </div>
                                    <div className="post_meta">
                                        <span><a href="#">3 comments</a></span>
                                        <span> / Tags: </span>
                                        <span><a href="#">, fashion</a></span>
                                        <span><a href="#">, t-shirt</a></span>
                                        <span><a href="#">, white</a></span>
                                    </div>
                                    <div className="social_sharing">
                                        <h3>Share this post</h3>
                                        <ul>
                                            <li><a href="#"><IoLogoFacebook/></a></li>
                                            <li><a href="#"><IoLogoTwitter/></a></li>
                                            <li><a href="#"><IoLogoPinterest/></a></li>
                                            <li><a href="#"><IoLogoGoogle/></a></li>
                                            <li><a href="#"><IoLogoLinkedin/></a></li>
                                        </ul>
                                    </div>
                                    <div className="author_box">
                                        <div className="author_img">
                                            <img src="/img/blog/admin_avatar.jpg" alt=""/>
                                        </div>
                                        <div className="author_desc">
                                            <h3>About the Author: <a href="#">admin</a></h3>
                                            <p>Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum. Nullam et eleifend metus. Integer in est orci. Duis hendrerit ex metus, vel tempor sem aliquet nec. Donec ornare hendrerit bibendum. Nullam dui erat, tempus eu nisl vitae, venenatis gravida ipsum. Suspendisse potenti.</p>
                                        </div>
                                    </div> 
                               </div>
                            </div>  
                           <div className="comments_box">
                                <h3>3 Comments	</h3>
                                <div className="comment_list">
                                    <div className="comment-author-thumb">
                                        <img src="/img/blog/comment2.png.jpg" alt=""/>
                                    </div>
                                    <div className="comment_content">
                                        <div className="comment_meta">
                                            <div className="comment_title">
                                                <h5><a href="#">Admin</a></h5>
                                                <span>October 16, 2018 at 1:38 am</span>
                                            </div>  
                                        </div>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                                        <div className="comment_reply">
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="comment_list comment_border">
                                    <div className="comment-author-thumb">
                                        <img src="/img/blog/comment3.png.jpg" alt=""/>
                                    </div>
                                    <div className="comment_content">
                                        <div className="comment_meta">
                                            <div className="comment_title">
                                                <h5><a href="#">Demo</a></h5>
                                                <span>October 16, 2018 at 1:38 am</span>
                                            </div>
                                        </div>
                                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                                        <div className="comment_reply">
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment_list">
                                    <div className="comment-author-thumb">
                                        <img src="/img/blog/comment2.png.jpg" alt=""/>
                                    </div>
                                    <div className="comment_content">
                                        <div className="comment_meta">
                                            <div className="comment_title">
                                                <h5><a href="#">Admin</a></h5>
                                                <span>October 16, 2018 at 1:38 am</span>
                                            </div>
                                        </div>
                                        <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at</p>
                                        <div className="comment_reply">
                                            <a href="#">Reply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments_form">
                                    <h3>Leave a Reply </h3>
                                    <p>Your email address will not be published.</p>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12">
                                                <label for="review_comment">Comment </label>
                                                <textarea name="comment" id="review_comment" ></textarea>
                                            </div> 
                                            <div className="col-lg-4 col-md-4">
                                                <label for="author">Name</label>
                                                <input id="author"  type="text"/>

                                            </div> 
                                            <div className="col-lg-4 col-md-4">
                                                <label for="email">Email </label>
                                                <input id="email"  type="text"/>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <label for="website">Website </label>
                                                <input id="website"  type="text"/>
                                            </div>   
                                        </div>
                                        <button className="button" type="submit">Post Comment</button>
                                     </form>    
                                </div>
                           <div className="related_posts">
                               <h3>Related posts</h3>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single_related_posts">
                                            <div className="related_posts_thumb">
                                                <img src="/img/blog/blog1.png" alt=""/>
                                            </div>
                                            <div className="related_posts_content">
                                               <h3><Link to={"/blog-details"}>Post with Gallery</Link></h3>
                                               <span>December 1, 2018 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single_related_posts">
                                            <div className="related_posts_thumb">
                                                <img src="/img/blog/blog2.png" alt=""/>
                                            </div>
                                            <div className="related_posts_content">
                                               <h3><Link to={"/blog-details"}>Post with Audio</Link></h3>
                                               <span>December 1, 2018 </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single_related_posts column_3">
                                            <div className="related_posts_thumb">
                                                <img src="/img/blog/blog3.png" alt=""/>
                                            </div>
                                            <div className="related_posts_content">
                                               <h3><Link to={"blog-details"}>Post with Video</Link></h3>
                                               <span>December 1, 2018 </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>  
                       </div>
                    </div>
        
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default BlogDetail;