// Function to format text by replacing spaces with underscores
function formatText(inputString) {
  return inputString.replace(/ /g, '_')
}

// Function to unformat text by replacing underscores with spaces
function unformatText(inputString) {
  return inputString.replace(/_/g, ' ')
}

// Export both functions
export default { formatText, unformatText }
