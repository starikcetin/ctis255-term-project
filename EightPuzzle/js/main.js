$(function () {
    var homeContentCycle = $("#homeContent")
            .encapsulateLargestChild()
            .fadeCycleChildren(500, 500, 500);
    
    var selectedImage;

    $("#homeToImageSelectButton").click(function () {
        $("#home").fadeOut(350, function () {
            $("#imageSelect").fadeIn(350);
        });
    });

    $(".imageButton").click(function () {
        selectedImage = $(this);
        
        $("#selectedImageButton").removeAttr("id");
        $(this).attr("id", "selectedImageButton");

        $("#continueButton")
                .css({visibility: "visible"})
                .animate({opacity: "1"}, 350);
    });

    $("#continueButton").click(function () {
        $("#imageSelect").fadeOut(350, function () {
            $("#game").fadeIn(350);
            
            setUpTheGrid(selectedImage);
        });
    });
});