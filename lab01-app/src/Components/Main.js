import React from 'react'
import HornedBeasts from './HornedBeasts';

// this is what's rendering hornedbeasts
class Main extends React.Component {
    render() {
        return (
            <main className="Lab01-AppMain">
                <HornedBeasts keyword="narwhal" title="UniWhal" description="A unicorn and a narwhal nuzzling their horns" imageUrl="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"/>
                <HornedBeasts keyword="rhino" title="Rhino Family" description="Parent rhino with two babies" imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"/>
                <HornedBeasts keyword="unicorn" title="Unicorn Head" description="Someone wearing a very silly unicorn head mask" imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"/>
            </main>
        );
    }
}

export default Main;
// this is exporting what is rendered to main

// my attempt below. this works, but it isn't what the instructions asked for

// const beast1 = {
//     name: '',
//     imageUrl: '',
//     imageSize: 90,
// };

// export default function HornedAnimals() {
//     return (
//         <>
//         <h1>{beast1.name}</h1>
//         <img
//         className="beast"
//         src={useReducer.imageUrl}
//         alt={'Photo of ' + beast1.name}
//         style={{
//             width: beast1.imageSize,
//             height: beast1.imageSize
//         }}
//         />
//         </>
//     );
// }