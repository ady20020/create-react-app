import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.goto = this.goto.bind(this)
    }

    componentDidMount() {
        // const { activeItem } = this.props;
    }

    goto = (alias) => {
        this.props.history.push('/' + alias)
    }

    render() {
        const { activeItem } = this.props;
        const dataItems = [
            {id: 1, title: 'All Orders', alias: 'orderlist'},
            {id: 2, title: 'New Order', alias: 'home'},
            {id: 3, title: 'Search', alias: 'ordersearch'}
        ];

        const sidebarDataItems = (
            <ul style={styles.ul}>
              {dataItems.map((item) =>
                <li key={item.id} style={styles.listItem} onClick={() => this.goto(item.alias)} className={"" + (item.alias === activeItem ? 'li-item-active' : '')}>
                  {item.title}
                </li>
              )}
            </ul>
          );

        const sidebarView  =(
            <div className="sidebar" style={styles.sideBar}>
                {sidebarDataItems}
            </div>
        );

        return (
            <>
                {sidebarView}
            </>
        );
    }
}

const styles = {
    sideBar: {
        width: 250,
        backgroundColor: '#000',
        color: '#fff',
        height: '100%',
        position: 'absolute',
        top: '70px',
        padding: '50px 0',
        borderRight: '1px solid #fff',
    },
    ul:{
        padding: 0,
    },
    listItem: {
        // fontFamily: 'Open Sans',
        fontSize: 20,
        fontWeight: 300,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.36,
        letterSpacing: 'normal',
        textAlign: 'left',
        color: '#fff',
        padding: '14px 14px 14px 32px',
        listStyle: 'none',
        cursor: 'pointer'
    }
}

export default withRouter(Sidebar);
