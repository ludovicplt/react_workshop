import data from './data.json'
fs = require('fs')

function Menu() {
    var menu = JSON.parse(fs.readfile('./data.json', 'utf-8'));

    return (
        <a>{menu}</a>
    );
}
export default Menu;