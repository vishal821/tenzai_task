import React from 'react';
import Header from '../../components/header';
import search from '../../images/search.svg';
import './styles.scss';

const data = [
    {
        fpo: '86-75-309',
        created: '07-04-18',
        amount: '$1,345.00',
        division: 'Cincinnati',
        address: 'BCD-1234-00',
        builder: 'Matt Graves',
    }
]
let res = [];
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startindex: 0,
            endindex: 14,
            loading: false
        }
    }
    componentDidMount() {
        this.refs.myscroll.addEventListener("scroll", () => {                     // listener to detect when scrolled to bottom.
            if (
                this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
                this.refs.myscroll.scrollHeight
            ) {
                this.loadMore();
            }
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');                                    // unmount window listener
    }
    loadMore() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });                                  // loading false after 2 sec 
        }, 2000);
    }

    /**
     * function for displaying table data in a 15 set of rows
     */
    createTabledata() {
        if (res && res.length < 1000) {
            for (let i = this.state.startindex; i <= this.state.endindex; i++) {
                res.push(
                    <tr className={i % 2 === 0 ? 'new_style' : 'old_style'}>
                        <td>{data[0].fpo}</td>
                        <td>{data[0].created}</td>
                        <td>{data[0].amount}</td>
                        <td>{data[0].division}</td>
                        <td>{data[0].address}<br />
                            <span>2138 Blankenbecker Dr...</span>
                        </td>
                        <td>{data[0].builder}<br />
                            (859) 578-4200
                        </td>
                        <td>loreal ipsum</td>
                    </tr>
                )
            }
            return res;
        } else {
            return res;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='root'>
                    {/* Header Component*/}
                    <Header />
                    <div className='menu'>
                        {/* Table Data*/}
                        <div className='table_context' ref="myscroll">
                            <div className='table_contents'>
                                <div className='searchby'>
                                    <div className='searchby_text'>
                                        <p>Search by</p>
                                    </div>
                                    <div className='select_menu'>
                                        <select>
                                            <option>All</option>
                                        </select>
                                        <input type="search" /><img src={search} alt="search" />
                                    </div>
                                </div>
                            </div>
                            <div className='table_headings'>
                                <table>
                                    <thead>
                                        <tr className='heading_row'>
                                            <th>Fpo </th>
                                            <th>Created </th>
                                            <th>Amount </th>
                                            <th>Division </th>
                                            <th>Address </th>
                                            <th>Builder </th>
                                            <th>Reason</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.createTabledata()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {this.state.loading ?
                        <div className="loadingstyle">
                            <p>
                                loading ...
                        </p>
                        </div>
                        : null}
                </div>
            </React.Fragment>
        )
    }
}
export default Home;