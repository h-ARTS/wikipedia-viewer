import React, {Component} from 'react';

const styleOptions = {
   backgroundColor: '#333',
   borderColor: '#333'
}

const Results = props => {
   return (
      <div className="col-12">
         {props.query.map(data => {
            return (
               <div key={data[0]} className="card card-inverse mt-4" style={styleOptions}>
                  <div className="card-block">
                     <h4 className="card-title">{data[1].title}</h4>
                     <p className="card-text">{data[1].extract}</p>
                     <a href={'https://en.wikipedia.org/?curid=' + data[1].pageid} className="btn btn-primary" target="_blank">Open in Wikipedia</a>
                  </div>
               </div>
            )
         })}
      </div>
   );
}

export default Results;