const DateTime = (props) => {
    var d = new Date(),

        minutes = d.getMinutes().toString().length === 1 ? '0' + d.getMinutes() : d.getMinutes(),

        hours = d.getHours().toString().length === 1 ? '0' + d.getHours() : d.getHours(),

        ampm = d.getHours() >= 12 ? 'pm' : 'am',

        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    if (props.portlet === 'contingencyReserve') {

        // return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
    }
    if (props.portlet === 'header') {

        // return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes;
    }
    if (props.page === 'overview') {
        return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear().toString().substr(-2);
    }
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();


}

export default DateTime;