/**
 * fieldMap.js
 * Complete mapping of ALL fields from the 159 Form PDF.
 * Extracted directly from the n8n HTTP node JSON body.
 */

// ── Applicant basic fields ────────────────────────────────────────────────────
const APPLICANT_FIELDS = {
  dateSubmitted:        "Date Submitted",
  checkBoxNoHousehold:  "Check Box1",
  checkBox2:            "Check Box2",
  lastName:             "LAST NAMEAPPLICANT",
  firstName:            "FIRST NAMEAPPLICANT",
  sex:                  "SEX MFXAPPLICANT",
  dob:                  "FROM mmyyyyDOB",
  dob2:                 "FROM mmyyyyDOB_8",
  dob3:                 "FROM mmyyyyDOB_15",
  // Current address
  street:               "CURRENT STREET ADDRESS",
  apt:                  "APT_2",
  city:                 "CITY_2",
  state:                "STATE_2",
  zip:                  "ZIP_2",
  // Current address dates
  fromMonth:            "FROM mmyyyyZIP",
  fromYear:             "FROM mmyyyyZIP_2",
  toMonth:              "TO mmyyyyZIP",
  toYear:               "TO mmyyyyZIP_2",
  // Previous address 1
  prevStreet1:          "PREVIOUS STREET ADDRESS",
  prevApt1:             "APT_3",
  prevCity1:            "CITY_3",
  prevState1:           "STATE_3",
  prevZip1:             "ZIP_3",
  prevFromMonth1:       "FROM mmyyyyZIP_3",
  prevFromYear1:        "FROM mmyyyyZIP_4",
  prevToMonth1:         "TO mmyyyyZIP_3",
  prevToYear1:          "TO mmyyyyZIP_4",
  // Previous address 2
  prevStreet2:          "PREVIOUS STREET ADDRESS_2",
  prevApt2:             "APT_4",
  prevCity2:            "CITY_4",
  prevState2:           "STATE_4",
  prevZip2:             "ZIP_4",
  prevFromMonth2:       "FROM mmyyyyZIP_5",
  prevFromYear2:        "FROM mmyyyyZIP_6",
  prevToMonth2:         "TO mmyyyyZIP_5",
  prevToYear2:          "TO mmyyyyZIP_6",
  // Signatures & dates
  signature1:           "APPLICANTS SIGNATURE",
  signatureDate1:       "DATE",
  signature2:           "APPLICANTS SIGNATURE_2",
  signatureDate2:       "DATE_2",
  signatureDate3:       "DATE_3",
  applicantName:        "APPLICANT NAME",
  applicantName2:       "APPLICANT NAME_2",
};

// ── Household members page 1 (indices 0–4) ────────────────────────────────────
const HOUSEHOLD_MEMBER_FIELDS_P1 = [
  { relationship: "MAIDENALIASRow1", lastName: "LAST NAMERow3", firstName: "FIRST NAMERow3", sex: "SEX MFXRow3", dobMonth: "FROM mmyyyyDOB_3",  dobDay: "FROM mmyyyyDOB_10", dobYear: "FROM mmyyyyDOB_17" },
  { relationship: "MAIDENALIASRow2", lastName: "LAST NAMERow4", firstName: "FIRST NAMERow4", sex: "SEX MFXRow4", dobMonth: "FROM mmyyyyDOB_4",  dobDay: "FROM mmyyyyDOB_11", dobYear: "FROM mmyyyyDOB_18" },
  { relationship: "MAIDENALIASRow3", lastName: "LAST NAMERow5", firstName: "FIRST NAMERow5", sex: "SEX MFXRow5", dobMonth: "FROM mmyyyyDOB_5",  dobDay: "FROM mmyyyyDOB_12", dobYear: "FROM mmyyyyDOB_19" },
  { relationship: "MAIDENALIASRow4", lastName: "LAST NAMERow6", firstName: "FIRST NAMERow6", sex: "SEX MFXRow6", dobMonth: "FROM mmyyyyDOB_6",  dobDay: "FROM mmyyyyDOB_13", dobYear: "FROM mmyyyyDOB_20" },
  { relationship: "MAIDENALIASRow5", lastName: "LAST NAMERow7", firstName: "FIRST NAMERow7", sex: "SEX MFXRow7", dobMonth: "FROM mmyyyyDOB_7",  dobDay: "FROM mmyyyyDOB_14", dobYear: "FROM mmyyyyDOB_21" },
];

