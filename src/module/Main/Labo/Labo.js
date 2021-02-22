import React from 'react';
import Labo1 from './Labo1';
import Labo2 from './Labo2';

const Labo = props =>{
    return (
        <section className="labo">
            <h2 className="labo__title">labo</h2>
            <p classname="labo__txt">実験的なサンプル置き場</p>
            <Labo1 />
            <Labo2 />
        </section>
    );
}

export default Labo;