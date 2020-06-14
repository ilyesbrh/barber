function init() {

    let list = document.body.getElementsByClassName('perfect-scroll');
    for (const div of list) {
        const ps = new PerfectScrollbar(div);
        console.log(ps);

    }

}
init();