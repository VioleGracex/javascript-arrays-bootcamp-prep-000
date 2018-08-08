var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var candyString = 'foo'
function addElementToBeginningOfArray(chocolateBars, candyString)
{
  chocolateBars.unshift(candyString);
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString)
{
  chocolateBars.unshift(candyString);
}
function addElementToEndOfArray(chocolateBars, candyString)
{
  chocolateBars.push(candyString);
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString)
{
  chocolateBars.push(candyString);
}
function accessElementInArray(chocolateBars, index)
{
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
{
  chocolateBars.shift();
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{
  chocolateBars.pop();
}