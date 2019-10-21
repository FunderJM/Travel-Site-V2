import React from 'react';

export class TravelFormComp extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            departure: null,
            destination: null,
            tripType: "round-trip",
            adultPassengers: null,
            childPassengers: null
        }
    }

    tripChange = changeEvent => {
        this.setState({
            tripType: changeEvent.target.value
        });

        if(this.state.tripType === 'one-way'){
            document.getElementById('returnDate').style.display = 'block';
        } else {
            document.getElementById('returnDate').style.display = 'none';
        }
    }

    handleTravelFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        this.setState({
            departure: document.getElementById('orig').value,
            destination: document.getElementById('dest').value,
            adultPassengers: document.getElementById('adult-pass').value,
            childPassengers: document.getElementById('child-pass').value
        })
    }

    render(){
        return(
            <div className='main-form col-12'>
                <form className='travel-form col-5 col-s-12' onSubmit={this.handleTravelFormSubmit}>
                    <div className='to-and-fro'>
                        <div>
                            <strong>Departure:</strong><br />
                            <select id='orig'>
                                <option value="">-----</option>
                                <option value="boise">Boise, ID</option>
                                <option value="denver">Denver, CO</option>
                                <option value="lasvegas">Las Vegas, NV</option>
                                <option value="losangeles">Los Angeles, CA</option>
                                <option value="pheonix">Pheonix, AZ</option>
                                <option value="portland">Portland, OR</option>
                                <option value="saltlakecity">Salt Lake City, UT</option>
                                <option value="santafe">Santa Fe, NM</option>
                                <option value="seatle">Seatle, WA</option>
                                <option value="topeka">Topeka, KS</option>
                            </select>
                        </div>
                        <p className="btwn-destinations"> - </p>
                        <div>
                            <strong>Destination:</strong><br />
                            <select id='dest'>
                                <option value="">-----</option>
                                <option value="boise">Boise, ID</option>
                                <option value="denver">Denver, CO</option>
                                <option value="lasvegas">Las Vegas, NV</option>
                                <option value="losangeles">Los Angeles, CA</option>
                                <option value="pheonix">Pheonix, AZ</option>
                                <option value="portland">Portland, OR</option>
                                <option value="saltlakecity">Salt Lake City, UT</option>
                                <option value="santafe">Santa Fe, NM</option>
                                <option value="seatle">Seatle, WA</option>
                                <option value="topeka">Topeka, KS</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className='trip-timing'>
                        <div id='type-of-trip'>
                            <strong>Type of trip:</strong><br />
                            <input id="rad-round" type="radio" name="trip-type" value="round-trip" checked={this.state.tripType === 'round-trip'}
                                 onChange={this.tripChange} /> Round-trip <br />
                            <input id="rad-one" type="radio" name="trip-type" value="one-way" checked={this.state.tripType === 'one-way'}
                                 onChange={this.tripChange}/> One-way
                        </div>
                        <div id='departDate'>
                            <strong>Departure Date:</strong><br />
                            <input type='date'></input>
                        </div>
                        <div id='returnDate'>
                            <strong>Return Date:</strong><br />
                            <input type='date'></input>
                        </div>
                    </div>
                    <div id='passenger-info'>
                        <div className='pass-type'>
                            <strong>Adults</strong>
                            <select id='adult-pass' className='form-pass'>
                                <option value='0'>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className='pass-type'>
                            <strong>Children (Under 14)</strong>
                            <select id='child-pass' className='form-pass'>
                                <option value='0'>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <button className='search' type='button'>Search</button>
                </form>
            </div>
        )
    }
}