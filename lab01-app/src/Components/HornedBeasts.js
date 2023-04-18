import React from 'react'

class HornedBeasts extends React.Component {
    render() {
        return (
            <div className="HornedList">
                {/* this is from my attempt before, this is also a correct way but it isn't what the lab wanted */}
                {/* <h2>UniWhal</h2>
            <img src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' alt=''/>
            <p>List of things </p>
            <h2>Rhino</h2>
            <img src='https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' alt=''/>
            <p>List of things </p>
            <h2>Unicorn</h2>
            <img src='https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg' alt=''/>
            <p>List of things </p> */}

{/* this is what hornedbest is passing through */}
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.keyword} title={this.props.title}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;
// hornedbeast is being exported to apps.js