const logo = 'https://user-images.githubusercontent.com/28442911/172979603-dad8ed99-98ee-4ebd-bde3-1713bda84778.png';
const  title = "Thangvc91";

//public web app
function doGet(){
  return HtmlService.createTemplateFromFile('index').evaluate().setFaviconUrl(logo).setTitle(title)
}

function export_default(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function addRecord(object){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('request')

  ws.appendRow([new Date(), object.emp_code, object.flexi, object.emp_dob, object.emp_request_amount ])

}


function get_data(employee_code){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('db')
  var result_find = ws.createTextFinder(employee_code)
  var all = result_find.findAll()
  var row_number
 for (var i = 0; i < all.length; i++) {
    row_number = all[i].getRow()
  }
  var object = ws.getRange('B' + row_number + ':G' + row_number).getValues()
  return object
}
function test(){
  var n = get_data(55555555);
  Logger.log(n[0][0])
}
