import React from 'react';

class Main extends React.Component {
    render () {
        return (
            <>
                <HornedBeast title="Horned Batters" imageURL={"https://beta.dreamstudio.ai/fb001958-321f-41d1-b210-8dce021d3d52"} description={"Opposing teams often quiver in fear at the sight of the horned beast stepping up to the plate, knowing that its incredible strength and precision make it a formidable opponent."} /> 

                <HornedBeast title="Horned Pitchers" imageURL={"https://beta.dreamstudio.ai/064a5ad7-5d5c-4250-a8fc-4b1f6dd1efff"} description={"Opposing batters often find themselves struggling to keep up with the horned beast's array of pitches, which include everything from blazing fastballs to tricky curveballs that seem to defy the laws of physics."}/>
            </>
        )
    }
}

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageURL} alt={this.props.title}/>
                <p>{this.props.description}</p>
            </>    
        )
    }
}

export default Main