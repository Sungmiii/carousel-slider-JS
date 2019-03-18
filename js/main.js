const carousel = function () {
    const slider = document.getElementById('slider');
    const slider_hero = document.getElementById('slider__hero');
    const imgarr = slider_hero.getElementsByTagName('div');
    const nav = document.getElementById('slider__navigation');
    let active;
    let timing = 9000; // for looping

    function set_active_nav(element) {
        if (active) active.id = "";
        element.id = "active"
        active = element
    }

    function set_next_index() {
        let current_index = active.getAttribute('data-index');
        current_index++;
        if (current_index === imgarr.length) current_index = 0;
        return current_index;
    }

    function set_active_img(index) {
        // imgCaption.innerHTML = imgarr[index].title;
        slider_hero.style.marginLeft = "-" + index + "00%";
    }

    function display_slide(index) {
        set_active_img(index);
        set_active_nav(nav.children[index]);
    }
    function make_carousel() {
        if (slider) {
            const imgLength = imgarr.length
            if (imgLength === 0) return;
            slider_hero.style.width = 100 * imgLength + '%';

            for (let i = 0; i < imgLength; i++) {
                const link = document.createElement("a");
                link.setAttribute('data-index', i);
                if (i === 0) {
                    set_active_nav(link)
                }
                //click function 
                link.onclick = function () {
                    let current_index = this.getAttribute('data-index');
                    // console.log(current_index)
                    display_slide(current_index);
                }
                //navigation
                nav.appendChild(link);
            }
            //checking it's working
            // slider.onclick = function () {
            //     console.log('img click')
            // }
            document.querySelector('#slider__btn-next').onclick = function () {
                display_slide(set_next_index());
            }
            document.querySelector('#slider__btn-pre').onclick = function () {
                display_slide(set_pre_index());
            }

            function set_pre_index() {
                let current_index = active.getAttribute('data-index')
                if (current_index == 0) {
                    current_index = imgarr.length - 1;
                } else {
                    current_index--;
                }
                return current_index;
            }
        }
        //looping
        /* setInterval(() => {
            let current_index = set_next_index();
            display_slide(current_index);
        }, timing); */
    }
    return {
        make_carousel: make_carousel
    }
}()

carousel.make_carousel()