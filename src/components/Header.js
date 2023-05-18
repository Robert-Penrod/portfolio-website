import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Colors } from "../data/Colors";
import Resume from "../documents/Resume.pdf";

class Header extends React.Component {
    state = {
        isCollapseOpen: false,
    };

    toggleCollapse = () =>
        this.setState({
            isCollapseOpen: !this.state.isCollapseOpen,
        });

    render() {
        const { isCollapseOpen } = this.state;

        console.log(isCollapseOpen);

        return (
            <div>
                <Navbar
                    dark
                    expand='sm'
                    fixed='top'
                    color='none'
                    style={{ backgroundColor: Colors.bg1 }}
                >
                    <NavbarBrand href='/'>Robert Penrod</NavbarBrand>
                    <NavbarToggler onClick={this.toggleCollapse} />
                    <Collapse isOpen={isCollapseOpen} navbar>
                        <Nav className='me-auto' navbar>
                            <NavItem>
                                <NavLink href='/projects'>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={Resume} target='_blank'>
                                    Resume
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/contact'>Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
