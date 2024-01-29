//register modal
const modals = ["event-details-modal"];

modals.forEach((modalId) => {
  const modal = document.querySelector("#" + modalId);

  const closeButton = document.querySelector("." + modalId + "-close-button");

  closeButton.addEventListener("click", () => modal.classList.remove("active"));
});
