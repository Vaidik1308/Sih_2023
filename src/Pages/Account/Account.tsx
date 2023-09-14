import React from 'react'
import { Link } from 'react-router-dom'

const Account = () => {
  return (
    <main>
        <section>
            <h1>Your Account</h1>
            <div></div>
        </section>
        <section>
            <article>
                {/* image */}
            </article>
            <article>
                <div>
                    <div>
                        <div>
                            <h2>Ayush Gupta</h2>
                            <p>ayus@gmail.com</p>
                        </div>
                        <div>
                            {/* icon */}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>Phone no: </div>
                            <div>9876514632</div>
                        </div>
                        <div>
                            <div>Gender: </div>
                            <div>Male</div>
                        </div>
                        <div>
                            <div>Date of Birth: </div>
                            <div>23/02/2000</div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section>
            <h2>Additional Information</h2>
            <article>
                <Link to='/'>
                    <div>
                        {/* icon */}
                    </div>
                    <div>
                        <p>What do you do for a living?</p>
                    </div>
                </Link>

                <Link to='/'>
                    <div>
                        {/* icon */}
                    </div>
                    <div>
                        <p>What do you do for a living?</p>
                    </div>
                </Link>
                
                <Link to='/'>
                    <div>
                        {/* icon */}
                    </div>
                    <div>
                        <p>What do you do for a living?</p>
                    </div>
                </Link>
                
            </article>
        </section>
    </main>
  )
}

export default Account