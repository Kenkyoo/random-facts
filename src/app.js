$(document).ready(function() {
    $("#btn").click(function () {
        $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/facts?',
        headers: { 'X-Api-Key': '47TbcbBJKlCP92xRufCnOg==PTkLKDxbwTowUKbb'},
        contentType: 'application/json',
        success: function(result) {
        const results = result[0];
        $('#fact').html(results.fact);
        $( "#fact" ).effect( "shake" );
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
    });
});