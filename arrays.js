var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
//var candyString = 'foo'
function addElementToBeginningOfArray(chocolateBars, candyString)
{
  return [candyString,1];
  //chocolateBars.unshift(candyString);
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString)
{
    chocolateBars.unshift(candyString);
     return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, candyString)
{
  return [1,candyString];
  //chocolateBars.push(candyString);
}
function destructivelyAddElementToEndOfArray(chocolateBars, candyString)
{
  chocolateBars.push(candyString);
   return chocolateBars;
}
function accessElementInArray(chocolateBars, index)
{
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
{
  chocolateBars.shift();
  return chocolateBars;
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{
  chocolateBars.pop();
  return chocolateBars;
}
