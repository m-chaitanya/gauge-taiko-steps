const taiko = require("taiko");
const helpers = require("./_helpers");

exports.getElementBySelector = async (eleType, eleText) => {
  const selText = helpers.parseString(eleText);

  let ele;
  switch (eleType) {
    case "$":
      ele = await taiko.$(selText);
      break;
    case "image":
      ele = await taiko.image(selText);
      break;
    case "link":
      ele = await taiko.link(selText);
      break;
    case "listItem":
      ele = await taiko.listItem(selText);
      break;
    case "fileField":
      ele = await taiko.fileField(selText);
      break;
    case "timeField":
      ele = await taiko.timeField(selText);
      break;
    case "textBox":
      ele = await taiko.textBox(selText);
      break;
    case "dropDown":
      ele = await taiko.dropDown(selText);
      break;
    case "checkBox":
      ele = await taiko.checkBox(selText);
      break;
    case "radioButton":
      ele = await taiko.radioButton(selText);
      break;
    case "text":
      ele = await taiko.text(selText);
      break;
    case "button":
      ele = await taiko.button(selText);
      break;
    default:
      break;
  }
  return ele;
};
