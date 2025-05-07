function Prueba() {
  var metabaseUrl = 'https://metabase.resuelve.io';
  var queryId = 5615;
  var metabaseUsername = 'email@gobravo.pt';
  var metabasePassword = 'XXX';

  var spreadsheetId = '1urehpQUZKHpRpE2eetU-DdM5KMJ1esjazEYcapiy1nw';
  var sheetName = 'Prueba';
  var metabaseLoginEndpoint = metabaseUrl + '/api/session';
  var payload = {
    username: metabaseUsername,
    password: metabasePassword
  };
  var headersLoginMetabase = {
    'Content-Type': 'application/json'
  };

  var responseLoginMetabase = UrlFetchApp.fetch(metabaseLoginEndpoint, {
    method: 'post',
    headers: headersLoginMetabase,
    payload: JSON.stringify(payload)
  });

  var sessionToken = JSON.parse(responseLoginMetabase.getContentText()).id;

  var metabaseQueryEndpoint = metabaseUrl + '/api/card/' + queryId + '/query/json';
  var headersMetabase = {
    'Content-Type':'application/json',
    'X-Metabase-Session': sessionToken
  };

  var responseMetabase = UrlFetchApp.fetch(metabaseQueryEndpoint, {
    method: 'post',
    headers: headersMetabase
  });

  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  sheet.clear();

  var responseBody = JSON.parse(responseMetabase.getContentText());

  if (responseBody.length > 0) {
    var desiredOrder = ["id", "lead_id", "tracker_id", "contract_uid", "status_contract", "status", "request_status", "status_metadata", "note", "updated_at", "agent_email", "inserted_at","state","debt"];
    var headerRow = desiredOrder.filter(attr => Object.keys(responseBody[0]).includes(attr));
    var values = [headerRow].concat(responseBody.map(obj => headerRow.map(key => obj[key])));
    sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
    Logger.log('Resultados da query do Metabase adicionados à planilha.');
  } else {
    Logger.log('A query do Metabase não retornou resultados.');
  }
}