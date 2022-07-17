import React from 'react';
import '../../Pages/Style/Contact.css'
const Contact = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-2 mt-12'>
            <div className='address'>
                <div className='address-info'>
                    <div className='info'>
                        <p className='text-3xl my-3 font-bold'>Sono Japanese Restaurant Portside</p>
                        <address>
                            Level 1, Portside Wharf <br />
                            39 Hercules St, Hamilton QLD <br />
                            (opposite Dendy Cinemas) <br />
                            (07) 3268 6655 <br />
                            contact@sonorestaurant.com.au
                        </address>
                    </div>
                    <div className='trading-hours'>
                        <p className='text-3xl font-bold mt-12'>Trading Hours</p>
                        <p className='text-2xl font-bold mt-8'>Dinner</p>
                        <p className='text-2xl mb-6'>Tuesday – Thursday <br /> Bookings from 5:30pm, kitchen closes 9:30pm</p>

                        <p className='text-2xl'>Friday & Saturday </p>
                        <p className='text-2xl' text-2xl>Bookings from 5:30pm, kitchen closes 10pm</p>
                        <p className='text-2xl'>Teppanyaki seatings at 5:30pm and 8pm</p>

                        <p className='text-2xl'>Sunday  </p>
                        <p className='text-2xl'>Bookings from 5:30pm, kitchen closes 9:30pm</p>
                        <p className='text-2xl font-bold mt-6'>Lunch</p>
                        <p className='text-2xl'>Friday – Sunday </p>
                        <p className='text-2xl'>Bookings from 12pm, kitchen closes 2:30pm</p>

                    </div>
                    <div className='parking'>
                        <p className='text-3xl font-bold mb-5'>Parking</p>
                        <p className='text-2xl text-justify mr-20'>Visitors to Sono Japanese Restaurant can enjoy the shared basement parking of Portside Wharf. Please be sure to bring your parking ticket to the restaurant for 3 hours of parking validation.Please note Friday and Saturday evenings can be very busy at the precinct so we suggest allowing additional time to find parking.</p>
                    </div>
                </div>

            </div>
            <div className='send-messages'>
                <div className='massages-info'>
                    <p className='text-3xl font-bold'>ENQUIRY FORM</p>

                    <h5 className='mt-5'>Please complete the form below for all enquiries regarding feedback, media, and general questions. If you wish to join the team at Sono, please forward your resume to contact@sonorestaurant.com.au, advising the position you are seeking.</h5>

                    <div className='mt-8'>
                        <form>
                            <div>
                                <label>Name <sup>*</sup> </label>
                                <input className='lg:ml-32' type="text" name="" id="" required/>
                            </div>
                            <div className='mt-5'>
                                <label>Phone</label>
                                <input className='lg:ml-36' type="text" name="" id="" />
                            </div>
                            <div className='mt-5'>
                                <label>Email <sup>*</sup> </label>
                                <input className='lg:ml-32' type="email" name="" id="" required/>
                            </div>
                            <div className='mt-5'>
                                <label>Email <sup>*</sup> </label>
                                <textarea className='lg:ml-32' name="" id="" cols="65" rows="8" required></textarea>
                            </div>
                            
                            <div className='mt-12'>
                                <button className='submit-button'>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;