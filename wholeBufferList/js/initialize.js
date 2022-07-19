_.forEach(buff, type => {
    _.forEach(type.list, (buffer, i) => buffer.id = i);
    Object.freeze(type.list);
});

window.addEventListener("DOMContentLoaded", () => {
    table.CreateFilter();
    table.CreateTable();
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