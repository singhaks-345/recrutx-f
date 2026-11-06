



function BlogSection(){
    return (
        <>
        <div className="container blog_container">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                <p style={{textAlign: "center", paddingTop: 60, color: "#db0249"}}>OUR LATEST BLOG</p>
       <h1 style={{ textAlign: "center"}}>Our recent news</h1>
       <div className="row blog_row">
        <div className="col-sm-6">
            <div className="img_content">24 <br /> Now</div>
            <img src="home-blog1.jpg" alt="Blog" style={{width: 330}} />
            <br />
            <p style={{paddingTop: 20, paddingLeft: 20}}>| Properties</p>
            <h2 style={{paddingLeft: 20}}>Footprints in Time is perfect <br /> House in Kurashiki</h2>
            <br />
            <button className="blog_btn" type="button">READ MORE</button>
        </div>
        <div className="col-sm-6">
        <div className="img_content">24 <br /> Now</div>
            <img src="home-blog2.jpg" alt="Blog" style={{width: 330}} />
            <br />
            <p style={{paddingTop: 20, paddingLeft: 20}}>| Properties</p>
            <h2 style={{paddingLeft: 20}}>Footprints in Time is perfect <br /> House in Kurashiki</h2>
            <br />
            <button className="blog_btn" type="button">READ MORE</button>
        </div>
       </div>
                </div>
                <div className="col-sm-1"></div>
            </div>
       
       </div>
        </>
    )
}

export default BlogSection