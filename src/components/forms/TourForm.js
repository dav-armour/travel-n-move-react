import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';


class TourForm extends Component {
    render() {
        return (
            <Grid>
                <h1>This is Tour form</h1>


                {/* <label>Single</label> */}
                {/* <Radio
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio-button-demo"
                    aria-label="A"
                    label="Single"
                />
                {/* <lable>Return</lable> */}
                {/* <Radio
                    checked={this.state.selectedValue === 'b'}
                    onChange={this.handleChange}
                    value="b"
                    name="radio-button-demo"
                    aria-label="B"
                /> */}
            </Grid>
            // <Grid container className={classes.root} spacing={16}>
            //     <Grid item xs={12}>
            //         <Grid container className={classes.demo} justify="space-around" >
            //             <Typography variant="h6" color="inherit" className={classes.grow}>
            //                 Travel N Move
            //         </Typography>    
            //             <div>
            //                 <FontAwesomeIcon icon="igloo" />
            //                 <Typography variant="h6" color="inherit" className={classes.grow}>
            //                     0421631447
            //             </Typography>
            //             </div>
            //         </Grid>
            //     </Grid>
            // </Grid>
        )
    }

}

export default TourForm;