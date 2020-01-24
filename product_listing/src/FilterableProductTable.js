import React,{ Suspense } from 'react';
import ThemeContext from './ThemeContext.js'
import data from './productDetail.js'
import Parent from './Parent.js'
import './index.css'
import ErrorBoundary  from './ErrorBoundary.js'
const ProductTable = React.lazy(()=>import('./ProductTable'))
const SearchBar = React.lazy(()=> import('./SearchBar'))


class FilterableProductTable extends React.Component{
		
		constructor(props){
			super(props);
			this.props = props;
			const list = this.createMap()
			this.state={
				original_product_list	: list,
				filtered_product_list	: list
			}
			
			this.searchRef= React.createRef()
			
			
			
			
		}
	
		componentDidMount(){
			
			//this.createMap()
		}
		
		createMap(){
			const map = new Map();
			data.forEach((element)=>{
					const category = element.category;
					if(map.get(category) === undefined){
						map.set(category,[])
					}
					const value = map.get(category);
					value.push(element);
					map.set(category,value);
			});
			return map;
		}
		
		createFilteredMap(){
		}
	
		componentWillUnmount(){
		}
		
		onSearchUpdate	= (searchedValue)	=>{
			///console.log("onSearchUpdate:	",searchedValue)
			let tempMap = new Map()
			for(let [key,value] of this.state.original_product_list){
				const result = []
				for(let i=0;i<value.length;i++){
					let _value = value[i]
					///console.log(_value.name,searchedValue,_value.name.includes(searchedValue))
					///console.log(_value.price,searchedValue,_value.price.includes(searchedValue))
					///console.log("--------------------------------------------------------")
					if(_value.name.includes(searchedValue) || _value.price.includes(searchedValue)){
						result.push(_value)
					}
				}
				
				if(result.length !== 0){
					tempMap.set(key,result)
				}
				
			}
			
			this.setState({filtered_product_list: tempMap},()=>{
				///console.log(this.state)
			})
			
			///console.log("tempMap after search: ",tempMap)
			///console.log("state after search: ",this.state)
		}
		
		onClick = () =>{
			this.searchRef.current.upateValue()
		}
		
		render(){
			const _this = this
			return (
			<React.StrictMode>
				<div >
					<div>
						Product Listing
						<ErrorBoundary>
							<Parent/>
						</ErrorBoundary>
						
						
						<Suspense fallback={<h2>Product list is loading...</h2>}>
							{
								<React.Fragment>
									
									<SearchBar onSearchUpdate={this.onSearchUpdate} ref={this.searchRef} />
									<ThemeContext.Provider value="dark1">
										<ProductTable list={_this.state.filtered_product_list}/>
									</ThemeContext.Provider>
								</React.Fragment>
							}
						</Suspense>
					</div>
				</div>
			</React.StrictMode>
			);
		}
}




export default FilterableProductTable;
