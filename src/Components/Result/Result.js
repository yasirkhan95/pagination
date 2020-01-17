import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Data_Loaded_Successfully} from '../../Actions/index';
import './Result.css'
import { withRouter } from 'react-router-dom';

class Result extends Component {

    state = {
    itemPerPage:8
  }

  componentDidMount(){
    this.props.Data_Loaded_Successfully();
  }
  render() {
    const Check= this.props.location.state===undefined 
    const totalPage =Check? 1 * this.state.itemPerPage :  this.props.location.state.currentPage * this.state.itemPerPage;
    const lastPage =totalPage - this.state.itemPerPage;
    const newArr = this.props.data.slice(lastPage,totalPage);

    console.log(this.props)
    const numberofPages = [];
    for(var i =1; i <= Math.ceil(this.props.data.length / this.state.itemPerPage);i++){
      numberofPages.push(i)
    }
        return (
            <div className="container">
                <div className="main my-auto">
                    {this.props.loading ? 
                    (
                        <div  className="loader">
                        </div>
                    )
                    :(newArr.map((item)=>{
                        return (
                            <div className=" div-25">
                                <img src={`https://robohash.org/${item.id}?size=120x120`} alt=""/>
                                <h4 className="mt-3">{item.title.substr(0,10)}</h4>
                                <p>{item.body.substr(0,100)}</p>
                            </div>
                            )
                        }))}
                </div>
                <div className="text-center pt-4">
                   {
                    <ul>
                        {
                        numberofPages.map((page,i)=>{
                        return <li key={i} id={page}

                        style={{
                            backgroundColor: Check ? 
                            '' : 
                            page===this.props.location.state.currentPage ? 'red' : ''
                        }}

                        onClick={(e)=>
                            this.props.history.push({
                                pathname: `/pagination/path/${page}`,
                                state: {currentPage : page}
                            })}

                        >{page}</li>
                        })
                        }
                    </ul>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        data: state.data,
        loading: state.loading
    }
}

export default connect(mapStateToProps,{Data_Loaded_Successfully}) (withRouter(Result));