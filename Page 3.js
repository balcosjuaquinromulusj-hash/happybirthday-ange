$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Clicking on the envelope itself
  envelope.click(function () {
    openEnvelope();
  });

  // Clicking "Open" button
  btn_open.click(function () {
    openEnvelope();
  });

  // Clicking "Close" button
  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }
});
