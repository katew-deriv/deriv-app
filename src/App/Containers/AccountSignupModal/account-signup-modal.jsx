import React         from 'react';
import PropTypes     from 'prop-types';
import FullPageModal from 'App/Components/Elements/FullPageModal/full-page-modal.jsx';
import Button        from 'App/Components/Form/button.jsx';
import Dropdown      from 'App/Components/Form/DropDown';
// import InputField    from 'App/Components/Form/InputField/input-field.jsx';
import { connect }   from 'Stores/connect';

// const onClose = (ui) => {
//     ui.toggleUnsupportedContractModal(false);
// };

const AccountSignup = ({ onSignup, residence_list }) => {
    const userInput = { password: null, residence: null };
    const list      = residence_list;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        userInput[name] = value;
    };
    const onSubmitSignup = () => onSignup(userInput);

    return (
        <div className='account-signup'>
            <h3>Thanks for verifying your email.</h3>
            <input type='password' name='password' onChange={onInputChange} required placeholder='Create a password' />
            {/* <InputField */}
            {/*    name='password' */}
            {/*    type='password' */}
            {/*    placeholder='Create a password' */}
            {/*    required */}
            {/*    onChange={onInputChange} */}
            {/* /> */}
            <Dropdown
                is_alignment_left
                is_nativepicker={false}
                list={list}
                name='residence'
                onChange={onInputChange}
            />
            <Button onClick={onSubmitSignup}>Start trading</Button>
        </div>
    );
};

const AccountSignupModal = ({ is_visible, onSignup, residence_list }) => {
    return (
        <FullPageModal is_visible={is_visible}>
            <AccountSignup onSignup={onSignup} residence_list={residence_list} />
        </FullPageModal>
    );
};

AccountSignupModal.propTypes = {
    is_visible: PropTypes.bool,
    onSignup  : PropTypes.func,
};

export default connect(
    ({ ui, client }) => ({
        is_visible    : ui.is_account_signup_modal_visible,
        onSignup      : client.onSignup,
        residence_list: client.residence_list,
    }),
)(AccountSignupModal);
