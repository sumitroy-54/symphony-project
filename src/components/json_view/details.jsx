import React, { Component } from 'react';
import ReactTable, { ReactTableDefaults } from 'react-table';
import Dropzone from 'react-dropzone';
import 'react-table/react-table.css';
import {DRAG_DROP_TEXT} from '../utils';
import './details.scss';

class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
            entered_json: null
        }
    }

    onDrop = (acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
      
            reader.onabort = () => alert('file reading was aborted')
            reader.onerror = () => alert('file reading has failed')
            reader.onload = () => {
            // Reading contents of file
              const binaryStr = reader.result
              this.setState({entered_json: JSON.parse(binaryStr)})
            }
            reader.readAsText(file)
          });
      }

    onExpandedChange=(newExpanded)=> {
        this.setState({
          expanded: newExpanded
        });
      }
    render() {
        const columns = [
            {
              Header: 'Date',
              headerClassName: 'table-header',
              id: 'date',
              accessor: d => d.date,
              pivot: true
              
            },
            {
              Header: 'Inventory',
              headerClassName: 'table-header',
              id: 'inventory',
              pivot: true,
              accessor: d => d.inventory
            },
            {
              Header: 'Model',
              headerClassName: 'table-header',
              id: 'model',
              accessor: d => d.model
            },
            {
              Header: 'City',
              headerClassName: 'table-header',
              accessor: 'city',
              id: 'city',
            },
            {
                Header: 'Total Leads',
                headerClassName: 'table-header',
                accessor: 'total_leads',
            },
            {
                Header: 'Total Sales',
                headerClassName: 'table-header',
                accessor: 'total_sales',
            },
            {
                Header: 'Total Cash',
                headerClassName: 'table-header',
                accessor: 'total_cash',
            },
            {
                Header: 'Average Discount',
                headerClassName: 'table-header',
                accessor: 'discount',
            },

          ];

          let added_members_data = [];

          if (this.state.entered_json) {
            this.state.entered_json.map((data, index) => {
              added_members_data.push({
                date: data.date,
                inventory: data.inventory,
                model: data.model,
                city: data.City,
                total_leads: data.total_leads,
                total_sales: data.total_sales,
                total_cash: data.total_cash,
                discount: data.discount,
                
              });
            });
          }
        return (
            <div>
                <div className="details">

                    <div className="container">
                    <Dropzone onDrop={this.onDrop} accept=".json" className="drag-drop">
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {DRAG_DROP_TEXT}
                        </div>
                    )}
                    
                    </Dropzone>
                    </div>
                
                </div>
                {this.state.entered_json?
                    <div className="table">
                         <ReactTable
                            data={added_members_data}
                            filterable={false}
                            pivotBy={["date","inventory", "model"]}
                            className="-striped -highlight"
                            columns={columns}
                            defaultPageSize={10}
                            showPageSizeOptions
                            sortable={false}
                            resizable={false}
                            column={{
                            ...ReactTableDefaults.column,
                            headerStyle: {
                                outline: 'none',
                            },
                            }}
                        />
                    </div>:''}
                    
            </div>
        )
    }
}

export default Details;
