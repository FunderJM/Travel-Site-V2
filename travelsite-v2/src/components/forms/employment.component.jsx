import React from 'react';

export class EmployementComp extends React.Component {

    updateCategory = (e) => {
        if(e.target.checked) {
            this.props.updateCategory(e.target.value);
        }
    }

    render() {
        return(
            <div id='employmentpage' className='full-page'>
                <form id='employment-form'>
                    <div id='applicant-info'>
                        <div id='employment-form-names'>
                        <div id='firstname'>
                            First name:<br />
                            <input type='text' name='firstname'></input>
                        </div>
                        <div id='m-initial'>
                            Middle-initial:<br />
                            <input type='text' name='middle-init'></input>
                        </div>
                        <div id='lastname' className='col-3 col-s-12'>
                            Last name:<br />
                            <input type='text' name='lastname'></input>
                        </div>
                        </div>
                        <div id='employment-form-contact'>
                        <div id='email'>
                            Email:<br />
                            <input type='email' name='email'></input>
                        </div>
                        <div id='phone'>
                            Phone:<br />
                            <input type='number' name='phone'></input>
                        </div>
                        </div>
                        <div id='gender'>
                            Gender:<br/>
                            <input type='radio' name='gender' value='male' /> Male<br />
                            <input type='radio' name='gender' value='female' /> Female<br />
                            <input type='radio' name='gender' value='other' /> Other
                        </div>
                        <div id='Resume'>
                            Resume/CV: <input type='file' name='resumefile' />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}