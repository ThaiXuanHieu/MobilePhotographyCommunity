function addImage(input) {
    if (input.files && input.files[0]) {
        var filerdr = new FileReader();
        filerdr.onload = function (e) {
            document.getElementById("img-preview").src = e.target.result;
            document.getElementsByClassName("region-img-preview")[0].style.display = "block";
        }
        filerdr.readAsDataURL(input.files[0]);
    }
}

function uploadAvatar(input) {
    if (input.files && input.files[0]) {
        var filerdr = new FileReader();
        filerdr.onload = function (e) {
            document.getElementById("avatar").src = e.target.result;
        }
        filerdr.readAsDataURL(input.files[0]);
    }
}

function closeDescription() {
    var descriptionChallenge = document.getElementsByClassName("description-challenge")[0];
    var colLeft = document.getElementsByClassName("col-left")[0];
    var colRight = document.getElementsByClassName("col-right")[0];
    var colCenter = document.getElementsByClassName("col-center")[0];

    descriptionChallenge.style.display = 'none';
    colLeft.style.marginTop = '70px';
    colRight.style.marginTop = '70px';
    colCenter.style.marginTop = '70px';

}