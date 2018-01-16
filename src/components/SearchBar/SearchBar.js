import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
	renderSortByOptions() {
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue =
			sortByOptions[sortByOption];
			return <li key={sortByOptionValue}>{sortByOption}</li>;
		});
	}

		render(){
			return(
					<div className="SearchBar">
					  <div className="SearchBar-sort-options">
					    <ul>
					      {this.renderSortByOptions()} // 'this' will call to the method which lives in the same scope
					    </ul>
					  </div>
					  <div className="SearchBar-fields">
					    <input placeholder="Search Businesses" />
					    <input placeholder="Where?" />
					  </div>
					  <div className="SearchBar-submit">
					    <a>Let&#39;s Go</a>
					  </div>
					</div>
				);
		}
	}
// so it can be rendered by another component we need to export it..
export default SearchBar;








 


