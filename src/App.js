import React from "react";
import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

const App = () => {

    let content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolor";
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital assistance</p>
                </div>
            </section>


            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" handle="@alexa99" 
                            image={AlexaImage} 
                            description={content}
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Cortana" handle="@cortana32" 
                            image={CortanaImage}
                            description={content}
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri" handle="@siri01" 
                            image={SiriImage} 
                            description={content}
                            />
                        </div>
                    </div>
                </section>
            </div>




        </div>
    )
}

export default App;