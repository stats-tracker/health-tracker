if (!$('.hidden-link').length) { // if the hidden link doesn't exist on the page
    // do nothing
}
else { // but if it does... then redirect to login
    window.location.replace("/login");
}