// ── Household members page 2 (indices 5–36) ───────────────────────────────────
const HOUSEHOLD_MEMBER_FIELDS_P2 = [
  { relationship: "Relationship To ApplicantRow1",  lastName: "Last NameRow1",  firstName: "First NameRow1",  sex: "MFXRow1",  dobMonth: "M mmRow1",  dobDay: "D ddRow1",  dobYear: "Y yyyyRow1"  },
  { relationship: "Relationship To ApplicantRow2",  lastName: "Last NameRow2",  firstName: "First NameRow2",  sex: "MFXRow2",  dobMonth: "M mmRow2",  dobDay: "D ddRow2",  dobYear: "Y yyyyRow2"  },
  { relationship: "Relationship To ApplicantRow3",  lastName: "Last NameRow3",  firstName: "First NameRow3",  sex: "MFXRow3",  dobMonth: "M mmRow3",  dobDay: "D ddRow3",  dobYear: "Y yyyyRow3"  },
  { relationship: "Relationship To ApplicantRow4",  lastName: "Last NameRow4",  firstName: "First NameRow4",  sex: "MFXRow4",  dobMonth: "M mmRow4",  dobDay: "D ddRow4",  dobYear: "Y yyyyRow4"  },
  { relationship: "Relationship To ApplicantRow5",  lastName: "Last NameRow5",  firstName: "First NameRow5",  sex: "MFXRow5",  dobMonth: "M mmRow5",  dobDay: "D ddRow5",  dobYear: "Y yyyyRow5"  },
  { relationship: "Relationship To ApplicantRow6",  lastName: "Last NameRow6",  firstName: "First NameRow6",  sex: "MFXRow6",  dobMonth: "M mmRow6",  dobDay: "D ddRow6",  dobYear: "Y yyyyRow6"  },
  { relationship: "Relationship To ApplicantRow7",  lastName: "Last NameRow7",  firstName: "First NameRow7",  sex: "MFXRow7",  dobMonth: "M mmRow7",  dobDay: "D ddRow7",  dobYear: "Y yyyyRow7"  },
  { relationship: "Relationship To ApplicantRow8",  lastName: "Last NameRow8",  firstName: "First NameRow8",  sex: "MFXRow8",  dobMonth: "M mmRow8",  dobDay: "D ddRow8",  dobYear: "Y yyyyRow8"  },
  { relationship: "Relationship To ApplicantRow9",  lastName: "Last NameRow9",  firstName: "First NameRow9",  sex: "MFXRow9",  dobMonth: "M mmRow9",  dobDay: "D ddRow9",  dobYear: "Y yyyyRow9"  },
  { relationship: "Relationship To ApplicantRow10", lastName: "Last NameRow10", firstName: "First NameRow10", sex: "MFXRow10", dobMonth: "M mmRow10", dobDay: "D ddRow10", dobYear: "Y yyyyRow10" },
  { relationship: "Relationship To ApplicantRow11", lastName: "Last NameRow11", firstName: "First NameRow11", sex: "MFXRow11", dobMonth: "M mmRow11", dobDay: "D ddRow11", dobYear: "Y yyyyRow11" },
  { relationship: "Relationship To ApplicantRow12", lastName: "Last NameRow12", firstName: "First NameRow12", sex: "MFXRow12", dobMonth: "M mmRow12", dobDay: "D ddRow12", dobYear: "Y yyyyRow12" },
  { relationship: "Relationship To ApplicantRow13", lastName: "Last NameRow13", firstName: "First NameRow13", sex: "MFXRow13", dobMonth: "M mmRow13", dobDay: "D ddRow13", dobYear: "Y yyyyRow13" },
  { relationship: "Relationship To ApplicantRow14", lastName: "Last NameRow14", firstName: "First NameRow14", sex: "MFXRow14", dobMonth: "M mmRow14", dobDay: "D ddRow14", dobYear: "Y yyyyRow14" },
  { relationship: "Relationship To ApplicantRow15", lastName: "Last NameRow15", firstName: "First NameRow15", sex: "MFXRow15", dobMonth: "M mmRow15", dobDay: "D ddRow15", dobYear: "Y yyyyRow15" },
  { relationship: "Relationship To ApplicantRow16", lastName: "Last NameRow16", firstName: "First NameRow16", sex: "MFXRow16", dobMonth: "M mmRow16", dobDay: "D ddRow16", dobYear: "Y yyyyRow16" },
  { relationship: "Relationship To ApplicantRow17", lastName: "Last NameRow17", firstName: "First NameRow17", sex: "MFXRow17", dobMonth: "M mmRow17", dobDay: "D ddRow17", dobYear: "Y yyyyRow17" },
  { relationship: "Relationship To ApplicantRow18", lastName: "Last NameRow18", firstName: "First NameRow18", sex: "MFXRow18", dobMonth: "M mmRow18", dobDay: "D ddRow18", dobYear: "Y yyyyRow18" },
  { relationship: "Relationship To ApplicantRow19", lastName: "Last NameRow19", firstName: "First NameRow19", sex: "MFXRow19", dobMonth: "M mmRow19", dobDay: "D ddRow19", dobYear: "Y yyyyRow19" },
  { relationship: "Relationship To ApplicantRow20", lastName: "Last NameRow20", firstName: "First NameRow20", sex: "MFXRow20", dobMonth: "M mmRow20", dobDay: "D ddRow20", dobYear: "Y yyyyRow20" },
  { relationship: "Relationship To ApplicantRow21", lastName: "Last NameRow21", firstName: "First NameRow21", sex: "MFXRow21", dobMonth: "M mmRow21", dobDay: "D ddRow21", dobYear: "Y yyyyRow21" },
  { relationship: "Relationship To ApplicantRow22", lastName: "Last NameRow22", firstName: "First NameRow22", sex: "MFXRow22", dobMonth: "M mmRow22", dobDay: "D ddRow22", dobYear: "Y yyyyRow22" },
  { relationship: "Relationship To ApplicantRow23", lastName: "Last NameRow23", firstName: "First NameRow23", sex: "MFXRow23", dobMonth: "M mmRow23", dobDay: "D ddRow23", dobYear: "Y yyyyRow23" },
  { relationship: "Relationship To ApplicantRow24", lastName: "Last NameRow24", firstName: "First NameRow24", sex: "MFXRow24", dobMonth: "M mmRow24", dobDay: "D ddRow24", dobYear: "Y yyyyRow24" },
  { relationship: "Relationship To ApplicantRow25", lastName: "Last NameRow25", firstName: "First NameRow25", sex: "MFXRow25", dobMonth: "M mmRow25", dobDay: "D ddRow25", dobYear: "Y yyyyRow25" },
  { relationship: "Relationship To ApplicantRow26", lastName: "Last NameRow26", firstName: "First NameRow26", sex: "MFXRow26", dobMonth: "M mmRow26", dobDay: "D ddRow26", dobYear: "Y yyyyRow26" },
  { relationship: "Relationship To ApplicantRow27", lastName: "Last NameRow27", firstName: "First NameRow27", sex: "MFXRow27", dobMonth: "M mmRow27", dobDay: "D ddRow27", dobYear: "Y yyyyRow27" },
  { relationship: "Relationship To ApplicantRow28", lastName: "Last NameRow28", firstName: "First NameRow28", sex: "MFXRow28", dobMonth: "M mmRow28", dobDay: "D ddRow28", dobYear: "Y yyyyRow28" },
  { relationship: "Relationship To ApplicantRow29", lastName: "Last NameRow29", firstName: "First NameRow29", sex: "MFXRow29", dobMonth: "M mmRow29", dobDay: "D ddRow29", dobYear: "Y yyyyRow29" },
  { relationship: "Relationship To ApplicantRow30", lastName: "Last NameRow30", firstName: "First NameRow30", sex: "MFXRow30", dobMonth: "M mmRow30", dobDay: "D ddRow30", dobYear: "Y yyyyRow30" },
  { relationship: "Relationship To ApplicantRow31", lastName: "Last NameRow31", firstName: "First NameRow31", sex: "MFXRow31", dobMonth: "M mmRow31", dobDay: "D ddRow31", dobYear: "Y yyyyRow31" },
  { relationship: "Relationship To ApplicantRow32", lastName: "Last NameRow32", firstName: "First NameRow32", sex: "MFXRow32", dobMonth: "M mmRow32", dobDay: "D ddRow32", dobYear: "Y yyyyRow32" },
];

