_.forEach(debuff, type =>
    _.forEach(type, (debuffer, i) => debuffer.id = i)
);
Object.freeze(debuff);

window.addEventListener("DOMContentLoaded", () => {
    table.SetObjects();
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