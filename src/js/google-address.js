'use strict';

let autocomplete;

const initAutocomplete = () => {
    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('txtAddress')),
        {types: ['geocode']});
};