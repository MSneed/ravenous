import React from 'react';

import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component{
	render(){
		return( <
			div className="BusinessList">{

				this.props.businesses.map(business => {

					return <Business business = {
						business
					}

					key = {

            			business.id

            		}/>
					})
				}
				  
				</div>

			); // end of render return
	} // end of render
}

export default BusinessList;

