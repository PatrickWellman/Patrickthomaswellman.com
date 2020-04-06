import React from 'react';
import Landing from '../LandingComps/Landing';
import NaviBar from '../LandingComps/NaviBar';


class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <NaviBar />

                <div className="landing">
                    <Landing />
                </div>
            </div>
        );
    }
}

export default LandingPage;
