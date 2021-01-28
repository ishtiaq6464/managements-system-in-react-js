import React from 'react'
import Header from './header'
import Navigation from './navigation'
import { Container } from 'react-bootstrap'

const Layout = props => (
<div>
     <Navigation /> 
    <main className={`app-layout ${props.className !== undefined ? props.className : ''}`}>
        {props.isHeader && <Header />}
        <Container fluid>
            {props.children}
        </Container>

    </main>
    </div>
)

export default Layout