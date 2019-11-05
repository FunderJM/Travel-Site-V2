import React from 'react';

export class PositionCardComp extends React.Component {
    render(){

        let job = this.props.job;

        return (
            <div className='job-card col-12 col-s-12'>
                
                <div className='job-title'><strong>Job Title:</strong> {job.title}</div>
                <div className='job-number'><strong>Job Number:</strong> {job.number}</div>
                <div className='job-description'><strong>Description:</strong> <br/>
                    {job.description}
                </div>
                {/* <div className='job-description'><strong>Responsibilities:</strong> <br/>
                    {job.responsibilities}
                </div>
                <div className='job-description'><strong>Qualifications:</strong> <br/>
                    {job.qualifications}
                </div> */}
            </div>
        )
    }
}