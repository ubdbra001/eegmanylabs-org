// Get all the cards and tags on the page
const allCards = document.querySelectorAll("sl-card")
const allTags = document.querySelectorAll("sl-tag")

// Add the buttonPress function as an onClick event listener
allTags.forEach(item => item.addEventListener("click", function() { buttonPress(this) }))

/**
 * Show all the cards on the page.
 * Attached to a button to reset filtering.
 */
function resetButton(){
    allCards.forEach(showCard)
}

/**
 * Hides cards that do not have tags with the same value as this tag.
 * Attached to a tag to filter other elements.
 * @param {object} element - The tag element clicked on.
 */
function buttonPress(element){
    search_term = element.innerText
    allCards.forEach(hideCard)
}

/**
 * Checks whether a card should be hidden based on the contents of a clicked tag.
 * @param {object} el - The card element to be checked 
 */
function hideCard(el) {
    // Get all tags within card
    childTags = Array.from(el.querySelectorAll("sl-tag"));
    // See if any of those tags match the text of the clicked tag
    contains = childTags.some((Cel) => (Cel.innerText === search_term));
    
    // If yes then show, if no then hide
    if (contains){
        showCard(el)
    } else {
        el.style.display = 'none';
    }
}

/**
 * Show a card element
 * @param {object} el - The card element to be shown 
 */
function showCard(el) {
    el.style.display = '';
}