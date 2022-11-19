/**
 * patientsForm.js
 */
"use strict";
import { Patient } from "./patient.js";

(function () {
  //Patients array with Patient objects
  const patients = initiateArray();
  //all jquery objects
  const $patientId = $("#patientIdNumber");
  const $firstName = $("#firstName");
  const $middleInitials = $("#middleInitials");
  const $lastName = $("#lastName");
  const $dateOfBirth = $("#dateOfBirth");
  const $department = $("#ddlDepartment");
  const $tableBody = $("#tbodyPatientsList");
  const $showOutPatient = $("#chkShowOutPatients");
  const $showElderlyPatients = $("#chkElderlyPatients");
  const $Outpatient = $("input[name='radioIsOutPatient']");

  //   populates html table when page is loaded with initial array of Patients
  window.addEventListener("DOMContentLoaded", populateTable);

  $("#form").on("submit", function (evt) {
    evt.preventDefault();
    // add form input to patients array
    patients.push(
      new Patient(
        $patientId.val(),
        $firstName.val(),
        $middleInitials.val(),
        $lastName.val(),
        new Date($dateOfBirth.val()),
        $department.val(),
        $Outpatient.filter(":checked").val()
      )
    );
    $tableBody.empty();
    populateTable();
    clearForm();
  });

  $showElderlyPatients.on("click", function () {
    $tableBody.empty();
    populateTable();
  });
  $showOutPatient.on("click", function () {
    $tableBody.empty();
    populateTable();
  });
  //   populates the table with the patients array but first filters elements
  //   by using the checkboxes
  function populateTable() {
    const filteredPatients = patients
      .filter((pro) => {
        if ($showOutPatient.is(":checked")) {
          return pro.isOutPatient === "Yes";
        } else {
          return true;
        }
      })
      .filter((pro) => {
        if ($showElderlyPatients.is(":checked")) {
          const current = new Date().getFullYear();
          return current - pro.dateOfBirth.getFullYear() >= 65;
        } else {
          return true;
        }
      });
    //append the filtered patients array to the html table
    filteredPatients.forEach((pro) => {
      const $trow = $("<tr>")
        .append(
          $("<td>", {
            text: pro.patientIDNum,
          })
        )
        .append(
          $("<td>", {
            text: pro.firstName,
          })
        )
        .append(
          $("<td>", {
            text: pro.middleInitial,
          })
        )
        .append(
          $("<td>", {
            text: pro.lastName,
          })
        )
        .append(
          $("<td>", {
            text: pro.dateOfBirth.toLocaleDateString(),
          })
        )
        .append(
          $("<td>", {
            text: pro.department,
          })
        )
        .append(
          $("<td>", {
            text: pro.isOutPatient,
          })
        );

      $tableBody.append($trow);
    });
  }
  //initiate patients array
  function initiateArray() {
    const patient1 = new Patient(
      "EP-001-000001",
      "Ana",
      "J",
      "Smith",
      new Date(1945, 0, 5),
      "Ear, Nose and Throat",
      "No"
    );
    const patient2 = new Patient(
      "EP-001-000002",
      "Bob",
      "K",
      "Jones",
      new Date(1985, 4, 4),
      "Cardiology",
      "Yes"
    );
    const patient3 = new Patient(
      "EP-001-000003",
      "Carlos",
      "A",
      "Hernandez",
      new Date(1957, 2, 13),
      "Cardiology",
      "Yes"
    );
    return [patient1, patient2, patient3];
  }

  //   clears the form elements
  function clearForm() {
    $patientId.val("");
    $firstName.val("");
    $middleInitials.val("");
    $lastName.val("");
    $dateOfBirth.val("");
    $department.val("");
    $Outpatient.filter(":checked").prop("checked", false);
  }
})();
