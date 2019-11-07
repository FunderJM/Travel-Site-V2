import React from 'react';
import './employment.css';
import { job } from '../../state';
import { PositionCardComp } from './positioncard.component';
import { PositionPopUpComp } from './positionpopup.component';

export class EmployementComp extends React.Component {

    constructor(){
        super();
        this.state = {
            posting: job ,
            showPositionPopup: false
        }
    }

    togglePopup() {
        this.setState({
            showPositionPopup: !this.state.showPositionPopup

        });
    }


    render() {
        return(
            <div id='employmentpage' className='full-page'>
                <form id='employment-form'>
                    <div className='job-posting-location'>
                        <strong>Location:</strong><br />
                        <select id='job-location'>
                            <option value={null}>-----</option>
                            <option value='denver'>Denver, CO</option>
                            <option value='portland'>Portland, OR</option>
                        </select>
                    </div>
                    <div>
                        <div className='job-posting-number'>
                            <strong>Job Number:</strong><br />
                            <input type='text'></input>
                        </div>
                        <div className='job-posting-title'>
                            <strong>Job Title:</strong><br />
                            <input type='text'></input>
                        </div>
                    </div>
                    <button className='job-posting-button' type='button'>
                        Search
                    </button>
                </form>
                <div className='job-postings col-9 col-s-12'>
                    {this.state.posting.map( job => (
                        <button onClick={this.togglePopup.bind(this)} className='job-button'>
                        <PositionCardComp key={job.title} job={job} />
                        </button>
                    ))}
                </div>
                <div className='job-pop-up col-9 col-s-12'>
                    {this.state.showPositionPopup ?
                    <PositionPopUpComp job={job} closePopup={this.togglePopup.bind(this)} />: null
                    }
                </div>
            </div>
        )
    }
}