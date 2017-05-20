import React from 'react';
import {connect} from 'react-redux';

import Navbar from './navbar';
import InstructionModal from './instruction-modal';

export function Header(props) {
    var instructionModal;
    if (props.showInstruction) {
        instructionModal = <InstructionModal />;
    }

    return (
        <header>
            <Navbar />
            {instructionModal}
            <p className="hotAndCold"><span className="hot">HOT</span> or <span className="cold">COLD</span></p>
        </header>
    );
};

const mapStateToProps = (state, props) => ({
    showInstruction: state.showInstruction
});

export default connect(mapStateToProps)(Header);