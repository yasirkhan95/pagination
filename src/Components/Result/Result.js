import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FetchDataFromApi} from '../../Actions/index';
import './Result.css'

class Result extends Component {

    state = {
    currentPage:1,
    itemPerPage:8
  }

  componentDidMount(){
    this.props.FetchDataFromApi();
  }

  render() {
    const totalPage = this.state.currentPage * this.state.itemPerPage;
    const lastPage =totalPage - this.state.itemPerPage;
    const newArr = this.props.data.slice(lastPage,totalPage);


    const numberofPages = [];
    for(var i =1; i <= Math.ceil(this.props.data.length / this.state.itemPerPage);i++){
      numberofPages.push(i)
    }

        return (
            <div className="container">
                <div className="main">
                    {newArr.map((item)=>{
                        return (
                            <div className=" div-25">
                                <img src={`https://robohash.org/${item.id}?size=120x120`} alt=""/>
                                <h4 className="mt-3">{item.title.substr(0,10)}</h4>
                                <p>{item.body.substr(0,100)}</p>
                            </div>
                            )
                        })}
                </div>
                <div className="text-center pt-4">
                   {
                    <ul>
                        {
                        numberofPages.map((page,i)=>{
                        return <li key={i} id={page}
                        onClick={(e)=>this.setState({currentPage:e.target.id})}

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
        data: state.data
    }
}

export default connect(mapStateToProps,{FetchDataFromApi}) (Result);