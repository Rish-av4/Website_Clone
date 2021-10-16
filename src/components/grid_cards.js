import React from "react";
import cbse9 from "../images/cbse9.webp";
import cbse10 from "../images/cbse10.webp";
import cbse11th from "../images/cbse11th.webp";
import cbse12th from "../images/cbse12th.webp";
import bm from "../images/bm.webp";
import sh from "../images/sh.webp";
import novel49 from "../images/novel49.webp";
import novel99 from "../images/novel99.webp";

import rom from "../images/rom.webp";
import scifi from "../images/scifi.webp";
import fn from "../images/fn.webp";
import cn from "../images/cn.webp";
import iit from "../images/iit.webp";

import ncert1 from "../images/ncert1.webp";
import ncert2 from "../images/ncert2.webp";
import ncert3 from "../images/ncert3.webp";
import ncert4 from "../images/ncert4.webp";
import all from "../images/all.webp"

import shortstory from "../images/shortstory.webp";

import sell from "../images/sell.webp";
import neet from "../images/neet.webp";


export default function Cards() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-5 g-2 my-0 mx-0">
                <div className="col">
                    <div className="card">
                        <img src={cbse9} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cbse10} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cbse11th} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cbse12th} className="card-img-top" alt="" />
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={sell} className="card-img-top" id="lord1" alt="" />
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={novel49} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={novel99} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={sh} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={bm} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={neet} className="card-img-top" id="lord2" alt="" />
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={scifi} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={rom} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={cn} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={fn} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={iit} className="card-img-top" id="lord3" alt="" />
                    </div>
                </div>


                <div className="col">
                    <div className="card">
                        <img src={ncert1} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={ncert2} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={ncert3} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={ncert4} className="card-img-top" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src={all} className="card-img-top" id="lord4" alt="" />
                    </div>
                </div>
            </div>

            <img src={shortstory} className="img-fluid"  alt=""></img>
        </>
    );
}
