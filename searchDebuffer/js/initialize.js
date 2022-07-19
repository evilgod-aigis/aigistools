_.forEach(debuff, type => {
    _.forEach(type, (debuffer, i) => debuffer.id = i);
    Object.freeze(type);
});

window.addEventListener("DOMContentLoaded", () => {
    target.CreateForm();
    table.CreateFilter();
    createHTML.UpdateHistory();
    
     tippy(".tooltip-ts", {
        placement: "top-start",
        allowHTML: true,
        maxWidth: "1000px"
    });
    tippy(".tooltip-b", {
        placement: "bottom",
        allowHTML: true,
        maxWidth: "1000px"
    });
});