//Responsive con JavaScript
const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        const element = d.getElementById(id);
        if (e.matches) {
            element.innerHTML = desktopContent;
        } else {
            element.innerHTML = mobileContent;
        }
    };

    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
}