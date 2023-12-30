function updateClassDropdown(sessionValue) {
  const mapping = {
    0: "0",
    1920: "1",
    2021: "2",
    2122: "3",
    2223: "4",
    2324: "5",
  };

  let newValueForClassDropdown = mapping[sessionValue];

  let classDropdown = document.querySelector(
    "#ctl00_ContentPlaceHolder1_ddlclass"
  );
  if (classDropdown) {
    classDropdown.value = newValueForClassDropdown;
    classDropdown.dispatchEvent(new Event("change"));
  }
}

function setupSessionDropdownListener() {
  let sessionDropdown = document.querySelector(
    "#ctl00_ContentPlaceHolder1_ddlsessionold"
  );
  if (sessionDropdown) {
    sessionDropdown.addEventListener("change", (event) => {
      updateClassDropdown(event.target.value);
    });
  }
}

function setupCheckboxListeners() {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"][id^="ctl00_ContentPlaceHolder1_grd_course_"][id$="_ChkBen"]'
  );

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      handleCheckboxClick(this);
    });
  });
}

function handleCheckboxClick(checkbox) {
  const row = checkbox.closest("tr");

  if (row) {
    row.querySelector('select[id$="_ddlstatus"]').value = "C";
    row.querySelector('select[id$="_ddlsession"]').selectedIndex = 1;
    row.querySelector('select[id$="_ddlclassrenew"]').selectedIndex = 1;
    row.querySelector('select[id$="_ddlSection"]').value = "A";
    row.querySelector('select[id$="_ddlpass"]').selectedIndex = 1;
    row.querySelector('select[id$="_ddlPerformance"]').value = "G";
  }
}

setupCheckboxListeners();
setupSessionDropdownListener();
