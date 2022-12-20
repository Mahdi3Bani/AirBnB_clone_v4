$(document).ready(function () {
    let amenities = [];

    $('input[type=checkbox]').change(function () {
        let amenity_id = $(this).data('id');

        if (this.checked) {
            amenities.push(amenity_id);
        } else {
            amenities = amenities.filter(id => id !== amenity_id);
        }

        $('#amenities h4').text(amenities.join(', '));
    });
});