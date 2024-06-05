import React from 'react'
import classes from '../NftCard/nftcard.module.css'

const NftCard = () => {
    return (
        <>
            <section id={classes.nftCard}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={classes.img}>
                                <img src="https://neoh-react.vercel.app/img/about/1.jpg" alt="" />
                            </div>


                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NftCard