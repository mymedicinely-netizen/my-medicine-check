// Public website configuration. These URLs are public read-only Google Sheets CSV links.
// Never place private API keys, passwords, or credentials in this file.
window.MMC_CONFIG = {
  // Optional: published Google Sheet CSV containing medicine data.
  // Required headers: id,brand,generic,strength_form,excipient,category,color
  medicinesCsvUrl: "",
  // Optional Google Forms public responder URL for the survey.
  surveyUrl: "",
  // Optional Google Forms embed URL (use the form's "Send > <> Embed HTML" URL).
  surveyEmbedUrl: "",
  // Optional Google Forms public responder URL for submitting questions/contributions.
  questionFormUrl: "",
  // Optional published Google Sheet CSV for APPROVED community posts.
  // Required headers: status,topic,question,answer,date. Only status=Approved is shown.
  communityCsvUrl: ""
};
