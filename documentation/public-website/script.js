(function () {
    let typewriters = Array.from(document.querySelectorAll("[data-typewriter]"));
    typewriters.forEach((typewriter) => {
        let text = typewriter.dataset.typewriter;
        let i = 0;
        var span = document.createElement("span");
        var cursor = document.createElement("div");
        cursor.classList.add("cursor");
        typewriter.appendChild(span)
        typewriter.appendChild(cursor)
        const schedule = () => {
            setTimeout(() => {
                if (i >= text.length) {
                    typewriter.removeChild(cursor);
                    return;
                }

                span.innerHTML += text[i];
                i++;
                schedule();
            }, Math.floor(Math.random() * 60) + 20)
        }

        schedule();
    })
})()
