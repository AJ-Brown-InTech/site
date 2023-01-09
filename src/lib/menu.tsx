import ClickAwayListener from 'react-click-away-listener';

 const Menu = () => {
    const handleClickAway = () => {
        console.log('Hey, you can close the Popup now');
    };
 
    return (
        <div id="app">
            <ClickAwayListener onClickAway={handleClickAway}>
                <div> Some Popup, Nav or anything </div>
            </ClickAwayListener>
            <div id="rest-of-the-app">Don't name a div like that :(</div>
        </div>
    );
};

export default Menu