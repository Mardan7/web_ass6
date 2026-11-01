// Task 0: run the code after the HTML document is ready.
$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#ready-status").text("jQuery is ready! Try the examples below.");

  // Respect the visitor's reduced motion preference.
  $.fx.off = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Task 1: ID, class and tag selectors.
  $("#change-text").on("click", function () {
    $("#selector-title").text("Selected by ID with jQuery!");
    $(".selector-text").text("Both paragraphs were selected by class.");
  });
  $("#change-html").on("click", function () {
    $(".selector-text").html("This text contains a <strong>bold HTML element</strong>.");
  });
  $("#change-style").on("click", function () {
    $("#selector-title").css("color", "#2f61be");
    $(".selector-text").css("background-color", "#e1ebff");
    $("small").css({ color: "#287258", fontSize: "16px" });
  });

  // Task 2: visibility methods.
  $("#hide-text").on("click", function () { $("#visibility-text").hide(); });
  $("#show-text").on("click", function () { $("#visibility-text").show(); });
  $("#toggle-text").on("click", function () { $("#visibility-text").toggle(); });

  // Task 3: stop previous effects so fast clicks do not build up a queue.
  $("#fade-in").on("click", function () { $("#fade-image").stop(true, true).fadeIn(600); });
  $("#fade-out").on("click", function () { $("#fade-image").stop(true, true).fadeOut(600); });
  $("#fade-toggle").on("click", function () { $("#fade-image").stop(true, true).fadeToggle(600); });

  // Task 4: sliding panel.
  function updatePanelState() {
    $("#slide-toggle").attr("aria-expanded", $("#slide-panel").is(":visible"));
  }
  $("#slide-up").on("click", function () { $("#slide-panel").stop(true, true).slideUp(400, updatePanelState); });
  $("#slide-down").on("click", function () { $("#slide-panel").stop(true, true).slideDown(400, updatePanelState); });
  $("#slide-toggle").on("click", function () { $("#slide-panel").stop(true, true).slideToggle(400, updatePanelState); });

  // Task 5: add at the end, add at the beginning, remove the last item.
  let itemNumber = 1;
  $("#append-item").on("click", function () {
    $("#study-list").append("<li>New study task " + itemNumber + "</li>");
    itemNumber++;
    $("#list-status").text("Added an item to the end.");
  });
  $("#prepend-item").on("click", function () {
    $("#study-list").prepend("<li>Priority study task " + itemNumber + "</li>");
    itemNumber++;
    $("#list-status").text("Added an item to the beginning.");
  });
  $("#remove-item").on("click", function () {
    if ($("#study-list li").length > 0) {
      $("#study-list li").last().remove();
      $("#list-status").text("Removed the last item.");
    } else {
      $("#list-status").text("The list is empty. Add an item first.");
    }
  });

  // Task 6: change src, alt and href attributes.
  let nightImage = false;
  $("#change-image").on("click", function () {
    nightImage = !nightImage;
    $("#attribute-image").attr("src", nightImage ? "images/night.svg" : "images/day.svg");
    $("#attribute-image").attr("alt", nightImage ? "Mountains and a lake at night" : "Mountains and a lake in daylight");
  });
  let w3schoolsLink = false;
  $("#change-link").on("click", function () {
    w3schoolsLink = !w3schoolsLink;
    $("#resource-link").attr("href", w3schoolsLink ? "https://www.w3schools.com/jquery/" : "https://api.jquery.com/");
    $("#resource-link").text(w3schoolsLink ? "Visit W3Schools jQuery tutorial ↗" : "Visit jQuery documentation ↗");
  });

  // Task 7: read form values and display them safely as plain text.
  $("#name, #email").on("input", function () {
    $("#name-preview").text($("#name").val() || "Not entered yet");
    $("#email-preview").text($("#email").val() || "Not entered yet");
  });
  $("#profile-form").on("submit", function (event) { event.preventDefault(); });

  // Tasks 8-10: each run starts from the same position.
  function resetBox(box) {
    box.stop(true, false).css({ left: 20, top: 20, width: 60, height: 60, opacity: 1 });
  }
  // Calculate distance from the stage width to keep boxes inside on mobile.
  function targetLeft(box, size) {
    return Math.max(20, Math.min(300, box.parent().width() - size - 20));
  }
  $("#basic-start").on("click", function () {
    const box = $("#basic-box");
    resetBox(box);
    box.animate({ left: targetLeft(box, 100), width: 100, height: 100 }, 800);
  });
  $("#sequence-start").on("click", function () {
    const box = $("#sequence-box");
    resetBox(box);
    box.animate({ left: targetLeft(box, 60) }, 500)
      .animate({ top: 140 }, 500)
      .animate({ width: 30, height: 30 }, 500)
      .animate({ left: 20, top: 20, width: 60, height: 60 }, 600);
  });
  $("#combined-start").on("click", function () {
    const box = $("#combined-box");
    resetBox(box);
    box.animate({ left: targetLeft(box, 110), top: 80, width: 110, height: 110, opacity: 0.35 }, 1000);
  });
  $(".reset-box").on("click", function () { resetBox($("#" + $(this).attr("data-box"))); });

  // Task 11: accordion with one open answer at a time.
  $(".accordion-trigger").on("click", function () {
    const button = $(this);
    const answer = $("#" + button.attr("aria-controls"));
    const wasOpen = button.attr("aria-expanded") === "true";
    $(".accordion-answer").not(answer).stop(true, true).slideUp(300);
    $(".accordion-trigger").not(button).attr("aria-expanded", "false").find("span").text("+");
    answer.stop(true, true).slideToggle(300);
    button.attr("aria-expanded", String(!wasOpen));
    button.find("span").text(wasOpen ? "+" : "−");
  });
});
