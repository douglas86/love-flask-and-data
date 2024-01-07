document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll('.modal');
    M.Modal.init(sidenav);

    // datepicker initialization
    let datePicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialization
    let selection = document.querySelectorAll('select');
    M.FormSelect.init(selection);
});