import React, { Component } from 'react'
import util from '../util'
export default class Characteristics extends Component {
    render() {
        const {characteristicsItems} = this.props;
        return (
            <div className="alert alert-info">
                {characteristicsItems.length === 0 
                ? "No phones selected": 
                <div>You have {characteristicsItems.length} phones selected.<hr /></div>}
                {characteristicsItems.length > 0 && 
                    
                    <div>
                        <div>
                            {characteristicsItems.map(item =>
                                
                                <li className= "thumbnail alert alert-info">
                                    <h4><b> <p className=" text-success ">Phone:  </p> {item.name}</b></h4>
                                    <h5><b> <p className=" text-success ">Manufacturer: </p> {item.manufacturer}</b></h5>
                                    <h5><b> <p className=" text-success ">Description: </p> {item.description}</b></h5>
                                    <h5><b> <p className=" text-success ">Color:</p>  {item.color}</b></h5>
                                    <h5><b> <p className=" text-success ">Screen: </p> {item.screen}</b></h5>
                                    <h5><b> <p className=" text-success ">Processor: </p> {item.processor}</b></h5>
                                    <h5><b> <p className=" text-success ">Ram memory: </p> {item.ram} Gb</b></h5>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCharacteristics(e, item)}>X</button>
                                    <hr />
                                </li>)}
                        </div>
                    </div>
                    
                }

            </div>
        )
    }
}
