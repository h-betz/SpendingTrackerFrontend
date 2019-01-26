import React from 'react';

class DashboardOptions extends React.Component {

    render() {
        return (
            <div className='content-box z-depth-2' id="contentDiv" style={{padding:"1em .5em"}}>
                <div className="btn-toolbar-toggle" role="group">
                    <button type="button" className="btn btn-default" onclick="getSummary();">Summary</button>
                    <button type="button" className="btn btn-default" onclick="getSearch();">Search</button>
                    <button type="button" className="btn btn-default" onclick="getTrends();">Trends</button>
                </div>
                <div className="content-box" id="totalsDiv">
                    <table>
                        <tbody>
                            <tr>
                                <td width="20%">
                                <span id="month-total">Month total</span>
                                <br/>
                                <h4 id="month-value"><strong>0.00</strong></h4>
                                </td>
                                <td width="20%">&nbsp;</td>
                                <td id="year-total" width="20%">Year to Date<br/>
                                <h4 id="year-value"><strong>0.00</strong></h4>
                                </td>
                                <td width="20%">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default DashboardOptions;