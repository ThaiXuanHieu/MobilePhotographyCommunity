$('#upload-img').filestyle({
    input: false,
    iconName: 'glyphicon glyphicon-picture',
    buttonText: 'Thêm ảnh',
});

$('#upload-img').change(function(e){
    // var path = $('#upload-img').val();
    // if (path.substring(3,11) == 'fakepath') {
    //     path = path.substring(12);
    // } // Remove c:\fake at beginning from localhost chrome
    var location = URL.createObjectURL(e.target.files[0]);
    $('.img-preview').attr('src', location);
    $('#txtPath').val(location);
});
