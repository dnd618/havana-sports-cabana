import { Component } from "react";
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';

class App extends Component{
    componentDidMount(){
        console.log(this.props.authUser)
    }
    getData = () => {
        console.log(this.props)
        this.props.getData();
    }
    render(){
        return(
            <>
                <Grid container className="app-root">
                    <Grid 
                        item xs={12} sm={8} md={9}
                        className="app-leftside" 
                        style={{background : 'url("assets/background.jpg"'}}
                    >
                        <div className="app-container">
                            <img src="assets/logo.png" alt="logo" className="app-logo" />
                            <div className="app-contact">
                            <Typography className="app-contact-title" variant="h6" component="h6">
                                Contact US :
                            </Typography>
                            <Typography className="app-contact-content" variant="h6" component="h6">
                                <EmailIcon /><pre> </pre>honeycomsportz@gmail.com
                            </Typography>
                            <Typography className="app-contact-content" variant="h6" component="h6">
                                <PhoneIcon /><pre> </pre>+1 (205) 667 - 0920
                            </Typography>
                            <Typography className="app-contact-content" variant="h6" component="h6">
                                <FacebookIcon /><pre> </pre> @HoneycombSports
                            </Typography>
                            <Typography className="app-contact-content" variant="h6" component="h6">
                                <InstagramIcon /><pre> </pre> @honeycomb_sports
                            </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={3} className="app-rightside">
                        <div className="app-container">
                            <div className="app-item">
                                <img src="assets/logo.png" alt="logo" />
                                <Typography className="app-contact-content" variant="h6" component="h6">
                                    DUCK 77
                                </Typography>
                            </div>
                            <div className="app-item">
                                <img src="assets/logo.png" alt="logo" />
                                <Typography className="app-contact-content" variant="h6" component="h6">
                                    PORKER BROS
                                </Typography>
                            </div>
                            <div className="app-item">
                                <img src="assets/logo.png" alt="logo" />
                                <Typography className="app-contact-content" variant="h6" component="h6">
                                    HOONEYCOMB RADIO POWERED BY THE PLUG DIGITAL NETWORK
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <button onClick={() => this.getData()}>test redux</button>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authUser : state.auth.user
    };
}
export default connect(mapStateToProps)(App);