alert("hunter");
  function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();

  var keywords = editor.getValue().split(/\r\n|\r|\n/);
  for (var i = 0; i < keywords.length; i++) {
    x = keywords[i].replace(/^[ ]+|[ ]+$/g,'');

    if (x == "html") {
      keywords[i] = '<!DOCTYPE html>\n<html lang="en" dir="ltr">\n<head>\n<meta charset="utf-8">\n<title></title>\n</head>\n<body>\n\n</body>\n</html>';
      editor.setValue(keywords.join("\n"));

    }
      if (x == "img") {
      keywords[i] = '<img src="">';
      editor.setValue(keywords.join("\n"));

    }

  }

    alert((editor.getValue());

}

function setupEditor()
{
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(``,1); //1 = moves cursor to end




  document.getElementById('iframe').addEventListener('mouseover', function(){
    update();
  });

  editor.focus();


  editor.setOptions({
    fontSize: "14pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();


function keyCode(event) {
  var x = event.keyCode;
  if (x == 27) {
    update();
  }
}
