$(document).ready(function() {

    // Task 0
    console.log("jQuery is ready!");

    // Task 1
    $("#btn-task1").click(function() {
        $("#text-id").text("ID changed!");
        $(".text-class").html("<b>Class changed with HTML!</b>");
        $("span").css({"color": "red", "font-weight": "bold"});
    });

    // Task 2
    $("#btn-hide").click(function() {
        $("#hide-p").hide();
    });
    $("#btn-show").click(function() {
        $("#hide-p").show();
    });
    $("#btn-toggle").click(function() {
        $("#hide-p").toggle();
    });

    // Task 3
    $("#btn-fade-in").click(function() {
        $("#fade-img").fadeIn();
    });
    $("#btn-fade-out").click(function() {
        $("#fade-img").fadeOut();
    });
    $("#btn-fade-toggle").click(function() {
        $("#fade-img").fadeToggle();
    });

    // Task 4
    $("#btn-slide").click(function() {
        $("#slide-panel").slideToggle();
    });

    // Task 5
    $("#btn-add-append").click(function() {
        $("#my-list").append("<li>Appended Item</li>");
    });
    $("#btn-add-prepend").click(function() {
        $("#my-list").prepend("<li>Prepended Item</li>");
    });
    $("#btn-remove").click(function() {
        $("#my-list li:last").remove();
    });

    // Task 6
    $("#btn-change-src").click(function() {
        $("#attr-img").attr("src", "https://via.placeholder.com/200/00ff00");
    });
    $("#btn-change-href").click(function() {
        $("#attr-link").attr("href", "https://github.com").text("Go to GitHub");
    });

    // Task 7
    $("#input-name").on("input", function() {
        $("#out-name").text($(this).val());
    });
    $("#input-email").on("input", function() {
        $("#out-email").text($(this).val());
    });

    // Task 8
    $("#btn-anim-basic").click(function() {
        $("#box1").animate({
            width: "200px",
            height: "200px",
            left: "50px"
        });
    });

    // Task 9
    $("#btn-anim-seq").click(function() {
        $("#box2")
            .animate({ left: "150px" })
            .animate({ top: "100px" })
            .animate({ width: "50px", height: "50px" })
            .animate({ left: "0px", top: "0px", width: "100px", height: "100px" });
    });

    // Task 10
    $("#btn-anim-comb").click(function() {
        $("#box3").animate({
            opacity: 0.3,
            width: "180px",
            left: "100px"
        }, 1000);
    });

    // Task 11
    $(".accordion-header").click(function() {
        $(this).next(".accordion-content").slideToggle();
    });

});