// ── Address history rows (addresses[2] onwards map to Row1, Row2 ...) ─────────
const ADDRESS_ROW_FIELDS = [
  { street: "STREET ADDRESSRow1",  apt: "APT Row1",  city: "CITYRow1",  state: "STATERow1",  zip: "ZIPRow1",  fromMonth: "FROM mmyyyyRow1",  fromYear: "FROM mmyyyyRow1_2",  toMonth: "TO mmyyyyRow1",  toYear: "TO mmyyyyRow1_2"  },
  { street: "STREET ADDRESSRow2",  apt: "APT Row2",  city: "CITYRow2",  state: "STATERow2",  zip: "ZIPRow2",  fromMonth: "FROM mmyyyyRow2",  fromYear: "FROM mmyyyyRow2_2",  toMonth: "TO mmyyyyRow2",  toYear: "TO mmyyyyRow1_3"  },
  { street: "STREET ADDRESSRow3",  apt: "APT Row3",  city: "CITYRow3",  state: "STATERow3",  zip: "ZIPRow3",  fromMonth: "FROM mmyyyyRow3",  fromYear: "FROM mmyyyyRow3_2",  toMonth: "TO mmyyyyRow3",  toYear: "TO mmyyyyRow1_4"  },
  { street: "STREET ADDRESSRow4",  apt: "APT Row4",  city: "CITYRow4",  state: "STATERow4",  zip: "ZIPRow4",  fromMonth: "FROM mmyyyyRow4",  fromYear: "FROM mmyyyyRow4_2",  toMonth: "TO mmyyyyRow4",  toYear: "TO mmyyyyRow1_5"  },
  { street: "STREET ADDRESSRow5",  apt: "APT Row5",  city: "CITYRow5",  state: "STATERow5",  zip: "ZIPRow5",  fromMonth: "FROM mmyyyyRow5",  fromYear: "FROM mmyyyyRow5_2",  toMonth: "TO mmyyyyRow5",  toYear: "TO mmyyyyRow1_6"  },
  { street: "STREET ADDRESSRow6",  apt: "APT Row6",  city: "CITYRow6",  state: "STATERow6",  zip: "ZIPRow6",  fromMonth: "FROM mmyyyyRow6",  fromYear: "FROM mmyyyyRow6_2",  toMonth: "TO mmyyyyRow6",  toYear: "TO mmyyyyRow1_7"  },
  { street: "STREET ADDRESSRow7",  apt: "APT Row7",  city: "CITYRow7",  state: "STATERow7",  zip: "ZIPRow7",  fromMonth: "FROM mmyyyyRow7",  fromYear: "FROM mmyyyyRow7_2",  toMonth: "TO mmyyyyRow7",  toYear: "TO mmyyyyRow1_8"  },
  { street: "STREET ADDRESSRow8",  apt: "APT Row8",  city: "CITYRow8",  state: "STATERow8",  zip: "ZIPRow8",  fromMonth: "FROM mmyyyyRow8",  fromYear: "FROM mmyyyyRow8_2",  toMonth: "TO mmyyyyRow8",  toYear: "TO mmyyyyRow1_9"  },
  { street: "STREET ADDRESSRow9",  apt: "APT Row9",  city: "CITYRow9",  state: "STATERow9",  zip: "ZIPRow9",  fromMonth: "FROM mmyyyyRow9",  fromYear: "FROM mmyyyyRow9_2",  toMonth: "TO mmyyyyRow9",  toYear: "TO mmyyyyRow1_10" },
  { street: "STREET ADDRESSRow10", apt: "APT Row10", city: "CITYRow10", state: "STATERow10", zip: "ZIPRow10", fromMonth: "FROM mmyyyyRow10", fromYear: "FROM mmyyyyRow10_2", toMonth: "TO mmyyyyRow10", toYear: "TO mmyyyyRow1_11" },
  { street: "STREET ADDRESSRow11", apt: "APT Row11", city: "CITYRow11", state: "STATERow11", zip: "ZIPRow11", fromMonth: "FROM mmyyyyRow11", fromYear: "FROM mmyyyyRow11_2", toMonth: "TO mmyyyyRow11", toYear: "TO mmyyyyRow11_12"},
  { street: "STREET ADDRESSRow12", apt: "APT Row12", city: "CITYRow12", state: "STATERow12", zip: "ZIPRow12", fromMonth: "FROM mmyyyyRow12", fromYear: "FROM mmyyyyRow12_2", toMonth: "TO mmyyyyRow12", toYear: "TO mmyyyyRow1_13" },
  { street: "STREET ADDRESSRow13", apt: "APT Row13", city: "CITYRow13", state: "STATERow13", zip: "ZIPRow13", fromMonth: "FROM mmyyyyRow13", fromYear: "FROM mmyyyyRow13_2", toMonth: "TO mmyyyyRow13", toYear: "TO mmyyyyRow1_14" },
  { street: "STREET ADDRESSRow14", apt: "APT Row14", city: "CITYRow14", state: "STATERow14", zip: "ZIPRow14", fromMonth: "FROM mmyyyyRow14", fromYear: "FROM mmyyyyRow14_2", toMonth: "TO mmyyyyRow14", toYear: "TO mmyyyyRow1_15" },
  { street: "STREET ADDRESSRow15", apt: "APT Row15", city: "CITYRow15", state: "STATERow15", zip: "ZIPRow15", fromMonth: "FROM mmyyyyRow15", fromYear: "FROM mmyyyyRow15_2", toMonth: "TO mmyyyyRow15", toYear: "TO mmyyyyRow1_16" },
  { street: "STREET ADDRESSRow16", apt: "APT Row16", city: "CITYRow16", state: "STATERow16", zip: "ZIPRow16", fromMonth: "FROM mmyyyyRow16", fromYear: "FROM mmyyyyRow16_2", toMonth: "TO mmyyyyRow16", toYear: "TO mmyyyyRow1_17" },
  { street: "STREET ADDRESSRow17", apt: "APT Row17", city: "CITYRow17", state: "STATERow17", zip: "ZIPRow17", fromMonth: "FROM mmyyyyRow17", fromYear: "FROM mmyyyyRow17_2", toMonth: "TO mmyyyyRow17", toYear: "TO mmyyyyRow17_18"},
  { street: "STREET ADDRESSRow18", apt: "APT Row18", city: "CITYRow18", state: "STATERow18", zip: "ZIPRow18", fromMonth: "FROM mmyyyyRow18", fromYear: "FROM mmyyyyRow18_2", toMonth: "TO mmyyyyRow18", toYear: "TO mmyyyyRow1_19" },
  { street: "STREET ADDRESSRow19", apt: "APT Row19", city: "CITYRow19", state: "STATERow19", zip: "ZIPRow19", fromMonth: "FROM mmyyyyRow19", fromYear: "FROM mmyyyyRow19_2", toMonth: "TO mmyyyyRow19", toYear: "TO mmyyyyRow1_20" },
  { street: "STREET ADDRESSRow20", apt: "APT Row20", city: "CITYRow20", state: "STATERow20", zip: "ZIPRow20", fromMonth: "FROM mmyyyyRow20", fromYear: "FROM mmyyyyRow20_2", toMonth: "TO mmyyyyRow20", toYear: "TO mmyyyyRow1_21" },
  { street: "STREET ADDRESSRow21", apt: "APT Row21", city: "CITYRow21", state: "STATERow21", zip: "ZIPRow21", fromMonth: "FROM mmyyyyRow21", fromYear: "FROM mmyyyyRow21_2", toMonth: "TO mmyyyyRow21", toYear: "TO mmyyyyRow1_22" },
  { street: "STREET ADDRESSRow22", apt: "APT Row22", city: "CITYRow22", state: "STATERow22", zip: "ZIPRow22", fromMonth: "FROM mmyyyyRow22", fromYear: "FROM mmyyyyRow22_2", toMonth: "TO mmyyyyRow22", toYear: "TO mmyyyyRow1_23" },
  { street: "STREET ADDRESSRow23", apt: "APT Row23", city: "CITYRow23", state: "STATERow23", zip: "ZIPRow23", fromMonth: "FROM mmyyyyRow23", fromYear: "FROM mmyyyyRow23_2", toMonth: "TO mmyyyyRow23", toYear: "TO mmyyyyRow1_24" },
  { street: "STREET ADDRESSRow24", apt: "APT Row24", city: "CITYRow24", state: "STATERow24", zip: "ZIPRow24", fromMonth: "FROM mmyyyyRow24", fromYear: "FROM mmyyyyRow24_2", toMonth: "TO mmyyyyRow24", toYear: "TO mmyyyyRow24_25"},
  { street: "STREET ADDRESSRow25", apt: "APT Row25", city: "CITYRow25", state: "STATERow25", zip: "ZIPRow25", fromMonth: "FROM mmyyyyRow25", fromYear: "FROM mmyyyyRow25_2", toMonth: "TO mmyyyyRow25", toYear: "TO mmyyyyRow1_26" },
  { street: "STREET ADDRESSRow26", apt: "APT Row26", city: "CITYRow26", state: "STATERow26", zip: "ZIPRow26", fromMonth: "FROM mmyyyyRow26", fromYear: "FROM mmyyyyRow26_2", toMonth: "TO mmyyyyRow26", toYear: "TO mmyyyyRow1_27" },
  { street: "STREET ADDRESSRow27", apt: "APT Row27", city: "CITYRow27", state: "STATERow27", zip: "ZIPRow27", fromMonth: "FROM mmyyyyRow27", fromYear: "FROM mmyyyyRow27_2", toMonth: "TO mmyyyyRow27", toYear: "TO mmyyyyRow1_28" },
];

module.exports = {
  APPLICANT_FIELDS,
  HOUSEHOLD_MEMBER_FIELDS_P1,
  HOUSEHOLD_MEMBER_FIELDS_P2,
  ADDRESS_ROW_FIELDS,
};
