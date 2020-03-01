const Location = (locationObject) => {
    return `
        <div class="location">
            <div>
                <img class="location__image" src="${locationObject.image}" alt="">
            </div>
            <div class="location__name">${locationObject.name}</div>
            <dialog class="dialog--location" id="details--${locationObject.name}">
                <div>Location: ${locationObject.location}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Location