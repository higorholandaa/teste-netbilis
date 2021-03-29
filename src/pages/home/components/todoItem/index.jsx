import React from 'react';


export default function Todo({ id, description, done }) {

    return (
        <div className="00">
            <article className="pointer ">
                <div>{id} - {description}</div>
                <div >Feito? {done === true ? 'Sim' : 'Não'}</div>
            </article>
            <div>
                <button className="buttonCheck" type="button" >Ok</button>
            </div>
            <div  >
            </div>
        </div>
    )

}